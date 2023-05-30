/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-useless-escape */
const path = require('node:path');
const fs = require('fs');

// FUNCIÓN IDENTIFICAR ARCHIVO
const identifyFiles = (route) => new Promise((resolve, reject) => {
  const extension = path.extname(route);
  if (extension === '.md') {
    console.log(extension);
    resolve(
      fs.promises.readFile(route, 'utf8')
        .then((readFile) => readFile),
    );
  }
  reject('No es una ruta valida');
});

module.exports = identifyFiles;
