/* =========================================================
   EXPERIENCE PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const workTimeline = document.querySelector(".work-timeline");
const workProgress = document.querySelector(".timeline-progress");
const workPlane = document.querySelector(".timeline-plane");
const workItems = document.querySelectorAll(".experience-item");


const learningTimeline =
    document.querySelector(".learning-timeline");

const learningProgress =
    document.querySelector(".learning-progress");

const learningPlane =
    document.querySelector(".learning-plane");

const learningItems =
    document.querySelectorAll(".learning-item");


/* =========================================================
   WORK EXPERIENCE TIMELINE
========================================================= */

function updateWorkTimeline() {

    if (
        !workTimeline ||
        !workProgress ||
        !workPlane
    ) {
        return;
    }


    const rect =
        workTimeline.getBoundingClientRect();

    const viewportHeight =
        window.innerHeight;


    /*
        Timeline progress starts when the timeline
        reaches around 55% of the viewport.
    */

    let progress =
        (
            viewportHeight * 0.55 -
            rect.top
        ) / rect.height;


    progress =
        Math.max(
            0,
            Math.min(1, progress)
        );


    /*
        Progress line
    */

    workProgress.style.height =
        `${progress * 100}%`;


    /*
        Airplane movement
    */

    const planePosition =
        progress * rect.height - 22;


    workPlane.style.top =
        `${planePosition}px`;


    /*
        Activate experience cards
        as they enter the active viewport area.
    */

    workItems.forEach((item) => {

        const itemRect =
            item.getBoundingClientRect();


        if (
            itemRect.top <
            viewportHeight * 0.55
        ) {

            item.classList.add("active");

        }

    });

}


/* =========================================================
   LEARNING JOURNEY TIMELINE
========================================================= */

function updateLearningTimeline() {

    if (
        !learningTimeline ||
        !learningProgress ||
        !learningPlane
    ) {
        return;
    }


    const rect =
        learningTimeline.getBoundingClientRect();

    const viewportHeight =
        window.innerHeight;


    /*
        Calculate scroll progress.
    */

    let progress =
        (
            viewportHeight * 0.55 -
            rect.top
        ) / rect.height;


    progress =
        Math.max(
            0,
            Math.min(1, progress)
        );


    /*
        Progress line
    */

    learningProgress.style.height =
        `${progress * 100}%`;


    /*
        Learning airplane movement
    */

    const planePosition =
        progress * rect.height - 22;


    learningPlane.style.top =
        `${planePosition}px`;


    /*
        Activate learning milestones.
    */

    learningItems.forEach((item) => {

        const itemRect =
            item.getBoundingClientRect();


        if (
            itemRect.top <
            viewportHeight * 0.55
        ) {

            item.classList.add("active");

        }

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal, " +
        ".reveal-left, " +
        ".reveal-right"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   COMBINED UPDATE
========================================================= */

function updateExperiencePage() {

    updateWorkTimeline();

    updateLearningTimeline();

}


/* =========================================================
   SCROLL EVENT
========================================================= */

window.addEventListener(
    "scroll",
    updateExperiencePage,
    {
        passive: true
    }
);


/* =========================================================
   RESIZE EVENT
========================================================= */

window.addEventListener(
    "resize",
    updateExperiencePage
);


/* =========================================================
   INITIAL UPDATE
========================================================= */

updateExperiencePage();


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.querySelector(".back-top");


if (backTop) {

    backTop.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle =
    document.querySelector("#themeToggle");


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-theme"
            );

        }
    );

}