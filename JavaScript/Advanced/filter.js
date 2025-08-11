var arr = [1,2,3,4]

var ans = arr.filter(function(val){
    if(val > 3){
        return true;
    } 
})

console.log(arr);
console.log(ans);

console.log(arr.indexOf(1));