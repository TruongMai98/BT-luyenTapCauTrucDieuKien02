let meter = +prompt('Nhập giá trị mét: ');
if (meter >= 0) {
    let feet = meter * 3.2808;
    alert('feet = ' + feet);
} else {
    alert('Nhập giá trị mét lớn hơn 0');
}