function isFibonacciNumber(num) {
    let isPerfectSquare = x => Math.sqrt(x) % 1 === 0;
    let result = isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
    console.log("So", num, result ? "la so Fibonacci." : "khong phai la so Fibonacci.");
}
