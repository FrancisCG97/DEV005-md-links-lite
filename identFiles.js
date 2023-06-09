/* eslint-disable no-cond-assign */
const path = require('node:path');
const fs = require('fs');

// FUNCIÓN IDENTIFICAR ARCHIVOS
const identifyFiles = (route) => new Promise((resolve, reject) => {
  const extension = path.extname(route);
  if (extension === '.md') {
    console.log(extension);
    const regex = /\[(.*?)\]\((.*?)\)/g;
    resolve(
      fs.promises.readFile(route, 'utf8')
        .then((data) => {
          const linksInfo = [];
          let match;
          while ((match = regex.exec(data)) !== null) {
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
  reject('No es una ruta válida');
});

module.exports = identifyFiles;
