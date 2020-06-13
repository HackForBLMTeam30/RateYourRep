const User = require('./user');
const Legislator = require('./legislator');
const Rating = require('./rating');

User.hasMany(Rating);
Rating.belongsTo(User);
Legislator.hasMany(Rating);
Rating.belongsTo(Legislator);

module.exports = { User, Legislator, Rating };
