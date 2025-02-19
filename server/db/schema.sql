-- DROP DATABASE
DROP DATABASE IF EXISTS friends_db;

-- CREATE DATABASE
CREATE DATABASE friends_db;

-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the movie/tv-show table
CREATE TABLE movie (
    id SERIAL PRIMARY KEY,
    movie_id VARCHAR(255) UNIQUE NOT NULL,  -- Stores OMDb Movie/TV Show ID
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255),
    release_date VARCHAR(255),
    rating VARCHAR(50),
    poster_url TEXT
);

-- Create a user_library table for the watchlist
CREATE TABLE user_library (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    movie_id INT REFERENCES movie(id) ON DELETE CASCADE,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, movie_id)  -- Prevent duplicate entries
);
