var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    MongoClient = require('mongodb').MongoClient;

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var url = 'mongodb://localhost:27017/words';

var conn;
MongoClient.connect(url, function(err, db) {
  console.log("Connected to DB");
  conn = db;
});

function getWords(phrase, callback) {
  conn.collection('words')
  .find({ word: { $regex: phrase, $options: 'i' } })
  .toArray(function(err, docs) {
    if (err) console.error(err);
    callback(docs);
  });

}

app.get('/words/:phrase', function(req, res) {
  getWords(req.params.phrase, function(data) {
    res.send(data);
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening at http://localhost:3000');
});
