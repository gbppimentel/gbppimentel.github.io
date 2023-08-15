(function ($) {
  $(document).ready(function () {
    "use strict";

    // TYPEWRITER
    $("#typewriter").typewriter({
      prefix: "",
      text: ["Please wait", "Still loading", "Almost done"],
      typeDelay: 100,
      waitingTime: 1500,
      blinkSpeed: 800,
    });

    // SANDWICH MENU AUDIO
    document
      .getElementById("sandwich-btn")
      .addEventListener("click", function (e) {
        document.getElementById("link").play();
      });

    // SANDWICH BUTTON
    $(".sandwich-btn").on("click", function (e) {
      if ($(".navigation-menu").hasClass("open")) {
        $("body").toggleClass("overflow");
        $(".sandwich-text").removeClass("move-up");
        $(".navigation-menu").removeClass("open");
        $(".navigation-menu").css("transition-delay", "1s");
        $(".navigation-menu .nav-bg").css("transition-delay", "0.6s");
        $(".navigation-menu .nav-bg2").css("transition-delay", "0.2s");
      } else {
        $(".navigation-menu").addClass("open");
        $("body").toggleClass("overflow");
        $(".sandwich-text").addClass("move-up");
        $(".navigation-menu").css("transition-delay", "0s");
        $(".navigation-menu .nav-bg").css("transition-delay", "0.4s");
        $(".navigation-menu .nav-bg2").css("transition-delay", "0.8s");
      }
      $(this).toggleClass("open");
    });

    // EQUALIZER TEXT
    $(".equalizer").on("click", function (e) {
      $(".sound-text").toggleClass("move-up");
    });

    // EQUALIZER TOGGLE
    var source = "audio/audio.mp3";
    var audio = new Audio(); // use the constructor in JavaScript, just easier that way
    audio.addEventListener(
      "load",
      function () {
        audio.play();
      },
      true
    );
    audio.src = source;
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.2;

    $(".equalizer").click();
    var playing = true;
    $(".equalizer").on("click", function (e) {
      if (playing == false) {
        audio.play();
        playing = true;
      } else {
        audio.pause();
        playing = false;
      }
    });

    // PAGE TRANSITION
    $(".navigation-menu li a").on("click", function (e) {
      $(".transition-overlay").toggleClass("active");
    });

    $(".navigation-menu li a").on("click", function (e) {
      e.preventDefault();
      var goTo = this.getAttribute("href");

      setTimeout(function () {
        window.location = goTo;
      }, 1000);
    });

    // MASONRY
    var $container = $(".works ul").imagesLoaded(function () {
      $container.isotope({
        itemSelector: ".works ul li",
        layoutMode: "masonry",
      });
    });

    // ISOTOPE FILTER
    var $container = $(".works ul");
    $container.isotope({
      filter: "*",
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });

    $(".works-filter li a").on("click", function (e) {
      $(".works-filter li a.current").removeClass("current");
      $(this).addClass("current");

      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
      return false;
    });

    // PARALLAX
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 0,
      responsive: true,
    });

    // SLIDER

    var interleaveOffset = 0.5;
    var swiperOptions = {
      loop: true,
      speed: 1000,
      parallax: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        progress: function () {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress;
            var innerOffset = swiper.width * interleaveOffset;
            var innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-inner").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function () {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function (speed) {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        },
      },
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // SWIPER CAROUSEL
    var $swiper = $(".swiper-carousel");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    var $bottomSlideContent = null; // Slide content that gets passed between the
    var mySwiper = new Swiper(".swiper-carousel", {
      spaceBetween: 0,
      slidesPerView: 2,
      centeredSlides: true,
      roundLengths: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      loopAdditionalSlides: 0,
    });

    // EQUALIZER
    function randomBetween(range) {
      var min = range[0],
        max = range[1];
      if (min < 0) {
        return min + Math.random() * (Math.abs(min) + max);
      } else {
        return min + Math.random() * max;
      }
    }

    $.fn.equalizerAnimation = function (speed, barsHeight) {
      var $equalizer = $(this);
      setInterval(function () {
        $equalizer.find("span").each(function (i) {
          $(this).css({ height: randomBetween(barsHeight[i]) + "px" });
        });
      }, speed);
      $equalizer.on("click", function (e) {
        $equalizer.toggleClass("paused");
      });
    };

    var barsHeight = [
      [2, 10],
      [5, 14],
      [11, 8],
      [1, 19],
      [9, 1],
      [13, 3],
    ];
    $(".equalizer").equalizerAnimation(250, barsHeight);

    // DATA BACKGROUND IMAGE
    var pageSection = $(".bg-image");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css(
          "background-image",
          "url(" + $(this).data("background") + ")"
        );
      }
    });
  });
  // END JQUERY

  // COUNTER
  if (!document.getElementById("odometer")) {
  } else {
    var lastWasLower = false;
    $(document).scroll(function () {
      var p = $("#odometer");
      var position = p.position();
      var position2 = position.top;

      if ($(document).scrollTop() > position2 - 300) {
        if (!lastWasLower) $("#1").html("29");
        $("#2").html("37");
        $("#3").html("78");

        lastWasLower = true;
      } else {
        lastWasLower = false;
      }
    });
  }

  // WOW ANIMATION
  wow = new WOW({
    animateClass: "animated",
    offset: 0,
  });
  wow.init();

  // PRELOADER
  $(window).load(function () {
    $("body").addClass("page-loaded");
  });
})(jQuery);

function scrollToSection(sectionClass) {
  const section = document.querySelector("." + sectionClass);

  if (section) {
    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetCorrection = 50; // Adjust this value as needed
    window.scrollTo({
      top: offsetTop - offsetCorrection,
      behavior: "smooth",
    });
  }
}
