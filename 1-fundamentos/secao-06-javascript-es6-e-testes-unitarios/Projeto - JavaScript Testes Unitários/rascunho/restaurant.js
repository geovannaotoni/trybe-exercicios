const createMenu = (object) => {
  const fetchMenu = {
    fetchMenu: () => object,
    consumption: [],
    order: (string) => {
      if (object.food[string] || object.drink[string]) {
        fetchMenu.consumption.push(string);
        return fetchMenu.consumption;
      }
      return 'Item indisponível';
    },
    pay: () => {
      const arrayConsumption = fetchMenu.consumption;
      let sum = 0;
      for (let index = 0; index < arrayConsumption.length; index += 1) {
        let order = arrayConsumption[index];
        if (object.food[order]) {
          sum += Number(object.food[order]);
        }
        if (object.drink[order]) {
          sum += Number(object.drink[order]);
        }
      }
      return sum * 1.1;
    },
  };
  return fetchMenu;
};

const example = {
  food: { coxinha: 3.90, sanduiche: 9.90 },
  drink: { agua: 3.90, cerveja: 6.90 },
}

const meuRestaurante = createMenu(example);
meuRestaurante.order('coxinha');
meuRestaurante.order('cerveja');
console.log(meuRestaurante.consumption);

console.log(meuRestaurante.pay());
console.log()