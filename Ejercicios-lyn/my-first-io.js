// MY FIRST I-O

const fs = require('fs');

const archivo = fs.readFileSync(process.argv[2]);
const cadena = archivo.toString();
const saltos = cadena.split('\n');
const numLineas = saltos.length-1;

console.log(numLineas);
