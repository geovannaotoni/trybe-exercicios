const data = require('../data/zoo_data');

const getFullReport = () => {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  return locations.reduce(((acc, curr) => {
    acc[curr] = data.species
      .filter(({ location }) => location === curr)
      .map(({ name }) => name);
    return acc;
  }), {});
};

const getFullReportWithNames = () => {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  return locations.reduce((acc, curr) => {
    acc[curr] = data.species
      .filter(({ location }) => location === curr)
      .map(({ name }) => ({ [name]: data.species
        .find((especie) => especie.name === name).residents.map((animal) => animal.name) }));
    return acc;
  }, {});
};

const getFullReportWithNamesSortedAndSex = (sorted, sex) => {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  return locations.reduce((acc, curr) => {
    if (sex) {
      acc[curr] = data.species
        .filter(({ location }) => location === curr)
        .map((animal) => ({ [animal.name]: animal.residents
          .filter((element) => element.sex === sex).map(({ name }) => name) }));
    }
    if (sorted) {
      acc[curr] = data.species
        .filter(({ location }) => location === curr)
        .map((animal) => ({ [animal.name]: animal.residents
          .map(({ name }) => name) }).sort());
    }
    return acc;
  }, {});
};
console.log(getFullReportWithNamesSortedAndSex(true, true));

const getAnimalMap = (options) => {
  if (!options) return getFullReport();
  const { includeNames, sorted, sex } = options;
  if (!includeNames) return getFullReport();
  if (includeNames) return getFullReportWithNames();
  return getFullReportWithNamesSortedAndSex(sorted, sex);
};
// console.log(getAnimalMap({ includeNames: true }));
console.log(getAnimalMap({ sex: 'female' }));
console.log(getAnimalMap({ includeNames: true, sorted: true }));