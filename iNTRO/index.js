"use strict";
const firstName = "matheus";
const anotherName = 1;
const x = true;
function greeting(name) {
    console.log("ola " + name);
}
greeting(firstName);
// greeting(anotherName)
// greeting(x)
// tsc index.ts é possivel ver como esta em javascript
//tsc -w funciona como compilação automatica
//desafio 1
const n1 = 2;
const n2 = 3;
function a(a, b) {
    console.log(a + b);
}
a(n1, n2);
