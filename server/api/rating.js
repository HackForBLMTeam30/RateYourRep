const router = require('express').Router();
const Rating = require('../db/models/rating');

router.post('/', async(req, res, next) => {
    try {
        const newRating = await Rating.create(req.body);
        res.json(newRating);
    } catch (error) {
        next(error);
    }
});

module.exports = router;