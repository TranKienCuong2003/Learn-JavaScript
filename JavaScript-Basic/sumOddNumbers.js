function sumOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOddNumbers([1, 2, 3, 4, 5]));
