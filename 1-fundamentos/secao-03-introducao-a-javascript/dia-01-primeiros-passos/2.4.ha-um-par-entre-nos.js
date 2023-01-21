let salarioBruto = 3000;

let taxaINSS = 0;
let taxaIR = 0;

if (salarioBruto <= 1556.94) {
  taxaINSS = salarioBruto*0.08;
} else if (salarioBruto <= 2594.92) {
  taxaINSS = salarioBruto*0.09;
} else if (salarioBruto <= 5189.82) {
  taxaINSS = salarioBruto*0.11;
} else if (salarioBruto > 5189.82) {
  taxaINSS = 570.88;
}

let salarioBase = salarioBruto - taxaINSS;

if (salarioBase <= 1903.98) {
  taxaIR = 0;
} else if (salarioBase <= 2826.65) {
  taxaIR = salarioBase*0.075 - 142.8;
} else if (salarioBase <= 3751.05) {
  taxaIR = salarioBase*0.15 - 354.8;
} else if (salarioBase <= 4664.68) {
  taxaIR = salarioBase*0.225 - 636.13;
} else if (salarioBruto > 4664.68) {
  taxaIR = salarioBase*0.275 -869.36;
}

console.log('Dado um salário bruto de R$' + salarioBruto + ', o salário líquido é de R$' + (salarioBruto - taxaINSS - taxaIR));