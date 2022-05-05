const burgerMenu = document.querySelector('.burger__item');
if (burgerMenu) {
    const navItem = document.querySelector('nav');
    burgerMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_hidden')
        burgerMenu.classList.toggle('_active');
        navItem.classList.toggle('_active');
    });
}