//Exercicio 1 - Descubra a idade mínima
//Dividindo o problema em etapas
//1: Descobrir a idade de cada pessoa
//2: Criar uma variável para armazenar a idade de cada uma
//3: Verificar quem é a mais velha
//3.1: Se a Marina for mais velha - aparecer a frase com o nome dela
//3.2: Se a Silvia for mais velha - aparecer a frase com o nome dela
//3.3: Se a Iza for mais velha - aparecer a frase com o nome dela

let marinaAge = 27;
let silviaAge = 18;
let izaAge = 63;

if (marinaAge < silviaAge && marinaAge < izaAge) {
  console.log('Marina é a pessoa mais jovem e tem ' + marinaAge + ' anos de idade');
} else if (silviaAge < marinaAge && silviaAge < izaAge) {
  console.log('Silvia é a pessoa mais jovem e tem ' + silviaAge + ' anos de idade');
} else if (izaAge < marinaAge && izaAge < silviaAge) {
  console.log('Iza é a pessoa mais jovem e tem ' + izaAge + ' anos de idade');
}

//Ex 2: Taxa metabólica basal
//1: declarar as variaveis necessarias: age, sex, weight, height e taxa
//2: verificar se age, weight e height sao maiores que 0
//3: verificar se é homem ou mulher
//4: se homem, calcular a taxa
//5: se mulher, calcular a taxa

let age = 24;
let sex = 'F';
let weight = 53;
let height = 167;
let taxa = 0;

if (age > 0 && weight > 0 && height > 0) {
  if (sex === 'F') {
    taxa = (height*6.25) + (weight*9.99) - (age*4.92) + 161;
  } else if (sex === 'M') {
    taxa = (height*6.25) + (weight*9.99) - (age*4.92) + 5;
  }
}

console.log('A taxa metabólica basal é: ' + taxa + ' Kcal');

//Exercicio 3: Lanchonete da Trybe
//1:criar variavel que vai receber o numero da opcao escolhida
//2: criar estrutura que vai avaliar qual caso a opcao se encaixa e trazer a resposta

let numero = 7;

switch (numero) {
  case 1:
    console.log('1 - Trybe Lanche Feliz');
    break;
  case 2:
    console.log('2 - McTrybe');
    break;
  case 3:
    console.log('3 - TrybeWooper');
    break;
  case 4:
    console.log('4 - X-Trybe');
    break;
  case 5:
    console.log('5 - Triplo Trybe com JS');
    break;
  default:
    console.log('Ainda não possuímos esta opção :(')
    break;   
}