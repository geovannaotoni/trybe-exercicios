const data = require('./database');

//super_saiyajin_1.js
// Implemente a função getCharactersBySpeciesIds para buscar as pessoas por meio dos ID's de suas espécies e retorne um array contendo todas as pessoas dessas espécies.
const getCharactersBySpeciesIds = (...speciesName) => {
  // extrair o id de cada nome de especie fornecido para a função
  const getIds = data.species
    .filter(({name}) => speciesName.includes(name))
    .map(({id}) => id); //[ 1, 7, 8 ]
  // recuperar os objetos das especies a partir do speciesId
  const getCharacters = data.characters
    .filter(({speciesId}) => getIds.some((id) => id === speciesId));
  return getCharacters;
};
// console.log(getCharactersBySpeciesIds('Saiyans', 'Namekuseijin', 'Terráqueo'));

// super_saiyajin_2.js
// Implemente a função getReport que irá disponibilizar um relatório com informações específicas de todos os personagens disponíveis.
const getReport = (speciesName) => {
  const fullReport = data.characters.reduce(((acc, char) => {
    acc[char.name] = {
      species: data.species.find(({id}) => id === char.speciesId).name,
      powers: char.powers,
    };
    return acc;
  }), {});
  if (!speciesName) {
    return fullReport;
  }
  // se for passado um parametro com o valor da chave species, deve-se retornar o speciesName (ou seja a chave do objeto principal)
  return Object.entries(fullReport)
    .filter((element) => speciesName === element[1].species)
    .map((element) => element[0]);
};

// console.log(getReport());
// {
//   'SON GOKU': {
//     species: 'Saiyans',
//     powers: ['Dragon Flash Fist', 'Kamehameha', 'Rapid Kick Rush'],
//   },
//   VEGETA: {
//     species: 'Saiyans',
//     powers: ['Crusher Knee Kick', 'Ki Blast Rush', 'Super Dash Kick'],
//   },
//   [...]
// }

// console.log(getReport('Androide'));
// o retorno será [ 'ANDROIDE 18', 'ANDROIDE 16' ];

// super_saiyajin_3.js
// Implemente a função getNamesBySpecies que faz o mapeamento por espécie de cada pessoa e realize filtros de sexo e nome em ordem alfabética.

// const fullReport = data.species.reduce(((acc, curr) => {
//   acc[curr.name] = data.characters
//     .filter(({speciesId}) => speciesId === curr.id)
//     .map((especie) => especie.name);
//   return acc;
// }), {});

const getNamesBySpecies = (options) => {
  const fullReport = data.species.reduce(((acc, curr) => {
    acc[curr.name] = data.characters
      .filter(({speciesId}) => speciesId === curr.id)
    if (options && options.gender) {
      acc[curr.name] = acc[curr.name]
        .filter((especie) => especie.gender === options.gender);
    }
    acc[curr.name] = acc[curr.name].map((especie) => especie.name);
    if (options && options.sorted === true) {
      acc[curr.name] = acc[curr.name].sort();
    }
    return acc;
  }), {});
  return fullReport;
};

// console.log(getNamesBySpecies());
// {
//    Saiyans: [ 'SON GOKU', 'VEGETA', 'TRUNKS', 'GOHAN' ],
//    Majin: [ 'MAJIN BOO' ],
//    Ciborgue: [ 'FREEZA' ],
//    [...]
// }
console.log(getNamesBySpecies({ gender: 'F' }));
console.log(getNamesBySpecies({ sorted: false }));
console.log(getNamesBySpecies({ gender: 'F', sorted: true }));

// Gabarito
const getNamesBySpecies2 = (options) => data.species.reduce((acc, { id, name }) => {
  acc[name] = data.characters.filter(({ speciesId }) => speciesId === id)
  if (options && options.gender) {
    acc[name] = acc[name].filter((char) => char.gender === options.gender);
  }
  acc[name] = acc[name].map((char) => char.name)
  if (options && options.sorted) {
    acc[name] = acc[name].sort();
  }
  return acc;
}, {});
console.log(getNamesBySpecies2({ gender: 'F' }));
console.log(getNamesBySpecies({ sorted: true }));
console.log(getNamesBySpecies({ gender: 'M', sorted: true }));