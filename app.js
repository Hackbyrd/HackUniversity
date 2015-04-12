/********** Setup **********/
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var morgan = require("morgan");

var app = express();

// configure
app.use(bodyParser.json()); // config for body parser
app.use(morgan("dev")); // logs all requests

/*********** End Setup **********/
/*********** Database/Models **********/

// connect to mongodb
mongoose.connect('mongodb://localhost/hackuniversity');

// set up connection
var db = mongoose.connection;

// check for connection error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Success! Database Connected!");
});

// Set up schema
var Schema = mongoose.Schema;

// User schema
var userSchema = new Schema({
  firstName:  String,
  lastName: String,
  email:    String,
  password: String,
});

// method for user schema
userSchema.methods.toString = function () {
  return this;
}

// create User model
var User = mongoose.model('User', commentSchema);

/*********** End Database/Models **********/
/*********** Controllers **********/

// test URL
app.get("/", function (req, res) {
  console.log("Test Successful!");
  res.send("Test Successful!");
});

// log user signup
app.post("/user", function (req, res) {
  console.log("Create User");
  var newUser = new User(req.body.user);

  newUser.save(function (err, newUser) {
    if (err) {
      console.error(err);
      res.status(422).send("Error creating user.");
    } else {
      res.json(JSON.stringify(newUser.toString()));
    }
  });
});

// show one user
app.get("/users/:id", function (req, res) {
  console.log("Show User");
  User.findOne({ "_id": req.params.id }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(422).send("Error getting user.");
    } else {
      console.log(user);
      res.json(JSON.stringify(user.toString()));
    }
  });
});

// show all users signed up
app.get("/users", function (req, res) {
  console.log("Show All Users");
  User.find(function (err, users) {
    if (err) {
      console.error(err);
      res.status(422).send("Error getting users.");
    } else {
      console.log(users);
      res.json(JSON.stringify(users.map(function(_user) { return _user.toString() })));
    }
  });
});

// destory
app.delete("/users/:id", function (req, res) {
  console.log("Delete User");
  User.remove({ "_id": req.params.id }, function (err, response) {
    if (err) {
      console.error(err);
      res.status(422).send("Error getting user.");
    } else {
      console.log(response);
      res.json(JSON.stringify(response));
    }
  })
});

/*********** End Controllers **********/
/*********** Server **********/

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});

/*********** End Server **********/
