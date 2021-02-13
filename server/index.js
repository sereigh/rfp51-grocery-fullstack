// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const routes = require("./routes.js");

app.use(cors());
app.use('/', routes);
app.use(express.static('src'));

app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});


