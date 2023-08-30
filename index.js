const fs = require("fs");

fs.writeFile("./text.txt", "linea uno......", function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Archivo creado");
});

console.log("ultima linea");

fs.readFile("./text.txt", function (err, data) {
  if (err) {
    console.log(err);
  }
  if (data) {
    console.log(data.toString());
  }
});

