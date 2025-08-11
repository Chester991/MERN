let nums = [1, 2, 3, 4, 5];
nums.map((val) => {
  console.log(val);
});
let newArr = nums.map((val) => {
   return val* val;
});
console.log(newArr)