// Testes
describe('Casos de teste para a função circle', () => {
  test('Verifica se circle é uma função', () => {
    expect(typeof circle).toBe('function');
  });
  test('Retorne undefined quando o raio não for especificado', () => {
    expect(circle()).toBe(undefined);
  });
  test('Retorne um objeto com as propriedades Raio, Área e Circunferência quando a função recebe um valor numérico para o raio', () => {
    expect(circle(3)).toHaveProperty('raio');
    expect(circle(3)).toHaveProperty('área');
    expect(circle(3)).toHaveProperty('circunferência');
  });
  test('Retorne um objeto com as propriedades Raio, Área e Circunferência quando a função recebe um valor numérico para o raio', () => {
    expect(circle(3)).toEqual({raio: 3, área: 3, circunferência: 3});
  });
});