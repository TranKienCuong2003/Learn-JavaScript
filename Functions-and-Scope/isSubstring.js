function isSubstring(mainStr, subStr) {
    console.log("Nhap chuoi chinh:");
    console.log("Nhap chuoi con:");
    console.log("Chuoi con", mainStr.includes(subStr) ? "co trong chuoi chinh." : "khong co trong chuoi chinh.");
}
let mainStr = "hello world";
let subStr = "world";
isSubstring(mainStr, subStr);
