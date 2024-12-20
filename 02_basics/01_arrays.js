// Arrays

//how to declare
//elements in javascript are resizable and contain mix of diff datatypes
//are not associative arrays i.e. cannot be accessed using arbitrary strings as indexes
//but can be accessed using nonnegative integers

const myArr=[0,1,2,3,4,5]  
const myHeros=['ironman','thor']

const myArr2=new Array(1,2,3,4)

console.log(myArr[3]);

//Array methods

myArr.push(6)  //add numbers in existing array
myArr.pop()  //removes last nnumber in existing array

myArr.unshift(9)  //adds number in beginning of array
myArr.shift()  //removes that preceding added num

console.log(myArr.includes(9));  //9 included h k nai  //boolean return type
console.log(myArr.indexOf(3));  //returns index

console.log(myArr);


const newArr=myArr.join()  //saare array ko string me join kr deta h
console.log(newArr);  //0,1,2,3,4,5

console.log(typeof newArr);

//slice,splice

console.log('A',myArr);
const myn1=myArr.slice(1,3) //returns series of array (do not incl last num)

console.log(myn1);
console.log('B',myArr);

const myn2=myArr.splice(1,3)  //incl last num also //also removes the mentioned portion from array

console.log(myn2);
console.log('C',myArr);




