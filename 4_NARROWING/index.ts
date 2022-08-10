//1- type guard: verifica o tipo de dados antes de continuar a aplicação com type of

type n =  number|string

function sum(n1: n, n2: n )  {
    if (typeof n1 === "string" && typeof n2 === "string" ) {
        console.log(parseFloat(n1) + parseFloat(n2) );
        
    
    } else if(typeof n1 === "number" && typeof n2 === "number"){

        console.log(n1 + n2 );
    }else{

        console.log("Erro ao fazer a soma" );
    }
}

sum("20","50")

//2- instance of

class User {
    name
    constructor(name: string) {
        this.name = name
        
    }
}

class SuperUser extends User  {
    constructor(name:string) {
        super(name)
        
    }
}
const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon);
console.log(paul);


function userGreeting(user:object) {
    if (user instanceof SuperUser)   {
        console.log(`Olá ${user.name} deseja ver seus dados `);
        
        
    }
    
}
userGreeting(paul)

//3- operador in: quando se usa o in ele verifica se a propriedade existe e retorna true ou false

class Dog {
    name
    breed
    constructor(name: string, breed?: string) {

        this.name= name

        if (breed) {
            this.breed= breed
            
        }
    }
}


const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor alemão")

function showDogDetails(dog:Dog) {

    if ("breed" in dog) {   //quando se usa o in ele verifica se a propriedade existe e retorna true ou false
        console.log(`O cachorro é da raça ${dog.breed} `);
        
    }else{
        console.log("cachorro sem raça");
        
    }
    
}

showDogDetails(bob)
showDogDetails(turca)