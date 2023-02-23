const myFizzBuzz = require('./ex2');

describe('Testa a função myFizzBuzz' , () => {
  test('Verifica se 15 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Verifica se 3 retorna fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  test('Verifica se 5 retorna buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  test('Verifica se 7 retorna 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('Verifica se uma string retorna false', () => {
    expect(myFizzBuzz('1')).toBe(false);
  });
});