var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('certificate', { title: 'Certificate', home: false, academicproject: false, educations: false, experience: false, certificate: true, project: false, about: false, contact: false });
});

module.exports = router;
