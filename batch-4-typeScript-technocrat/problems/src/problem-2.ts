//Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(nums : number[]) : number[]{
    let uniqueNumbers = new Array();
    nums.forEach(numb => {
        if(!uniqueNumbers.includes(numb))
            uniqueNumbers.push(numb);
    })
    return uniqueNumbers;    
}
// console.log(removeDuplicates([1,2,2,2,3,4,4,4,5,6,8,6,7,8]));