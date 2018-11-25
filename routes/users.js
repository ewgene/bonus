var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
app.post('/users', function (req, res) {
  var user = {
    id: req.body.id,
    name: req.body.name
  }
  db.collection('users').insert(user, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(user);
  })
});
app.get('/users', function (req, res) {
  db.collection('users').find().toArray(function (err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
})
app.get('/users/:id', function (req, res) {
  var user = users.find(function (user) {
    return user.id === Number(req.params.id);
  })
  console.log(user);
  res.send(user);
});
app.put('/users/:id', function (req, res) {
  var user = users.find(function (user) {
    return user.id === Number(req.params.id)
  });
  user.name = req.body.name;
  res.send(user);
});

module.exports = router;
