$(function(){

    $('.slider__box').slick({
        dots:true,
        infinite: true,
        speed: 1000,
        // fade:true,
        cssEase: 'ease-in-out',
        autoplaySpeed: 1000,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        lazyLoad: 'ondemand',
        pauseOnFocus:false,
        pauseOnHover:false,
        swipeToSlide:true
    });

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

    new WOW().init();



    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
                countNum: countTo
            },

            {

                duration: 8000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });



    });
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
    // var docWidth = document.documentElement.offsetWidth;
    //
    // [].forEach.call(
    //     document.querySelectorAll('*'),
    //     function(el) {
    //         if (el.offsetWidth > docWidth) {
    //             console.log(el);
    //         }
    //     }
    // );

});
$('.swiper__list').addClass('dots__list');
$('.steps__inner').addClass('dots__list');
