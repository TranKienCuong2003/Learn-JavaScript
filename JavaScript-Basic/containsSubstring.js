function containsSubstring(arr, substring) {
    return arr.some(str => str.includes(substring));
}

console.log(containsSubstring(["apple", "banana", "cherry"], "ban"));
