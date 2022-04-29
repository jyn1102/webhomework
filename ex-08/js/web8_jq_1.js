var clientH = 600;
var clientW = 1600;
var w = '300';
var h = '300';
$(document).ready(function () {
    $(".item").click(function (e) {
        if (!($('.newitem').length)) {
            e.stopPropagation();
            $("body").append('<div class="newitem"></div>');
            $('.newitem').hide();
            $('.newitem').css({
                'background-color': $(this).css("background-color"),
                'width': w + "px",
                'height': h + "px",
                'top': (clientH - h) / 2 + "px",
                'left': (clientW - w) / 2 + "px",
                'z-index': 1101,
                'outline': 1 + "px" + " solid " + "#000",
                'position': "absolute",
            });
            $('.newitem').fadeIn(800);
            $(".total").css({
                'filter': "blur(5px)",
            });
        }


    });
    $(document).click(function () {

        $(".newitem").fadeOut(800, function () {
            $(".newitem").remove();
        });
        var i = 10,
            num = 10 / 80;

        function danchu() {
            $(".total").css({
                'filter': "blur(" + i + "px)",
            });
            i = i - num;
            if (i <= 0)
                clearInterval(t);
        }
        if (($('.newitem').length)) {
            var t = setInterval(danchu, 5);
        }

    });

});
