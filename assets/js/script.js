document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle active class to show/hide mobile menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
