const fs = require("fs");

fs.writeFile('./text.txt', 'linea uno......',function (err) {

    if(err){
        console.log(err)
    }
    console.log('Archivo creado');
})


console.log('ultima linea')

fs.readFile()
