'use strict';

const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const allLinks = document.querySelectorAll('.mobile-nav-link');

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-active');
        menuButton.classList.remove('is-active');
    });
});


menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});