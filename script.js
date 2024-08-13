document.addEventListener('DOMContentLoaded', () => {
    const menuMobile = document.querySelector('.menu-mobile');
    const nav = document.querySelector('nav');
    const fechar = document.querySelector('.fechar');
    const overlay = document.querySelector('.overlay');

    const toggleMenu = () => {
        nav.classList.toggle('open');
        overlay.classList.toggle('active');
    };

    menuMobile.addEventListener('click', toggleMenu);
    fechar.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});