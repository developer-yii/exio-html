// side-bar click menu
    $(document).ready(function () {
        $('header .main-nav .click-menu').click(function () {
            $('header .main-nav nav').addClass('show')
            $('header .main-nav .cancel-menu').addClass('show')
            $('body').css({ 'position': 'fixed', 'width': '100%' });
        });

        $('header .main-nav .cancel-menu').click(function () {
            $('header .main-nav nav').removeClass('show')
            $('header .main-nav .cancel-menu').removeClass('show')
            $('body').css({ 'position': 'unset', 'width': 'auto' });
        });

    });


// header fix
 
$(window).scroll(function(){
    if ($(window).scrollTop () > 50) {
        $('header').addClass('show');
    }
    else {
        $('header').removeClass('show');
    }
});


$(document).ready(function () {
    $('.user-menu').click(function (e) {
        e.stopPropagation(); 
        $('.userDropDown').toggleClass('show');
        $('.projectDropDown').removeClass('show');
    });

    $('.first-menu').click(function (e) {
        e.stopPropagation(); 
        $('.projectDropDown').toggleClass('show');
        $('.userDropDown').removeClass('show'); 
    });

    $('.cityClick').click(function (e) {
        e.stopPropagation(); 
        $('.citySelect').toggleClass('show');
        $('.projectDropDown').removeClass('show');
        $('.userDropDown').removeClass('show'); 
    });

    $(document).click(function () {
        $('.userDropDown').removeClass('show');
        $('.projectDropDown').removeClass('show');
        $('.citySelect').removeClass('show');
    });
});
