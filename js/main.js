(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  var allReviews = $('#reviews').children('.review');
  allReviews.hide();
  transitionReview(null, allReviews.first());


  function transitionReview(from, to) {
    function next() {
      var nextTo;
      if (to.is(":last-child")) {
        nextTo = to.closest("#reviews").children(".review").first();
      } else {
        nextTo = to.next();
      }

      to.fadeIn(500, function () {
        setTimeout(function () {
          transitionReview(to, nextTo);
        }, 5000);
      });
    }

    if (from) {
      from.fadeOut(500, next);
    } else {
      next();
    }
  }

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // const animtime = 9;

  // var reviews_children = $('#reviews').children();
  // console.log(reviews_children);
  // var start_time = (reviews_children.length - 1) * animtime;

  // for (var i = 1; i < reviews_children.length; ++i) {
  //   $(reviews_children[i]).css("animation-delay", (animtime * i) + "s");
  //   start_time += animtime;
  // }

})(jQuery); // End of use strict

$('.btn').mouseup(function () {
  this.blur();
})

$('video').each(function () {
  if ($(this).is(":in-viewport")) {
    $(this)[0].play();
  } else {
    $(this)[0].pause();
  }
})
