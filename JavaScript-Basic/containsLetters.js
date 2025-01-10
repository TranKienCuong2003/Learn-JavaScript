function containsLetters(str, count) {
    return str.replace(/[^a-zA-Z]/g, "").length === count;
}

console.log(containsLetters("Hello", 5)); 
console.log(containsLetters("Hello!", 5));
console.log(containsLetters("Hello", 4));
