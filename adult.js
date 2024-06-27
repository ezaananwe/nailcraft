let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
const adult_1 = document.querySelector('#adult_1');
const adult_2 = document.querySelector('#adult_2');
const adult_3 = document.querySelector('#adult_3');
const adult_4 = document.querySelector('#adult_4');
adult_4.addEventListener('click',() =>{
    window.location.href = "Golden ticket.html";
})
adult_3.addEventListener('click',() =>{
    window.location.href = "Almond swirl.html";
})
adult_2.addEventListener('click',() =>{
    window.location.href = "Gold rim.html";
})
adult_1.addEventListener('click',() =>{
    window.location.href = "Bedazzled.html";
})
let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burger.classList.toggle("toggle");
});
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