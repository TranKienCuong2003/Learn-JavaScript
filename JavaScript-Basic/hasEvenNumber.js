function hasEvenNumber(arr) {
    return arr.some(num => num % 2 === 0);
}

console.log(hasEvenNumber([1, 3, 5, 7]));
console.log(hasEvenNumber([1, 2, 3, 4]));
