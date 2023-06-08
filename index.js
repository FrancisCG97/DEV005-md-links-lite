const identifyFiles = require('./identFiles');
const validLink = require('./validateLink');

// AQUÍ DEBE IR FUNCIÓN MDLINKS
const mdLinks = (route, options) => {
  const validRoute = identifyFiles(route);
  if (!validRoute) {
    throw new Error('Ruta invalida');
  }
  const linksInFile = identifyFiles('mdPrueba/A-songs.md');
  if (!options) {
    return linksInFile;
  }
  if (options.validate) {
    return linksInFile
      .then((links) => validLink(links));
  }
  return linksInFile;
};

module.exports = mdLinks;
