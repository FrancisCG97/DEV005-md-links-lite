/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

// AQUÍ DEBE IR FUNCIÓN MDLINKS

const validateRoute = require('./validar');
const identifyFiles = require('./ident-archivos');
const validateLink = require('./validateLinks');

// console.log(mdLinks);
console.log(validateRoute('README.md'));
identifyFiles('README.md').then((lectura) => {
  console.log(lectura);
});
validateLink('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions');
