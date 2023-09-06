'use strict';
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
  //   this.calcAge = function () {
  //     const now = new Date().getFullYear();
  //     console.log(now - this.birthYear);
  //   };
};

Person.prototype.calcAge = function () {
  const now = new Date().getFullYear();
  console.log(now - this.birthYear);
};

// Person.prototype.nationality = 'ID';

// static method
Person.sayHai = function () {
  console.log(`Hai There 👋🏻`);
};

const aman = new Person('aman', 2000);
const ujang = new Person('ujang', 2001);
// console.log(aman.__proto__);
// console.log(Person.prototype.isPrototypeOf(aman));
// console.log(aman.hasOwnProperty('name'));
// ujang.calcAge();
// console.log(ujang.__proto__.__proto__);

// --- prototypal inheritance on built-in objects ---
const arr = [1, 2, 3, 4, 41, 23, 9];
// console.log(arr);
// console.log(Array.prototype === arr.__proto__);
// --- end of prototypal inheritance on built-in objects ---

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (carName, curSpeed) {
//   this.carName = carName;
//   this.curSpeed = curSpeed;
// };
// Car.prototype.accelerate = function () {
//   this.curSpeed += 10;
//   console.log(`'${this.carName}' going at ${this.curSpeed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.curSpeed -= 5;
//   console.log(`'${this.carName}' going at ${this.curSpeed} km/h`);
// };

// const bmw = new Car('BMW', 90);
// const mercedes = new Car('Mercedes', 70);

// console.log(bmw.__proto__);
// bmw.accelerate();
// mercedes.brake();

// --- es6 classes ---
// class expression
// const PersonCL = class{}

// class declaration
// class PersonCL {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   }

//   get gret() {
//     return 'hello ' + this.firstName;
//   }
//   get age() {
//     return `${this.firstName} age is ${
//       new Date().getFullYear() - this.birthYear
//     }`;
//   }
//   set changeAge(age) {
//     return (this.birthYear -= age);
//   }
// }

// const jihyo = new PersonCL('jihyo', 1999);
// console.log(jihyo.birthYear);
// jihyo.changeAge = 5;
// console.log(jihyo.birthYear);
// console.log(jihyo.calcAge());
// console.log(jihyo.age);
// console.log(jihyo);

// --- object create ---
// const personProto = {
//   calcAge() {
//     return new Date().getFullYear() - this.birthYear;
//   },
//   init(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };
// const risky = Object.create(personProto);
// risky.name = 'risky munawar';
// risky.birthYear = 2009;
// risky.init('risky munawar', 2009);
// console.log(risky);
// console.log(risky.calcAge());

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
// class CarCl {
//   constructor(name, speed) {
//     this.carName = name;
//     this.curSpeed = speed;
//   }
//   get speedUS() {
//     return this.curSpeed / 1.6;
//   }
//   set speedUS(speed) {
//     return (this.curSpeed = speed * 1.6);
//   }
//   accelerate() {
//     this.curSpeed += 10;
//     console.log(`'${this.carName}' going at ${this.curSpeed} km/h`);
//   }
//   brake() {
//     this.curSpeed -= 5;
//     console.log(`'${this.carName}' going at ${this.curSpeed} km/h`);
//   }
// }
// const toyota = new CarCl('Toyota', 150);
// console.log(toyota.speedUS);
// console.log((toyota.speedUS = 200));
// console.log(toyota);
// toyota.accelerate();
// toyota.brake();

// --- inheritance between "Classes": constructor function ---

// function Student(name, birthYear, course) {
//   // this.firstName = name;
//   // this.birthYear = birthYear;
//   Person.call(this, name, birthYear);
//   this.course = course;
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`hello my name is ${this.name} and i study ${this.course}`);
// };
// const student1 = new Student('rozak', 1984, 'Informatika');
// console.log(student1);
// console.log(Person.prototype == Student.prototype);
// student1.calcAge();
// console.log(student1 instanceof Person);
// console.log(student1 instanceof Student);
// console.log(student1 instanceof Object);
// console.log(Student.prototype);
// console.dir(Student.prototype.constructor);
// Student.prototype.constructor = Student;

// --- end of inheritance between "Classes": constructor function ---

// --- Coding Challenge #3 ---

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
const Car = function (carName, curSpeed) {
  this.carName = carName;
  this.curSpeed = curSpeed;
};
Car.prototype.accelerate = function () {
  this.curSpeed += 10;
  console.log(`'${this.carName}' going at ${this.curSpeed} km/h`);
};
Car.prototype.brake = function () {
  this.curSpeed -= 5;
  console.log(`'${this.carName}' going at ${this.curSpeed} km/h`);
};

const EV = function (carName, curSpeed, charge) {
  Car.call(this, carName, curSpeed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(this.charge);
};
EV.prototype.accelerate = function () {
  this.curSpeed += 20;
  this.charge -= 1;
  console.log(
    `${this.carName} going at ${this.curSpeed}, with a charge of ${this.charge}%`
  );
};
const tesla = new EV('tesla', 100, 50);
// tesla.accelerate();
// tesla.chargeBattery(90);
// console.log(tesla);
// console.log(tesla instanceof EV);
// console.log(tesla instanceof Car);
// console.dir(EV.prototype.constructor);

// --- inheritance between "classes": es6 classes ---
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  get gret() {
    return 'hello ' + this.firstName;
  }
  get age() {
    return `${this.firstName} age is ${
      new Date().getFullYear() - this.birthYear
    }`;
  }
  set changeAge(age) {
    this.birthYear -= age;
  }
}

class StudentCL extends PersonCL {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(
      `hello my name is ${this.firstName}, i am learning ${this.course}`
    );
  }
}
const siska = new StudentCL('siskae', 1997, 'computer scients');
// console.log(siska.age);
// siska.changeAge = 10;
// console.log(siska.age);
// siska.introduce();
// console.log(siska.age);

const PersonProto = {
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  },
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (name, birthYear, course) {
  this.name = name;
  this.birthYear = birthYear;
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`hello my name is ${this.name}, i am learning ${this.course}`);
};
const jihan = Object.create(StudentProto);
jihan.init('Jian Lion', 2000, 'Music');
// jihan.introduce();
// console.log(jihan);

class Account {
  // 1) public fields
  locale = navigator.language;

  // 2) private fields
  #movements = [];
  #pin;

  constructor(fullName, currency, pin) {
    this.fullName = fullName;
    this.currency = currency;
    // this.locale = navigator.language;

    // protected properties
    this.#pin = pin;
    // this.#movements = [];
  }
  // get deposit() {
  //   return this.movements.filter(mov => mov > 0);
  // }
  // get withdrawl() {
  //   return this.movements.filter(mov => mov < 0);
  // }
  // set movement(value) {
  //   this.movements.push(value);
  // }
  // 3) public method
  getMovements() {
    return this.#movements;
  }
  deposit(value) {
    this.#movements.push(value);
    return this;
  }
  withdrawal(value) {
    this.deposit(-value);
    return this;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      // if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('loan approved');
      return this;
    }
  }
  //4) private method
  #approveLoan(val) {
    // _approveLoan(val) {
    return true;
  }
}
const ilya = new Account('ilyasa bumi', 'Rp', 2015);
// ilya.deposit(500);
// ilya.withdrawal(121);
ilya
  .deposit(500)
  .withdrawal(121)
  .requestLoan(1000)
  .withdrawal(500)
  .deposit(3000);

// Coding Challenge #4
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCL {
  constructor(carName, curSpeed) {
    this.carName = carName;
    this.curSpeed = curSpeed;
  }
  accelerate() {
    this.curSpeed += 10;
    console.log(`'${this.carName}' going at ${this.curSpeed} km/h`);
    return this;
  }

  brake = function () {
    this.curSpeed -= 5;
    console.log(`'${this.carName}' going at ${this.curSpeed} km/h`);
    return this;
  };
}

class EVCL extends CarCL {
  #charge;
  constructor(carName, curSpeed, charge) {
    super(carName, curSpeed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(this.#charge);
    return this;
  }
  accelerate = function () {
    this.curSpeed += 20;
    this.charge -= 1;
    console.log(
      `${this.carName} going at ${this.curSpeed}, with a charge of ${this.charge}%`
    );
    return this;
  };
}
const rivian = new EVCL('Rivian', 80, 65);
rivian.accelerate().chargeBattery(70).brake();
console.log(rivian);
