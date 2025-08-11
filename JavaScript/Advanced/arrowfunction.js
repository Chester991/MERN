// Normal Functions :-

function helloworld(){
    console.log("Hello World");
}

 // Arrow Functions :-
 /* const <function-name> = () => {

    }

() denotes function and we can pass arguments inside it

*/

const worldhello = () => {
    console.log("Yelloo");
}

helloworld();
worldhello();



const add = (a,b) => {
    return a+b;
}

console.log(add(2,3));

// we can omit the return keyword by removing {}

const addV2 = (a,b) => a+b; // will do the same work as add