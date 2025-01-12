function sumRecursive(n) {
    if (n === 1) return 1;
    return n + sumRecursive(n - 1);
}
console.log("Nhap so N:");
let n = 5;
console.log("Tong cac so tu 1 den", n, "la:", sumRecursive(n));
