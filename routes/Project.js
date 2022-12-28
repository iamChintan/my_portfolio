var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('project', { title: 'Projects', home: false, educations: false, experience: false, certificate: false, project: true, about: false, contact: false });

});

module.exports = router;
