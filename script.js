'use strict'
const bgEl = document.querySelector("#bg");
window.addEventListener('scroll', () => {
    bgEl.style.opacity = 1 - window.pageYOffset / 600
})
const open = document.querySelector('.menu-open');
const close = document.querySelector('.menu-close');
const layer = document.querySelector('.layer1');
open.addEventListener('click', () => {
    layer.classList.add('check')
})

close.addEventListener('click', () => {
    layer.classList.remove('check');
})
window.addEventListener('scroll', () => {
    const stickyMenu = document.querySelector('.sticky-menu-container');
    stickyMenu.classList.toggle('sticky', window.scrollY > 560);
})