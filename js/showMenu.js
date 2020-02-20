var mainMenu = document.getElementById('menu'),
    subMenu = document.querySelector('.main-content'),
    show = document.getElementById('menuShower'),
    close = document.getElementById('menuCloser'),
    topButton = document.getElementById('topButton');

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

window.addEventListener('scroll', function() {
    let topButton = document.getElementById('topButton');

    if (pageYOffset >= 200) {
        topButton.classList.remove('fadeOut');
        topButton.classList.add('fadeIn');
        setTimeout(function () {
            topButton.removeAttribute("hidden","");  
        }, 300);
          
    } else {
        topButton.classList.remove('fadeIn');
        topButton.classList.add('fadeOut');
        setTimeout(function () {
            topButton.setAttribute("hidden","");
        }, 300);
          
        console.log("Расстояние от шапки " + pageYOffset + " px");        
    }
    console.log("Расстояние от шапки " + pageYOffset + " px");    
});