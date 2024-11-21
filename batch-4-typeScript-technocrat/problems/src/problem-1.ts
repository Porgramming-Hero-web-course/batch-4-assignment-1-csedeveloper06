
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(numbs :number[]) : number{
    return numbs.reduce( (accumulator, currentValue)=> accumulator + currentValue , 0 );
}

// console.log(sumArray([2,3,2,5,4]));
