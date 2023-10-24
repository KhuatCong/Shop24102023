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