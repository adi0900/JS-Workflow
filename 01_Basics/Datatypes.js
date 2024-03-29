// Primitive --> 7 : string : Number : boolean : NULL : undefined : Symbol : BigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

//const bigNumber = 2343253256546523523n

const heros = ["Aditya" , "Gojo" , "Goku"] 
let myObj =
{
    name: "Adi",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

/*1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object

*/

// Reference (Non Primitive) : Array , Objects , Functions


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// stack(Primitive) , Heap(Non-Primitive)

let myName = "Goku"
let anotherName = myName
anotherName = "Pika" //Creates a copy in the stack

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "adi124213@gmail.com",
    upi: "k1@24al"
}

let userTwo = userOne

userTwo.email = "adi1991@gmail.com"    //Store the date in the heap

console.log(userTwo.email);
console.log(userOne.email);