const myRemove = require('./ex1');

describe('Testa a função que remove um item de um array', () => {
  test('([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  test('([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  test('([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});