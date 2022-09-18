alert('Công thức phương trình 1 ẩn  bậc 2 là: ax^2 + bx + c = 0');
let a = +prompt('Nhập giá trị a');
let b = +prompt('Nhập giá trị b');
let c = +prompt('Nhập giá trị c');
let delta = 0;
if (a != 0) {
    delta = Math.pow(b, 2) - 4 * a * c;
    alert("delta = " + delta);
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / 2 * a;
        let x2 = (-b - Math.sqrt(delta)) / 2 * a;
        alert("x1 = " + x1 + " và " + "x2 = " + x2);
    } else if (delta == 0) {
        let x = -b / 2 * a;
        alert('x = ' + x);
    } else if (delta < 0) {
        alert('Phương trình vô nghiệm');
    }
} else if (a == 0 && b != 0) {
    let x = -c / b;
    alert('Giá trị của x là: ' + x);
} else if (a == 0 && b == 0) {
    alert('Phương trình vô nghiệm');
}
