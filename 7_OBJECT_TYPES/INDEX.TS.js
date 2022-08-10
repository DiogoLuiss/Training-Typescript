// 1- tipo de objeto para função 
function showProductsDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 ").concat(product.price, " "));
    if (product.isAvailable) {
        console.log("O produto esta disponivvel");
    }
}
var tShirt = {
    name: "Camiseta",
    price: 19.99,
    isAvailable: true
};
showProductsDetails(tShirt);
var fusca = {
    brand: "VW ",
    wheels: 4
};
// fusca.wheels = "uva"
console.log(fusca);
var coords = {
    fruta: 50
};
coords.y = 20;
console.log(coords);
var matheus = {
    name: "matheus",
    age: 18
};
var goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "genki Dama"]
};
console.log(matheus);
console.log(goku);
var arnold = {
    caliber: 48,
    name: "Arnold",
    type: "Pistol"
};
console.log(arnold);
//6_ readonly array
var myArray = ["Maçã", "Laranja", "Banana"];
var myNumberArray = [1, 2, 5, 4, 7]; //tem que ser exatamente igual a tipagem!!
console.log(myNumberArray);
//8_tuplas em readonly //dessa maneira não é possivel mudar os valores
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
