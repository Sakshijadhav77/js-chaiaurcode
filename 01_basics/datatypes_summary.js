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



// ************STACK & MEMORY**********************
//Stack(used in primitive types) and Heap(used in non-primitive type) memory
//stack- var declare kara uska copy milta h ek
//heap- ref id milta h ek og val

let myYTname="ashikhanna"

let anothername=myYTname
anothername="chaiaurcode"


console.log(myYTname);
console.log(anothername);

let user1={
    email:"user@google.com",
    upi:"user@ybl"
}

let user2=user1

user2.email="sak@google.com"

console.log(user1.email);
console.log(user2.email);

