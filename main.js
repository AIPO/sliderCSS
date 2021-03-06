const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;
const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    //Check for next slide
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    //Check for prev slide
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        //add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
//Auto slide
if (auto) {
    //run next slide
    slideInterval = setInterval(nextSlide, intervalTime);
}
