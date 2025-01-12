function isEvenAndPrime(num) {
    let isPrime = n => n > 1 && [...Array(n).keys()].slice(2).every(i => n % i !== 0);
    let isEven = num % 2 === 0;
    console.log("Nhap mot so can kiem tra:");
    console.log("So", num, isEven && isPrime(num) ? "la so chan va la so nguyen to." : "khong phai la so chan va la so nguyen to.");
}
let num = 2;
isEvenAndPrime(num);
