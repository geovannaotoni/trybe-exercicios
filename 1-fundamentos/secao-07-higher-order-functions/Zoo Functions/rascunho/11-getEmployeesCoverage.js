const data = require('./data');
const getEmployeesCoverage = (args) => {
  const fullReport = data.employees.map((employee) => {
    const object = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: data.species
        .filter(({id}) => employee.responsibleFor.some((animalId) => animalId === id))
        .map(({name}) => name),
      locations: data.species
        .filter(({id}) => employee.responsibleFor
        .some((animalId) => animalId === id))
        .map(({location}) => location),
    };
    return object;
  });
  if (!args) {
    return fullReport; 
  }
  if (args && fullReport.some(({fullName}) => fullName.includes(args.name))) {
    return fullReport.find(({fullName}) => fullName.includes(args.name));
  }
  if (args && fullReport.some(({id}) => id === args.id)) {
    return fullReport.find(({id}) => id === args.id);
  }
  throw new Error('Informações inválidas')
};
console.log(getEmployeesCoverage());
console.log(getEmployeesCoverage({name: 'Sharonda'}));
console.log(getEmployeesCoverage({name: 'Spry'}));
console.log(getEmployeesCoverage({id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad'}));
console.log(getEmployeesCoverage({name: 'teste'}));