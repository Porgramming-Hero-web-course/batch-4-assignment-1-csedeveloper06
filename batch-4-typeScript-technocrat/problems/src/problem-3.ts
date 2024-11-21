//Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(sentence : string, word : string) : number{
    const regex = new RegExp(`\\b${word}\\b`, 'g');
    const matches = sentence.match(regex);
    return matches ? matches.length : 0;
}

// console.log(countWordOccurrences("Programming Hero is an excellent excellent excellent excellent excellent Academy", "excellent"));