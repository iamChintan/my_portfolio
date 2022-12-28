var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('educations', { title: 'Educations', home: false, educations: true, certificate: false, experience: false, project: false, about: false, contact: false });
});

module.exports = router;
