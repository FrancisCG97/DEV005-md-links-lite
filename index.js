/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const validateRoute = require('./validateRoute');
const identifyFiles = require('./identFiles');
const showValidLink = require('./identFiles');
const validLink = require('./identFiles');

// AQUÍ DEBE IR FUNCIÓN MDLINKS
// const mdLinks = (route, options) => {
//   const validPath = validateRoute(route);
//   return new Promise((resolve, reject) => {
//     if (!route || !validPath) reject('Invalid route');
//     const links = validLink();
//   });
// };

// mdLinks('./README.md', { validate: true })
//   .then((Response) => console.log(Response))
//   .catch((err) => console.log(err));
// console.log(mdLinks);

console.log(validateRoute('mdPrueba/R-songs.md'));
identifyFiles('mdPrueba/R-songs.md').then((links) => {
  console.log(links);
});
console.log(validLink('mdPrueba/R-songs.md'));
// console.log(showValidLink('mdPrueba/FV-songs.md'));
