const burgerMenu = document.querySelector('.burger__item');
const header = document.querySelector('#jsHeader');
const navItem = document.querySelector('nav');
if (burgerMenu) {
    burgerMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_hidden')
        burgerMenu.classList.toggle('_active');
        navItem.classList.toggle('_active');
        header.classList.toggle('_active');
    });
}