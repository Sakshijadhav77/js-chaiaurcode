const marvel=['thor','ironman','spidu']
const dc=['superman','flash','batman']


// marvel.push(dc)  //pure second arr ko as element smjhta hai
// console.log(marvel);  
// console.log(marvel[3][1]);  

//push : adds array to existing array
//concat : actually adds arrays

// marvel.concat(dc)
// console.log(marvel);

// const allHeros=marvel.concat(dc)
// console.log(allHeros);

const all_new_heros=[...marvel,...dc]  //elements will be spreaded
console.log(all_new_heros);

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarr=another_arr.flat(Infinity)  //jeudhe arr madhe arr merged ahet te values spread out karun deto

console.log(realarr);

console.log(Array.isArray('Sakshi')); //checks whether it is arr or not
console.log(Array.from('Sakshi')); //converts to arr
console.log(Array.from({name: 'sakshi'}));  //will return empty arr

let score=100
let score2=200
let score3=300

console.log(Array.of(score,score2,score3));  //converts variables into arr





