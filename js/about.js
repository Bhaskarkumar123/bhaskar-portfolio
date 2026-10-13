document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".reveal-top, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(element => {
        observer.observe(element);
    });

});