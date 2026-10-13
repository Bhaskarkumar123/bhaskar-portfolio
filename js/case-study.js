// ========================================
// CASE STUDY SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(
    ".case-hero, .case-image, .case-info, .modules-section, .case-content, .case-cta, .project-navigation"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});