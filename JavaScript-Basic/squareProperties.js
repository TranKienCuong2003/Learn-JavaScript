function squareProperties(sideLength) {
    const perimeter = 4 * sideLength;
    const area = sideLength * sideLength;
    return { perimeter, area };
}

console.log(squareProperties(5));
