var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: `
  Sajankumar is an experienced Full Stack javaScript Developer,
  producing high quality responsive websites and exceptional user experience.
  ` });
});

module.exports = router;
