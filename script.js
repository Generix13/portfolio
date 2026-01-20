// ============================
// INITIAL WELCOME MESSAGE
// ============================
window.onload = function () {
    console.log("Welcome to Erick's portfolio!");
};

// ============================
// SECTION FADE-IN ANIMATION
// ============================
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    entry.target.style.transitionDelay = `${index * 0.2}s`;
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach(section => observer.observe(section));
});
