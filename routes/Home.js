var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home', home: true, project: false, about: false, contact: false });
});

module.exports = router;
