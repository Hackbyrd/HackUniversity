/**
 * All pages go here
 */

'use strict';

// env variables
const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  index(req, res) {
    return res.render('index', {
      env: ENV,
      title: 'Hack University',
      ageRange: { min: 13, max: 19 },
      page: 'home'
    });
  },

  error404(req, res) {
    return res.render('404', {
      env: ENV,
      message: 'Can\'t find your class?',
      title: 'Pathover - 404 Page Not Found',
      page: '404',
    });
  }
};
