DROP DATABASE IF EXISTS lbta_mysql;

CREATE DATABASE lbta_mysql;

USE lbta_mysql;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be 
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be 
 *    mysql -u root < schema.sql
*/

INSERT INTO users (id, firstName, lastName) VALUES (1, "Michael", "Jordan");
INSERT INTO users (id, firstName, lastName) VALUES (2, "Scottie", "Pippen");
INSERT INTO users (id, firstName, lastName) VALUES (3, "Dennis", "Rodman");

/* this how you set up in your local computer a datbase, you can access mysql in terminal and check that this information is actually there */