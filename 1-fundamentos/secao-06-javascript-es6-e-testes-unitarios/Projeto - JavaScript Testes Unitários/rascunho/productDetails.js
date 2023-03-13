// Testes
describe('Casos de teste para a função productDetails', () => {
  test('Retorne undefined quando o raio não for especificado', () => {
    expect(productDetails()).toBeDefined();
  });
  test('Verifica se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  test('Retorne um array contendo objetos com as propriedades name e details', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).toHaveProperty('name');
    expect(productDetails('Alcool gel', 'Máscara')[0]).toHaveProperty('details');
  });
  test('Retorne um objeto com as propriedades name e details', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toContainEqual({name: 'Alcool gel', details: { productId: 'Alcool gel123'}});
  });
  test('Retorne um objeto com o tamanho da quantidade de strings recebidas como parâmetro', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
  });
});