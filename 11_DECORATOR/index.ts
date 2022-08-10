function MyDecorator() { //ESSA É a estrutura do decorator, ele tras propriedades da class
    console.log("Iniciando decorator!");

    return function (target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

class MyClass {
@MyDecorator() //dessa maneira deve ser chamado
    testing(){
        console.log("Testando execução do metodo");
        
    }
}

const myobj = new MyClass()

console.log(myobj);

//2_ multiplos decorators: Os decorator são executados na ordem que estção mais perto da função, de baixo pra cima


function decoratorA() {

    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator a")
    }
}

function decoratorB() {

    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator b")
    }
}

function decoratorC() {

    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator c")
    }
}

class MultipleDecorartors {
@decoratorA()
@decoratorB()
@decoratorC()
    
testingDecorator(){
    console.log("Terminando execução");
}
}

const multiple = new MultipleDecorartors()

multiple.testingDecorator()

//3-decorator de class: deve ser colocado antes da execução da class, permitindo que adicionamos mais funcionalidades.


function classDec(constructor:Function) {
console.log(constructor.name);

    if (constructor.name === "UserDecorator") {
        console.log("Criando usuario");
        
        
    }
    

}


@classDec
class UserDecorator {
    name
    constructor(name:string){

        this.name = name

    }
}

const antonio = new UserDecorator("Antonio")

// 4- exemplo real com class decorator, com decorator vc consegue colocar uma operaçãoa mais e chamala na class



function createdAt(created:Function) {

    created.prototype.createdAt = new Date()
    
    }


    @createdAt //dessa maneira para usar
class MyPen {
    id

    constructor(id: number) {

        this.id= id
        
    }
}


@createdAt
class MyBook {
    id
    createdAt?: Date //é importante marca esse campo
    constructor(id:number) {

        this.id = id
        
    }
}


const pen = new MyPen(12)
const newBook = new MyBook(15)

console.log(pen);
console.log(newBook.createdAt);

