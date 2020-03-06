var windWidth = document.documentElement.clientWidth,
    collapsedText = document.getElementById('collapseText'),
    textCollapser = document.getElementById('textCollapser');
    



textCollapser.onclick = $(function () {
    $("#textCollapser").click(function () {
        $("#angleDown").toggleClass("d-none");
        $("#angleTop").toggleClass("d-none");
    });
});

if (windWidth > 768) {
    collapsedText.classList.add("show");
} else {
    collapsedText.classList.remove("show");
}