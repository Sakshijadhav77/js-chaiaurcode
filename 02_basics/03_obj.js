// singleton 
//constructor se obj banta h it's singleton
// Object.create  //making obj thr constructor which is also called singleton

//obj literals (declaring obj)

const mySym=Symbol('key1')  
//how to use this symbol as key
//1. cannot be directly declared
//2. to use it as symbol write it in sq bracket
// eg. [sum]:'mykey1'
//3. while printing also use it as sq bracket


const jsuser={
    name: 'sakshi',
    'full name':'sakshi jadhav',  //this full name can not be accessible thr dot method 
    [mySym]:'mykey1',
    age: 22,
    location: 'pune',
    email: 'sak@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday','Saturday']
}

console.log(jsuser.email);
console.log(jsuser['email']);
console.log(jsuser[mySym]);


//how to change values

// jsuser.email='sakj@gmail.com'  //using ' = '
// Object.freeze(jsuser)  //changes apply nai honge
// jsuser.email='node@gmail.com'  //using ' = '
// console.log(jsuser);2

jsuser.greeting = function(){
    console.log('hello js user');
    
}
jsuser.greeting2 = function(){
    console.log('hello js user, ${this.name}');
    
}
console.log(jsuser.greeting);  //returns reference of function
console.log(jsuser.greeting2);  //returns reference of function







