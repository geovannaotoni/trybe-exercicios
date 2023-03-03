// Exercicio 1
let list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
]
function getAverageAge(list) {
  // thank you for checking out the Coding Meetup kata :)
  // modo 1
  const total = list.reduce((acc, curr) => acc + curr.age, 0);
  return Math.round(total/list.length);

  // modo 2
  // let sum = 0;
  // list.forEach(element => sum += element.age);
  // return sum/list.length;
}

console.log(getAverageAge(list1))

// Exercicio 2 - Your task is to return either: true if all developers in the list code in the same language; or false otherwise.
list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
]
function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  const language = list[0].language;
  return list.every((element) => element.language === language);
}
console.log(isSameLanguage(list1));

// Exercicio 3 - 
// Método tradicional
list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
function askForMissingDetails(list) {
  // thank you for checking out the Coding Meetup kata :)
  const keys = Object.keys(list[0]); // [ 'firstName', 'lastName', 'country', 'continent', 'age', 'language' ]
  const pessoasNull = [];
  for (pessoa of list) {
    for (key of keys) {
      if (pessoa[key] === null) {
        pessoasNull.push(pessoa);
      }
    }
  }
  return pessoasNull;
}
console.log(askForMissingDetails(list1));

// Método com forEach e Filter
list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
function askForMissingDetails(list) {
  const keys = Object.keys(list[0]);
  let objectsWithNull = [];
  keys.forEach((key) => objectsWithNull.push(list.filter((element) => element[key] === null)));
  return objectsWithNull;
  // [
  //   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  //   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  // ]
  // const result = objectsWithNull.map((element) => ({
  //   ...element,
  //   question:  `Hi, could you please provide your ${keys.find((key) => element[key] === null)} .`
  // }));
  // return result;
}
console.log(askForMissingDetails(list1));

// outra solução 
list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
function askForMissingDetails(list) {
  const keys = Object.keys(list[0]);
  const objectsWithNull = list.filter((element) => {
    return keys.some((key) => element[key] === null);
  });
  const result = objectsWithNull.map((element) => ({
    ...element,
    question: `Hi, could you please provide your ${keys.find((key) => element[key] === null)}.`
  }));
  return result;
}
console.log(askForMissingDetails(list1));

// Outra solução
const askForMissingDetails = list => 
  list.filter(dev => 
  Object.keys(dev).some(key =>
  dev[key] === null && (dev.question = `Hi, could you please provide your ${key}.`)));