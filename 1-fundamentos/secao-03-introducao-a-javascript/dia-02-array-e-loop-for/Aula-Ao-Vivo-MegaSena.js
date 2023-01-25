//1. Jogada 🙅‍♀️
let primeiraJogada = [12,34,6,24,28,50];

//2.Criando o sorteio 🤯

// criação de números aleatórios 
let primeiroNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let segundoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let terceiroNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let quartoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let quintoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let sextoNumeroSorteado = Math.floor(Math.random() * 60) + 1;

let megaSenaNumeros = [primeiroNumeroSorteado,segundoNumeroSorteado, terceiroNumeroSorteado, quartoNumeroSorteado, quintoNumeroSorteado, sextoNumeroSorteado ]
// console.log(megaSenaNumeros);

//3. Percorrendo os números do array da pessoa e da megaSena 🚝

// console.log(primeiraJogada[0]);
// console.log(primeiraJogada[1]);
// console.log(primeiraJogada[2]);

// for(// onde ele inicia ; onde ele para; de quanto em quanto){
   //bloco de código
// }
//lição de casa escrever com suas palavras o que esse for está fazendo
// for(let index =0; index < primeiraJogada.length; index += 1){
//   console.log('Numero da minha jogada: ' + primeiraJogada[index]);
// }

// for(let indexMegaSena = 0; indexMegaSena < megaSenaNumeros.length; indexMegaSena +=1){
//   console.log('Numero da jogada: ' + megaSenaNumeros[indexMegaSena]);

// }

//4. Comparando 💸🤑💸🤑💸🤑

//percorrer o array da mega sena
//percorrer o array da jogada
// fazer a comparação de um numero com o outro
// se forem iguais soma mais um
// se nao, segue para proxima jogada

let contagemNumerosSorteados = 0;
//primeiro for passa pelo os numeros da mega sena
for(let indexMegaSena = 0; indexMegaSena < megaSenaNumeros.length; indexMegaSena += 1){
  // segundo for passa pelos os numeros da nossa jogada
  for(let index =0; index < primeiraJogada.length; index += 1){
    // aqui esta acontecendo a verificacao, um numero é igual ao outro ?
    if(megaSenaNumeros[indexMegaSena] === primeiraJogada[index]){
      console.log(' Deu certo');
      // se sim, soma +1
      contagemNumerosSorteados = contagemNumerosSorteados +1;
    }
  }
}

//5- Mostrar os resultados 
console.log('Números sorteados da mega Sena ' + megaSenaNumeros)
console.log('=---------------------------');
console.log('Jogada 1');
console.log('Nossas tentativas:' + primeiraJogada);
console.log('Quantos acertos: ' + contagemNumerosSorteados);
