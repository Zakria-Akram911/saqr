$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 40) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
});

// For Owl
$(".my-services-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1025: {
      items: 3,
    },
  },
});

// For Hamburger
$(document).ready(function () {
  $(".hamburger button").click(function () {
    $(this).toggleClass("active");
    $("nav.navbar").toggleClass("active");
  });
});
