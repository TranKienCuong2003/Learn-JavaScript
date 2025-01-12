let obj = { a: 10, b: 20, c: 30 };
let maxKey = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
console.log(maxKey);
