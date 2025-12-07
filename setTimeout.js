
//setTimeout
setTimeout(()=>{j
    console.log("Hi");
},2000);

setTimeout(()=>{
    console.log("Hello");
},4000);

setTimeout(()=>{
    console.log("How are you?");
},6000);

setTimeout(()=>{
    console.log("Wait a minute. Who are you?");
},8000);


setTimeout(()=>{
    console.log("Ohh Sorry.Bye");
},10000);

//setInterval
setInterval(function(){
    console.log("Hello!");
},1000);

//To achieve asynchronous
let myPromise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Task done successfully");
    }
    else{
        reject("Task failed");
    }
});

myPromise.then((message)=>console.log(message));
myPromise.catch((error)=>console.log(error));