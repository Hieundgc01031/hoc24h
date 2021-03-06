$(document).ready(function () {
    $('.main-slide--slick').slick({
        dots:true,
        nextArrow: '<button class="main-slide__next main-slide__controls"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="main-slide__previous main-slide__controls"><i class="fas fa-chevron-left"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    arrows:false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                    dots: false
                }
            }

        ]
    });

    var widthbmenu = $('.bmenu').width();
    $('.bmenu--first-ul').width(widthbmenu);
    $('.bmenu--secon-ul').width(widthbmenu - 20);
    $('.bmenu--secon-ul').css({'left': widthbmenu + 1});

    var widthsearch = $('.search-bar').width();
    $('.search-bar__width').width(widthsearch - 30);
    $('.search-bar__boxsha').width(widthsearch );

    $(window).resize(function () {
        widthbmenu = $('.bmenu').width();
        $('.bmenu--first-ul').width(widthbmenu);
        $('.bmenu--secon-ul').width(widthbmenu - 20);

        widthsearch = $('.search-bar').width();
        $('.search-bar__width').width(widthsearch - 30);
        $('.search-bar__boxsha').width(widthsearch );
    });


    $('.exam-slide-1').slick({
        dots:false,
        nextArrow: '<button class="button__controls button__next"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="button__controls button__previous "><i class="fas fa-chevron-left"></i></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });


    $('.exam-slide-2').slick({
        dots:false,
        nextArrow: '<button class=" button__controls button__next "><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="button__previous button__controls"><i class="fas fa-chevron-left"></i></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });


    $('.hbook--slide').slick({
        dots:false,
        nextArrow: '<button class="button__controls button__next"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="button__previous button__controls"><i class="fas fa-chevron-left"></i></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                arrows:false,
                dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                    dots: false
                }
            }
        ]
    });




});