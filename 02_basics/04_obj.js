const tinderUser=new Object() //singleton obj
// const tinderUser={}  //non singleton

tinderUser.id='123abc'
tinderUser.name='Sammy'
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regUser={
    email:'some@gmail.com',
    fullname:{
        username: {
            firstname: 'sak',
            lastname: 'jadh'
        }
    }
}


console.log(regUser.fullname);

const obj1={1: 'a',2: 'b'}
const obj2={3: 'a',4: 'b'}
const obj4={5: 'a',6: 'b'}

// const obj3=Object.assign({},obj1,obj2,obj4)  //{} combines values of both arrays and gives guaranteed result
// if {} ye nai de rhe all the values are going into obj1

const obj3={...obj1,...obj2} //to combine two or more objects
console.log(obj3);

//database se values aayengi
const users=[
    {
        id:1,
        mail:'sak@gmail.com'
    },
    {
        id: 2,
        mail: 'jadhav@gmail.com'
    },
    {

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  //every key value is converted to an array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));



//DESTRUCTURING OF ARRAYS
const course={
    coursename: 'js in hin',
    price: '999',
    courseInstructor: 'sak'
}

const {courseInstructor:instructor}=course
console.log(instructor);

 



