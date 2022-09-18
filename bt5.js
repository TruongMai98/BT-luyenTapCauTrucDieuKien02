let a = +prompt('Nhập giá trị cạnh dài: ');
let b = +prompt('Nhập giá trị cạnh ngắn: ');
if (a > 0 && b > 0) {
    let s = (a * b) / 2;
    alert('Diện tích hình tam giác vuông là: ' + s);
} else {
    alert('Nhập giá trị lớn hơn 0');
}