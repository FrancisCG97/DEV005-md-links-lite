// MY FIRST I-O ASYNC

const fs = require('fs')

let archivo = process.argv[2];

fs.readFile(archivo, function (err, contenido) {   
  let lineas = contenido.toString().split('\n').length - 1;
  console.log(lineas);
})