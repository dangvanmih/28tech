// js-tạo độ mượn của trang web khi scroll màn hình 
document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
});
// End-js-tạo độ mượn của trang web khi scroll màn hình