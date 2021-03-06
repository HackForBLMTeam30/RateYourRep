const router = require('express').Router();
module.exports = router;

// Put your route paths here
router.use('/users', require('./users'));
router.use('/legislators', require('./legislators'));
router.use('/rating', require('./rating'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
