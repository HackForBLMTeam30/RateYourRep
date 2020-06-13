const Sequelize = require('sequelize');
const db = require('../db');

const ActiveRating = db.define('activeRating', {
  legislatorId: Sequelize.INTEGER,
  ratingId: Sequelize.INTEGER,
});

module.exports = ActiveRating;
