//hello(goodbye);
// we are passing the name of the function as an argument

function hello(callback){
    console.log("Hello!")
    callback();
}

function goodbye(){
    console.log("Goodbye!")
}

function billi() {
    console.log('Billi');
}

// if hello function takes a lot of time to process JS isnt going to wait around
// before executing goodbye function 
//let s = 100;
function ayushPagalHai(input) {
    input()
}

ayushPagalHai(goodbye);
ayushPagalHai(billi);