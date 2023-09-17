interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(
    public myNumber: number,
  ) {}

  myFunc(myParam: number) {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

const myClass = new MyClass(1);
console.log(myClass.myNumber);
console.log(myClass.myFunc(2));