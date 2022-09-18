let price = +prompt('Nhập giá 1 kWh đơn vị VND');
let power = +prompt('Nhập sản lượng điện tiêu thụ');
if (price > 0 && power > 0) {
    let total = price * power;
    alert('Giá tiền: ' + total + ' VND');
} else {
    alert('Các giá trị nhập vào phải lớn hơn 0');
}