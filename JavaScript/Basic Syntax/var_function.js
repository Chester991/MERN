function fun(){
   let a = 5;
   if(a===5){
      var b = 10; //function scope .. variable b is accessible inside the whole function
      console.log("Inside ",b); 
   }
   console.log("Outside ",b);
}
fun();