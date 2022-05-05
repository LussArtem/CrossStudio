// Плавная прокрутка при клике
// 1.Собираем массив объектов для навигации
const menuLinks = document.querySelectorAll('.nav__link[data-goto]');

// 2. Проверка (есть ли такие элементы)
if (menuLinks.length > 0) {

    // 3. перебираем элементы с помощью форыча
    menuLinks.forEach(menuLink => {

        // 4. Добавляем событие клик (сразу идем в функцию) 
        menuLink.addEventListener("click", oneMenuLinkClick);
    });
    // 5. Тут мы создаем функцию
    function oneMenuLinkClick(e) {

        // 6. Получаем обьект на который мы кликаем
        const menuLink = e.target;

        //  7. Делаем условие (заполнен ли датаАтрибут И существует ли объект)
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {

            // 8. Получаем в константу сам объект
            const gotoBlock = document.querySelector(menuLink.dataset.goto);

            // // Высчитываем положение объекта относительно высоты шапки 31
            // const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 10;


            // // Закрываем Бургер меню на мобиле при прокрутке
            // //  если имеет класс, то
            // if (iconMenu.classList.contains('_active')) {
            //     document.body.classList.remove('_lock');
            //     iconMenu.body.classList.remove('_active');
            //     menuBody.body.classList.remove('_active');
            // }

            // Прокручиваем скрол к нужному месту
            window.scrollTo({
                // Прокручиваем сверху к константе объявленой выше
                top: gotoBlockValue,

                //  Прокрутка плавная
                behavior: "smooth"
            });

            //  Отключаем работу ссылки
            e.preventDefault();
        }
    }
}