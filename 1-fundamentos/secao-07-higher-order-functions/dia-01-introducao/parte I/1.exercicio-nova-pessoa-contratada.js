const generateEmail = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  const object = {
    fullName: fullName,
    email: `${email}@trybe.com`
  }
  return object;
  // return { fullName, email: `${email}@trybe.com` };
};

console.log(generateEmail('Pedro Guerra'));

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(generateEmail));

// Gabarito
// const employeeGenerator = (fullName) => {
//   const email = fullName.toLowerCase().replace(' ', '_');
//   return { fullName, email: `${email}@trybe.com` };
// };

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   };
//   return employees;
// };

// console.log(newEmployees(employeeGenerator));