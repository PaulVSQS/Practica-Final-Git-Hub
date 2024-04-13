const assert = require('assert');

describe('Prueba Hola Mundo', function() {
  it('Debería retornar "Hola Mundo"', function() {
    assert.equal(saludo(), 'Hola Mundo');
  });
});

function saludo() {
  return 'Hola Mundo';
}
