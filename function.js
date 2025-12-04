
//function declaration
function greet(){
    console.log("Hello");
}
greet();

//function expression
let greet1=function(){
    console.log("Hi");
}
greet1();

//arrow function
let greet2=()=>{
    console.log("Wait a minute, Who are you?");
}
greet2();

//function with return
const add1=(a,b)=>{
    return a+b;
}
let result=add1(4,9);
console.log(result);

//function without return
const add=(a,b)=>a+b;
console.log(add(5,2));