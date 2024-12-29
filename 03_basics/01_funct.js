//whenever while executing the funct we add parenthesis '()' and name of funct is called ref

function sayMyName(){
    console.log('S');
    console.log('A');
    console.log('K');
    console.log('S');
    console.log('H');
    console.log('I');
}

// sayMyName()

// function addTwoNum(num1, num2){

//     console.log(num1+num2);
    
// }
function addTwoNum(num1, num2){
    let result=num1+num2
    return result
    return num1 + num2
}

// const result= addTwoNum(3,'4')  //string smjhke add krdiya
const result= addTwoNum(3,4)  //string smjhke add krdiya

console.log('Result: ',result);  //undefined

function loginUserMessage(username){
    if(username===undefined){
        console.log('please enter username');
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Sakshi'))
console.log(loginUserMessage())

function calcCartPrice(...num1){  //... is rest and spread operator, prints in array
    return num1
}

// console.log(calcCartPrice(2,4,5)); //[2,4,5]
const user = {
    username: "sakshi",
    price: 199
}
function handleObj(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
    
}
// handleObj(user)
handleObj({
    username: 'sakshi',
    price: 399
})

//ARRAYS PASS
const mynewArr=[2,4,1,6]
function returnSecondVal(getArr){
    return getArr[2]
}
// console.log(returnSecondVal(mynewArr));
console.log(returnSecondVal([2,4,51,10]));





