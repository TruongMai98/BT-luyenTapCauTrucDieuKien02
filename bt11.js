let ThuNhap = +prompt("Tổng thu nhập 1 tháng ");
let khoanMien = +prompt("Các khoản thu nhập được miễn thuế");
let khoanKhong = +prompt("Các khoản thu nhập không chịu thuế");
let khoanGiamTru = +prompt("Các khoản giảm trừ");

let thuNhapTinhThue = ThuNhap - khoanMien - khoanKhong - khoanGiamTru;

let thueTNCN = 0;

if (thuNhapTinhThue > 5000000) {
    thueTNCN = thuNhapTinhThue * (5 / 100);
    alert("Thuế thu nhập cá nhân là: " + thueTNCN);
} else if (thuNhapTinhThue >= 5000000 && thuNhapTinhThue < 10000000) {
    thueTNCN = thuNhapTinhThue * (10 / 100);
    alert("Thuế thu nhập cá nhân là: " + thueTNCN);
} else if (thuNhapTinhThue >= 10000000 && thuNhapTinhThue < 18000000) {
    thueTNCN = thuNhapTinhThue * (15 / 100);
    alert("Thuế thu nhập cá nhân là: " + thueTNCN);
} else if (thuNhapTinhThue >= 18000000 && thuNhapTinhThue < 32000000) {
    thueTNCN = thuNhapTinhThue * (20 / 100);
    alert("Thuế thu nhập cá nhân là: " + thueTNCN);
} else if (thuNhapTinhThue >= 32000000 && thuNhapTinhThue < 52000000) {
    thueTNCN = thuNhapTinhThue * (25 / 100);
    alert("Thuế thu nhập cá nhân là: " + thueTNCN);
} else if (thuNhapTinhThue >= 52000000 && thuNhapTinhThue < 80000000) {
    thueTNCN = thuNhapTinhThue * (30 / 100);
    alert("Thuế thu nhập cá nhân là: " + thueTNCN);
} else if (thuNhapTinhThue >= 80000000) {
    thueTNCN = thuNhapTinhThue * (35 / 100);
    alert("Thuế thu nhập cá nhân là: " + thueTNCN);
}