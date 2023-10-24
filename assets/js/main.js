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
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
})