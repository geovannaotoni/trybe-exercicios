const { encode, decode } = require('./ex3');

describe('Testa se as funções Encode e Decode são funções', () => {
  test('Teste se encode é função', () => {
    expect(typeof encode).toBe('function');
  });
  test('Teste se decode é função', () => {
    expect(typeof decode).toBe('function');
  });
});

describe('Verifica as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5 na função Encode', () => {
  test('Função encode converte a vogal "a" no número 1', () => {
    expect(encode('ana')).toBe('1n1');
  });
  test('Função encode converte a vogal "e" no número 2', () => {
    expect(encode('esse')).toBe('2ss2');
  })
  test('Função encode converte a vogal "i" no número 3', () => {
    expect(encode('ixi')).toBe('3x3');
  })
  test('Função encode converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toBe('4v4');
  })
  test('Função encode converte a vogal "u" no número 5', () => {
    expect(encode('um')).toBe('5m');
  })
});

describe('Verifica se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u na função Decode', () => {
  test('Função Decode 1 retorna a', () => {
    expect(decode('1m1')).toBe('ama');
  });
  test('Função Decode 2 retorna e', () => {
    expect(decode('2n2')).toBe('ene');
  });
  test('Função Decode 3 retorna i', () => {
    expect(decode('r3r')).toBe('rir');
  });
  test('Função Decode 4 retorna o', () => {
    expect(decode('p4r')).toBe('por');
  });
  test('Função Decode 5 retorna u', () => {
    expect(decode('p5s')).toBe('pus');
  });
});

describe('Teste se as demais letras/números não são convertidos para cada caso', () => {
  test('Função Encode', () => {
    expect(encode('try')).toBe('try');
  });
  test('Função Decode', () => {
    expect(decode('678')).toBe('678');
  })
});

describe('Testa se a string que é retornada pelas funções tem o mesmo número de caracteres que a string', () => {
  test('Função encode', () => {
    expect(encode('trybe').length).toBe(5);
  })
  test('Função decode', () => {
    expect(encode('tryb2').length).toBe(5);
  })
})