/* eslint-disable linebreak-style */
/* eslint-disable no-cond-assign */
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
  reject('No es una ruta valida');
});

const validLink = (objArray) => Promise.all(objArray.map((objRoute) => fetch(objRoute.href)
  .then((response) => {
    if (response.ok) {
      return {
        href: objRoute.href,
        text: objRoute.text,
        file: objRoute.file,
        status: response.status,
        ok: response.statusText,
      };
    }
    return undefined;
  })
  .catch((error) => {
    console.log(`Se produjo el siguiente error: ${error}`);
  })));

// const showValidLink = (arr) => validLink(arr)
//   .then((res) => (res))
//   .catch((err) => (err));

// const checkLinks = (array) => Promise.all(array.map((obj) => fetch(obj.href)
// .then((response) => {
//   const x = {
//     href: obj.href,
//     text: obj.text,
//     file: obj.file,
//     status: response.status,
//     statusText: response.statusText,
//   };
//   return x;

// module.exports = showValidLink;
module.exports = validLink;
module.exports = identifyFiles;
