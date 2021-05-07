const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  booksKey: process.env.REACT_APP_BOOKS_API_KEY,
  distanceKey: process.env.DISTANCE_MATRIX_API_KEY,
  dbURL: process.env.DB_URL
};