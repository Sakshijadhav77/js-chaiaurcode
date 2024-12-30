//FOR OF LOOP

["","",""]
[{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);    //condition increment not required
}
const greetings="hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//MAPS
//sirf unique values print karega 
const map=new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')
map.set('IN','INDIA')

// console.log(map);
for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}

const myObj={
    'game1':'NFS',
    game2:'Spiderman'
}

//doesn't work on objects
// for (const [key,value] of myObj) {
//     console.log(key,':-',value);
// }





