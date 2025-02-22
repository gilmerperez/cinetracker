import { UserFactory } from './User.js';
import { MovieFactory } from './Movie.js';
import { ReviewFactory } from './Review.js';
import sequelize from '../config/connection.js';

const User = UserFactory(sequelize);
const Movie = MovieFactory(sequelize);
const Review = ReviewFactory(sequelize);

// Set up associations
Review.belongsTo(User, { foreignKey: 'user_id' });
Review.belongsTo(Movie, { foreignKey: 'movie_id' });
User.hasMany(Review, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Movie.hasMany(Review, { foreignKey: 'movie_id', onDelete: 'CASCADE' });

export { User, Movie, Review };
