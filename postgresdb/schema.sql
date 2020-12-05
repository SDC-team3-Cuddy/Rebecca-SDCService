/*DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;*/

CREATE TABLE Items (
  id BIGSERIAL NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL (10, 2),
  PRIMARY KEY (id)
);

CREATE TABLE Styles (
  id BIGSERIAL NOT NULL,
  style TEXT NOT NULL,
  quantity INT NOT NULL,
  image_url TEXT NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

--  INSERT INTO Items (id, description, price) VALUES (1, "A beautiful blue guitar that will make any beginner sound like Eddie Van Halen", 179.99);