function isPrimeArray(arr) {
    return arr.every(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}

console.log(isPrimeArray([2, 3, 5]));
console.log(isPrimeArray([2, 4, 5]));
