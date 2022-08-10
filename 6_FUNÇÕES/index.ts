//1- void: usado para quando a função não tem return.,

function withoutReturn(): void {
    console.log("Essa função não tem valor");
    
    return console.log("uva");
    
}

withoutReturn()

//2- Genecic functions

function firstElemente <T>(arr:T[]): T { //dessa maneira fazemos um função com array generico, o T não tem um valor especifico, por isso deixa amplo, porem ainda é um array,
    return arr[0]
    
}

console.log(firstElemente([0,1,2]));


function mergeObjects <T,U> (Obj1:T, Obj2: U) { //outro exemplo.

    return{
...Obj1,
...Obj2

    }
    
}

const Res = mergeObjects({Name: "Diogo"}, {Age: 18, Job:"Developer"})

console.log(Res);

//3- constrains: parametros que restringe dados.

function biggestNumber <T extends number| string > (a:T , b: T) : T  { //com extends podemos limitar os dados que podem vir, mesmo sendo do generic

    let biggest : T

    if (+a > +b) {
        biggest = a
        
    }
    else{
        biggest = b

    }
    return biggest
    
}


console.log(biggestNumber(2,5));
console.log(biggestNumber("20","50"));



//5- especificar tipo de argumento, serve quando vc utiliza algo pronto, ex: api

function margeArrays<T>(arr1:T[], arr2: T[] ) {
    return arr1.concat(arr2)
    
}

console.log(margeArrays([1,2,3], [2,5]));

// console.log(margeArrays([1,2,3], ["2","5"])); //quando for assim utilizando o generic, os valores devem ser de tipos iguais.

console.log(margeArrays <number | string>([1,2,3], ["2","5"])); //dessa maneira consigo mandar o valor certo

// 6- parametros opcionais

function modernGreeting(name:string, greet?: string) {

    if (greet) {

        return ` Ola ${greet} ${name}, tudo bem? `
        
    }

    return` Olá ${name}, tudo bem?   `
    
}
console.log(modernGreeting("Diogo", "Dr."));

// 7 paramtetro default

function somaDefault(n1: number, n2 = 10) {

    return n1 + n2
    
}
console.log(somaDefault(10,20 ));


//8 - Rest operator

function sumAll(...n:number[]) {

    return n.reduce((number,sum) => sum + number )
    
}

console.log(sumAll(1,2,3,5,4,8,8,2));

//11- destructuring

function showProductDetails({name, price}:  {name: string, price: number } )  {

    return ` O nome do produto é ${name} e custa ${price} `
    
}


const shirt = {name: "Camisa", price: 49.99}

console.log(showProductDetails(shirt));
