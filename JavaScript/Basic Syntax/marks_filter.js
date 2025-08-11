let marks = [45,90,65,91,56,99,100,89,89.5]
let newArr = marks.filter((val) => {
   return val >=  90
});
newArr.forEach((val) => {
   console.log(val);
});