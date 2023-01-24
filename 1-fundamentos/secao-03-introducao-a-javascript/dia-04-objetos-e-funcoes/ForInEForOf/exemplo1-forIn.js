//exemplo1
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

//exemplo2
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

//exemploVideo
let pizzas = {
  sabor: "Palmito",
  preco: 39.90,
  bordaCatupiry: true,
}

for (let key in pizzas) {
  console.log(key, pizzas[key]);
}

for (let value of pizzas) {
  console.log(value);
}