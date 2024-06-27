const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
timeline1 = document.querySelector("#btn1");
timeline2 = document.querySelector("#btn2");
timeline3 = document.querySelector("#btn3");
timeline4 = document.querySelector("#btn4");
timeline5 = document.querySelector("#btn5");
const sign = document.querySelector(".btn-12");
const learn = document.querySelector(".btn");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burger.classList.toggle("toggle");
});
const kids_sec= document.querySelector(".button-learn");
const adult_sec= document.querySelector(".button-learn2");
const contact = document.querySelector("#cnt")
timeline5.addEventListener("click", () => {
  window.location.href = "jewels.html";
  });
timeline4.addEventListener("click", () => {
  window.location.href = "french.html";
  });
  learn.addEventListener("click", () => {
    window.location.href = "aboutus.html";
    });
timeline3.addEventListener("click", () => {
  window.location.href = "jelly_nails.html";
  });
  timeline1.addEventListener("click", () => {
    window.location.href = "glitteraura.html";
    });
  timeline2.addEventListener("click", () => {
    window.location.href = "cateye.html";
    });
  sign.addEventListener("click", () => {
    window.location.href = "signup-in.html";
    });
  cnt.addEventListener("click", () => {
  window.location.href = "contact_page.html";
  });
kids_sec.addEventListener("click", () => {
window.location.href = "kids-sec.html";
});
adult_sec.addEventListener("click", () => {
  window.location.href = "adult-sec.html";
  });
  