function multiplyMatrices(a, b) {
    let result = Array(a.length).fill().map(() => Array(b[0].length).fill(0));
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
            for (let k = 0; k < b.length; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    console.log("Ket qua cua phep nhan ma tran la:", result);
}
