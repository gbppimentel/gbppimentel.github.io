$(function () {
  $(window).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    var $section1 = $("#section1landing");
    var navHeight = $nav.height();
    var section1Height = $section1.height();
    var section1Top = $section1.offset().top;
    var scrollTop = $(this).scrollTop();

    if (scrollTop + navHeight >= section1Top + section1Height) {
      $nav.addClass("scrolled");
    } else {
      $nav.removeClass("scrolled");
    }
  });
});



window.addEventListener('scroll', function() {
  var section1 = document.getElementById('section1landing');
  var section1Rect = section1.getBoundingClientRect();
  var section2 = document.getElementById('section3about');
  var section2Rect = section2.getBoundingClientRect();
  var section3 = document.getElementById('section5speaker');
  var section3Rect = section3.getBoundingClientRect();
  var section4 = document.getElementById('section7event');
  var section4Rect = section4.getBoundingClientRect();
  var section5 = document.getElementById('section8community');
  var section5Rect = section5.getBoundingClientRect();
  var indicators = document.querySelectorAll('.indicators li');

  if (section1Rect.top < window.innerHeight && section1Rect.bottom > 0) {
    indicators[0].classList.add('active');
    indicators[1].classList.remove('active');
    indicators[2].classList.remove('active');
    indicators[3].classList.remove('active');
    indicators[4].classList.remove('active');
  } else if (section2Rect.top < window.innerHeight && section2Rect.bottom > 0) {
    indicators[0].classList.remove('active');
    indicators[1].classList.add('active');
    indicators[2].classList.remove('active');
    indicators[3].classList.remove('active');
    indicators[4].classList.remove('active');
  } else if (section3Rect.top < window.innerHeight && section3Rect.bottom > 0) {
    indicators[0].classList.remove('active');
    indicators[1].classList.remove('active');
    indicators[2].classList.add('active');
    indicators[3].classList.remove('active');
    indicators[4].classList.remove('active');
  } else if (section4Rect.top < window.innerHeight && section4Rect.bottom > 0) {
    indicators[0].classList.remove('active');
    indicators[1].classList.remove('active');
    indicators[2].classList.remove('active');
    indicators[3].classList.add('active');
    indicators[4].classList.remove('active');
  }  else if (section5Rect.top < window.innerHeight && section5Rect.bottom > 0) {
    indicators[0].classList.remove('active');
    indicators[1].classList.remove('active');
    indicators[2].classList.remove('active');
    indicators[3].classList.remove('active');
    indicators[4].classList.add('active');
  }
});

 window.addEventListener('load', function() {
    document.querySelector('.loader-wrapper').classList.add('hidden');
  });

  setTimeout(function() {
          document.querySelector('.loader-wrapper').classList.add('hidden');
        }, 10000);

