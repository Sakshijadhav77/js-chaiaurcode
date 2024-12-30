const user={
    username: "sakshi",
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username}, welcome to website`);  //this current context batata h
        
    }
}
user.welcomemsg()
user.username='sam'  //override the prev val and change the val
user.welcomemsg()

// console.log(this);

function chai(){
    console.log(this);
    
}
chai()





