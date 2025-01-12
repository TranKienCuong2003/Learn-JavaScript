function sum2DArray(arr) {
    let sum = arr.flat().reduce((a, b) => a + b, 0);
    console.log("Tong cac so trong mang la:", sum);
}
