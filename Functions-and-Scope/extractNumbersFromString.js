function extractNumbersFromString(str) {
    return str.match(/\d+/g).map(Number);
}
