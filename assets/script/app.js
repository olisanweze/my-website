'use strict';

const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const mobileMenuLinks = document.querySelector('.mobile-nav-link');

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

mobileMenuLinks.addEventListener('click', function() {
    mobileMenu.classList.remove('is-active');
    menuButton.classList.remove('is-active');
});

