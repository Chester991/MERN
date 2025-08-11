const obj = {
    value : 20,
    myfunction : function(){
        console.log(this.value)
    }
}

obj.myfunction();

// this keyword is referring to the object
