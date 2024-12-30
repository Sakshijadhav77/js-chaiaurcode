//REDUCE 
const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (accumulator, currentValue){
//     console.log(`acc: ${accumulator} and currval: ${currentValue}`);
    
//     return accumulator + currentValue
// },0)

//SECOND APPROACH HOW TO WRITE EFFICIENTLY CODE
const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);



