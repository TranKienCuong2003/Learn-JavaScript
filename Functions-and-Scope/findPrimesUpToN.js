function findPrimesUpToN(n) {
    let primes = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) primes.push(i);
    }
    console.log("Cac so nguyen to nho hon", n, "la:", primes);
}
