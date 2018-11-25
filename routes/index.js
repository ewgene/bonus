var express = require('express');
var router = express.Router();
const noteRoutes = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = function(app, db) {
  noteRoutes(app, db);
};
module.exports = function(app, db) {
  app.post('/users', (req, res) => {
    res.send('Hello')
  });
};

module.exports = router;
