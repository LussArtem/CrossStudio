// слушатель событий скролл
document.addEventListener("scroll",
// создаем функцию
function(){
    // обьявлем константы
    const shrinkHeader = 5;
    const header = document.getElementById('jsHeader');
    let headerWrapper = document.querySelector('.header__logo');
    // слушатель событий
    window.addEventListener('scroll', function() {
        const scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                headerWrapper.classList.add('_shrink');
                header.classList.add('_shrink');
            }
            else {
                headerWrapper.classList.remove('_shrink');
                header.classList.remove('_shrink');
            }
        });
    function getCurrentScroll() {
       return window.pageYOffset || document.documentElement.scrollTop;
    }
});


function fixedHeader(header, rootElement = document.body) {
    if (!header) throw new Error('No header found!');
    if (!rootElement) rootElement = document.body;
    
    header.classList.add('fl-fixed-header');
    console.log('1');
    function setPadding() {
        rootElement.style.paddingTop = `${header.offsetHeight}px`;
        console.log('1');
    }
    window.addEventListener('resize', _.debounce(setPadding, 250));
    setPadding();
}

function scrollUpHeader(header, threshold = 10) {
    let scrollPos = 0;
    console.log('1');

    function direction() {
        const bodyTop = document.body.getBoundingClientRect().top;
        if (Math.abs(bodyTop - scrollPos) <= threshold) {
            // Less than threshold
            scrollPos = bodyTop;
            return;
            
        }
        if (bodyTop > scrollPos) {
            // Up
            header.classList.remove('hide');
        } else if (window.scrollY > header.offsetHeight) {
            // Down
            header.classList.add('hide');
        }
        scrollPos = bodyTop;
    }
    window.addEventListener('scroll', _.throttle(direction, 250));
}

window.onload = () => {
    const header = document.querySelector('#jsHeader');
    fixedHeader(header);
    scrollUpHeader(header);
};