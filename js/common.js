$(function(){
    //init for first section slider
    $('.slider__box').slick({
        dots:true,
        infinite: true,
        speed: 1000,
        // fade:true,
        cssEase: 'ease-in-out',
        autoplaySpeed: 3000,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        lazyLoad: 'ondemand',
        pauseOnFocus:false,
        pauseOnHover:false,
        swipeToSlide:true
    });
    //init for second section slider
    $('.solve__inner').slick({
        dots:true,
        dotsClass:'dots__list',
        infinite: true,
        appendDots: $(".swiper__inner"),
        speed: 2000,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        pauseOnFocus:false,
        pauseOnHover:false,
        swipeToSlide:true
    });

    //        for footer accordion
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
    // init for wow plugin
    new WOW().init();

    //init for numbers counter

        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {
                    duration: 10000,
                    // easing:'linear',
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
        });

    //init for about section slider
    $('.about__inner').slick({
        dots:true,
        dotsClass:'dots__list',
        infinite: true,
        appendDots: $(".wrapper"),
        speed: 2000,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        pauseOnFocus:false,
        pauseOnHover:false,
        swipeToSlide:true
    });

//add dots class to element
});
$('.swiper__list').addClass('dots__list');
$('.steps__inner').addClass('dots__list');

// init for header lang toggle
$(document).ready(function(){
    $(".header__lang").click(function(){
        $(".menuLanguage__tooltip").toggle();
    });
});

