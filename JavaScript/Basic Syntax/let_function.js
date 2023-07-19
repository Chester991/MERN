function fun(){
   let a = 5;
   if(a===5){
      let b = 10; // let keyword makes b accessible inside block only we cannot access it outside the scope.
      console.log("Inside ",b); 
   }
   console.log("Outside ",b);
}
fun();