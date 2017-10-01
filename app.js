/**
 * Main Express Application
 */

'use strict';

// require built-in node modules
var fs = require('fs'); // file reader

// require third-party node modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');

// require custom node modules
var router = require('./routes'); // grab routes

// env variables
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT ? Number(process.env.PORT) : 8888;

// set up express app
var app = express();

// add middleware and they must be in order
if (ENV === 'development')
  app.use(morgan('dev')); // only on development

app.use(bodyParser.json()); // raw json
app.use(bodyParser.urlencoded({ extended: false })); // application/x-www-form-urlencoded

app.set('trust proxy', 1); // get ip address using req.ip or req.ips
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/', router); // place routes here

// start
http.createServer(app).listen(PORT, () => {
  console.log(`Server started on port ${ PORT }`);
});;
