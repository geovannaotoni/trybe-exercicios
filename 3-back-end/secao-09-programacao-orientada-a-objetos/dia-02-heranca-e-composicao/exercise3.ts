interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}

const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);

// class Employee {
//   private _registration: string;
//   private _salary: number;
//   private _admissionDate: Date;

//   constructor(registration: string, salary: number, admissionDate: Date) {
//     this._registration = registration;
//     this._salary = salary;
//     this._admissionDate = admissionDate;
//   }

//   get registration() { return this._registration; }
//   set registration(registration: number) { this._registration = registration; }

//   get salary() { return this._salary; }
//   set salary(salary: number) { this._salary = salary; }

//   get admissionDate() { return this._admissionDate; }
//   set admissionDate(admissionDate: Date) { this._admissionDate = admissionDate; }

//   generateRegistration(): string {
//     const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
//     return `EMP${randomStr}`;
//   }
// }