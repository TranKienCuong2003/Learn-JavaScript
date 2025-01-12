function isValidEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("Email nay", pattern.test(email) ? "hop le." : "khong hop le.");
}
