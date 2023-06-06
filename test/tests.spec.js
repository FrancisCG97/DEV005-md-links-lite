/* eslint-disable linebreak-style */
/* eslint-disable prefer-regex-literals */
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
    const route = 'C:/Users/fcarr/OneDrive/Documentos/DEV005-md-links-lite/ident-archivos.js';
    const resultadoEsperado = validateRoute(route);
    const resultado = validateRoute(route);
    expect(resultado).toBe(resultadoEsperado);
  });
  test('Convierte ruta relativa a absoluta', () => {
    const route = 'A-songs.md';
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
  it('Debe identificar links en un archivo .md', () => {
    const route = 'A-songs.md'; // Ruta a un archivo .md existente para el test
    const readFileMock = jest.spyOn(fs.promises, 'readFile');
    const expectedLinksInfo = [
      { href: 'https://www.youtube.com/watch?v=LBgTiLMTlxo', text: '[Day Eleven: Love]', file: route },
      { href: 'https://www.youtube.com/watch?v=OWx8V4I8sis', text: '[One Small Step]', file: route },
    ];
    const fileContent = `
      Texto [Day Eleven: Love](https://www.youtube.com/watch?v=LBgTiLMTlxo) y [One Small Step](https://www.youtube.com/watch?v=OWx8V4I8sis)..
    `;

    // Simula la lectura del archivo .md
    readFileMock.mockResolvedValue(fileContent);

    // Ejecuta la función a probar
    return identifyFiles(route)
      .then((result) => {
        expect(result).toEqual(expectedLinksInfo);
        expect(readFileMock).toHaveBeenCalledWith(route, 'utf8');
      });
  });

  // it('Debe rechazar con un mensaje de error para los archivos que no son .md', () => {
  //   const route = 'validar.js'; // Ruta a un archivo no-.md existente para el test

  //   // Ejecuta la función a probar
  //   return expect(identifyFiles(route)).rejects.toEqual('No es una ruta valida');
  // });
});
