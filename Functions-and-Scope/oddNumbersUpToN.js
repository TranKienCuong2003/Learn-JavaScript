function oddNumbersUpToN(n) {
    return Array.from({ length: n }, (_, i) => i + 1).filter(num => num % 2 !== 0);
}
