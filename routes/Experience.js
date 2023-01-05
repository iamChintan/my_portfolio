var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('experience', { title: 'Experience', home: false, educations: false, academicproject: false,  experience: true, certificate: false, project: false, about: false, contact: false });
});

module.exports = router;
