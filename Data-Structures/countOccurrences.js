let arr = [1, 2, 3, 2, 3, 1, 1];
let count = {};
arr.forEach(item => count[item] = (count[item] || 0) + 1);
console.log(count);
