$(document).ready(function () {
    var numb = $('.span-number').text();
    console.log(numb);
        $('.border-buy .btn-plus').click(function () {
            numb++;
            $('.span-number').text(numb);
        });
        $('.border-buy .btn-minus').click(function () {
            if (numb > 0)
            numb--;
            $('.span-number').text(numb);
        });

});