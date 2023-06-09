/* eslint-disable no-undef */
const fs = require('fs');
const path = require('node:path');
const validateRoute = require('../validateRoute');
const identifyFiles = require('../identFiles');

// TEST VALIDACIÓN
describe('validateRoute', () => {
  test('Es una función', () => {
    expect(typeof validateRoute).toBe('function');
  });
  test('Existe la ruta absoluta, retorna la misma ruta', () => {
    const route = 'C:/Users/fcarr/OneDrive/Documentos/DEV005-md-links-lite/identFiles.js';
    const resultadoEsperado = validateRoute(route);
    const resultado = validateRoute(route);
    expect(resultado).toBe(resultadoEsperado);
  });
  test('Convierte ruta relativa a absoluta', () => {
    const route = 'identFiles.js';
    const resultadoEsperado = path.resolve(route);
    const resultado = validateRoute(route);
    expect(resultado).toBe(resultadoEsperado);
  });
  test('Retorna undefined si la ruta no existe', () => {
    const route = 'primeros-links.js';
    const resultadoEsperado = validateRoute(route);
    const resultado = validateRoute(route);
    expect(resultado).toBeUndefined(resultadoEsperado);
  });
});

// TEST IDENTIFICACIÓN ARCHIVOS
describe('identifyFiles', () => {
  test('Debe identificar links en un archivo .md', () => {
    const route = 'mdPrueba/FV-songs.md';
    const readFileMock = jest.spyOn(fs.promises, 'readFile');
    const expectedLinksInfo = [
      {
        href: 'https://www.youtube.com/watch?v=Z04yreHRcPE',
        text: 'La Fortaleza',
        file: 'mdPrueba/FV-songs.md',
      },
      {
        href: 'https://www.youtube.com/watch?v=U5a_lOSJbCE',
        text: '¿Dónde se llora cuando se llora?',
        file: 'mdPrueba/FV-songs.md',
      },
    ];
    const fileContent = `
      Canciones en el archivo: [La Fortaleza](https://www.youtube.com/watch?v=Z04yreHRcPE) y [¿Dónde se llora cuando se llora?](https://www.youtube.com/watch?v=U5a_lOSJbCE)
    `;
    readFileMock.mockResolvedValue(fileContent);
    return identifyFiles(route)
      .then((result) => {
        expect(result).toEqual(expectedLinksInfo);
        expect(readFileMock).toHaveBeenCalledWith(route, 'utf8');
      });
  });
  test('Debe rechazar con un mensaje de error para los archivos que no son .md', () => {
    const route = 'validar.js';
    return expect(identifyFiles(route)).rejects.toEqual('No es una ruta válida');
  });
});
