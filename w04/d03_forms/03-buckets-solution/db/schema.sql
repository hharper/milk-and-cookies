DROP TABLE IF EXISTS items;
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(100)
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body VARCHAR(100) NOT NULL,
  item_id int REFERENCES items(id)
);