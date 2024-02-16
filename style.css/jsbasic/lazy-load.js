const options = {
    root: null,
    rootmargin: "60px 0px 0px 0px",
    // trashhold: 0.1,
};
const lazyLoadIntersectionObserver = new IntersectionObserver(
    (entries, observe) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observe.unobserve(entry.target);
            }
        });
    },
    { options }
);

document.querySelectorAll("img[data-src]").forEach((img) => {
    lazyLoadIntersectionObserver.observe(img);
});

// const imgs = document.querySelectorAll("img[data-src]");

// const callback = (entries, observe) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.dataset.src = entry.target.dataset.src;
//             observe.unobserve(entry.target);
//         }
//     });
// };
// const option = {
//     rootMargin: "75px 0px 0px ",
// };

// const lazyImgsObserver = new IntersectionObserver(callback, option);

// imgs.forEach((img) => {
//     lazyImgsObserver.observe(img);
// });
