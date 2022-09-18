let a = +prompt('Nhập chiều dài cạnh hình vuông: ');
if (a >= 0) {
    let s = a * a;
    alert('Diện tích hình vuông là: ' + s);
} else {
    alert('Chiều dài cạnh phải lớn hơn 0');
}