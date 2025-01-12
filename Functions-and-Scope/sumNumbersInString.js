function sumNumbersInString(input) {
    let numbers = input.match(/\d+/g) || [];
    let sum = numbers.map(Number).reduce((a, b) => a + b, 0);
    console.log("Nhap chuoi can tinh tong so:");
    console.log("Tong cac so trong chuoi la:", sum);
}
let input = "123abc45";
sumNumbersInString(input);
