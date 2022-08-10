//1- constraint em generic: dessa maneira consigo tornar obrigatorio alguns parametros

function showProductName <T extends{name: string}>(obj: T) { //essa é a estrutura, o name se torna obrigatório
 return `O nome do produto é ${obj.name}`   
}

const myObj = {name: "Diogo", cor: "branco"}


console.log(showProductName(myObj));


//2_GENERICS COM INTERFACE //dessa maneira vc deixa em aberto o tipo de dados em alguns campos

interface MyObject<T,U> {

    name: string
    wheels: T
    engine: U

} 
type Cars = MyObject<number, number> //seguindo a ordem eu façõ a tipagem dos dados
type Pen = MyObject<boolean, boolean>


const myPen: Pen = {name: "Caneta BIC", wheels: false,engine:false }
const mycars: Cars= {name: "Fusca", wheels: 4, engine:1.0}
console.log(myPen);

console.log(mycars);

//3_type parameters

function getSomeKey<T,K extends keyof T>(obj:T, key : K) { //dessa maneira podemos fazer uma conexão, e puxar o valor do objeto

    return`A chave ${[key ]} está presente no objeto e tem valor de ${obj[key]}`
    
}
const server = {
    hd:"2TB",
    ram: "32GB"
}
console.log(getSomeKey(server,"ram"));


//4_Keyof type operator // dessa maneira tambem consegue ligar os valores.

type CharacterTest = {
    name: string
age: number
hasDriverLicense: boolean
}

type C = keyof CharacterTest 

function showcharName(obj:CharacterTest, key: C) {

    return ` ${obj[key]} `
    
}

const Me: CharacterTest ={
    name: "Diogo",
    age: 18,
    hasDriverLicense: true
}

console.log(showcharName(Me,"name"));

//6 - typeof type operator // usando outra variavel para declarar o tipo

const userName: string = "Matheus"

const userName2:typeof userName = "joão" // desse jeito ela imita e estrutura da outra variavel

type x = typeof userName 

const userName3: x = "Diogo"

//7 - template literals type //serve para criar uma tipagem bem especifica.

type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = `some text` // aceita apenas o dado igual

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}` //Usando union type vc pode aumentar as possibilidades


const testing2: a3 = "Testando" 