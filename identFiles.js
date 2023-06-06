/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-useless-escape */
const path = require('node:path');
const fs = require('fs');
const validLink = require('./validateLinks');
// const validLink = require('./validateLinks');

// FUNCIÓN IDENTIFICAR ARCHIVO Y LINKS
const identifyFiles = (route) => new Promise((resolve, reject) => {
  const extension = path.extname(route);
  if (extension === '.md') {
    console.log(extension);
    resolve(
      fs.promises.readFile(route, 'utf8')
        .then((data) => {
          const linksInfo = [];
          const regex = /\[(.*?)\]\((.*?)\)/g;
          while (regex.exec(data) !== null) {
            const match = regex.exec(data);
            const text = match[1];
            const href = match[2];
            linksInfo.push({
              href,
              text,
              file: route,
            });
          }
          return linksInfo;
        }),
    );
  }
  reject('No es una ruta valida');
});

module.exports = identifyFiles;
