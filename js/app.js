$(function () {


    /* Header Fixed
    ================================*/
    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Slider https://kenwheeler.github.io/slick/
    ================================*/

    $("[data-slider]").slick({


        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /* Switch
     ================================*/

    $(document).ready(function () {
        $(".plan__switch").click(function () {
            $(".plan__switch").removeClass("active");
            $(this).addClass("active");
        });
    });

    /* Mobile nav
        ================================*/

    const navToggle = $("#navToggle");
    const navClose = $("#navClose");
    const sideBar = $('.sidebar')

    navToggle.on("click", function (event) {
        event.preventDefault();

        sideBar.toggleClass("show")
    });


    navClose.on("click", function (event) {
        event.preventDefault();

        sideBar.removeClass("show")
    });
});


