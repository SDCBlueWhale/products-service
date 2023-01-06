import Fastify from 'fastify';
import compression from '@fastify/compress';
import postgres from '@fastify/postgres';

const app = Fastify({});
(async () => {
  await app.register(compression, { encodings: ['gzip', 'deflate'], global: true });
  await app.register(postgres, {
    connectionString: 'postgres://pd:dumb1234@localhost/sdc',
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
    max: 20,
  });
})();

const port = 3000;

app.get('/products', async (req, res) => {
  const query = `SELECT
  id, name, slogan, description, category, default_price
FROM
  products
WHERE
  id > $1 AND id < $2;`;

  const page = req.query['page'] || 1;
  const count = req.query['count'] || 5;
  const vals = [count * (page - 1), count * page + 1];
  const db = await app.pg.connect();

  try {
    const { rows } = await db.query(query, vals);
    return res.type('application/json').send(rows);
  } catch (err) {
    console.log('db error:', err);
  } finally {
    db.release();
  }
});

app.get('/products/:product_id', async (req, res) => {
  const query = `SELECT
  products.*,
  json_agg(cast(row(features.feature, features.value) AS feature) ORDER BY features.id)
      AS features
FROM
  products
LEFT JOIN
  features
ON
  products.id = features.product_id
WHERE
  features.product_id = $1
GROUP BY
  products.id;
`;
  const db = await app.pg.connect();
  try {
    const { rows } = await db.query(query, [req.params['product_id']]);
    return res.type('application/json').send(rows[0]);
  } catch (err) {
    console.log('db error:', err);
  } finally {
    db.release();
  }
});

app.get('/products/:product_id/styles', async (req, res) => {
  const query = `SELECT
  public.styles.id AS style_id,
  public.styles.name,
  public.styles.sale_price,
  public.styles.original_price,
  public.styles.default_style,
  photos,
  skus
FROM
  public.styles
LEFT JOIN LATERAL (
  SELECT json_agg(cast(row(p.url, p.thumbnail_url) AS photo) ORDER BY p.id) AS photos
  FROM photos p
  WHERE public.styles.id = p.style_id
) p ON TRUE
LEFT JOIN LATERAL (
  SELECT json_object_agg(s.id, to_json(cast(row(s.quantity, s.size) AS sku))) AS skus
  FROM public.skus s
  WHERE public.styles.id = s.style_id
) s ON TRUE
WHERE
  public.styles.product_id = $1`;

  const db = await app.pg.connect();
  try {
    const { rows } = await db.query(query, [req.params['product_id']]);
    return res.type('application/json').send(rows);
  } catch (err) {
    console.log('db error:', err);
  } finally {
    db.release();
  }
});

app.get('/products/:product_id/related', async (req, res) => {
  const query = `SELECT ARRAY(SELECT related_product_id FROM related WHERE related.current_product_id = $1);`;
  const db = await app.pg.connect();
  try {
    const { rows } = await db.query(query, [req.params['product_id']]);
    return res.type('application/json').send(rows[0].array);
  } catch (err) {
    console.log('db error:', err);
  } finally {
    db.release();
  }
});

const start = async () => {
  try {
    await app.listen({ port: port });
  } catch (err) {
    console.log('unable to start server:', err);
    process.exit(1);
  }
};
start();

process.on('SIGTERM', () => {
  app.close();
});
