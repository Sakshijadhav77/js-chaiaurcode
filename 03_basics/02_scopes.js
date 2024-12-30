// let a=10
// const b=20
let a=300

 if(true){
    let a=10
    const b=20
   //  console.log("INNER: ",a);
 }
 //curly braces ke ander is block scope
 //outside is global scope


//  for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
//  }

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
   const username ='sakshi'

   function two(){
      const website='youtube'
      // console.log(username);
      
   }
   // console.log(website);
   two()
   
}
one()

if(true){
   const username="sakshi"
   if(username==="sakshi"){
      const website=' youtube'
      // console.log(username+website);
      
   }
   // console.log(website);
   
}
// console.log(username);

//++++++++interesting+++++++++++++++++
function addone(num){
   return num + 1
}
addone(5)
const addtwo=function(num){  //way 2 of creating a function
   return num + 2
}
addtwo(5)



