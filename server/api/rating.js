const router = require('express').Router();
const { Rating } = require('../db/models');
const Sequelize = require('sequelize');

class AvgRating {
  constructor(total, count) {
    this.totalAllCategory = total;
    this.transparencyTotal = 0;
    this.publicEngagementTotal = 0;
    this.alignWithValuesTotal = 0;
    this.count = count;
  }
  addRating(category, value) {
    if (category === 'transparency') {
      this.transparencyTotal += value;
    } else if (category === 'publicEngagement') {
      this.publicEngagementTotal += value;
    } else if (category === 'alignWithValues') {
      this.alignWithValuesTotal += value;
    }
    this.count++;
    this.totalAllCategory += value;
  }
  updateRating(category, prevRating, newRating) {
    if (category === 'transparency') {
      this.transparencyTotal -= prevRating;
      this.transparencyTotal += newRating;
    } else if (category === 'publicEngagement') {
      this.publicEngagementTotal -= newRating;
      this.publicEngagementTotal += newRating;
    } else if (category === 'alignWithValues') {
      this.alignWithValuesTotal -= prevRating;
      this.alignWithValuesTotal += newRating;
    }
    this.total -= prevRating;
    this.total += newRating;
  }
  getRating(category) {
    if (category === 'transparency') {
      return this.transparencyTotal / this.count;
    } else if (category === 'publicEngagement') {
      return this.publicEngagementTotal / this.count;
    } else if (category === 'alignWithValues') {
      return this.alignWithValuesTotal / this.count;
    } else if (category === 'all') {
      return this.totalAllCategory / this.count;
    }
  }
}

class LegislatorRating {
  constructor() {
    this.totalRatings = new AvgRating();
    this.blackRatings = new AvgRating();
  }
}

const legislators = {};

router.post('/:legislatorId', async (req, res, next) => {
  try {
    let ratingsObj = {
      ...req.body,
      userId: req.body.user.id,
      legislatorId: req.params.legislatorId,
    };
    const oldRating = await Rating.findOne({
      where: {
        userId: req.body.user.id,
        legislatorId: req.params.legislatorId,
      },
    });
    if (!oldRating) {
      const newRating = await Rating.create(ratingsObj);
      res.json(newRating);
    } else {
      const updatedRating = await oldRating.update(ratingsObj);
      res.send(updatedRating);
    }
  } catch (error) {
    next(error);
  }
});

// if (idAsBLK) {
//   legislators[legislators.name].blackRatings.addRating();
// }
// legislators[legislators.name].totalRatings.addRating();

// return [];

// router.get('/', async(req, res, next) => {
//     try {
//         const id = req.body.id;
//         const [ratingAvg, metadata] = await Rating.findAll({
//             where: { legislatorId: id },
//             attributes: [
//                 'legislatorId', [
//                     Sequelize.fn('AVG', sequelize.col('transparency')),
//                     'transparencyCount',
//                 ],
//                 [
//                     Sequelize.fn('AVG', sequelize.col('publicEngagement')),
//                     'publicEngagementCount',
//                 ],
//                 [
//                     Sequelize.fn('AVG', sequelize.col('alignWithValues')),
//                     'alignWithValuesCount',
//                 ],
//             ],
//             group: 'legislatorId',
//             order: [
//                 [Sequelize.fn('AVG', Sequelize.col('legislatorId')), 'DESC']
//             ],
//         });
//         res.json(ratingAvg);
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = router;
