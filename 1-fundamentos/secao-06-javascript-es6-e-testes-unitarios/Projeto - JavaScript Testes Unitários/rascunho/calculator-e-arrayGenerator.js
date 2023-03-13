const calculator = (a, b) => {
  return {
    sum: a + b,
    mult: a * b,
    div: a / b,
    sub: a - b
  };
};
console.log(calculator(1,2));

const arrayGenerator = (string, object) => {
  if (string === 'keys') {
    return Object.keys(object);
  }
  if (string === 'values') {
    return Object.values(object);
  }
  if (string === 'entries') {
    return Object.entries(object);
  }
}
console.log(arrayGenerator('entries', calculator(1,2)))