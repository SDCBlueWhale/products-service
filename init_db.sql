-- drop tables
DROP TABLE IF EXISTS public.features;
DROP TABLE IF EXISTS public.related;
DROP TABLE IF EXISTS public.skus;
DROP TABLE IF EXISTS public.photos;
DROP TABLE IF EXISTS public.styles;
DROP TABLE IF EXISTS public.products;

-- create tables
CREATE TABLE public.products (
	id serial NOT NULL,
	"name" varchar(255) NOT NULL,
  slogan varchar(255) NOT NULL,
	description text NULL,
	category varchar(255) NOT NULL,
	default_price int NULL,
	CONSTRAINT products_pk PRIMARY KEY (id)
);

CREATE TABLE public.features (
	id serial NOT NULL,
	product_id int NOT NULL,
	feature varchar(255) NOT NULL,
	value varchar(255) NULL,
	CONSTRAINT features_pk PRIMARY KEY (id),
	CONSTRAINT features_fk FOREIGN KEY (product_id) REFERENCES public.products(id)
);

CREATE TABLE public.styles (
	id serial NOT NULL,
	product_id int NOT NULL,
	"name" varchar(255) NOT NULL,
	sale_price int NULL,
	original_price int NOT NULL,
	default_style int NULL DEFAULT 0,
	CONSTRAINT styles_pk PRIMARY KEY (id),
	CONSTRAINT styles_fk FOREIGN KEY (product_id) REFERENCES public.products(id)
);

CREATE TABLE public.related (
	id serial NOT NULL,
	current_product_id int NOT NULL,
	related_product_id int NOT NULL,
	CONSTRAINT related_pk PRIMARY KEY (id)
);

CREATE TABLE public.skus (
	id serial NOT NULL,
	style_id int NOT NULL,
	"size" varchar(255) NOT NULL,
	quantity int NULL DEFAULT 0,
	CONSTRAINT skus_pk PRIMARY KEY (id),
	CONSTRAINT skus_fk FOREIGN KEY (style_id) REFERENCES public.styles(id)
);

CREATE TABLE public.photos (
	id serial NOT NULL,
	style_id int NOT NULL,
	url varchar NULL,
	thumbnail_url varchar NULL,
	CONSTRAINT photos_pk PRIMARY KEY (id),
	CONSTRAINT photos_fk FOREIGN KEY (style_id) REFERENCES public.styles(id)
);
