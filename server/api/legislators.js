const router = require('express').Router();
const axios = require('axios');
const apiKey = require('../../config/key').key;
const { Legislator, Rating } = require('../db/models');
const { AvgRating } = require('./ratingsFuncs');
const Sequelize = require('sequelize');
const User = require('../db/models/user');

router.get('/', async (req, res, next) => {
  const inputAddress = req.query.address;
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${inputAddress}`
    );
    //parses address into one string
    data.officials.forEach((legislator) => {
      if (legislator.address) {
        let address = legislator.address[0];
        const { line1, city, state, zip } = address;
        legislator.address = `${line1} ${city} ${state} ${zip}`;
      }
    });
    let officialsArray = [];
    data.offices.forEach((office) => {
      const { name, officialIndices } = office;
      officialIndices.forEach((office) => {
        let official = data.officials[office];
        if (official.name !== null) {
          let officialObject = { ...official, role: name };
          officialsArray.push(officialObject);
        }
      });
    });
    let DBArray = [];
    let itemsProcessed = 0;
    const response = () => {
      let seconditemsProcessed = 0;
      let secondresponse = () => {
        res.send(DBArray);
      };
      DBArray.forEach(async (official) => {
        let id = official.id;
        const [ratingAvg, metadata] = await Rating.findAll({
          where: { legislatorId: id },
          attributes: [
            'legislatorId',
            [
              Sequelize.fn('SUM', Sequelize.col('transparency')),
              'transparencySUM',
            ],
            [
              Sequelize.fn('SUM', Sequelize.col('publicEngagement')),
              'publicEngagementSUM',
            ],
            [
              Sequelize.fn('SUM', Sequelize.col('alignWithValues')),
              'alignWithValuesSUM',
            ],
            [
              Sequelize.fn('COUNT', Sequelize.col('transparency')),
              'transparencyCount',
            ],
            [
              Sequelize.fn('COUNT', Sequelize.col('alignWithValues')),
              'alignWithValuesCount',
            ],
            [
              Sequelize.fn('COUNT', Sequelize.col('publicEngagement')),
              'publicEngagementCount',
            ],
          ],
          group: 'legislatorId',
          order: [[Sequelize.fn('AVG', Sequelize.col('legislatorId')), 'DESC']],
        });
        const [BLKRatingAvg, BLKmetadata] = await Rating.findAll({
          where: { legislatorId: id },
          include: {
            model: User,
            where: { identifyAsBLK: true },
          },
          attributes: [
            'legislatorId',
            [
              Sequelize.fn('SUM', Sequelize.col('transparency')),
              'transparencySUM',
            ],
            [
              Sequelize.fn('SUM', Sequelize.col('publicEngagement')),
              'publicEngagementSUM',
            ],
            [
              Sequelize.fn('SUM', Sequelize.col('alignWithValues')),
              'alignWithValuesSUM',
            ],
            [
              Sequelize.fn('COUNT', Sequelize.col('transparency')),
              'transparencyCount',
            ],
            [
              Sequelize.fn('COUNT', Sequelize.col('alignWithValues')),
              'alignWithValuesCount',
            ],
            [
              Sequelize.fn('COUNT', Sequelize.col('publicEngagement')),
              'publicEngagementCount',
            ],
          ],
          group: ['rating.legislatorId', 'user.id'],
          order: [[Sequelize.fn('AVG', Sequelize.col('legislatorId')), 'DESC']],
        });
        if (BLKRatingAvg) {
          let BLKRatingsAndCount = BLKRatingAvg.get({
            plain: true,
          });
          const {
            transparencySUM,
            publicEngagementSUM,
            alignWithValuesSUM,
            transparencyCount,
            publicEngagementCount,
            alignWithValuesCount,
          } = BLKRatingsAndCount;
          let totalOfCategories = parseFloat(
            +transparencySUM + +publicEngagementSUM + +alignWithValuesSUM
          );

          let totalCount =
            +transparencyCount + +publicEngagementCount + +alignWithValuesCount;
          official.AverageRating = new AvgRating(
            totalOfCategories,
            totalCount,
            +transparencySUM,
            +publicEngagementSUM,
            +alignWithValuesSUM
          );
        }
        if (ratingAvg) {
          let ratingsAndCount = ratingAvg.get({ plain: true });
          const {
            transparencySUM,
            publicEngagementSUM,
            alignWithValuesSUM,
            transparencyCount,
            publicEngagementCount,
            alignWithValuesCount,
          } = ratingsAndCount;
          let totalOfCategories = parseFloat(
            +transparencySUM + +publicEngagementSUM + +alignWithValuesSUM
          );

          let totalCount =
            +transparencyCount + +publicEngagementCount + +alignWithValuesCount;
          official.AverageBLKRating = new AvgRating(
            totalOfCategories,
            totalCount,
            +transparencySUM,
            +publicEngagementSUM,
            +alignWithValuesSUM
          );
        }
        seconditemsProcessed++;
        if (seconditemsProcessed === DBArray.length) {
          secondresponse();
        }
      });
    };
    officialsArray.forEach(async (official) => {
      const person = await Legislator.findOne({
        where: { name: official.name, role: official.role },

        include: {
          model: Rating,
        },
      });
      if (!person) {
        let person = await Legislator.create(official);
        DBArray.push(person.get({ plain: true }));
      } else {
        DBArray.push(person.get({ plain: true }));
      }
      itemsProcessed++;
      if (itemsProcessed === officialsArray.length) {
        response();
      }
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const legislator = await Legislator.findOne({
      where: { id },
      include: {
        model: Rating,
      },
    });
    res.send(legislator);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
