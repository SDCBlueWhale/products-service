import * as dotenv from 'dotenv';
dotenv.config();
import csv from 'csv-parser';
import through2 from 'through2';
import * as fs from 'fs';
import pg from 'pg';
const { Pool } = pg;

const dbConfig = {
  host: 'localhost',
  port: parseInt(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

const pool = new Pool(dbConfig);

const files: string[] = ['products', 'styles', 'features', 'related', 'skus', 'photos'];
const fields: { [index: string]: string[] } = {
  products: ['id', 'name', 'slogan', 'description', 'category', 'default_price'],
  styles: ['id', 'product_id', 'name', 'sale_price', 'original_price', 'default_style'],
  features: ['id', 'product_id', 'feature', 'value'],
  photos: ['id', 'style_id', 'url', 'thumbnail_url'],
  related: ['id', 'current_product_id', 'related_product_id'],
  skus: ['id', 'style_id', 'size', 'quantity'],
};

let totalRecords = 0;
const start = Date.now();
// var before = process.memoryUsage().rss;
await Promise.all(
  files.map((file) => {
    let records = 0;
    const path = `./testdata/${file}.csv`;
    console.log('loading:', file);

    const printNumHolders = (n: number) => {
      let str = '';
      for (let i = 1; i <= n; i++) {
        str += '$' + i;
        if (i !== n) {
          str += ',';
        }
      }
      return str;
    };

    const stream = fs.createReadStream(path);
    const text = `INSERT INTO public.${file}(${fields[file].toString()})
          VALUES(${printNumHolders(fields[file].length)});`;
    return new Promise((resolve, reject) => {
      stream
        .pipe(
          csv({
            escape: null,
            newline: '\n',
            mapValues: ({ header, index, value }) => {
              if (value === 'null') {
                return 0;
              } else if (!isNaN(value)) {
                return parseInt(value);
              } else {
                return String(value);
              }
            },
            strict: true,
          })
        )
        .pipe(
          through2({ objectMode: true }, (row, enc, cb) => {
            cb(null, Object.values(row));
          })
        )
        .on('data', async (values: string[]) => {
          records++;
          const client = await pool.connect();
          try {
            await client.query(text, values);
          } catch (err) {
            //
          } finally {
            client.release();
          }
        })
        .on('error', (err: any) => {
          console.log('got an error:', err);
          reject(err);
        })
        .on('end', () => {
          // totalRecords += records;
          console.log(`Added ${records} records to ${file}`);
          stream.close();
          resolve(true);
        });
    });
  })
);
console.log(`Total: ${totalRecords} records, in ${Date.now() - start}ms`);
console.log('outside memory usage:', Math.round(process.memoryUsage().rss / 1024 / 1024), 'MB');
