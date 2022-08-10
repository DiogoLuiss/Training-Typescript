"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MyDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("Testando execução do metodo");
    }
}
__decorate([
    MyDecorator() //dessa maneira deve ser chamado
], MyClass.prototype, "testing", null);
const myobj = new MyClass();
console.log(myobj);
//2_ multiplos decorators: Os decorator são executados na ordem que estção mais perto da função, de baixo pra cima
function decoratorA() {
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator a");
    };
}
function decoratorB() {
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator b");
    };
}
function decoratorC() {
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator c");
    };
}
class MultipleDecorartors {
    testingDecorator() {
        console.log("Terminando execução");
    }
}
__decorate([
    decoratorA(),
    decoratorB(),
    decoratorC()
], MultipleDecorartors.prototype, "testingDecorator", null);
const multiple = new MultipleDecorartors();
multiple.testingDecorator();
//3-decorator de class: deve ser colocado antes da execução da class, permitindo que adicionamos mais funcionalidades.
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === "UserDecorator") {
        console.log("Criando usuario");
    }
}
let UserDecorator = class UserDecorator {
    constructor(name) {
        this.name = name;
    }
};
UserDecorator = __decorate([
    classDec
], UserDecorator);
const antonio = new UserDecorator("Antonio");
// 4- exemplo real com class decorator, com decorator vc consegue colocar uma operaçãoa mais e chamala na class
function createdAt(created) {
    created.prototype.createdAt = new Date();
}
let MyPen = class MyPen {
    constructor(id) {
        this.id = id;
    }
};
MyPen = __decorate([
    createdAt //dessa maneira para usar
], MyPen);
let MyBook = class MyBook {
    constructor(id) {
        this.id = id;
    }
};
MyBook = __decorate([
    createdAt
], MyBook);
const pen = new MyPen(12);
const newBook = new MyBook(15);
console.log(pen);
console.log(newBook.createdAt);
