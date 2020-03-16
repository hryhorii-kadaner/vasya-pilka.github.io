var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);
var pauseButton = document.getElementById('pause');
var playing = true;

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function pauseSlideshow() {
    pauseButton.innerHTML = '<i class="fas fa-play"></i>';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    playing = true;
    slideInterval = setInterval(nextSlide, 6000);
}

// pauseButton.onclick = function() {
//     if (playing) {
//         pauseSlideshow();
//     } else {
//         playSlideshow();
//     }
// };

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}