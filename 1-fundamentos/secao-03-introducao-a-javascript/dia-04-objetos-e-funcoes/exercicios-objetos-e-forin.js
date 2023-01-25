//Exercicio 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda, ' + info.personagem);
console.log('Bem vinda, ' + info['personagem']);

//ex 2
info['recorrente'] = 'Sim';
console.log(info);

//ex 3 - for in que mostre as chaves (propriedades) do objeto
for (let key in info) {
  console.log(key);
}

//ex 4 - for in que mostre os valores das chaves
for (let key in info) {
  console.log(info[key]);
}

//ex 5
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

for (let key in info) {
  if (key === 'recorrente' && info['recorrente'] === 'Sim' && info2['recorrente'] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}