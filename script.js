window.onload = function () {
    console.log("Welcome to Erick's portfolio!");
};

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    console.log(`New message from ${name} (${email}): ${message}`);
    alert('Thank you for your message!');
    this.reset();
});
