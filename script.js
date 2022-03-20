window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.adaptive-menu'),
        menuItem = document.querySelectorAll('.adaptive-menu-item'),
        burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger-active');
            menu.classList.toggle('menu-active');
        });
    });
})