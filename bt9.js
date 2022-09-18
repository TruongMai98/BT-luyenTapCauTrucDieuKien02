let a = +prompt('Nhập giá trị a');
let b = +prompt('Nhập giá trị b');
let c = +prompt('Nhập giá trị c');
let ab = a + b;
let bc = b + c;
let ac = a + c;
if (a > 0 && b > 0 && c > 0) {
    if (ab > c) {
        alert('Giá trị c: ' + c + ' đúng');
        if (bc > a) {
            alert('Giá trị a: ' + a + ' đúng');
            if (ac > b) {
                alert('Giá trị b: ' + b + ' đúng');
            } else {
                alert('Giá trị b: ' + b + ' sai');
            }
        } else {
            alert('Giá trị a: ' + a + ' sai');
        }
    } else {
        alert('Giá trị c: ' + c + ' sai');
    }
} else {
    alert('Nhập các giá trị a, b và c phải lớn hơn 0');
}