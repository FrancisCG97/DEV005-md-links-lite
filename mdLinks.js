const identifyFiles = require('./identFiles');
const validateRoute = require('./validateRoute');
const validLink = require('./validateLink');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  const linkExtract = identifyFiles(path);
  if (!validateRoute(path)) {
    reject('Ruta invalida');
  } else if (options.validate) {
    linkExtract.then((links) => Promise.all(links.map((link) => validLink(link))))
      .then((validatedLinks) => {
        resolve(validatedLinks);
      })
      .catch((error) => {
        reject(error);
      });
  } else {
    linkExtract
      .then((links) => {
        resolve(links);
      })
      .catch((error) => {
        reject(error);
      });
  }
});

mdLinks('mdPrueba/R-songs.md', { validate: false })
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });
