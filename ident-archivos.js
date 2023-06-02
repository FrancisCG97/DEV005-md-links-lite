/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-useless-escape */
const path = require('node:path');
const fs = require('fs');

// FUNCIÓN IDENTIFICAR ARCHIVO Y LINKS
const identifyFiles = (route) => new Promise((resolve, reject) => {
  const extension = path.extname(route);
  if (extension === '.md') {
    console.log(extension);
    const regex = /\[(.*?)\]\((.*?)\)/g;
    resolve(
      fs.promises.readFile(route, 'utf8')
        .then((data) => {
          const linksInfo = [];
          console.log(data);
          console.log(`se lee ${linksInfo}`);
          while (regex.exec(data)) {
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
