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

    $('.usercon--signup').click(function () {
        $('#modal-signin').modal('hide');
        $('#modal-signup').modal('show');
        event.stopPropagation();



    });

    $('.usercon--signin').click(function () {
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


});