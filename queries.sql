-- GET /products
SELECT
    id, name, slogan, description, category, default_price
FROM
    products
WHERE
    id > $1
ORDER BY id LIMIT $2;

-- GET /products/:product_id
SELECT
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
    features.product_id = 1
GROUP BY
    products.id;

-- GET /products/:product_id/styles
SELECT
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
    SELECT json_agg(cast(row(s.quantity, s.size) AS sku) ORDER BY s.id) AS skus
    FROM public.skus s
    WHERE public.styles.id = s.style_id
) s ON TRUE
WHERE
    public.styles.product_id = 1;


-- GET /products/:product_id/related
SELECT related_product_id FROM related WHERE related.current_product_id = 1;