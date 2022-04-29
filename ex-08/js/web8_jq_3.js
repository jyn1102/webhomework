$(document).ready(function () {
    $(".addbtn").click(function (e) {
        if (!($(".lines").first().length)) {
            $(".addbtn").before('<div class="lines"></div>');
            $(".lines").append('<div class="number">1</div>');
            $(".lines").append('<div class="deletebtn">Delete</div>');
        } else {
            var $td = $(".lines").first().clone();
            $(".addbtn").before($td);
            var i = 1;
            $(".number").each(function () {
                $(this).html(i++);
            })
        }
    });
    $(".total").on('click', '.deletebtn', function () {
        $(this).parent().remove();
        var i = 1;
        $(".number").each(function () {
            $(this).html(i++);
        })
    });
});
