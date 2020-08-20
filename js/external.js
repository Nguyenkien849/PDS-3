$(document).ready(function () {
    // Thêm class
    $('.nav-mobile').click(function() {
        $('.menu-mobile, .background').addClass('show');
    });

    // Xóa class
    $('.close, .background, .menu-mobile a').click(function() {
        $('.menu-mobile, .background').removeClass('show');
    });

    $('.backtotop').click(function() {
        $('html, body').animate({scrollTop: 0}, 1500, "easeInOutExpo");
    });
    // Khi click chuyển đến phần tử cần đến
    $('.sofa').click(function() {
        $('html, body').animate({scrollTop: $('.sofas').offset().top}, 1000, "easeInOutExpo");
    });
    // Khi click chuyển đến phần tử cần đến
    $('.teatable').click(function() {
        $('html, body').animate({scrollTop: $('.teatables').offset().top}, 1000, "easeInOutExpo");
    });

    // search
    $('.slider').click(function() {
        $('.search, .background-search').addClass('down');
    });

    $('.search, .background-search').click(function() {
        $('.search, .background-search').removeClass('down');
    });

});