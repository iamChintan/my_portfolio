var express = require('express');
var router = express.Router();

var homeController = require('./Home');
var aboutUsController = require('./About');
var projectController = require('./Project');
var certificatesController = require('./Certificate');
var contactUsController = require('./Contact');
var educationsController = require('./Educations');
var experienceController = require('./Experience');

router.get('/', homeController);
router.get('/educations', educationsController);
router.get('/experience', experienceController);
router.get('/certificate', certificatesController);
router.get('/project', projectController);
router.get('/about', aboutUsController);
router.get('/contact', contactUsController);


module.exports = router;