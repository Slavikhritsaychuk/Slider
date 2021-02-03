let menuBurger = document.querySelector('.header__burger');
let menuBody = document.querySelector('.header__nav');

menuBurger.addEventListener('click', function (e) {
    menuBurger.classList.toggle('active');
    menuBody.classList.toggle('active');
});

let menuPizza = document.querySelector('.pizza__menu');
let menuButtons = document.querySelector('.menu__buttons');

menuPizza.addEventListener('click', function (e) {
    menuPizza.classList.toggle('menuOpen');
    menuButtons.classList.toggle('menuOpen');
});