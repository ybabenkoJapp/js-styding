const menuContainer = document.querySelector('.menu-container');
const lineContainer = document.querySelector('.line-container');

lineContainer.addEventListener('click', () => {
    lineContainer.classList.toggle('active');
    menuContainer.classList.toggle('active');
});