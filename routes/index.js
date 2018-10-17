const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fotc', function(req, res, next) {
  res.json({ reddit: 'whatever' });
});

router.get('/consume', function(req, res, next) {

  axios.get('https://www.reddit.com/r/dota2.json')
    .then(function (response) {
      console.log(response,'test');


      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

});

router.get('/template', function(req, res, next) {

  axios.get('https://www.reddit.com/r/dota2.json')
  .then(function (response) {
    console.log(response,'test');


    res.render('dota', { title: 'dota', data: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });

});


module.exports = router;
