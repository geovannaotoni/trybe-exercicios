class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get enrollment(): string { return this._enrollment; }
  get name(): string { return this._name; }
  get examsGrades(): number[] { return this._examsGrades; }
  get assignmentsGrades(): number[] { return this._assignmentsGrades; }

  set enrollment(newValue: string) { this._enrollment = newValue; }
  set name(newValue: string) { 
    if (newValue.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
    this._name = newValue; 
  }
  set examsGrades(newValue: number[]) { 
    if (newValue.length > 4) {
      throw new Error('Exams must have at most 4 grades');
    }
    this._examsGrades = newValue; 
  }
  set assignmentsGrades(newValue: number[]) {
    if (newValue.length > 2) {
      throw new Error('Assignments must have at most 2 grades');
    }
    this._assignmentsGrades = newValue; 
  }

  sumGrades(): number {
    const examsSum = this._examsGrades.reduce((acc, curr) => acc + curr, 0);
    const assignmentsSum = this._assignmentsGrades.reduce((acc, curr) => acc + curr, 0);
    return examsSum + assignmentsSum;
  }

  averageGrades(): number {
    const average = this.sumGrades() / (this._examsGrades.length + this._assignmentsGrades.length);
    return Math.round(average);
  }
}

const personOne = new Student('202001011', 'Maria da Silva');
console.log(personOne);

personOne.examsGrades = [25, 20, 23, 23];
personOne.assignmentsGrades = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.averageGrades());