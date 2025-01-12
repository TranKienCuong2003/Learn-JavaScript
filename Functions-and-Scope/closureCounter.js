function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log("Ham da duoc goi", count, "lan.");
    };
}
let counter = createCounter();
counter();
counter();
counter();
