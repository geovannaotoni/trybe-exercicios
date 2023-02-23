const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana','kg', 1.99, 20)).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 });
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana','kg', 1.99)).toHaveProperty('quantity', 0);    
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => {createItem()}).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {createItem()}).toThrow(new Error('O nome do item deve ser uma string'))
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => {createItem('banana','kg', -1.99, 20)}).toThrow(new Error('O preço do item deve ser maior que zero'))
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => {createItem('banana','kg', 0, 20)}).toThrow(new Error('O preço do item deve ser maior que zero'));
  });
});

/*
describe('a função createItem', () => {
  it.todo('cria um item válido');
  it.todo('utiliza zero como quantidade padrão');
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});
*/
