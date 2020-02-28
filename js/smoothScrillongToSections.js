$(document).ready(function(){

    setInterval(function () {
        var i = document.documentElement.clientWidth;
        console.log(i);
    }, 500);

    if (document.documentElement.clientWidth > 768) {
        console.log("Ширина монитора > 992px. Window.clientWidth = " + document.documentElement.clientWidth);
        
        $("#toPortfolioFirst").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top / 2;
            $('body,html').animate({scrollTop: top}, 1000);
        });
        $("#toGallereyFirst").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
        $("#toContactsFirst").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    } else {
        console.log("Ширина монитора < 992px. Window.clientWidth =  " + document.documentElement.clientWidth);
        
        $("#toPortfolioSecond").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top - 250;
            $('body,html').animate({scrollTop: top}, 1000);
        });
        $("#toGallereySecond").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top - 100;
            $('body,html').animate({scrollTop: top}, 1000);
        });
        $("#toContactsSecond").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    }
    
});