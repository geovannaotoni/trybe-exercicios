const data = require('./database');

// 5-sortCharactersByName.js
// Crie uma função que ordene os personagens através do nome
const sortCharactersByName = () => {
  return data.characters.sort((charA, charB) => {
    // if (charA.name > charB.name) {
    //   return 1;
    // }
    // if (charA.name < charB.name) {
    //   return -1;
    // }
    // return 0;
    return charA.name.localeCompare(charB.name);
  });
};
console.log(sortCharactersByName());

// 6-mapChararacters.js
// Crie uma função que irá mapear os personagens, substituindo a propriedade speciesId contendo o id da espécie pela propriedade species contendo o nome da espécie. Exemplo abaixo:
/*
  {
    "id": 1,
    "name": "SON GOKU",
    "gender": "M",
    "species": "Saiyans",
    "powers": ['Dragon Flash Fist', 'Kamehameha', 'Rapid Kick Rush']
  }
*/

const mapCharacters = () => {
  return data.characters.map((character) => {
    // descobrir a espécie de cada personagem
    const species = data.species.find((especie) => especie.id === character.speciesId);
  
    // retornando o objeto com a estrutura esperada
    return {
      id: character.id,
      name: character.name,
      gender: character.gender,
      species: species.name,
      powers: character.powers,
    };
  });
};

console.log(mapCharacters());