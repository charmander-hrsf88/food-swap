DROP DATABASE IF EXISTS food_swap;

CREATE DATABASE food_swap;

\connect food_swap;

CREATE TABLE users (
  id SERIAL,
  name VARCHAR(25) NOT  NULL,
  username VARCHAR(25) NOT NULL,
  picture VARCHAR(255) NULL DEFAULT NULL,
  email VARCHAR(255) NOT NULL,
  bio VARCHAR(255) NULL DEFAULT NULL,
  latitude Float,
  longitude Float,
  PRIMARY KEY (id)
);

CREATE TABLE users_auth (
  id SERIAL,
  userId INTEGER NOT NULL REFERENCES users(id),
  password VARCHAR(256) NOT NULL,
  salt VARCHAR(256) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food (
  id SERIAL,
  name VARCHAR(25) NULL DEFAULT NULL,
  description VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE friends (
  id SERIAL,
  userFriend1 INTEGER NOT NULL REFERENCES users(id),
  userFriend2 INTEGER NOT NULL REFERENCES users(id),
  PRIMARY KEY (id)
);

CREATE TABLE trade (
  id SERIAL,
  userId1 INTEGER NOT NULL REFERENCES users(id),
  foodId1 INTEGER NOT NULL REFERENCES food(id),
  userId2 INTEGER NOT NULL REFERENCES users(id),
  foodId2 INTEGER NOT NULL REFERENCES food(id),
  status BOOLEAN DEFAULT NULL,
  PRIMARY KEY (id)
);



