const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const retorno = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  test('Testa se ao não passar nenhum argumento é retornado um objeto com cada dia da semana', () => {
    expect(getOpeningHours()).toEqual(retorno);
  });
  test('Testa se para os argumentos Monday e 09:00-AM é retornada a string `The zoo is closed` (Já que o Zoo está sempre fechado na segunda).', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  test('Testa se para os argumentos Tuesday e 09:00-AM é retornada a string `The zoo is open`.', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  test('Testa se para os argumentos Wednesday e 09:00-PM é retornada a string `The zoo is closed`.', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  test('Testa se para os argumentos Thu e 09:00-AM é lançado uma exceção com a mensagem: `The day must be valid. Example: Monday`.', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  test('Testa se para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: `The abbreviation must be \'AM\' or \'PM\'`.', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  test('Testa se para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: `The minutes should represent a number`.', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrow(new Error('The minutes should represent a number'));
  });
  test('Testa se para os argumentos Monday e 13:00-AM deve lançar uma exceção com a mensagem: `The hour must be between 0 and 12`.', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow(new Error('The hour must be between 0 and 12'));
  });
  test('Testa se para os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem: `The minutes must be between 0 and 59`.', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});
