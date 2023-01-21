const a = 2;
const b = 3;
const c = 5;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0 ) {
  console.log('true');
} else {
  console.log('false');
}

// Resolução

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);