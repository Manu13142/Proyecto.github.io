document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('message-confirmation').innerText = 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.';
        form.reset();
    });
});
