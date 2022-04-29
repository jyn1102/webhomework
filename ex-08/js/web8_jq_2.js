$(document).ready(function () {
    $(".first_box").click(function (e) {
        $('.first_box').css({
            'background-color': "lightgrey",
        });
        $('.second_box').css({
            'background-color': "#fff",
        });
        $('.third_box').css({
            'background-color': "#fff",
        });
        $('.big_box').html(1);
    });
    $(".second_box").click(function (e) {
        $('.second_box').css({
            'background-color': "lightgrey",
        });
        $('.first_box').css({
            'background-color': "#fff",
        });
        $('.third_box').css({
            'background-color': "#fff",
        });
        $('.big_box').html(2);
    });
    $(".third_box").click(function (e) {
        $('.third_box').css({
            'background-color': "lightgrey",
        });
        $('.second_box').css({
            'background-color': "#fff",
        });
        $('.first_box').css({
            'background-color': "#fff",
        });
        $('.big_box').html(3);
    });
});
