var express = require('express');
var router = express.Router();
const movieService = require('../models/services/movieServices')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('this movie service');
});


router.route('/build')
  .get(async (req, res, next) => {
    var message = await movieService.build();
    res.status(200).send({
      success: true,
      BuildTalbeName: message
    })

  })


router.route('/create')
  .get(async (req, res, next) => {
    try {
      const name = req.query.name;
      const desc = req.query.desc;
      const response = await movieService.create(name, desc);
      res.send({
        response
      })

    } catch (e) {
      return next(e);
    };
  })


router.route('/search')
  .get(async (req, res, next) => {
    try {
      const response = await movieService.search();
      res.send({
        response
      })


    } catch (e) {
      return next(e);
    };
  })

module.exports = router;
