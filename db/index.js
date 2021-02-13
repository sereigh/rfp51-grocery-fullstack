const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  database: "items",
});

connection.connect();

module.exports = connection;
