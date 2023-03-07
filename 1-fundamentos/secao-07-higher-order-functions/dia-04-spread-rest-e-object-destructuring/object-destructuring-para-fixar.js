// Objeto que terá os dados pessoais e os dados de cargo juntos.
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfos = {...user, ...jobInfos};
console.log(userInfos);

const printUserInfos = ({name, age, nationality, profession, squad, squadInitials}) => {
  return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
};
console.log(printUserInfos(userInfos));