//FOR LOOP
for (let i = 0; i < 10; i++) {   //ctrl+D to select all the duplicate val and change them at same time
    const element = i;
    if(element==5){
        // console.log('5 is best num');
    }
    // console.log(element);
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner loop: ${j} and inner loop ${i}`);
        // console.log(i+' * '+j+' = '+i*j);
        
    }
    
}

let myArr=['flash','batman','superman']
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}

//BREAK AND CONTINUE
for (let index = 1; index <=20; index++) {
    if(index==5){
        // console.log("detected 5");
        break
        
    }
    // console.log(`Value of i is: ${index}`);

}
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("detected 5");
        continue
    }
    console.log(`Value of i is: ${index}`);
}





