let numbers = [8,9,0,2,33,4,1]

const result = numbers.reduce((prevValue,currValue) => {
   if(prevValue > currValue){
      return prevValue
   }
   else{
      return currValue
   }
});

console.log(result);