const hamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const navToggler = document.querySelector(".mobile-nav-toggler");
const nav = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li");

navToggler.addEventListener('click', () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("display-none");
    iconClose.classList.toggle("display-inline");
})
