let greeting = (user) => console.log(`Welcome ${user}!`);
greeting(); // Welcome undefined!

greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
  console.log(`Welcome ${userDisplay}!`);
};
greeting(); // Welcome pessoa usuária!


greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting();
greeting('Ana');

// Exercício Para Fixar
const multiply = (number = 1, value = 1) => number * value;
console.log(multiply(8));