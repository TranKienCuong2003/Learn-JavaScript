function isSymmetricNumber(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}
