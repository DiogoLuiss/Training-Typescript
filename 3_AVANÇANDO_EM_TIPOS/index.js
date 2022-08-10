"use strict";
// 1 - arrays
let numbers = [1, 2, 3,]; //jeito de declarar o array e suas informações, tipo de dados e depois []
numbers.push(5);
console.log(numbers[3]);
//Any serve para declarar qualquer tipo de dados
//4- parametros tipados
function soma(n1, n2) {
    console.log(n1 + n2);
}
soma(20, 50);
//5 - retorno de funções
function testReturn(name) {
    return `ola ${name}`;
}
console.log(testReturn("uva"));
//6- função anonima
//detalhe, o typescript avisa que certas funções só funcionam com determinado tipo de dados.
setTimeout(function () {
    const sallary = 1000;
    console.log(sallary);
}, 2000);
// 7- tipos de objeto e 8- props opcionais.
function passCoordinates(coord) {
    console.log(coord.x);
}
const ObjCoord = { x: 50, y: 60 };
passCoordinates(ObjCoord);
const uva = [{ name: "Diogo", age: 18 }]; //dessa maneira vc pode tipar um array, e dentro dele tipar o objeto um campo por vez
// colocando o ? o campo não se torna obrigatório, mas caso seja prenchido tem que ser de acordo com a tipagem, primeiro argumento não pode ser opcional.
const uva2 = { name: "Erisvaldo", age: 30, biscoito: "uva" };
uva.push(uva2);
console.log(uva);
//9- validando porametros opcionais e 10 - Union type 
function advanceGreeting(firstname, lastName) {
    //exemplo de validação de parametros opcionais
    if (lastName !== undefined) {
        return console.log(` Ola ${firstname} ${lastName}. tudo bem? `);
    }
    return console.log(` Ola ${firstname}. tudo bem? `);
}
console.log(advanceGreeting("Diogo", "luis"));
function showId(id) {
    console.log(`O id é ${id} `);
}
showId(50);
showId("60");
function ShowCoords(obj) {
    console.log(` ${obj.x}, ${obj.y}, ${obj.z},  `);
}
const testPoint = {
    x: 20,
    y: 30,
    z: 40
};
ShowCoords(testPoint);
//15 - literal types: geralmente usado com o Union, serve para limitar valores especificos, ou seja a tipagem é feita para aceitar apenas o valor exato estabelecido
let test;
test = "testando"; // ele aceita apenas o valor estabelecido.
function showDirection(direction) {
    console.log(`A direção escolhida foi a ${direction}`);
}
showDirection("right");
//16- Non null: acontece quando o valor no momento do codigo ainda não esta disponivel
const P = document.getElementById("some-p");
console.log(P.innerText); // ao acrescentar ! vc deixa o typescript funcionar.
//17- Bigint: acontece quando o valor do numero é muito alto
let n;
n = 1n; // dever ser colocado o valor dessa jeito
//muitas vezes para usar certas funcionalidades do typescript é necessario mexer nas configurações.
//18 simbol : serve para criar valores unicos, mesmo o valor sendo igual
let symbolA = Symbol("a");
let symbolB = Symbol("a"); //deve ser colocado em Symbol(O valor)
console.log(symbolA === symbolB);
