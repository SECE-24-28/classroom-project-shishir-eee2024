
//print
console.log("Shishir Kumar Chaudhary");
console.log("Nepal");
console.log("Sri Eshwar College of Engineering");
console.log("Department of Electrical and Electronics Engineering");

//var
var a=5;
var b=10;
var product=a*b;
console.log("The product of a and b:",product);

//Re-assigning
var a=2.25;
var b=7;
var product=a*b;
console.log("The product of a and b:",product);

//Re-declaring
a=4;
b=3;
product=a*b;
console.log("The product of a and b:",product);

//let
let c=7;
let d=9;
sum=c+d;
console.log("The sum of c and d:",sum);

//Re-assigning
c=5.25;
d=9.27;
sum=c+d;
console.log("The sum of c and d:",sum);

//const
const pi=3.14159265;
const r=3.5;
area=pi*r*r;
console.log("The area of circle is",area);

let name="Shishir";
let age=21;
let isStudent=true;
let s;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof x);

//function
function greet(){
    console.log("Namaste");
}
greet();

function add(){
    let a=3;
    let b=6;
    let sum=a+b;
    console.log("The sum is: ", sum);
}
add();

//function using arguments
function add1(a,b){

    let sum=a+b;
    console.log("The sum is: ", sum);
}
add1(3,7);

//arrow function
const greeting =()=>{
    console.log("Good Afternoon");
}
greeting();

const addition=(a,b)=>{
    return a+b;
}
let result=addition(9,7);
console.log("The sum is :",result);