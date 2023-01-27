const names = ['Ana', 'Jorge', 'Maria', 'Anderson', 'Roberta', 'Ângela', 'Michael'];

function getNamesWithLetter(receivedNames, letter) {
  const namesContainingLetter = [];

  for (let index = 0; index < receivedNames.length; index += 1) {
    if (receivedNames[index][0] === letter) {
      namesContainingLetter.push(receivedNames[index]);
    }
  }

  return namesContainingLetter;
}

function nameToUpperCase(name) {
  let nameUpperCase = '';
  for (let index2 = 0; index2 < name.length; index2 += 1) {
    const letra = name[index2].charCodeAt(0);
    if (letra >= 97 && letra <= 122) {
      nameUpperCase += String.fromCharCode(letra - 32);
    } else {
      nameUpperCase += name[index2];
    }
  }
  return nameUpperCase;
}

function nomesComLetraMaiuscula(letra) {
  const namesUpperCase = [];
  const namesContainingLetter = getNamesWithLetter(names, letra);

  for (let index = 0; index < namesContainingLetter.length; index += 1) {
    const nameUpperCase = nameToUpperCase(namesContainingLetter[index]);
    namesUpperCase.push(nameUpperCase);
  }

  return namesUpperCase;
}

console.log(nomesComLetraMaiuscula('A'));