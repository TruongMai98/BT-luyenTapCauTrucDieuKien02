function sTotal() {
    let money = document.getElementById('money').value;
    let month = document.getElementById('month').value;
    let intersetRate = document.getElementById('interset').value;
    let totalInterset = 0;
    if (month > 0 && money >= 0 && intersetRate >= 0) {
        for (let i = 0; i < month; i++) {
            totalInterset = money * (intersetRate / 100) / 12 * month;
            document.getElementById('result').innerHTML = totalInterset;
        }
    } else {
        alert('Tiền gửi, lãi suất và tháng phải lớn hơn 0');
    }
}
