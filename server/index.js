// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const routes = require("./routes.js");
const path = require("path");

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
console.log(path.join(__dirname, '..', 'client', 'dist'));
app.use('/', routes);

app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});


