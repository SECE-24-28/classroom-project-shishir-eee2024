let user={
    name:"John",
    age:20,
    
};

console.log(Object.keys(user));

console.log(Object.values(user));

user.city="Delhi";
console.log(user);

delete user.age;
console.log(user);