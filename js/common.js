$(function () {
    $('.hd-nav-hamburger').on('click', function () {
        $('.hamburger-dwr').addClass('open');
    });
    $('.dwr-close').on('click', function () {
        $(this).closest('.drawer').removeClass('open');
    });
<<<<<<< HEAD

    var secName;
    // For Desktop
    $('.hd-nav-desktop-list .section-nav-link').on('click', function () {
=======
    // $('.get-started-btn').on('click', function () {
    //     $('html,body').animate({
    //         scrollTop: $(".hp-form-section").offset().top
    //     },
    //         'slow');
    // });

    var secName;
    $('.hd-nav-desktop-listitem-link').on('click', function () {
>>>>>>> 2dbc7dc11d60eb500408e4c2467ca52763b54ba9
        secName = $(this).attr('data-section');
        $('html,body').animate({
            scrollTop: $("#"+ secName).offset().top
        },'slow');
<<<<<<< HEAD
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
=======
>>>>>>> 2dbc7dc11d60eb500408e4c2467ca52763b54ba9
    });
});