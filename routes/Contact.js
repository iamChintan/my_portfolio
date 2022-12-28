var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact Us', home: false, educations: false, experience: false, certificate: false, project: false, about: false, contact: true });
});

module.exports = router;
