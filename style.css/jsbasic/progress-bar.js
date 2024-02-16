function scrollEvent() {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".nav__link");
    const buttonCircle = document.querySelector(".button-circle");
    console.log(sections);

    const progressIntersectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(entry);
                    links.forEach((link) => {
                        // console.log(link);
                        link.classList.remove("active");
                        buttonCircle.classList.add("active");
                        const dataGotoAtribute = link
                            .getAttribute("data-goto")
                            .replace(".", "");
                        // console.log(dataGotoAtribute);

                        if (
                            sections[1].className &&
                            sections[0].className === entry.target.className
                        ) {
                            buttonCircle.classList.remove("active");
                            console.log(links[0]);
                        }

                        if (dataGotoAtribute === entry.target.className) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        {
            threshold: 0.8,
        }
    );

    sections.forEach((section) => {
        progressIntersectionObserver.observe(section);
    });
}
scrollEvent();

function progressBar() {
    // Vнутренний размер окна
    const windowHeight = window.innerHeight;
    // Vнутренний размер окна без полос прокрутки
    const userWindowHeight = document.documentElement.clientHeight;
    // document size
    const htmlHeight = document.documentElement.scrollHeight;

    const scrollValue = document.documentElement.scrollTop;

    const height = htmlHeight - userWindowHeight;

    const scrollPercent = (scrollValue / height) * 100 + "%";

    document.querySelector(
        ".button-circle"
    ).style.backgroundImage = ` radial-gradient(closest-side, white 79%, transparent 80%, transparent 100%), conic-gradient(rgba(255, 105, 108, 0.8) ${scrollPercent}, #0000 0)`;
}

addEventListener("scroll", progressBar);
