function isValidURL(url) {
    let pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    console.log("Chuoi nay", pattern.test(url) ? "la URL hop le." : "khong phai la URL hop le.");
}
