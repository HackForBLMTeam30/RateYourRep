const router = require('express').Router();
const Rating = require('../db/models/rating');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/rateyourrep');

// class AvgRating {
//     constructor(total, count) {

//         this.total = total;
//         this.count = count;
//     }
//     addRating(value) {
//         this.count++;
//         this.total += value
//     }
//     updateRating(prevRating, newRating) {
//         this.total -= prevRating
//         this.total += newR
//     }
//     getRating() {
//         return this.total / this.count
//     }

// }

// class LegislatorRating {
//     constructor() {
//         this.totalRatings = new AvgRating();
//         this.blackRatings = new AvgRating();
//     }

// }

// const legislators = {}

// router.post('/', async(req, res, next) => {
//     try {
//         const newRating = await Rating.create(req.body);
//         res.json(newRating);

//         if (user.isBlack) {
//             legislators[legislators.name].blackRatings.addRating()
//         }
//         legislators[legislators.name].totalRatings.addRating()

//         return []

//     } catch (error) {
//         next(error);
//     }
// });

// router.get('/', async(req, res, next) => {
//     try {
//         const id = req.body.id;
//         const [ratingAvg, metadata] = await Rating.findAll({
//             where: { legislatorId: id },
//             attributes: [
//                 'legislatorId', [
//                     sequelize.fn('AVG', sequelize.col('transparency')),
//                     'transparencyCount',
//                 ],
//                 [
//                     sequelize.fn('AVG', sequelize.col('publicEngagement')),
//                     'publicEngagementCount',
//                 ],
//                 [
//                     sequelize.fn('AVG', sequelize.col('alignWithValues')),
//                     'alignWithValuesCount',
//                 ],
//             ],
//             group: 'legislatorId',
//             order: [
//                 [sequelize.fn('AVG', sequelize.col('legislatorId')), 'DESC']
//             ],
//         });
//         res.json(ratingAvg);
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = router;
