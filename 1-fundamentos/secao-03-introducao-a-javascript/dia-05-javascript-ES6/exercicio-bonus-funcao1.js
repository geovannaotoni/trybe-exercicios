// Exercicio 1
const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ')

  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x'){
      fraseArray[index] = nome;
    } 
  }
  return fraseArray.join(' ');
}

console.log(substituaX('Bebeto'))
// Tryber Bebeto aqui!

// Exercicio 2
const minhasSkills = (func) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  let resultado = `${(func)}\nMinhas três principais habilidades são:\n`;
  for (let index = 0; index < skills.length; index += 1) {
    resultado += `-${skills[index]}\n`;
  }
  return resultado;
}

console.log(minhasSkills(substituaX('Bebeto')));