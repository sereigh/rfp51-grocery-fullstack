// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");
const routes = require("./routes.js");

app.use(cors());
app.use('/', routes);


app.listen(port, () => {
  console.log("listening on 8080");
});


