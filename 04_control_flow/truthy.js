// const userEmail='s@sak.ai'
const userEmail=[]

if(userEmail){
    console.log('got user email');
    
}else{
    console.log("don't have user email");
    
}

//FALSY VALUES
//false, 0, -0, BigInt(0n), "", null, undefined, NaN(Not a num)
//rest all are true values

//TRUTHY VALUES
//"0", 'false', " ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("array is empty");
    
// }

// const emptObj={}
// if(Object.keys(emptObj).length===0){   //tells whether the obj is empty or not
//     console.log("Object is empty");
// }

//NULLISH COALESCING OPERATOR (??):null undefined
let val1;
val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??15   //10 jo first val aayegi vo assign ho jati
console.log(val1);

//TERNIARY OPERATOR
// condition?true:false
const iceTeaPrice=100
iceTeaPrice<=80 ? console.log('less than 80'): console.log('more than 80');





