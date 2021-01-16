$(function() {
  $(".nav-button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".nav-wrap")
        .addClass("close")
        .removeClass("open");
    } else {
      $(this).addClass("active");
      $(".nav-wrap")
        .addClass("open")
        .removeClass("close");
    }
  });
});
let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
}
new Swiper('.swiper-container', swipeOption);