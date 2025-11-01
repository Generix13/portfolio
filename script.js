// ============================
// INITIAL WELCOME MESSAGE
// ============================
window.onload = function () {
    console.log("Welcome to Erick's portfolio!");
};

// ============================
// CONTACT FORM HANDLER
// ============================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();

        console.log(`New message from ${name} (${email}): ${message}`);
        alert('Thank you for your message!');
        this.reset();
    });
}

// ============================
// SECTION FADE-IN ANIMATION (ON SCROLL)
// ============================
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

sections.forEach((section, index) => {
    observer.observe(section);
    section.style.transitionDelay = `${index * 0.2}s`; // delays each section slightly
});
