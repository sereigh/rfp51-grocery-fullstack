var express = require('express');
var router = express.Router();
const db = require('../db/queries.js');

router.get('/groceries', (req, res) => {
  console.log('get got');
  db.getAll((err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;