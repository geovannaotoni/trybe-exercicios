class Superclass {
  public isSuper: boolean = true;

  // public isSuper: boolean;
  // constructor() {
  //   this.isSuper = true;
  // }

  protected sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }

  public sayHello2() {
    this.sayHello();
  }
}

const myFunc = (obj: Superclass) => {
  // obj.sayHello();
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

const myFunc2 = (obj: Subclass) => {
  obj.sayHello2();
}

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc2(sub);
