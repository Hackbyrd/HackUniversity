// require node modules
var path = require('path');

// require third party modules
var express       = require('express');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var morgan        = require('morgan');
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var passport      = require('passport');
var flash         = require('connect-flash');

// require custom modules

var port = process.env.PORT || 3000

// database
var configDB = require('./middleware/database.js');
mongoose.connect(configDB.url);

var app = express();

// set views and public files
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

// set up middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'anystringoftext', saveUninitialized: true, resave: true }));
app.use(passport.initialize());
app.use(passport.session());

// routes
require('./routes/routes')(app, passport);

app.listen(port);
console.log('Server running on port: ' + port);
