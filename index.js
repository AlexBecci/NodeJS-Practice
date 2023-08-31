const express = require("express");

const color = require("colors");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo</h1> <h2>Desde Node Js y Express</h2>");
  res.end();
});

app.listen(3000, () => {
  console.log("Server on port 3000".yellow);
});
