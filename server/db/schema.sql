-- DROP DATABASE
DROP DATABASE IF EXISTS friends_db;

-- CREATE DATABASE
CREATE DATABASE friends_db;

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    interested_movies INT[],
    watched_movies TEXT[]
);

CREATE TABLE movie_internal_id (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    movie_internal_id INT NOT NULL,
    review TEXT,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (movie_internal_id) REFERENCES movie_internal_id(id) ON DELETE CASCADE
);
