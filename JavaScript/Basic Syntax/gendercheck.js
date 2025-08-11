const allusers = [{
    // every field of the array is an object in itself
    firstname : "harkirat",
    gender : "male"
},{
    firstname : "hitesh",
    gender : "male"     
}, {
    firstname : "priya",
    gender : "female"
}
]

for(let i = 0;i<allusers.length;i++){
    if(allusers[i]["gender"] == "male"){
        console.log(allusers[i]["firstname"])
    }
}