const User = require('./user');
const Legislator = require('./legislator');
const Rating = require('./rating');
const ActiveRating = require('./activeRating');

User.hasMany(Rating);
Rating.belongsTo(User);
Legislator.hasMany(Rating);
Rating.belongsTo(Legislator);
ActiveRating.belongsTo(Legislator);
ActiveRating.belongsTo(Rating);

module.exports = { User, Legislator, Rating, ActiveRating };
