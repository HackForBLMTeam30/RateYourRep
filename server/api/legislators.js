const router = require('express').Router();
const axios = require('axios');
const apiKey = require('../../config/key').key;

router.get('/', async(req, res, next) => {

    const inputAddress = req.query.address;
    try {
        const { data } = await axios.get(
            `https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${inputAddress}`
        );
        //parses address into one string
        data.officials.map((legislator) => {
            if(legislator.address){
                let address = legislator.address[0]
                const {line1, city, state, zip} = address
                legislator.address = `${line1} ${city} ${state} ${zip}`
            }
        })
        console.log(data.officials)
        res.json(data);

    } catch (error) {
        next(error);
    }
});

module.exports = router;
