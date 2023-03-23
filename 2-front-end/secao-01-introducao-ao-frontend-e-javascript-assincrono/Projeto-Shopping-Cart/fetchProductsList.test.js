describe('Testes para a função fetchProducts', () => {
  test('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });
  // https://jestjs.io/pt-BR/docs/expect#tohavebeencalled
  test('Verifica se fetch foi chamada ao executar a função fetchProductsList com o argumento `computador`', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test('Verifica se, ao chamar a função fetchProductsList com o argumento `computador` a função fetch utiliza o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  // https://jestjs.io/docs/asynchronous
  test('Verifica se o retorno da função fetchProductsList com o argumento `computador` é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    await expect(fetchProductsList('computador')).resolves.toEqual(computadorSearch);
  });
  test('Verifica se, ao chamar a função fetchProductsList sem argumento, retorna um erro', async () => {
    await expect(fetchProductsList()).rejects.toThrow(new Error('You must provide an url'));
  })
})
// OU
test('Verifica se o retorno da função fetchProductsList com o argumento `computador` é uma estrutura de dados igual ao objeto computadorSearch', async () => {
  const data = await fetchProductsList('computador');
  expect(data).toEqual(computadorSearch);
});
test('Verifica se, ao chamar a função fetchProductsList sem argumento, retorna um erro', async () => {
  const data = await fetchProductsList();
  expect(data).rejects.toThrow(new Error('You must provide an url')); // talves sem o rejects funcione
  expect(data).toEqual(new Error('You must provide an url'));
})