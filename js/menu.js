(function () {
    const openButton = document.querySelector('.nav_burger');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', ()=> {
        menu.classList.add('nav_link--show');
    });

    closeMenu.addEventListener('click', ()=> {
        menu.classList.remove('nav_link--show');
    });
})();

