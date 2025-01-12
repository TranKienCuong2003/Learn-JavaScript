function traverseMultiDimArray(arr) {
    arr.forEach(item => {
        if (Array.isArray(item)) {
            traverseMultiDimArray(item);
        } else {
            console.log("Gia tri:", item);
        }
    });
}
let arr = [1, [2, 3], [4, [5, 6]]];
console.log("Mang can duyet:");
traverseMultiDimArray(arr);
