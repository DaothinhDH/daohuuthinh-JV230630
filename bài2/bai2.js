// Bài 2 : Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng(space) ở đầu và cuối
// câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường
// ● Đầu vào: Câu là một chuỗi các ký tự
// ● Đầu ra: In ra chuỗi đã được chuẩn hóa.
// ● Ví dụ
// ○ Cho " this is A tEst "; In ra "This Is A Test"
// ○ Cho "heLlo riKkei academy"; In ra "Hello Rikkei Academy”

let str = prompt("Hãy nhập vào câu bạn muốn chuẩn hóa");

str = str.trim();
str = str.toLowerCase();
let string = str.split(" ")

for (let i = 0; i < string.length; i++) {
    let firstChar = string[i][0].toUpperCase();
    let nomarStr = firstChar + string[i].slice(1);
    string[i] = nomarStr;
}

let nomarString = string.join(" ");
console.log(nomarString);



