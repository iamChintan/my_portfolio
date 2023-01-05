var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('academicproject', { title: 'Projects', home: false, academicproject: true, educations: false, experience: false, certificate: false, project: false, about: false, contact: false });

});

module.exports = router;
