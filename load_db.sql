\COPY public.products FROM '/home/pd/Downloads/products.csv' DELIMITER ',' CSV HEADER;
\COPY public.styles FROM '/home/pd/Downloads/styles.csv' DELIMITER ',' CSV NULL AS 'null' HEADER;
\COPY public.features FROM '/home/pd/Downloads/features.csv' DELIMITER ',' CSV HEADER;
\COPY public.related FROM '/home/pd/Downloads/related.csv' DELIMITER ',' CSV HEADER;
\COPY public.skus FROM '/home/pd/Downloads/skus.csv' DELIMITER ',' CSV HEADER;
\COPY public.photos FROM '/home/pd/Downloads/photos.csv' DELIMITER ',' CSV HEADER;