// Bài 3 : Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó[30 điểm]
// ● Đầu vào: nhập tháng 8 năm 2023
// ● Đầu ra: số ngày trong tháng đó là 31

let month = prompt("Hãy nhập vào tháng bạn tìm kiếm ");
let year = prompt("Hãy nhập vào năm bạn muốn tìm kiếm");

let ofDays;
if (month == "1" || month == "3" || month == "5" || month == "7" || month == "8" || month == "10" || month == "12") {
    ofDays = 31;
} else if (month == "4" || month == "6" || month == "9" || month == "11") {
    ofDays = 30;
} else if (month == "2") {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        ofDays = 29;
    } else {
        ofDays = 28;
    }
} else {
    console.log("Tháng này không hợp lệ ");
}
if (ofDays) {
    console.log("số ngày của tháng " +month + "năm" +year + "là " + ofDays );
}