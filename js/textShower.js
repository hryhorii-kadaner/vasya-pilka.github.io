var windWidth = document.documentElement.clientWidth,
    collapsedText = document.getElementById('collapseText'),
    textCollapser = document.getElementById('textCollapser');
    

    if (windWidth > 768) {
        collapsedText.classList.add("show");
    } else {
        collapsedText.classList.remove("show");
    }

textCollapser.onclick = $(function () {
    $("#textCollapser").click(function () {
        $("#angleDown").toggleClass("d-none");
        $("#angleTop").toggleClass("d-none");
    });
});

function goToKneuDpUa() {
    window.location.href = '//kneu.dp.ua/ua';
}
function goToKrGovUa() {
    window.location.href = '//kr.gov.ua';
}