(function () {
    const burgerButton = document.querySelector('.nav_burger');
    const menu = document.querySelector('.nav_link');
    const navLinks = document.querySelectorAll('.nav_links');

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
        menu.classList.toggle('nav_link--show');
        burgerButton.classList.toggle('is-open', menuOpen); // <-- Agrega/quita clase
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }

    if (burgerButton && menu) {
        burgerButton.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuOpen) toggleMenu();
            });
        });
    }
})();