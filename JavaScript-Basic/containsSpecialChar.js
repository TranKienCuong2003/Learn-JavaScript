function containsSpecialChar(str) {
    return /[^a-zA-Z0-9]/.test(str);
}

console.log(containsSpecialChar("Hello@world"));
console.log(containsSpecialChar("HelloWorld"));