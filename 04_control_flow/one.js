const isUserloggedIn=true
const temp=41

// if(temp<50){
//     console.log('less than 50');   
// }else{
//     console.log('temp greater than 50');
    
// }
// console.log('execute');  //by default it will execute


//BLOCK SCOPE
// const score=200
// if(score>100){
//     const power='fly'
//     console.log(`user power ${power}`);   
// }
// console.log(`user power ${power}`);  //power not defined aayega coz out of scope
// //if var lagake declare kiya than it can be accessible outside the scope also

const bal=1000

// if(bal>500)console.log('test'),
// console.log('test2');


//NESTED CONDITIONS
// if(bal<500){
//     console.log('less than');
    
// }else if(bal<900){
//     console.log('less than 900');
    
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true



if(userLoggedIn && debitCard && 2==3){
    console.log('allow to buy courses');
}
if(loggedInFromGoogle || loggedInFromEmail){   //to test multiple conditions
    console.log('user logged in');
    
}






