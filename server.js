const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err, database) {
  if (err) {
    return console.log(err);
  }
  db = database.db('bonus');
  console.log(db);
  app.listen(3012, function () {
    console.log('API app started');
  })
})

/* var users = [
  {
    id: 1,
    name: 'Metallica'
  },
  {
    id: 2,
    name: 'Iron Maiden'
  },
  {
    id: 3,
    name: 'Deep Purple'
  }
]; */

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