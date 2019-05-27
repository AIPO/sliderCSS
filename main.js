const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
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
        current.previuosElementSibling.classList.add('current');
    } else {
        //add current to last
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}