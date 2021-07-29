CREATE TABLE contact (
    id serial PRIMARY KEY,
    name text NOT NULL,
    slug text,
    email text,
    phone integer,
    address text
);