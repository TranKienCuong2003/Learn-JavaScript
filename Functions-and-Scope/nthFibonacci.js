function nthFibonacci(n) {
    if (n <= 1) return n;
    let result = nthFibonacci(n - 1) + nthFibonacci(n - 2);
    console.log("So Fibonacci thu", n, "la:", result);
}
