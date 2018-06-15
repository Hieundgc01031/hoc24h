$(document).ready(function () {
    var widwin = $(window).width();
    widmodal = $('.modal-connect--signup').width();
    var cent = (widwin - widmodal)/2;
    $('.modal-connect--signup').css('left', cent);
    $('.modal-connect--signin').css('left', cent);

    $(window).resize(function () {
        var widwin = $(window).width();
        widmodal = $('.modal-connect--signup').width();
        var cent = (widwin - widmodal)/2;
        $('.modal-connect--signup').css('left', cent);
        $('.modal-connect--signin').css('left', cent);

    });

    $('.usercon--signup').click(function (event) {
        $('#modal-signin').modal('hide');
        $('#modal-signup').modal('show');
        event.stopPropagation();



    });

    $('.usercon--signin').click(function (event) {
        $('#modal-signin').modal('show');
        $('#modal-signup').modal('hide');
        event.stopPropagation();
    });

    $('html').click(function() {
        $('#modal-signin').modal('hide');
        $('#modal-signup').modal('hide');
    });

    $('#modal-signin').click(function(event){
        event.stopPropagation();
    });
    $('#modal-signup').click(function(event){
        event.stopPropagation();
    });

    $('.m-navbar--thirdul__tittle').click(function () {
        $('.m-navbar--thirdul__tittle').not(this).parents('.seconli').find('.thirdul').slideUp();
        $(this).parents('.seconli').find('.thirdul').slideToggle();
    });
    $('.m-navbar--modalmenu').click(function () {
        $('.m-navbar--menu').animate({left: '-100%'}, 400);
        $('.m-navbar--modalmenu').css({ 'visibility': 'hidden', 'opacity': 0});
    });
    $('.m-navbar--openmenu').click(function () {
        $('.m-navbar--menu').animate({left: '0'}, 400);
        $('.m-navbar--modalmenu').css({ 'visibility': 'visible', 'opacity': 1});
    });

});