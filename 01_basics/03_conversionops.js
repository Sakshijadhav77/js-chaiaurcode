// let score=undefined

// console.log(typeof score);

// let valinNum= Number(score)  //guaranteed that score is converted to num

// console.log(typeof valinNum);
// console.log(valinNum);  //NaN means not a num means cannot be converted to num 8
//if we give val null it returns 0
//if undefined it gives NaN
//if boolean it returns either 1 or 0
//if string NaN coz can't be converted to num

// let isLoggedIn=1  //true

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1=true, 0=false
//empty string ""=false
//"sak"=true

// let someNum=33

// let stringNum=String(someNum)
// console.log(stringNum);
// console.log(typeof stringNum);


// ****************OPERATIONS************************

let val=3
let negVal=-val
console.log(negVal); //-3

let str1="hello"
let str2=" sak"
let str3=str1+str2
console.log(str3);

console.log("1"+2);  //12 => converts completely into str
console.log(1+"2");  

console.log("1"+2+2);  //122 => converts into str 
console.log(1+2+"2"); //32 => 

//if str is first then whole line will be converted into str
//if str last then first will act as num only the last one as str

//TRICKY CONVERSIONS

console.log(+true); //increment won't happen it'll be 1
//true+ will give undefined val error
console.log(+""); //0


let num1, num2, num3

num1=num2=num3=2+2
console.log(num1);

let gamecounter=100
gamecounter++;
console.log(gamecounter); //mdn website se study prefix and postfix operators









