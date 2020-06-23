$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true,
        initialSlide: 1,
        slidesToShow: 1,
        centerPadding: 0,
        speed: 500,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 750,
              settings: {
                adaptiveHeight: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                adaptiveHeight: false
              }
            }
          ]
    });
});