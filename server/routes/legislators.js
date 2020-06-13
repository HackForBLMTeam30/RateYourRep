const router = require('express').Router();
const axios = require('axios');
const apiKey = require('../../config/key').key;

router.get('/legislators', async(req, res, next) => {
    const inputAddress = req.query.address;
    try {
        const { data } = await axios.get(
            `https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${inputAddress}`
        );
        res.json(data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;