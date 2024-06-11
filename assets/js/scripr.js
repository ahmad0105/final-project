/* level-slider */
$(function() {
    $("#inputCheckIn").datepicker();
    $("#inputCheckOut").datepicker();

    $('.level-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
       
});

/* video */
document.addEventListener("DOMContentLoaded", function() {
    var myVideo = document.getElementById("myVideo");
    myVideo.muted = true;
  });