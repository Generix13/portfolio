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

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        emailjs.send("service_epr1tmd", "template_syg1fqw", {
            from_name: name,
            from_email: email,
            reply_to: email,
            message: message,
            time: new Date().toLocaleString()
        })
            .then(() => {
                alert("Thank you! Your message has been sent.");
                contactForm.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert(error.text || "Failed to send message.");
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
