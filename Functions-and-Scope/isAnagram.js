function isAnagram(str1, str2) {
    let format = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    console.log("Nhap chuoi thu nhat:");
    console.log("Nhap chuoi thu hai:");
    console.log("Hai chuoi", format(str1) === format(str2) ? "la anagram." : "khong phai la anagram.");
}
let str1 = "listen";
let str2 = "silent";
isAnagram(str1, str2);
