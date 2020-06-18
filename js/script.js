/*=============================== 
Preloader
=============================== */

$(window).on('load', function () { // makes sure that the whole site is loaded.
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*=============================== 
Team
=============================== */

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //break from 0 up
            0: {
                items: 1
            },
            //break from 480 up
            480: {
                items: 2
            }
        }
    });
});


/*=============================== 
Progress Bars
=============================== */

$(function () {
    $("#progress-elements").waypoint(function () {

        $(function () {
            $(".progress-bar").each(function () {
                $(this).animate({

                    width: $(this).attr("aria-valuenow") + "%"
                }, 1000);
            });
        });
        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });

});


/*=============================== 
Service-Responsiveness 
=============================== */

$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*=============================== 
Portfolio
=============================== */
$(window).on('load', function () {
    //Initialize Isotope
    $("#isotope-container").isotope({});
    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        //filter portfolio items
        $("#isotope-container").isotope({
            filter: filterValue
        });
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*=============================== 
        Magnifier
=============================== */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', //child item selector by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=============================== 
Testimonials
=============================== */

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/*=============================== 
        Stats
=============================== */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*=============================== 
        Clients
=============================== */

//$(function () {
//    $("#clients-list").owlCarousel({
//        items: 6,
//        autoplay: false,
//        smartSpeed: 700,
//        loop: true,
//        autoplayHoverPause: true,
//        nav: true,
//        dots: true,
//        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
//    });
//});

//$(function () {
//    $("#clients-list").owlCarousel({
//        items: 6,
//        autoplay: false,
//        smartSpeed: 700,
//        loop: true,
//        autoplayHoverPause: true,
//        nav: true,
//        dots: false,
//        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
//    });
//});


/*=============================== 
      Google Maps
=============================== */
//$(window).on('load', function () {
//    //Map Variables
//    var addressString = '230 Broadway, NY, New York 10007, USA';
//    var myLatlng = {
//        lat: 40.712685,
//        lng: -74.005920
//    };
//    //1. Render Map
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 11,
//        center: myLatlng
//    });
//});

/*=============================== 
     Navigation
=============================== */

/*show and hide white navigation*/
$(function () {

    //show navbar on page load
    showHideNav();

    $(window).scroll(function () {
        //show navbar on page scroll
        showHideNav();

    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {
            //show white nav
            $("nav").addClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/portfolio-dark.png");
            //show back to top button
            $("#back-to-top").fadeIn();
        } else {
            //hide white nav
            $("nav").removeClass("white-nav-top");
            //show logo
            $(".navbar-brand img").attr("src", "img/logo/logo-portfolio-white.png");
            //hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

/*=============================== 
    smooth scrolling
=============================== */
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get section id like #about
        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});


/*Mobile Menu*/

$(function () {
    //display mobile navigation
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    //Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});