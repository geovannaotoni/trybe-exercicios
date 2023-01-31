// 9 - Crie uma função que Codifique e Decodifique
const encode = (string) => {
  const codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let newString = '';
  for (let letter of string) {
    if (codigo[letter]) {
      newString += codigo[letter];
    } else {
      newString += letter;
    }
  }
  return newString;
};

console.log(encode('hi there!'));
console.log(encode('How are you today?'));

const decode = (string) => {
  const codigo = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  let newString = '';
  for (let letter of string) {
    if (codigo[letter]) {
      newString += codigo[letter];
    } else {
      newString += letter;
    }
  }
  return newString;
};
console.log(decode('h3 th2r2!'))

// utilizando a função replaceAll

const encode2 = (string) => {
  let newString = string;
  const codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  for (let key in codigo) {
    newString = newString.replaceAll(key,codigo[key]);
  }
  return newString;
}

console.log(encode2('hi there!'));