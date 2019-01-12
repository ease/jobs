const config = require('./config').config;
const paths = require('./paths').paths;
const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
let models = require('./models');
const dataService = require('./dataService');

// Database infos
const dbUrl = config.envSettings.databaseUrl;
// Allow CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/api', router);
// Initialize connection once
mongoose.connect(dbUrl, function(err) {
  if (err) throw err;
  console.log('Successfully connected');
  app.listen(3000);
});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// let testRecord = new Test({ name: 'Testing', title: 'BUUUUUU' });
// testRecord.save(function(err, testRecord) {
//   if (err) return console.error(err);
//   console.log('Saved to DB:', testRecord);
// });

router.get(paths.users, function(req, res) {
  dataService.findAll(req, res, models.User);
});

router.get(paths.posts, function(req, res) {
  dataService.findAll(req, res, models.Post);
});

router.get('/post/:title', function(req, res) {
  models.Post.findOne({ title: req.params.title }, function(err, data) {
    if (err) return console.error(err);
    console.log('ALL data', data);
    res.json(data);
  });
});
