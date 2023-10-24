function openNav() {
    document.getElementById('menu-mobile').style.width = "70%";
    document.getElementById('overlay').style.width = "30%";
}

function closeNav() {
    document.getElementById('menu-mobile').style.width = "0%";
    document.getElementById('overlay').style.width = "0%";
}
$(function () {
    $('.content-slide-home').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('.prev-banner'),
        nextArrow: $('.next-banner'),
    });
})

$(function () {
    $('.list-sale').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('.prev-sale'),
        nextArrow: $('.next-sale'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });
})

if ($('#back-to-top').length) {
    var scrollTrigger = 100, //khoảng cách đến khi bắt đầu hiện nút (px)
        backToTop = function () {
            var scrollTop = $(window).scrollTop(); //lấy khoảng cách scroll hiện tại tính lên Top
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').css("display","block");
            } else {
                $('#back-to-top').css("display","none");
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop(); //gọi function 'backToTop()' mỗi khi người dùng cuộn trang
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 400); //thời gian kéo lên top tính bằng mili giây 
    });

}