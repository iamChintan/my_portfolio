var express = require('express');
var router = express.Router();

var homeController = require('./Home');
var aboutUsController = require('./About');
var projectController = require('./Project');
var contactUsController = require('./Contact');


router.get('/', homeController);
router.get('/project', projectController);
router.get('/about', aboutUsController);
router.get('/contact', contactUsController);





module.exports = router;