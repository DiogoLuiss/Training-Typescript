// 1- tipo de objeto para função 

interface Product { //interface para objeto e tambem é possivel deixar opcional
    name: string
    price: number
    isAvailable: boolean

}


function showProductsDetails(product: Product) {

    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price} `);
    if (product.isAvailable) {
        console.log("O produto esta disponivvel");
    }

}

const tShirt: Product = {

    name: "Camiseta",
    price: 19.99,
    isAvailable: true
}
showProductsDetails(tShirt)

//2_ readonly: quando se coloca esse parametro o campo não pode ser alterado

interface Car {

    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW ",
    wheels: 4
}



// fusca.wheels = "uva"

console.log(fusca);


//3_ index signature //dessa maneira eu consigo colocar dados na let que apenas se encaixão na minha especificação
interface CoodObject {

    [index: string]: number
}

let coords: CoodObject = {

    fruta: 50
}

coords.y = 20


console.log(coords);


//4_ extending interfaces: serve para reaproveitar uma interface e ainda enclementar

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human { // alem dos campos human, sem precisar repetir, vc pode inteirar
    superpowers: string[]

}
const matheus: Human = {
    name: "matheus",
    age: 18
}

const goku: SuperHuman = {

    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "genki Dama"]
}

console.log(matheus);
console.log(goku);

//5_ intersection types: juntar interfaces em um unico type

interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}


type HumanWithGun = Character & Gun //dessa maneira junto duas interfaces.

const arnold: HumanWithGun = {
    caliber: 48,
    name: "Arnold",
    type: "Pistol"

}

console.log(arnold);

//6_ readonly array

let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]


// myArray[0] = "uva" o valor não pode ser alterado

//7_Tuplas: fazer a tipagem dos arrays um por um.

type fiveNumbens = [number, number, number, number, number]

const myNumberArray: fiveNumbens = [1, 2, 5, 4, 7] //tem que ser exatamente igual a tipagem!!

console.log(myNumberArray);

//8_tuplas em readonly //dessa maneira não é possivel mudar os valores

function showNumbers(numbers: readonly [number, number]) {
    console.log(
        numbers[0]
    );
    console.log(
        numbers[1]
    );

}

showNumbers([1,2])