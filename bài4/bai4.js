// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách: sử
// dụng và không sử dụng hàm sort[30 điểm]
// ● Đầu vào: 1 mảng bất kỳ
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự giảm dần
// ● Ví dụ: Cho arr = [3, 25, 38, 49, 12]; In ra arr = [49, 38, 25, 12, 3]

let arr = [3, 25, 38, 49, 12];
for ( i = 0; i < arr.length; i++){
    for (j = i + 1; j < arr.length; j++){
        if (arr[j] > arr[i]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp;
        }
    }

}

console.log(arr);