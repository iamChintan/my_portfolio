var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About', home: false, educations: false, experience: false, academicproject: false, certificate: false, project: false, about: true, contact: false });
});

module.exports = router;
