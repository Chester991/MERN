let greet = function(){
   console.log("Hello World");
}
function callTwice(func){
   func();
   func();
}
callTwice(greet);

function rollDie(){
   const roll = Math.floor(Math.random() * 15) + 1;
   console.log(roll);
}
callTwice(rollDie);