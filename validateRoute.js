/* eslint-disable no-console */
const path = require('node:path');
const fs = require('fs');

// FUNCIÓN VALIDAR RUTA
const validateRoute = (route) => {
  if (fs.existsSync(route)) {
    const ruta = route;
    console.log(`La ruta es: ${ruta}`);

    const validatePath = path.isAbsolute(route);
    if (validatePath) {
      return route;
    } if (!validatePath) {
      return path.resolve(route);
    }
  }
  return undefined;
};

module.exports = validateRoute;
