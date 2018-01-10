DROP DATABASE IF EXISTS food_swap;

CREATE DATABASE food_swap;

\connect food_swap;


CREATE TABLE users_auth (
  id SERIAL,
  password VARCHAR(256) NOT NULL,
  salt VARCHAR(256) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id SERIAL,
  user_auth_id INTEGER NOT NULL REFERENCES users_auth(id),
  name VARCHAR(25) NOT  NULL,
  username VARCHAR(25) NOT NULL,
  picture VARCHAR(255) NULL DEFAULT NULL,
  email VARCHAR(255) NOT NULL,
  bio VARCHAR(255) NULL DEFAULT NULL,
  latitude Float NULL DEFAULT NULL,
  longitude Float NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food (
  id SERIAL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  dishName VARCHAR(25) NULL DEFAULT NULL,
  description VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE friends (
  id SERIAL,
  user_id1 INTEGER NOT NULL REFERENCES users(id),
  user_id2 INTEGER NOT NULL REFERENCES users(id),
  PRIMARY KEY (id)
);

CREATE TABLE trade (
  id SERIAL,
  user_id1 INTEGER NOT NULL REFERENCES users(id),
  food_id1 INTEGER NOT NULL REFERENCES food(id),
  user_id2 INTEGER NOT NULL REFERENCES users(id),
  food_id2 INTEGER NOT NULL REFERENCES food(id),
  status BOOLEAN DEFAULT NULL,
  PRIMARY KEY (id)
);
