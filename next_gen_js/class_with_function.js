class Animal {
    constructor() {
        this.name = "min";
        this.age = 1;
    }

    PrintAge() {
        console.log(this.age);
    }
}

class Human extends Animal {
    constructor() {
      super();
      this.name = "max";
      this.age = 2;
    }
    
    printNewName() {
      console.log(this.name);
      console.log(this.age);
    }
  }
  
  const human = new Human();
  human.printNewName();
  human.PrintAge();