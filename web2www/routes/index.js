var express = require('express');
const axios = require('axios');
var router = express.Router();


router.get('/movies', async function (req, res, next) {
  try {
    const response = await axios.get('https://swapi.dev/api/films');
    var movieList = [];
    if (response && response.data) {
      list = response.data.results;
      for (i in list) {
        movieList.push(list[i].title);
      }
    }


    res.status(200).json({ movies: movieList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Internal Error' });
  }
});

module.exports = router;


