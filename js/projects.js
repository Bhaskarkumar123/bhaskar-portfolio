// ========================================
// PROJECT FILTER
// ========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // Remove active state from all buttons
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active state to clicked button
        button.classList.add("active");

        // Get selected category
        const filter = button.dataset.filter;

        projectCards.forEach((card) => {
            const categories = card.dataset.category
                ? card.dataset.category.split(" ")
                : [];

            const shouldShow =
                filter === "all" || categories.includes(filter);

            if (shouldShow) {
                card.classList.remove("is-hidden");

                // Small reveal animation
                card.style.animation = "none";
                void card.offsetWidth;
                card.style.animation = "projectReveal 0.5s ease forwards";
            } else {
                card.classList.add("is-hidden");
            }
        });
    });
});


// ========================================
// PROJECT REVEAL ANIMATION
// ========================================

const style = document.createElement("style");

style.textContent = `
    @keyframes projectReveal {
        from {
            opacity: 0;
            transform: translateY(20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style);