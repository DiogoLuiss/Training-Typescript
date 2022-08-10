"use strict";
//1- void: usado para quando a função não tem return.,
function withoutReturn() {
    console.log("Essa função não tem valor");
    return console.log("uva");
}
withoutReturn();
//2- Genecic functions
function firstElemente(arr) {
    return arr[0];
}
console.log(firstElemente([0, 1, 2]));
function mergeObjects(Obj1, Obj2) {
    return {
        ...Obj1,
        ...Obj2
    };
}
const Res = mergeObjects({ Name: "Diogo" }, { Age: 18, Job: "Developer" });
console.log(Res);
//3- constrains: parametros que restringe dados.
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(2, 5));
console.log(biggestNumber("20", "50"));
//5- especificar tipo de argumento, serve quando vc utiliza algo pronto, ex: api
function margeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(margeArrays([1, 2, 3], [2, 5]));
// console.log(margeArrays([1,2,3], ["2","5"])); //quando for assim utilizando o generic, os valores devem ser de tipos iguais.
console.log(margeArrays([1, 2, 3], ["2", "5"])); //dessa maneira consigo mandar o valor certo
// 6- parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return ` Ola ${greet} ${name}, tudo bem? `;
    }
    return ` Olá ${name}, tudo bem?   `;
}
console.log(modernGreeting("Diogo", "Dr."));
// 7 paramtetro default
function somaDefault(n1, n2 = 10) {
    return n1 + n2;
}
console.log(somaDefault(10, 20));
//8 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 5, 4, 8, 8, 2));
//11- destructuring
function showProductDetails({ name, price }) {
    return ` O nome do produto é ${name} e custa ${price} `;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
