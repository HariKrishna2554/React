// Numbers, Strings copy & store the value
let number = 1;
let number2 = number;
number = 2;
console.log(number2);

// Objects, Array only copy the pointer, which first object stored in storage.
const person = {
    name: "s",
    age: 2 
}
const person2 = person;
person.name = "x";
console.log(person2);

// correct way of copy the object
const per = {
    name: "s",
    age: 2 
}
const per2 = {
    ...per
}
per.name = "x";
console.log(per2);