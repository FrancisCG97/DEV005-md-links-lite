/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const path = require('node:path');
const fs = require('fs');

// FUNCIÓN IDENTIFICAR ARCHIVO
const identifyFiles = (route) => new Promise((resolve, reject) => {
  const extension = path.extname(route);

  if (extension === '.md') {
    resolve(fs.promises.readFile(route, 'utf8')
      .then((readFile) => readFile));
  }
  reject('No es una ruta valida');
});

// FUNCIÓN IDENTIFICAR LINKS

module.exports = identifyFiles;
