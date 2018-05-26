$(document).ready(function () {


    $('.usercon--signup').click(function () {
       $('.modal-connect--signup').show();
       $('.modal-connect--signin').hide();
    });

    $('.usercon--signin').click(function () {
        $('.modal-connect--signin').show();
        $('.modal-connect--signup').hide();
    });
    // $(document).click(function () {
    //     $('.modal-connect--signin').hide();
    //     $('.modal-connect--signup').hide();
    //
    // });
});