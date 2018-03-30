var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: `
  Sajankumar is an experienced Full Stack javaScript Developer,
  producing high quality responsive websites and exceptional user experience.
  ` });
});

router.get('/skills', function(req, res, next) {
  res.render('skills', { title: `
    Skills of Sajankumar | javaScript, Angular, React, Nodejs, Mongodb, Git, Agile, HTML5, 
    Block Element Modifier (BEM) and other web technologies and frameworks.
  ` });
});


module.exports = router;
