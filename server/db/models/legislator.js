const Sequelize = require('sequelize');
const db = require('../db');

const Legislator = db.define('legislator', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: Sequelize.STRING,
  address: Sequelize.STRING,
  party: Sequelize.STRING,
  phones: Sequelize.ARRAY(Sequelize.STRING),
  urls: Sequelize.ARRAY(Sequelize.STRING),
  photoUrl: Sequelize.STRING,
  channels: Sequelize.ARRAY(Sequelize.JSON),
});


module.exports = Legislator;

