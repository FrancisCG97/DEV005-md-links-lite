/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-useless-escape */

// const identifyFiles = require('./ident-archivos');

// // FUNCIÓN EXTRAER LINKS DE ARCHIVO
// const extractLinks = (route) => {
//   Promise((resolve, reject) => {
//     const text = identifyFiles(route);
//     const regExpr = '/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/';
//     const linksInArray = text.match(regExpr);
//     if (linksInArray.includes('https')) {
//       resolve(
//         fs.promises.readFile(route, 'utf8')
//           .then((readFile) => readFile),
//       );
//     }
//     reject('No es una ruta valida');
//   });
// };
// console.log(linksInArray);

// module.exports = extractLinks;
