/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

// AQUÍ DEBE IR FUNCIÓN MDLINKS

const validateRoute = require('./validar');
const identifyFiles = require('./r-archivos');

// console.log(mdLinks);
console.log(validateRoute('C:/Users/fcarr/OneDrive/Documentos/DEV005-md-links-lite/primeros-links.md'));
identifyFiles('C:/Users/fcarr/OneDrive/Documentos/DEV005-md-links-lite/primeros-links.md').then((lectura) => {
  console.log(lectura);
});
