let nota = 100;

if (nota >= 90 && nota <=100) {
  console.log('A')
} else if (nota >= 80 && nota < 90) {
  console.log('B')
} else if (nota >= 70 && nota < 80) {
  console.log('C')
} else if (nota >= 60 && nota < 70) {
  console.log('D')
} else if (nota >= 50 && nota < 60) {
  console.log('E')
} else if (nota < 50 && nota >=0) {
  console.log('F')
} else {
  console.log('Nota inválida!')
}

//Resolução
const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}