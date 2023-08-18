// ex 1
const firstName: string = "Joel";
const age: number = 38;
const brazilian: boolean = false;

function greet(name: string): void {
  console.log(`Olá, ${name.toUpperCase()}!`);
}

function getFavoriteNumber(): number {
  return 26;
}

// ex 2
function printPersonalInfo(data: { name: string; birthYear: number }) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}
printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 });

// ex 3
const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

// ex 4
function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202");

function printId2(id: number | string) {
  if (typeof id === "string") {
    return console.log(id.toUpperCase());
  }
  return console.log(id);
}

printId(101);

// ex 5
type PersonalInfo = {
  name: string;
  birthYear: number;
};
function printPersonalInfo2(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}

printPersonalInfo2({ name: 'Rogerinho', birthYear: 1978});

type ID = number | string;

// ex 6
// desnecessário fazer tipagem em variáveis e objetos simples
const person = {
  fistName: 'Frodo',
  lastName: 'Baggins',
  age: 52,
}

console.log(typeof person.fistName); // "string"

// necessário fazer tipagem em funções
function getFullName(firstName: string, lastName: string): string {
  return firstName + ' ' + lastName;
}

console.log(getFullName(person.fistName, person.lastName)); // "Frodo Baggings"