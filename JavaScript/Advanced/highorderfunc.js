function add(a, b, cb) {    // cb means callback
    let result = a+b;
    cb(result);
}

// This add function is a high order function
// It is accepting cb function as an arguement
// Jis function ko call kiya jata hai usko bolte hai callback function

add(2,4,function(val){
    console.log(val);
});

add(100,20,function(val){
    console.log(val);
});