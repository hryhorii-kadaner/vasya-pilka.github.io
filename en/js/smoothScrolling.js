$(function () {
    $.fn.scrollToTop = function () {
        $(this).click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
        });
    };
});

$(function () {
    $("#topButton").scrollToTop();
});