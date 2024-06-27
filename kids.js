const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burger.classList.toggle("toggle");
});
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')
let jellynails = document.querySelector('#child-btn-1')
let glitterynails = document.querySelector('#child-btn-2')
let catnails = document.querySelector('#child-btn-3')
let frenchnails = document.querySelector('#child-btn-4')

thumbnail.appendChild(thumbnailItems[0])
// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }

    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) 
}
jellynails.addEventListener('click', function() {
    window.location.href = "jelly_nails.html";
})
glitterynails.addEventListener('click', function() {
    window.location.href = "glitteraura.html";
})
catnails.addEventListener('click', function() {
    window.location.href = "cateye.html";
})
frenchnails.addEventListener('click', function() {
    window.location.href = "french.html";
})