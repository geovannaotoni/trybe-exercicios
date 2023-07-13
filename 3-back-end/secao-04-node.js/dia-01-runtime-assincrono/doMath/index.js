const readline = require('readline-sync');

function handleNumbers(a, b, c) {
  return new Promise((resolve, reject) => {

    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;
    if (result < 50) {
      reject(new Error('Valor muito baixo'));
    }
    resolve(result);
  });
}

async function main() {
  const n1 = readline.questionInt('Enter the first number: ');
  const n2 = readline.questionInt('Enter the second number: ');
  const n3 = readline.questionInt('Enter the third number: ');

  try {
    const result = await handleNumbers(n1, n2, n3);
    console.log(result);
  } catch(error) {
    console.log(error.message);
  }
}

main();