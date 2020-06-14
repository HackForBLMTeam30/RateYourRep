const router = require('express').Router();
const { Rating } = require('../db/models');
const Sequelize = require('sequelize');
const { AvgRating, LegislatorRating } = require('./ratingsFuncs');

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
      const { transparency, alignWithValues, publicEngagement } = updatedRating;
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

router.get('/:ratingType/:legislatorId', async (req, res, next) => {
  try {
    const id = req.body.id;
    const [ratingAvg, metadata] = await Rating.findAll({
      where: { legislatorId: id },
      attributes: [
        'legislatorId',
        [
          Sequelize.fn('AVG', sequelize.col('transparency')),
          'transparencyCount',
        ],
        [
          Sequelize.fn('AVG', sequelize.col('publicEngagement')),
          'publicEngagementCount',
        ],
        [
          Sequelize.fn('AVG', sequelize.col('alignWithValues')),
          'alignWithValuesCount',
        ],
      ],
      group: 'legislatorId',
      order: [[Sequelize.fn('AVG', Sequelize.col('legislatorId')), 'DESC']],
    });

    res.json(ratingAvg);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
