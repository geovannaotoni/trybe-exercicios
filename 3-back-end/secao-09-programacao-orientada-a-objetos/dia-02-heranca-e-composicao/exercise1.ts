class Pessoa {
  protected MINIMUM_NAME_LENGTH = 3;

  protected MAXIMUM_AGE = 120;

  constructor(
    private _name: string,
    private _birthDate: Date
  ) {
    this.validatePerson();
  }
  
  get name() { return this._name; }
  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  get birthDate() { return this._birthDate; }
  set birthDate(birthDate: Date) {
    if (birthDate > new Date()) throw new Error('Data de nascimento inválida');

    this._birthDate = birthDate;
  }

  private validateName(name: string): void {
    if (name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve conter no mínimo ${this.MINIMUM_NAME_LENGTH} caracteres.`);
    }
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Pessoa.getAge(date) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`);
    }
  }

  private validatePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }
}

const maria = new Pessoa('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Pessoa('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);

export default Pessoa;