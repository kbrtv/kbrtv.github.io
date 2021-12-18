
$(document).ready(function(){
    $('.slider__item').slick({
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/section4/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/section4/right.svg"></button>'
    });

    $('[data-modal=consultation]').on('click', function(){
        $('.dark-bg, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function(){
        $('.dark-bg, #consultation,#order,#ty').fadeOut();
    });
    $('.catalog__block_btn').each(function(i) {
        $(this).on('click', function() {
            $('.dark-bg, #order').fadeIn('slow'); 
        });
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
            $('.up').fadeIn();
        }else{
            $('.up').fadeOut();
        }
    });

    $("a[href='#up']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__block_item').eq(i).toggleClass('catalog__block_item_active');
                $('.catalog__block_list').eq(i).toggleClass('catalog__block_list_active');
            });
        });
    };

    toggleSlide('.catalog__block_link');
    toggleSlide('.catalog__block_back');

});
    

