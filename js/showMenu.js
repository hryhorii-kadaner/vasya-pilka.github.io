var mainMenu = document.getElementById('menu'),
    subMenu = document.querySelector('.main-content'),
    show = document.getElementById('menuShower'),
    close = document.getElementById('menuCloser');

show.onclick = function shower() {
    console.log("Меню отображено");
    mainMenu.style.width = "100%";
    subMenu.style.width = "100%";
    mainMenu.style.left = "0%";
    subMenu.style.left = "0%";  
    mainMenu.style.animationFillMode = "both";
    subMenu.style.animationFillMode = "both";
    mainMenu.classList.add('slideInLeft');
    mainMenu.classList.remove('slideOutLeft');
    mainMenu.style.display = "block";
    subMenu.style.display = "block";
};

close.onclick = function closer() {
    console.log("Меню скрыто");
    mainMenu.style.animationFillMode = "both";
    subMenu.style.animationFillMode = "both";
    mainMenu.classList.remove('slideInLeft');
    mainMenu.classList.add('slideOutLeft');
};