$(function () {
    $('.hd-nav-hamburger').on('click', function () {
        $('.hamburger-dwr').addClass('open');
    });
    $('.dwr-close').on('click', function () {
        $(this).closest('.drawer').removeClass('open');
    });

    var secName;
    // For Desktop
    $('.hd-nav-desktop-list .section-nav-link').on('click', function () {
        secName = $(this).attr('data-section');
        $('html,body').animate({
            scrollTop: $("#"+ secName).offset().top
        },'slow');
    });

    // For Mobile
    $('.hamburger-dwr .dwr-nav-link ').on('click', function () {
        $(this).closest('.drawer').removeClass('open');
    });
    $('.hamburger-dwr .mobile-section-nav-link').on('click', function () {        
        secName = $(this).attr('data-section');
        $('html,body').animate({
            scrollTop: $("#"+ secName).offset().top
        },'slow');
    });
});