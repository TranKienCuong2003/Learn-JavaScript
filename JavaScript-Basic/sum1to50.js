const arr = Array.from({ length: 50 }, (_, i) => i + 1);
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
