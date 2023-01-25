let megaSenaNumeros = [];
for (let index = 0; index < 6; index += 1) {
  megaSenaNumeros.push(Math.floor(Math.random() * 60) + 1);
};
console.log(megaSenaNumeros);

//https://www.w3schools.com/js/js_random.asp

let meusNumeros = [3, 12, 18, 33, 48, 54]
let contador = 0;

for (let indexMega = 0; indexMega < megaSenaNumeros.length; indexMega += 1) {
  for (let indexMeusNumeros = 0; indexMeusNumeros < meusNumeros.length; indexMeusNumeros += 1) {
    //console.log(megaSenaNumeros[indexMega], meusNumeros[indexMeusNumeros])
    if (megaSenaNumeros[indexMega] === meusNumeros[indexMeusNumeros]) {
      contador += 1;
    }
  }
}

console.log('Meus Números: ' + meusNumeros);
console.log('Números sorteados: ' + megaSenaNumeros);
console.log('Acertos: ' + contador);