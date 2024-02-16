// Плавная прокрутка при клике
// 1.Собираем массив объектов для навигации
// const menuLink1 = document.querySelectorAll(".nav__link[data-goto]");
const menuLinks = document.querySelectorAll("[data-goto]");
// console.log(menuLink1);
// 2. Проверка (есть ли такие элементы)
if (menuLinks.length > 0) {
    // 3. перебираем элементы с помощью форыча
    menuLinks.forEach((menuLink) => {
        // 4. Добавляем событие клик (сразу идем в функцию)
        menuLink.addEventListener("click", oneMenuLinkClick);
    });
    // 5. Тут мы создаем функцию
    function oneMenuLinkClick(e) {
        // 6. Получаем обьект на который мы кликаем
        const menuLink = e.target;

        //  7. Делаем условие (заполнен ли датаАтрибут И существует ли объект)
        if (
            menuLink.dataset.goto &&
            document.querySelector(menuLink.dataset.goto)
        ) {
            // 8. Получаем в константу сам объект
            const gotoBlock = document.querySelector(menuLink.dataset.goto);

            // // Высчитываем положение объекта относительно высоты шапки 83
            // const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            const gotoBlockValue =
                gotoBlock.getBoundingClientRect().top + scrollY - 83;

            // // Закрываем Бургер меню на мобиле при прокрутке
            // //  если имеет класс, то
            if (burgerMenu.classList.contains("_active")) {
                document.body.classList.remove("_hidden");
                burgerMenu.classList.remove("_active");
                navItem.classList.remove("_active");
                header.classList.toggle("_active");
                // navItem.style.display = "block";
            }

            // Прокручиваем скрол к нужному месту
            window.scrollTo({
                // Прокручиваем сверху к константе объявленой выше
                top: gotoBlockValue,

                //  Прокрутка плавная
                behavior: "smooth",
            });

            //  Отключаем работу ссылки
            e.preventDefault();
        }
    }
}
