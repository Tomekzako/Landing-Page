$(function () {

    $('.navBar').prepend('<div class="menuTrigger">Menu</div>');

    $('.menuTrigger').on('click', function () {
        $('.menu').slideToggle();
    });

});