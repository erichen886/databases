DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL UNIQUE,
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(20) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  messageText VARCHAR(200) NOT NULL,
  usernameId INTEGER,
  roomnameId INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY(usernameId) REFERENCES users(id),
  FOREIGN KEY(roomnameId) REFERENCES rooms(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

