function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5]));
