$(document).ready(function () {
   $('.course-detail__ptittle').click(function () {
       $(this).parents('.course-detail--li').find('.course-detail--subul').slideToggle();
       $(this).parents('.course-detail--li').find('.course-detail--subul').removeClass('hidden');
       $(this).parents('.course-detail--li').toggleClass('active');
   });


   //lay video
   $('.p-getvideo').click(function () {
       var source = $(this).attr('data-id');
       $('video source').attr('src', source);
       $('video')[0].load();
   });

    $('.show-video').click(function () {
        var source =  $(this).attr('data-id');
        $('video source').attr('src', source);
        $('video')[0].load();
    });
});