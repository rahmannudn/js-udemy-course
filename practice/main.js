// lazy generator
function* buatGanjil (value){
    for(let i = 1; i < value; i++){
        if(i % 2 === 0)continue;
        console.log(`yield ${i}`);
        yield i;
    }
}

const buatGanjilTest = buatGanjil(20);
// console.log(buatGanjilTest.next().value);
// console.log(buatGanjilTest.next().value);
// for(const i of buatGanjilTest) console.log(i);

// function generator memiliki sifat lazy
// jika dibandingkan dengan function biasa dengan operasi yang sama maka hasilnya akan seperti ini
// eager generator
function buatGanjilArray(value){
    const arr = [];
    for(let i = 1; i < value; i++){
        if(i % 2 === 0)continue;
        console.log(`yield ${i}`);
        arr.push(i);
    }
    return arr;
}

// const buatGanjilArrayTest = buatGanjilArray(20);

const calcAge = birthYear => 2021 - birthYear;
// console.log(calcAge(2001));
// for (const iterator of buatGanjilArrayTest) console.info(iterator);

function giveMeName(callback){
callback("Aman");
}

// giveMeName(function (name){
//     console.info(`Hello ${name}`);
// })

const sendName = name => console.info(`Hello ${name}`);

const game = {
    players: ['jajang','sumitko','jajang','kurnia','sandi','lukman','sandi']
}

let scorers = [];
for(i of game.players){
      scorers[i] ? scorers[i]++ : scorers[i]+ 1;
}

// console.log(scorers);

// getter dan setter
// getter
const person = {
    firstName : "Maman",
    lastName : "Sudarman",
    get fullName() {
        return this.firstName + " " + this.lastName
    },
    // mengubah fullName menggunakan function set
    set fullName(value){
        const arr =  value.split(" ");
        // for (let i = 1; i < arr.length; i++) {
        //     if(i === 1) this.firstName = arr[0];
        //     lastName.push(arr[i]);
        // }
        const [firstName, ...lastName] = arr;
        this.firstName = firstName;
        this.lastName = lastName.join(" ");
    },
    // mengubah fullName menggunakan function
    ubahFullName : function(firstName, ...lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

person.fullName = "Ahmad Maman Sudrajad Khannedy";
console.log(person.fullName);

person.ubahFullName("Maman Suhendra Khannedy");
console.log(person.fullName);

const bio  = {
    familyName: 'Kim',
    name : "Do Yeon",
    address :{
        street : "Jalan Sultan Adam",
        city : "Tokyo",
        country : "ID"
    },
    hobby : "Dance",
    group : ["IOI","Weki Meki"]
}

const {familyName:marga,name:namaLengkap,address:{street:alamat,city:kota,country:negara},...others} = bio;
console.info(marga,namaLengkap);
console.info(others);

{
    // destructuring di function parameter
    function displayPerson({firstName,middleName,lastName}){
        console.info(firstName,middleName,lastName);
    }

    const person = {
        firstName : "Maman",
        middleName :"Garuk",
        lastName : "Khanneddy"
    }
    displayPerson(person)
}