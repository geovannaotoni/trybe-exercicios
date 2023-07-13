const readline = require('readline-sync');

function handleFibonacci(quantity) {
  let a = 1;
  let b = 1;
  let c = 2;
  for (let i = 0; i < quantity; i += 1) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
}

function main() {
  const n = readline.questionInt('Enter \'n\' value: ');

  if (n <= 0) {
    console.log('Enter a number greater then \'0\'!');
    return;
  }

  console.log(`n: ${n}`);

  handleFibonacci(n);
}

main();

