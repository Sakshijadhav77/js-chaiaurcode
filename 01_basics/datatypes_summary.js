// primitive (call by val)
//7 types: string,num, boolean, null, undefined, symbol(to make any val unique), BigInt

//in js is dynamic type because we don't need to define datatype everytime
const score=100
const scoreVal=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail; //undefined

//how to declare symbol
const id=Symbol('123');
const anotherId=Symbol('123')

console.log(id===anotherId);//false

const bigNum=27845276345262n




//Reference type(Non-Primitive)(memory ref directly allocated)
// array, objs, funct

//objs are defined in curly braces
//array defined in sq braces
const heros=["shaktiman", "ironman", "captainamerica"]
let myObj={
    name:"sak",
    age:22,
}

//declare func
const myFun=function() {
    console.log("Hello world!");
    
}
console.log(typeof bigNum);
