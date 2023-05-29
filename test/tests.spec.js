/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const path = require('node:path');
const validateRoute = require('../validar');
const identifyFiles = require('../r-archivos');

// TEST VALIDACIÓN
describe('validateRoute', () => {
  test('Es una función', () => {
    expect(typeof validateRoute).toBe('function');
  });
  test('Existe la ruta absoluta, retorna la misma ruta', () => {
    const route = 'C:/Users/fcarr/OneDrive/Documentos/DEV005-md-links-lite/r-archivos.js';
    const resultadoEsperado = validateRoute(route);
    const resultado = validateRoute(route);
    expect(resultado).toBe(resultadoEsperado);
  });
  test('Convierte ruta relativa a absoluta', () => {
    const route = 'primeros-links.md';
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
describe('r-archivos', () => {
  test('Es una función', () => {
    expect(typeof identifyFiles).toBe('function');
  });
  test('Identifica la extensión del archivo', () => {
    const route = 'C:/Users/fcarr/OneDrive/Documentos/DEV005-md-links-lite/r-archivos.js';
    const resultadoEsperado = path.extname(route);
    const resultado = path.extname(route);
    expect(resultado).toBe(resultadoEsperado);
  });
});
