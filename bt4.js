let a = +prompt('Nhập chiều rộng cạnh hình chữ nhật: ')
let b = +prompt('Nhập chiều dài cạnh hình chữ nhật: ')
if (a > 0 && b > 0) {
    let s = a * b;
    alert('Diện tích hình chữ nhật là: ' + s);
} else {
    alert('Chiều dài và chiều rông phải lớn hơn 0');
}
