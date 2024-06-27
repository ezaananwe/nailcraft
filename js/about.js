const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const sign = document.querySelector(".btn-12");
const home = document.querySelector("#home");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    burger.classList.toggle("toggle");
  });
  sign.addEventListener("click", () => {
    window.location.href = "signup-in.html";
    });
    home.addEventListener("click", () => {
        window.location.href = "index.html";
        });