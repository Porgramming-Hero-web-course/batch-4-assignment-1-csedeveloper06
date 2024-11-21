
// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

function getProperty< T,K extends keyof T >(object : T , key : K) : T[K]{
    return object[key];
}

// type Book = {
//     name : string;
//     author : string;
//     category : string;
// };

// const myBook : Book = {
//     name : "Web Development",
//     author : "Cris James",
//     category : "Programming"
// };

// const person = { name: "Alice", age: 30 };

// const result = getProperty(person, "name");
// console.log(result);

