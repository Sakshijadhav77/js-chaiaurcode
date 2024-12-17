//whenever date is being declared it counts from 1st January 1970

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());  //define an obj

//Date is an obj
console.log(typeof myDate);
//  let myCreatedDate=new Date(2023, 0, 23)
//  let myCreatedDate=new Date(2023, 0, 23, 5, 3)
let myCreatedDate=new Date("07-07-2002")

//  console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  //convert in seconds

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:'long',
})



