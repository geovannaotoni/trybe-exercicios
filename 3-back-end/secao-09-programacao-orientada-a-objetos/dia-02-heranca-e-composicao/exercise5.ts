import Pessoa from "./exercise1";
import Subject from "./exercise4";

class Teacher extends Pessoa {
  private _subject: Subject;
  private _salary: number;
  private _registration = String();
  private _admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    subject: Subject,
    salary: number,
  ) {
    super(name, birthDate);
    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `PRF${randomStr}`;
  }

  get subject() { return this._subject; }
  set subject(value: Subject) { this._subject = value; }

  get salary() { return this._salary; }
  set salary(value: number) { 
    if (value < 0) throw new Error('O salário não pode ser negativo.')
    this._salary = value; 
  }

  get registration() { return this._registration; }
  set registration(value: string) { 
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.')
    this._registration = value; 
  }

  get admissionDate() { return this._admissionDate; }
  set admissionDate(value: Date) { 
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');
    this._admissionDate = value; 
  }
}

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), math, 2000);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), history, 2000);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), philosophy, 2000);

console.log(marta);
console.log(joao);
console.log(lucio);