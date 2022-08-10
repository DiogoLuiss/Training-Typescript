"use strict";
//1- constraint em generic: dessa maneira consigo tornar obrigatorio alguns parametros
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = { name: "Diogo", cor: "branco" };
console.log(showProductName(myObj));
const myPen = { name: "Caneta BIC", wheels: false, engine: false };
const mycars = { name: "Fusca", wheels: 4, engine: 1.0 };
console.log(myPen);
console.log(mycars);
//3_type parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} está presente no objeto e tem valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
function showcharName(obj, key) {
    return ` ${obj[key]} `;
}
const Me = {
    name: "Diogo",
    age: 18,
    hasDriverLicense: true
};
console.log(showcharName(Me, "name"));
//6 - typeof type operator // usando outra variavel para declarar o tipo
const userName = "Matheus";
const userName2 = "joão"; // desse jeito ela imita e estrutura da outra variavel
const userName3 = "Diogo";
const testing = `some text`; // aceita apenas o dado igual
const testing2 = "Testando";
