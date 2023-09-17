// Copiar
// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres

class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('O nome da disciplina deve possuir no mínimo 3 caracteres.');
    this._name = value;
  }
}

const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);

export default Subject;