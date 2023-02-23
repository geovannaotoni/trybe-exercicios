const strings = require('../src/strings');


describe('Implemente os casos de teste para a função `strings`', () => {
  it('Verifica se a função `strings` retorna `true` quando o array contém apenas strings e falso caso contrário', () => {
    expect(strings(['trybe', 'exercicios'])).toBe(true);
    expect(strings(['turma', 30])).toBe(false);
  });
  it('Escreva um teste em que a função recebe esse array e retorna true', () => {
    expect(strings(['Ana', 'Carolzita', 'Joi', 'Thalles', 'Nasc', 'Kaue'])).toBe(true);
  })
  it('Escreva um teste em que a função recebe esse array e retorna false', () => {
    expect(strings(['trybe',2,'vqv'])).toBe(false);
  });
  it('Escreva um teste em que a função recebe [10, `a`, 32] e retorna false', () => {
    expect(strings([10, 'a', 32])).toBe(false);
  })
  it('Escreva um teste em que a função receba um array vazio e retorna false', () => {
    expect(strings([])).toBe(false);
  })
});

