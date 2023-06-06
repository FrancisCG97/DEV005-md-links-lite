/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const validateRoute = require('./validateRoute');
const identifyFiles = require('./identFiles');
const validLink = require('./validateLinks');

// AQUÍ DEBE IR FUNCIÓN MDLINKS
const mdLinks = (route) => {

};

// console.log(mdLinks);
console.log(validateRoute('README.md'));
identifyFiles('README.md').then((links) => {
  console.log(links);
});
// validLink({
//   href: 'https://www.youtube.com/watch?v=OWx8V4I8sis',
//   text: 'One Small Step',
//   file: 'A-songs.md',
// });
