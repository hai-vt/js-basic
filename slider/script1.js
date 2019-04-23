jQuery(document).ready(function ($) {

    var slideCount = $('.slider-carousel .slider-items .item').length;
    var slideWidth = $('.slider-carousel .slider-items .item').width();
    var slideHeight = $('.slider-carousel .slider-items .item').height();
    var sliderItemsWidth = slideCount * slideWidth;
    var currentSlide = $('.slider-carousel .slider-items .current-slide');

    $('.slider-carousel').css({ width: slideWidth, height: slideHeight });

    $('.slider-carousel .slider-items').css({ width: sliderItemsWidth, marginLeft: - slideWidth });

    $('.slider-carousel .slider-items .item:last-child').prependTo('.slider-carousel .slider-items');

    function moveLeft() {
        $('.slider-carousel .slider-items').animate({
            left: + slideWidth
        }, 200, function () {
            $('.slider-carousel .slider-items .item:last-child').prependTo('.slider-carousel .slider-items');
            $('.slider-carousel .slider-items').css('left', '');
        });
    };

    function moveRight() {
        $('.slider-carousel .slider-items').animate({
            left: - slideWidth
        }, 200, function () {
            $('.slider-carousel .slider-items .item:first-child').appendTo('.slider-carousel .slider-items');
            $('.slider-carousel .slider-items').css('left', '');
        });
    };

    function gotoSlideX(slidex) {
        $('.slider-carousel .slider-items').animate({
            left: - (slideWidth * slidex)
        }, 200, function () {
            $('.slider-carousel .slider-items .item:first-child').appendTo('.slider-carousel .slider-items');
            $('.slider-carousel .slider-items').css('left', '');
        });
    }

    $('.control.prev').click(function () {
        moveLeft();
    });

    $('.control.next').click(function () {
        moveRight();
    });

    $('.panigation-control .control').each(function() {
      $(this).on('click', function() {
          gotoSlideX(parseInt($(this).data('number-slide')));
      })
    });

});