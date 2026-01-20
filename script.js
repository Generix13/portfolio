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

// ============================
// CONTACT FORM THANK YOU MESSAGE
// ============================
const contactForm = document.getElementById("contact-form");
const thankYou = document.getElementById("thank-you");

if (contactForm && thankYou) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent default page reload

        const formData = new FormData(contactForm);

        // Send form data using fetch (FormSubmit endpoint)
        fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
            .then(response => {
                if (response.ok) {
                    contactForm.style.display = "none"; // hide form
                    thankYou.style.display = "block";   // show thank you
                    contactForm.reset();
                } else {
                    alert("Oops! Something went wrong. Please try again.");
                }
            })
            .catch(error => {
                console.error("FormSubmit error:", error);
                alert("Oops! Something went wrong. Please try again.");
            });
    });
}
