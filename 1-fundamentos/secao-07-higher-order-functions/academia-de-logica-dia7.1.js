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


// Exercicios extras
list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
// { C: 2, JavaScript: 1, Ruby: 1 }
function countLanguages(list) {
  const object = {}
  list.forEach((element) => {
    if (!object[element.language]) {
      object[element.language] = 1;
    } else {
      object[element.language] += 1;
    }
  })
  return object;
}
console.log(countLanguages(list1));

// outra solução
// function countLanguages(list) {
//   let count = {};
//   list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
//   return count;
// }

// mais uma
function countLanguages2(list) {
  return list.reduce(function(acc, curr) {
    if(acc[curr.language])
      acc[curr.language] += 1;
    else
      acc[curr.language] = 1;
    return acc;
  }, {});
}
console.log(countLanguages2(list1));

// Sort by programming language
list1 = [  
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];
function sortByLanguage(list) {
  return list.sort((a, b) => {
    if (a.language > b.language) {
      return 1;
    } 
    if (a.language < b.language) {
      return -1;
    }
    if (a.language === b.language) {
      if (a.firstName > b.firstName) {
        return 1;
      }
      return -1;
    }
  });
  // return list.sort((a, b) => a.language === b.language ? a.firstName.localeCompare(b.firstName) : a.language.localeCompare(b.language));
}
console.log(sortByLanguage(list1));

// Is the meetup age-diverse?
list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
function isAgeDiverse(list) {
  const ages = list.map((element) => Math.floor(element.age/10)*10);
  const verify1 = [10,20,30,40,50,60,70,80,90].every((num) => ages.some((element) => element === num));
  const verify2 = list.some((element) => element.age > 100);
  return verify1 && verify2;
}
console.log(isAgeDiverse(list1));

// 
list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
function isLanguageDiverse(list) {
  const objLanguages = {};
  list.forEach((element) => {
    objLanguages[element.language] = objLanguages[element.language] ? objLanguages[element.language] + 1 : 1;
  })
  const arrayNum = Object.values(objLanguages);
  const max = arrayNum.reduce(((acc, curr) => acc > curr ? acc : curr));
  const min = arrayNum.reduce(((acc, curr) => acc < curr ? acc : curr));
  return min * 2 >= max ? true : false;  
}
console.log(isLanguageDiverse(list1));