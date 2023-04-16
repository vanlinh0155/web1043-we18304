
// Đặt thời gian kết thúc đếm ngược
var countDownDate = new Date().getTime() + 12 * 60 * 60 * 1000; // 24 giờ từ thời điểm hiện tại

// Cập nhật thời gian đếm ngược mỗi giây
var x = setInterval(function () {

    // Lấy thời gian hiện tại
    var now = new Date().getTime();

    // Tính khoảng cách giữa thời gian hiện tại và thời gian kết thúc đếm ngược
    var distance = countDownDate - now;

    // Tính toán số giờ, phút và giây còn lại
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị kết quả
    document.getElementById("coutdown").innerHTML = hours + ": "
        + minutes + ": " + seconds + " ";

    // Nếu thời gian đếm ngược kết thúc, hiển thị thông báo
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("coutdown").innerHTML = "Hết giờ ";
    }
}, 1000);