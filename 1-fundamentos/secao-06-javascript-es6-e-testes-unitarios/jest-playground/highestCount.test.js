const { highestCount } = require('../src/highestCount');

describe('Implemente os casos de teste para a função highestCount', () => {
  test('Retorne 2 quando o parâmetro passado na funcão highestCount seja [1, 9, 2, 3, 9, 5, 7]', () => {
    expect(highestCount([1, 9, 2, 3, 9, 5, 7])).toBe(2)
  });
  test('Retorne 1 quando o parâmetro passado na funcão highestCount seja [0, 4, 4, 4, 9, 2, 1]', () => {
    expect(highestCount([0, 4, 4, 4, 9, 2, 1])).toBe(1)
  });
  test('Retorne 3 quando o parâmetro passado na funcão highestCount seja [0, 0, 0]', () => {
    expect(highestCount([0, 0, 0])).toBe(3)
  });  
});