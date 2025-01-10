function average(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));
