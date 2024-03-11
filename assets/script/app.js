'use strict';

const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

window.onload = function() {
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    })
}

