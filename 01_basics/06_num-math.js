const score=400

const bal=new Number(100.267576)
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toFixed(2));

const otherNum=23.85768
console.log(otherNum.toPrecision(3));  //returns str
const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));

//**********Maths**************

console.log(Math); //it's an obj
console.log(Math.abs(-4));  //sign change (abs means absolute)
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.6));


console.log(Math.random()); //always val is between 0 & 1
console.log((Math.random()*10)+1); //min val 1 to aayegi hi

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))+min);

