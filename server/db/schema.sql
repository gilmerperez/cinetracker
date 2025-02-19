-- DROP DATABASE
DROP DATABASE IF EXISTS friends_db;

-- CREATE DATABASE
CREATE DATABASE friends_db;

-- Create User Table
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    interested_movies TEXT[],  -- You can store an array of movie IDs if needed
    watched_movies TEXT[]       -- Same as above for watched movies
);

-- Create Movie Table
CREATE TABLE movie_internal_id (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year VARCHAR(255),
    imdb_id VARCHAR(255),
    poster VARCHAR(255),
    director VARCHAR(255),
    imdb_rating VARCHAR(255)
);

-- Create Review Table
CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    movie_internal_id INT NOT NULL,
    review TEXT,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (movie_internal_id) REFERENCES movie_internal_id(id) ON DELETE CASCADE
);
