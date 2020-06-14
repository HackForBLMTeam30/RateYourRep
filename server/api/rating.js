const router = require('express').Router();
const { Rating, User } = require('../db/models');
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
      res.send(updatedRating);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    let response = await Rating.findAll({
      where: { userId: req.params.userId },
    });
    res.send(response);
  } catch (error) {
    next(error);
  }
});

router.get('/legislator/:legislatorId', async (req, res, next) => {
  try {
    let response = await Rating.findAll({
      where: { legislatorId: req.params.legislatorId },
    });
    res.send(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
