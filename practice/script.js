"use strict";
// --- rekusif ---
// rekursif umumnya digunakan untuk menggantikan looping
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// perulangan diatas dapat dipersingkat dengan menggunakan rekursif
// function cetakAngka(n) {
//     if (n === 0) return; //base case
//     console.log(n);
//     return cetakAngka(n - 1);
// }

// cetakAngka(10);

// --- object --
// membuat function object dengan cara object literall
// const student = {
//     nama: "Aman Jago",
//     year: 2021,
//     tahunLahir: 2000,
//     hitungUmur: function() {
//         const umur = this.year - this.tahunLahir;
//         return umur;
//     },
//     alamat: "Jalan Sultan Adam",
// };

// console.log(student.hitungUmur());

// membuat object menggunakan cara function declaration
// function student(nama, tahunLahir, alamat) {
//     let info = {};
//     info.nama = nama;
//     info.year = 2021;
//     info.tahunLahir = tahunLahir;
//     info.alamat = alamat;
//     info.hitungUmur = function() {
//         const umur = this.year - this.tahunLahir;
//         return umur;
//     };

//     return info;
// }

// const student1 = student("Rahman", 2000, "Jalan Sultan Adam");
// console.log(student1.hitungUmur());

// membuat object menggunakan constructor
// function Student(nama, tahunLahir, alamat) {
//     //pada umumnya penulisan nama constructor menggunakan huruf besar diawal untuk membedakan antara functon declaration dan cunstructor.
//     this.nama = nama;
//     this.tahunLahir = tahunLahir;
//     this.year = 2021;
//     this.hitungUmur = function() {
//         const umur = this.year - this.tahunLahir;
//         return umur;
//     };
//     this.alamat = alamat;
//     // cunstrictor tidak memerlukan return untuk mengembalikan data.
// }

// khusus untuk pemanggilan atau pendeklarasian cunstructor harus diawali dengan kata 'new'.
// const student1 = new Student("Rahman", 2000, "Jalan Sultan Adam");
// console.log(student1.hitungUmur());

// --- this ---
// this adalah sebuah keyword spesial yang secara otomatis akan di definisikan pada setiap function
// property adalah variabel yang ada di dalam object
// method adalah function yang ada di dalam object

// function student(nama, tahunLahir, alamat) {
//     let info = {};
//     info.nama = nama;
//     info.year = 2021;
//     info.tahunLahir = tahunLahir;
//     info.alamat = alamat;
//     info.hitungUmur = function() {
//         const umur = this.year - this.tahunLahir;
//         return umur;
//     };
//     console.log(this);
//     return info;
// }

function Student(nama, tahunLahir, alamat) {
  //pada umumnya penulisan nama constructor menggunakan huruf besar diawal untuk membedakan antara functon declaration dan cunstructor.
  this.nama = nama;
  this.tahunLahir = tahunLahir;
  this.year = 2021;
  this.hitungUmur = function () {
    const umur = this.year - this.tahunLahir;
    return umur;
  };
  this.alamat = alamat;
  console.log(this); //menggunakan cunstructor keyword this mengembalikan object yang dibuat
  // cunstrictor tidak memerlukan return untuk mengembalikan data.
}

// console.log(new Student());

const shoppingCart = [
  {
    product: "Jenga",
    price: 6.88,
    quantity: 1,
  },
  {
    product: "vans",
    price: 7,
    quantity: 1,
  },
  {
    product: "saku",
    price: 6.88,
    quantity: 1,
  },
];

const buyer = {
  name: "jack",
};

buyer.product = [...shoppingCart];
// console.log(buyer);

// label
loopi: for (let i = 0; i < 10; i++) {
  loopj: for (let j = 0; j < 100; j++) {
    if (j > 10) continue loopi;
    // console.log(`${i} - ${j}`);
  }
}

// for in
const bio = {
  callName: "Aman",
  isMarried: false,
  age: 21,
};

for (const i in bio) {
  // document.writeln(`<p>${i}</p>`);
  // console.log(`${i} : ${bio[i]}`);
}

const callNameArr = ["aman", "rahman", "uddin"];
for (const i in callNameArr) {
  // console.info(`${i} : ${callNameArr[i]}`);
}

// for (const i of Object.entries(bio)) {
//   console.info(i);
// }
function sum(nama, ...data) {
  let total = 0;
  for (const i of data) {
    total += i;
  }
  console.log(`${nama} : ${total}`);
}

const num = [10, 20, 30, 40, 100];

// sum("Apple", ...num);

// function sebagai value
function helloName(name) {
  console.info(`hello ${name}`);
}

const hello = helloName;

// hello("Niki");
// helloName("Aman");

// factorial loop
function factorial(value) {
  let result = 1;
  for (const i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}

// factorial menggunakan recursive function
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}
factorialRecursive(4);
// 4 * factorialRecursive(3)
// 4 * 3 * factorialRecursive(2)
// 4 * 3 * 2 * 1

// function generator
function* funGenerator() {
  yield ["kuman", "kujang"];
  yield "saya";
  yield "aman";
  yield 21 - 1;
}

const functionGeneratorVar = funGenerator();

// for (const i of functionGeneratorVar) {
//   console.info(i);
// }
// NOTE : function generator dapat mengandung semua tipe data (array, string, number) kecuali object dan function generator bersifat lazy

function* tampilGanjilGenerator(value) {
  for (let index = 1; index < value; index++) {
    if (index % 2 === 0) continue;
    console.info(`yield ${index}`);
    yield index;
  }
}

const tampilGanjilTestGenerator = tampilGanjilGenerator(20);
// for (const i of tampilGanjilTestGenerator) console.info(i);

// console.info("--- function expression ---");

const tampilGanjil = function (value) {
  const result = [];
  for (let index = 1; index < value; index++) {
    if (index % 2 === 0) continue;
    console.info(`yield ${index}`);
    result.push(index);
  }
  return result;
};

// const tampilGanjilTest = tampilGanjil(20);
// for (const iterator of tampilGanjilTest) {
//   console.info(iterator);
// }

// arrow function
const giveMeName = (name) => console.log(`Nama saya ${name}`);
// giveMeName("Dipa");

const year = 2021;
const calcAge = function (birthYear) {
  birthYear(2000);
};

// calcAge((birthYear) => console.info(`Hello kelahiran ${birthYear}`));

// closure
function adder(value) {
  const nama = "umam";

  function add(param) {
    console.info(nama);
    return value + param;
  }
  return add;
}

const adderTwenty = adder(20);
console.info(adderTwenty(20));

const tahunMobil = 2002;
function mobil(merk) {
  return function (type) {
    return `${merk} ${type} ${tahunMobil}`;
  };
}

const mobil1 = mobil("Honda");

console.log(mobil1("jazz"));
console.dir(mobil1);

function ex(ke) {
  const myName = "aman";

  function exName(exName) {
    return `Mantan dari ${myName} ke ${ke} adalah ${exName}`;
  }
  return exName;
}

const exTest = ex(1);
console.log(exTest("Do Yeon"));
