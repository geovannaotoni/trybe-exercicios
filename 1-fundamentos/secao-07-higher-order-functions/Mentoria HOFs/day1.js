const data = require('./database');
// 1-countCharactersAndSpecies.js
// Crie uma função que mostre a quantidade de personagens
const countCharacters = () => data.characters.length;
console.log(countCharacters());

// Crie uma função que mostre a quantidade de espécies
const countSpecies = () => data.species.length;
console.log(countSpecies());

// 2-getCharacterById.js
// Crie uma função que busca o personagem de acordo com seu id.
const getCharacterById = (id) => data.characters.find((character) => character.id === id);
console.log(getCharacterById(8));

//3-everyTerraqueo.js
// a) Verifica se todos os personagens são Terráqueos
// b) Verifica se algum personagem é Terráqueo
const everyTerraqueo = () => {
  const speciesTerraqueo = data.species.find((especie) => especie.name === 'Terráqueo');
  const terraqueoId = speciesTerraqueo.id;

  return data.characters.every((character) => character.speciesId === terraqueoId);
  // return data.characters.some((character) => character.speciesId === terraqueoId);
};
console.log(everyTerraqueo());