/**
 * All routes are placed in this file
 * All urls are going to be lowercase
 * All urls will not have underscore or dashes or spaces
 */

'use strict';

// require third-party modules
var express = require('express');
var router = express.Router();

// require page controller
var pages = require('./controllers');

/* ROUTES */
router.get('/', pages.index);
router.get('/404', pages.error404);
router.get('/*', pages.error404);

module.exports = router;
