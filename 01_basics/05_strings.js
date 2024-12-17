const name="sak"
const repoCount=50

// console.log(name+repoCount+ "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('sak')

console.log(gameName[0]);  //s
console.log(gameName.__proto__);  //{}

console.log(gameName.length);  //3
console.log(gameName.toUpperCase()); //SAK
console.log(gameName.charAt(2));  //k
console.log(gameName.indexOf('s'));  //0

//go thr all methods manually for interview prep


const newString=gameName.substring(0,2) //last vali val display nai hogi
console.log(newString);


const anotherStr=gameName.slice(-2,2)  //piche se second val 
console.log(anotherStr);


//*****go through trim documentation*****/
const newString1='   sak   '
console.log(newString1);
console.log(newString1.trim());
 
const url="https://sak.com/sak%20jadh"
console.log(url.replace('%20',"-"))

console.log(url.includes('sak'))
console.log(url.includes('hp'));

console.log(gameName.split(' '));

