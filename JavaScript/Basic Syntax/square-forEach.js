let numbers = [1,2,3,4,5,6,7,8]
numbers.forEach(function square(val){
   console.log(val * val)
});

numbers.forEach((val) => {
   console.log(val * val);
});