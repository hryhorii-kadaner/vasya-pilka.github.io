var htmlWindowWidth = document.documentElement.clientWidth,
    mainMenu = document.getElementById('menu'),
    subMenu = document.querySelector('.main-content');

setInterval(function () {
    var htmlWindowWidth = document.documentElement.clientWidth;
    console.log("Ширина окна браузера: " + htmlWindowWidth);
}, 500);

function closer() {
    console.log("Меню скрыто");
    mainMenu.style.animationFillMode = "both";
    subMenu.style.animationFillMode = "both";
    mainMenu.classList.remove('slideInLeft');
    mainMenu.classList.add('slideOutLeft');
}

$(document).ready(function () {

    if (htmlWindowWidth > 768) {
        console.log("Ширина окна браузера > 992px. Window.clientWidth = " + htmlWindowWidth);

        $("#toPortfolioFirst").on("click", function (event) {

            console.log("toPortfolioFirst Event top / 2");

            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top / 2;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            return htmlWindowWidth;
        });
        $("#toGallereyFirst").on("click", function (event) {

            console.log("toGallereyFirst Event top usuall");

            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top - 250;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            return htmlWindowWidth;
        });
        $("#footerToPortfolioFirst").on("click", function (event) {

            console.log("toPortfolioFirst Event top / 2");

            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top / 2;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            return htmlWindowWidth;
        });
        $("#footerToGallereyFirst").on("click", function (event) {

            console.log("toGallereyFirst Event top usuall");

            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top - 250;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            return htmlWindowWidth;
        });
        $("#toContactsFirst").on("click", function (event) {

            console.log("toContactsFirst Event top usuall");

            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            return htmlWindowWidth;
        });
    } else {
        console.log("Ширина окна браузера < 992px. Window.clientWidth =  " + htmlWindowWidth);

        $("#toPortfolioSecond").on("click", function (event) {
            closer();
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top - 150;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            return htmlWindowWidth;
        });
        $("#toGallereySecond").on("click", function (event) {
            closer();
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top - 100;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            return htmlWindowWidth;
        });
        $("#toContactsSecond").on("click", function (event) {
            closer();
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            return htmlWindowWidth;
        });
        $("#footerToPortfolioFirst").on("click", function (event) {

            console.log("toPortfolioFirst Event top / 2");

            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            return htmlWindowWidth;
        });
        $("#footerToGallereyFirst").on("click", function (event) {

            console.log("toGallereyFirst Event top usuall");

            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            return htmlWindowWidth;
        });
    }

});