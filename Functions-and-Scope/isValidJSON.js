function isValidJSON(str) {
    try {
        JSON.parse(str);
        console.log("Chuoi nay la JSON hop le.");
    } catch {
        console.log("Chuoi nay khong phai JSON hop le.");
    }
}
