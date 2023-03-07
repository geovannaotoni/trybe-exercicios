const personagens = require('./data');

// Encontre o personagem que utiliza a habilidade Teleportar
// Saida Esperada: Mago
const findBySkill = (skill) => {
  return personagens.find((personagem) => personagem.habilidades.some((habilidade) => habilidade === skill)).classe;
};
console.log(findBySkill('Teleportar'));

// Verifique se todas as classes tem 3 habilidades
//Saida Esperada: true
const verifySkills = () => {
  return personagens.every((personagem) => personagem.habilidades.length === 3);
}
console.log(verifySkills());

// Verifique se pelo menos uma classe tem o hp maior que 150 e retorne um valor booleano.
// Saida Esperada: false
const verifyHp = () => {
  return personagens.some((personagem) => personagem.status.hp > 150);
};
console.log(verifyHp());

// Crie uma função que liste todas as habilidades do Arqueiro
// Saida Esperada: ['Desviar', 'Precisão', 'Tiro Flamejante']
const listSkills = (classe) => {
  return personagens.find((personagem) => personagem.classe === classe).habilidades;
}
console.log(listSkills('Arqueiro'));


// Crie uma função que ordene as classes pelo maior ataque e imprima o nome da classe e o ataque:
// Esperado: ["O ataque do mago é 40", "O ataque do Arqueiro é 20", "O ataque do Guerreiro é 10"]
const printInfos = () => {
  return personagens
    .sort((a, b) => b.status.atk - a.status.atk)
    .map((personagem) => `O ataque do ${personagem.classe} é ${personagem.status.atk}`)
}
console.log(printInfos());

// Faça uma função que retorne a somatoria de todos os ataques
// Esperado: "O ataque total é 70"
const sumAtk = () => {
  const sum = personagens.reduce(((acc, curr) => acc += curr.status.atk), 0);
  return `O ataque total é ${sum}`;
}
console.log(sumAtk());


//Faça uma função que retorne um novo array com todas as habilidades ordenadas
// saida esperada: 
// [
//   'Ataque Rapido',
//   'Bloquear',
//   'Bola de fogo',
//   'Desviar',
//   'Nevasca',
//   'Precisão',
//   'Pular',
//   'Teleportar',
//   'Tiro flamejante'
// ]
const skillsSorted = () => {
  const arraySkills = [];
  personagens.forEach((personagem) => {
    personagem.habilidades.forEach((skill) => {
      arraySkills.push(skill);
    })
  })
  return arraySkills.sort();
};
console.log(skillsSorted());