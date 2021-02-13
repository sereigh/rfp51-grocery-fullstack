const db = require('./index.js');

module.exports.getAll = (callback) => {
  db.query('select itemName, itemQuanity from list', (err, results) => {
    callback(results);
  });
};