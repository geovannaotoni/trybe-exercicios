// 8 - Crie uma função fizzBuzz
// const fizzBuzz = (array) => {
//   let arrayStrings = [];
//   for (let value of array) {
//     if ((value % 3 === 0) && (value % 5 !== 0)) {
//       arrayStrings.push('fizz');
//     }
//     if ((value % 3 !== 0) && (value % 5 === 0)) {
//       arrayStrings.push('buzz');
//     }
//     if ((value % 3 === 0) && (value % 5 === 0)) {
//       arrayStrings.push('fizzBuzz');
//     }
//     if ((value % 3 !== 0) && (value % 5 !== 0)) {
//       arrayStrings.push('bug!');
//     }
//   }
//   return arrayStrings;
// };

// const fizzBuzz = (array) => {
//   let arrayStrings = [];
//   for (let value of array) {
//     if ((value % 3 === 0) && (value % 5 !== 0))  {
//       arrayStrings.push('fizz');
//     } else if ((value % 3 !== 0) && (value % 5 === 0)) {
//       arrayStrings.push('buzz');
//     } else if ((value % 3 === 0) && (value % 5 === 0)) {
//       arrayStrings.push('fizzBuzz');
//     } else {
//       arrayStrings.push('bug!');
//     }
//   }
//   return arrayStrings;
// };


const getFizzBuzz = (number) => {
  let string = 'bug!';
  if (number % 3 === 0) {
    string = 'fizz';
  }
  if (number % 5 === 0) {
    string = 'buzz';
  }
  if (number % 15 === 0) {
    string = 'fizzBuzz';
  }
  return string;
}

const fizzBuzz = (arrayNumber) => {
  let arrayString = [];
  
  for (let value of arrayNumber) {
    let string = getFizzBuzz(value);
    arrayString.push(string);
  }
  return arrayString;
};

console.log(getFizzBuzz(2))
console.log(getFizzBuzz(45))
console.log(getFizzBuzz(9))
console.log(getFizzBuzz(25))

console.log(fizzBuzz([2,15,7,9,45])); //['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']
console.log(fizzBuzz([7,9])); //['bug!', 'fizz']
console.log(fizzBuzz([9,25])); //['fizz', 'buzz']

