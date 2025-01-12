function validateFunction(func, input, expectedOutput) {
    let result = func(input);
    console.log("Kiem tra ham voi dau vao:", input);
    console.log("Dau ra thuc te:", result);
    console.log("Dau ra mong muon:", expectedOutput);
    console.log("Ket qua kiem tra:", result === expectedOutput ? "Dung" : "Sai");
}
function square(x) {
    return x * x;
}
validateFunction(square, 5, 25);
