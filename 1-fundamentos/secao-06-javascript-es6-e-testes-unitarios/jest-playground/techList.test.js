const { techList } = require('../src/techList');

describe('Crie uma função de Lista de Tecnologias', () => {
  test('Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias', () => {
    expect(techList(['JavaScript', 'HTML', 'CSS'], 'Ana')).toEqual([{tech: 'CSS', name: 'Ana'}, {tech: 'HTML', name: 'Ana'}, {tech: 'JavaScript', name: 'Ana'}])
  });
  test('Retorne um array vazio quando a lista tiver com 0 tecnologias', () => {
    expect(techList([], 'Ana')).toEqual([])
  });
});