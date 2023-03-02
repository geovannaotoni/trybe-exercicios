// Exemplo 1
// What you have
let officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
// [20, 24, 56, 88]

// with .map
const map = officers.map((element) => element.id);
console.log(map);

// with .forEach
const forEach = [];
officers.forEach((element) => forEach.push(element.id));
console.log(forEach);

// Exemplo 2
let pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];
// We need to know the total years of experience of all of them
const totalYears = pilots.reduce(((acc, curr) => acc + curr.years), 0);
console.log(totalYears);

// find which pilot is the most experienced one
const mostExp = pilots.reduce((acc, curr) => acc.years > curr.years ? acc : curr);
console.log(mostExp);
// Gabarito
// const mostExpPilot = pilots.reduce((oldest, pilot) => {
//   return (oldest.years || 0) > pilot.years ? oldest : pilot;
// }, {});

// Exemplo3
let pilots2 = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];
// we want two arrays now: one for rebel pilots, the other one for imperials
const rebel = pilots2.filter((element) => element.faction === 'Rebels');
console.log(rebel);
const imperials = pilots2.filter((element) => element.faction === 'Empire');
console.log(imperials);

// Exemplo 4
let personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];
// get the total score of force users only
const forceUser = personnel.filter((element) => element.isForceUser === true);
console.log(forceUser);
const totalScore = forceUser.map((element) => element.pilotingScore + element.shootingScore);
console.log(totalScore); // [ 154, 110, 156 ]
const sumTotalScore = totalScore.reduce((acc, curr) => acc + curr);
console.log(sumTotalScore);
