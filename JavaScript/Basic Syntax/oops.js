var bird = {
   walk : false,
   fly : true,
   age : 3,
   chid:[1,2,3,4],
   x:20,
   y:30,

   fly:function(){
      console.log("Bird is Flying",this.x,this.y);
   }
};
for(let i =0;i<bird.chid.length;i++){
   console.log(bird.chid[i]);
}
bird.fly();