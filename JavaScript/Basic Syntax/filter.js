let numbers = [1,2,3,4,5,6,7,8,9,10]
let newArr = numbers.filter((val) => {
   return val % 2 == 0
});
console.log(newArr);