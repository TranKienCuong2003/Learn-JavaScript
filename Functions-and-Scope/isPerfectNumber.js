function isPerfectNumber(num) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) sum += i + num / i;
    }
    return sum === num && num !== 1;
}
