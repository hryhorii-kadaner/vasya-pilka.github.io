var mainMenu = document.getElementById('menu'),
    subMenu = document.querySelector('.main-content'),
    show = document.getElementById('menuShower'),
    close = document.getElementById('menuCloser');

show.onclick = function shower() {
    console.log("Событие");
    mainMenu.style.width = "100%";
    subMenu.style.width = "100%";
    mainMenu.style.left = "0%";
    subMenu.style.left = "0%";  
    mainMenu.style.animationFillMode = "both";
    subMenu.style.animationFillMode = "both";
    mainMenu.classList.add('slideInLeft');
    mainMenu.classList.remove('slideOutLeft');
};

close.onclick = function closer() {
    console.log("Событие");
    mainMenu.style.animationFillMode = "both";
    subMenu.style.animationFillMode = "both";
    mainMenu.classList.remove('slideInLeft');
    mainMenu.classList.add('slideOutLeft');
};