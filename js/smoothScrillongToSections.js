$(document).ready(function(){    
    var htmlWindowWidth = document.documentElement.clientWidth;
    
    setInterval(function () {
        var htmlWindowWidth = document.documentElement.clientWidth;
        console.log("Ширина экрана: " + htmlWindowWidth);
    }, 500);

    if (htmlWindowWidth > 768) {
        console.log("Ширина монитора > 992px. Window.clientWidth = " + htmlWindowWidth);
        
        $("#toPortfolioFirst").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top / 2;
            $('body,html').animate({scrollTop: top}, 1000);
            return htmlWindowWidth;
        });
        $("#toGallereyFirst").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
            return htmlWindowWidth;
        });
        $("#toContactsFirst").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
            return htmlWindowWidth;
        });
    } else {
        console.log("Ширина монитора < 992px. Window.clientWidth =  " + htmlWindowWidth);
        
        $("#toPortfolioSecond").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top - 250;
            $('body,html').animate({scrollTop: top}, 1000);
            return htmlWindowWidth;
        });
        $("#toGallereySecond").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top - 100;
            $('body,html').animate({scrollTop: top}, 1000);
            return htmlWindowWidth;
        });
        $("#toContactsSecond").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
            return htmlWindowWidth;
        });
    }
    
});