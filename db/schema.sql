DROP DATABASE IF EXISTS movies_db;

CREATE DATABASE movies_db;

USE moviesdb;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	userName varchar(200) NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE fullMovies
(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    genre varchar(100) NOT NULL,
    plot varchar(1500) NOT NULL,
    rating varchar(10) NOT NULL,
    year int NOT NULL,
    runTime varchar(50) NOT NULL,
    director varchar(100) NOT NULL,
    actors varchar(400) NOT NULL,
    poster varchar(512) NOT NULL,
    PRIMARY KEY (id)
);