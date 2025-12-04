
let students =["Shishir", "Angel", "Sabin"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

for(let i=0;i<students.length;i++){
    console.log(students[i]);
}

let a=[1,2];
a.push(3);//add at end
console.log(a);

let b=[1,2,3];
b.pop();//delete from end
console.log(b);

let c=[2,3];
c.unshift(1);//add at front
console.log(c);

let d=[1,2,3];
d.shift();//delete from front
console.log(d);

let y=[10,20,30];
console.log(y.length);//find length

let x=["a","b","c"];
console.log(x.includes("b"));//boolean value

//for loop-->fetch only selected size of elements 
let arr=[1,2,3];
for(let i=0;i<3;i++){
    console.log(arr[i]);
}

//forEach-->no return new array && fetch all the elements of an array
arr.forEach(n=>{
    console.log(n);
})

//map--> return new array
let marks=[45,67,89,23,59];
let updated=marks.map(m=>m+3);
console.log(updated);

//filter-->print all matching elements
let marks1=[45,67,89,23,59];
let filter1=marks.filter(m=>m>50);
console.log(filter1);

//find-->print only first matching element
let marks2=[45,67,89,23,59];
let find11=marks.find(m=>m>50);
console.log(find11);
