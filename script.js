document.addEventListener("DOMContentLoaded", () => {
    const mapContainer = document.getElementById("mapContainer");

    // The interactive Map
    const mapContent = `
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095536!2d144.96305791531685!3d-37.8162792797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e5b1c0b6b1b1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1648001640125!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
        </iframe>
    `;

    mapContainer.innerHTML = mapContent;
});

/*
window.onload = function () {


    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! Your message has been submitted.`);

        form.reset();
    });
};
*/

