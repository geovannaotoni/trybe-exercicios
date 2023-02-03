if (true) {
  // inicio do escopo do if
  var userAge = '20';
  // let userAge = '20';
  // const userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas

let userName2 = 'Isabella';
//let userName2 = 'Lucas';
console.log(userName); // Resultado: erro

const myObject = {
  nome: 'Geovanna',
  sobrenome: 'Karina'
}
myObject['sobrenome'] = 'Otoni'
console.log(myObject);


const myArray = [20,30,40];
myArray.push(5);
myArray[1] = 10;
console.log(myArray);