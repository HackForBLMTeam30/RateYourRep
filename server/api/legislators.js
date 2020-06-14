const router = require('express').Router();
const axios = require('axios');
const apiKey = require('../../config/key').key;
const { Legislator, Rating } = require('../db/models');

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
    officialsArray.forEach(async (official) => {
      console.log(official.address);
      const person = await Legislator.findOne(
        { where: { name: official.name, role: official.role } },
        {
          include: [
            {
              model: Rating,
            },
          ],
        }
      );
      if (!person) {
        Legislator.create(official);
      }
    });

    res.json(officialsArray);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const legislator = await Legislator.findOne(
      { where: { id } },
      {
        include: [
          {
            model: Rating,
          },
        ],
      }
    );
    res.send(legislator);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
