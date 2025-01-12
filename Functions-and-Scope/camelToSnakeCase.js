function camelToSnakeCase(str) {
    let result = str.replace(/([A-Z])/g, '_$1').toLowerCase();
    console.log("Chuoi sau khi chuyen doi la:", result);
}
