const coding=['js','rb','java','py','cpp']

//HIGHER ORDER FUNCTIONS
coding.forEach( function (item) {
    // console.log(item);
    
} )
//array name coding
//funct functname (paranthesis){parameters}

coding.forEach( (item)=>{
    // console.log(item);
    
} )

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)  //only reference dena h funct ka '()' ye nai lagana

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
    
} )

const myCoding=[
    {
        langName:'javascript',
        langFileName:'js'
    },
    {
        langName:'java',
        langFileName:'java'
    },
    {
        langName:'python',
        langFileName:'py'
    },
]

myCoding.forEach((item)=>{
    console.log(item.langName);
    
})



