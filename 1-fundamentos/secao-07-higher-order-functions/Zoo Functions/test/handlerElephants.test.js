const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa se para o argumento count é retornado o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Testa se para o argumento names é retornado um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  test('Testa se para o argumento averageAge é retornado um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('Testa se ao não passar nenhum argumento é retornado undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Testa se ao passar um parâmetro que não é uma string é retornado `Parâmetro inválido, é necessário uma string`', () => {
    const retorno = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(10)).toBe(retorno);
    expect(handlerElephants(['count'])).toBe(retorno);
    expect(handlerElephants(true)).toBe(retorno);
  });
  test('Testa se ao passar um parâmetro que não existe é retornado null', () => {
    expect(handlerElephants('idade')).toBeNull();
  });
  test('Testa se ao passar um parâmetro que já existe como chave no objeto é retornado o valor daquela chave', () => {
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
});
