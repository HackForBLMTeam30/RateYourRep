const Sequelize = require('sequelize');
const db = require('../db');

const Rating = db.Define('rating', {
  Transparency: Sequelize.INTEGER,
  PublicEngagement: Sequelize.INTEGER,
  AlignWithValues: Sequelize.INTEGER,
  Description: Sequelize.TEXT,
});

module.Exports = Rating;
