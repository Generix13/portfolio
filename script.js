// ============================
// INITIAL WELCOME MESSAGE
// ============================
window.onload = function () {
    console.log("Welcome to Erick's portfolio!");
};

// ============================
// CONTACT FORM HANDLER (EMAILJS)
// ============================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();

        emailjs.send("service_ow2pajf", "template_kzpne5r", {
            from_name: name,
            from_email: email,
            message: message
        })
            .then(() => {
                alert("Thank you! Your message has been sent.");
                contactForm.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Oops! Something went wrong. Please try again.");
            });
    });
}

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
