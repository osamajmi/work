function initializeCarousel() {
    const owl = $('.custom-carousel');
    if (window.innerWidth < 1000) {
        // Initialize the carousel for mobile and tablet
        if (!owl.hasClass('owl-loaded')) {
            owl.owlCarousel({
                loop: true,
                // center:true,
                dots:false,
                margin: -20,

                resposive: true,
                // stagePadding: 15,  
                responsive: {
                    0: { items:1.6},        // Mobile view
                    600: { items: 2.3 }       // Tablet view
                }
            });
        }
    } else {
        // Destroy the carousel if initialized and window width is above 1000px
        if (owl.hasClass('owl-loaded')) {
            owl.trigger('destroy.owl.carousel');
            owl.removeClass('owl-loaded');
            owl.find('.owl-stage-outer').children().unwrap();
        }
    }
}

// Initialize carousel on document ready
$(document).ready(function() {
    initializeCarousel();
});

// Re-initialize or destroy carousel on window resize
$(window).resize(function() {
    initializeCarousel();
});


$(function () {
    // Owl Carousel
    var owl = $(".Our-Comfort");
    owl.owlCarousel({
      // items: 6,
      margin: -20,
      loop: true,
      nav: false,
      autoplay:3000,  
      resposive: true,
      // stagePadding: 15,
      center: true,
      dots: false,
      responsive: {
        0: {
          items: 1.3
        },

        600: {
          items: 2.5  
        },

        1024: {
          items: 4
        },

        1366: {
          items: 4
        }
      }
    });
    $('.rec_next').click(function () {
      owl.trigger('next.owl.carousel');
    });

    $('.rec_pre').click(function () {
      owl.trigger('prev.owl.carousel');
    });
  });

  // our blog section code  start here
// bra slider filter 

$(document).ready(function() {
    // Initialize all Owl Carousels
    $('.bra-carousel, .nightwear-carousel, .sleepwear-carousel').owlCarousel({
        loop: true,
        margin: -20,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1.8
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4.3
            }
        }
    });

    // Hide all carousels except for the first one (Bra)
    $('.main').hide();
    $('.bra-carousel').show();

    // Handle filter button clicks to show the relevant carousel
    $('.filter-buttons button').on('click', function() {
        var carouselClass = $(this).data('carousel');

        // Remove active class from all buttons and add it to the clicked button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        // Show all carousels when 'All' is clicked
        if (carouselClass === 'all') {
            $('.main').show(); // Show all carousels
        } else {
            $('.main').hide(); // Hide all carousels
            $('.' + carouselClass).show(); // Show the selected carousel
        }
    });
});

$(document).ready(function () {
    // Autoplay setting based on screen width
    let autoplaySetting = $(window).width() > 700;


    const owl = $('#sliderfocus');
    owl.owlCarousel({
      loop: true,
      // autoplay:5000,
      center: true,
      margin: 10,
      responsive: {
        0: {
          items: 1.5 // Mobile
        },
        425: {
          items: 1.5 // Tablet
        },
        768: {
          items: 2.5 // Medium devices
        },
        1024: {
          items: 4 // Large devices
        },
        1440: {
          items: 5 // Extra large devices
        }
      }
    });

    $('#next').click(function () {
      owl.trigger('next.owl.carousel');
    });

    $('#prev').click(function () {
      owl.trigger('prev.owl.carousel');
    });

  });

  $(function () {
    // Owl Carousel
    var owl = $(".my-recommended-owl");
    owl.owlCarousel({
      // items: 6,
      margin: -20,
      loop: true,
      nav: false,
      autoplay:3000,  
      resposive: true,
      // stagePadding: 15,
      center: true,
      dots: false,
      responsive: {
        0: {
          items: 1.3
        },

        600: {
          items: 2.8
        },

        1024: {
          items: 4
        },

        1366: {
          items: 4
        }
      }
    });
    $('.rec_next').click(function () {
      owl.trigger('next.owl.carousel');
    });

    $('.rec_pre').click(function () {
      owl.trigger('prev.owl.carousel');
    });
  });

 


 // our blog section code  start here

 



 window.addEventListener('load', videoScroll);
 window.addEventListener('scroll', videoScroll);

 function videoScroll() {

   if (document.querySelectorAll('video[autoplay]').length > 0) {
     var windowHeight = window.innerHeight,
       videoEl = document.querySelectorAll('video[autoplay]');

     for (var i = 0; i < videoEl.length; i++) {

       var thisVideoEl = videoEl[i],
         videoHeight = thisVideoEl.clientHeight,
         videoClientRect = thisVideoEl.getBoundingClientRect().top;

       if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
         thisVideoEl.play();
       } else {
         thisVideoEl.pause();
       }

     }
   }

 }




 /* mega menu */

 $(document).ready(function () {
   $('.navbar-light .dmenu').hover(function () {
     $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
   }, function () {
     $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
   });
 });

 $(document).ready(function () {
   $(".megamenu").on("click", function (e) {
     e.stopPropagation();
   });
 });