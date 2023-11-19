$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        $(".parallax").css("background-position", "center " + scroll / 2 + "px");
    });
});
