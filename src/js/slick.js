$(document).ready(() => {
  const slidesToShowNav = $(window).innerWidth() > 768 ? 3 : 2;
  console.log(slidesToShowNav);

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav"
  });
  $(".slider-nav").slick({
    slidesToShow: slidesToShowNav,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    arrows: false
  });
});
