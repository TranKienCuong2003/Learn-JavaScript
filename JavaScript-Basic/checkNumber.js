function checkNumber(num) {
    return num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero';
}

console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));
