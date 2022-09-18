alert('Công thức phương trình 1 ẩn bậc 1: ax + b = c')
let a = +prompt('Nhập giá trị a: ');
let b = +prompt('Nhập giá trị b: ');
let c = +prompt('Nhập giá trị c: ');
if (a != 0) {
    let x = (c - (b)) / a;
    alert('Giá trị của x là: ' + x);
} else if (a == 0) {
    alert('Phương trình vô nghiệm(Giá trị a phải khác 0)');
}


