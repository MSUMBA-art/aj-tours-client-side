const express = require("express");

const app = express();

const dbConfig = require("./db")

const port = 5000;
const state = "is running";
const package = "nodemon";

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`AJ-TOURS server ${state} using ${package}  on port ${port}`);
});
