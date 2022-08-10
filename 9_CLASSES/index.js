"use strict";
//1- CAMPOS EM CLASSE
class UserTest {
}
const diego = new UserTest();
console.log(diego);
diego.name = "Diego";
console.log(diego);
//2- constructor: com constructor já retornamos o valor.
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joão = new NewUser("Diogo", 18);
console.log(joão);
//3- readonly em classes
const number1 = 20;
class myCar {
    constructor(name) {
        this.wheels = number1; //dessa maneira o valor aqui não é alterado
        this.name = name;
    }
}
const camaro = new myCar("Camaro turbo");
console.log(camaro);
//4 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    showFunction() {
        console.log(` I am ${this.name}  `);
        console.log("Hey Stranger");
    }
}
const Jimmy = new Dwarf("Jimmy");
Jimmy.showFunction();
