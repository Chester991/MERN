colors = ["red","orange","yellow","green","blue","violet"];
console.log(colors.splice(1,2));
//Starting from 1 i want to remove 2 elements
colors = ["red","orange","yellow","green","blue","violet"];
colors.splice(2,0,"sky-blue");
console.log(colors);
colors.splice(5,0,"sky-blue");