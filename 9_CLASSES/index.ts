//1- CAMPOS EM CLASSE

class UserTest { //sempre deve ter o valor inicial 
    name!: string
    age!:number
}

const diego = new UserTest()

console.log(diego);

diego.name = "Diego"
console.log(diego);

//2- constructor: com constructor já retornamos o valor.

class NewUser {
name
age
constructor( name: string, age: number){
this.name = name
this.age = age
}
}

const joão = new NewUser("Diogo", 18)

console.log(joão);


//3- readonly em classes

const number1 = 20

class myCar {

name
readonly wheels = number1 //dessa maneira o valor aqui não é alterado

    constructor(name: string) {
        this.name = name
        
    }
}

const camaro = new myCar("Camaro turbo")

console.log(camaro);

//4 - métodos

class Dwarf {
    name
    constructor(name: string) {

        this.name= name
        
    }

    showFunction() { //metodos são funções dentro de class
console.log(` I am ${this.name}  `);

        console.log("Hey Stranger");
    }
}


const Jimmy = new Dwarf("Jimmy")

Jimmy.showFunction()
