const { test } = require("picomatch");

const numbers = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return true;
    }
  }
  return false;
}

// Testes
describe('Casos de teste para a função numbers', () => {
  test('Verifica se numbers está definida', () => {
    expect(numbers).toBeDefined();
  })
  test('Verifica se numbers é uma função', () => {
    expect(typeof numbers).toBe('function');
  })
  test('Retorne true quando a função numbers recebe um array contendo somente números inteiros', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });
  test('Retorne true quando a função numbers recebe um array contendo números decimais', () => {
    expect(numbers([0, 2.4, 3.5])).toBe(true);
  });
  test('Retorne true quando a função numbers recebe um array contendo parâmetros que não são números', () => {
    expect(numbers([1, 'a', [2], {}])).toBe(false);
  });
});