function containsKeyword(str, keyword) {
    return str.includes(keyword);
}

console.log(containsKeyword("Hello, world!", "world"));
console.log(containsKeyword("Hello, world!", "moon"));
