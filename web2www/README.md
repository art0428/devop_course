# 讓你的app連網

## 創建一個web server
```
express -e
npm i

npm start
```

## 弄一個docker file to build
```
docker build -t web2www .
docker run -p 3000:3000 --name web2www web2www
docker stop web2www
```


## 撰寫第一個web service API
1. 安裝axios
```
npm i axios
```
2. axios程式 in index.js
```
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

```
3. 顯示movies
```
http://localhost:3000/movies
```
