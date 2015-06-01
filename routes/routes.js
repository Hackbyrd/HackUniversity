var User = require('../models/user');

module.exports = function (app, passport) {

  // home
  app.get('/', function (req, res) {
    console.log('Home')
    res.render('index.ejs', {
      ageRange: { min: 13, max: 19 },
      title: "Hack University"
    });
  });

  // // show one user
  // app.get('/users/:id', function (req, res) {
  //   console.log('Show User');
  //   User.findOne({ '_id': req.params.id }, function (err, user) {
  //     if (err) {
  //       console.error(err);
  //       res.status(422).send('Error getting user.');
  //     } else {
  //       console.log(user);
  //       res.json(JSON.stringify(user.toString()));
  //     }
  //   });
  // });

  // // show all users
  // app.get('/users', function (req, res) {
  //   console.log('Show All Users');
  //   User.find(function (err, users) {
  //     if (err) {
  //       console.error(err);
  //       res.status(422).send('Error getting users.');
  //     } else {
  //       console.log(users);
  //       res.json(JSON.stringify(users.map(function(_user) { return _user.toString() })));
  //     }
  //   });
  // });

  // // update one user
  // app.put('/users/:id', function (req, res) {
  //   console.log('Update User');
  //   User.findOneAndUpdate({ '_id': req.params.id }, req.body.user, { 'upsert': true }, function(err, user) {
  //     if (err) {
  //       console.error(err);
  //       res.status(422).send('Error updating user.');
  //     } else {
  //       console.log(user);
  //       res.json(JSON.stringify(user.toString()));
  //     }
  //   });
  // });

  // // create new user
  // app.post('/users', function (req, res) {
  //   console.log('Create User');
  //   var newUser = new User(req.body.user);
  //   console.log(req.body);

  //   newUser.save(function (err, newUser) {
  //     if (err) {
  //       console.error(err);

  //       // check if email exists
  //       if (err.message.indexOf('duplicate key error') > 0)
  //         res.status(422).send('Email already exists! Please try different email!');
  //       else
  //         res.status(422).send('Error creating user.');

  //     } else {
  //       res.json(JSON.stringify(newUser.toString()));
  //     }
  //   });
  // });

  // // destroy user
  // app.delete('/users/:id', function (req, res) {
  //   console.log('Delete User');
  //   User.remove({ '_id': req.params.id }, function (err, response) {
  //     if (err) {
  //       console.error(err);
  //       res.status(422).send('Error getting user.');
  //     } else {
  //       console.log(response);
  //       res.json(JSON.stringify(response));
  //     }
  //   })
  // });

  // 404
  app.get('/*', function (req, res) {
    res.render('404.ejs', { message: 'Can\'t find your class?' });
  })

}
