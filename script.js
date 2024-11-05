document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    // Simple email validation pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return false;
    }
    if (!email.match(emailPattern)) {
        formMessage.textContent = "Please enter a valid email address.";
        return false;
    }
    if (message === "") {
        formMessage.textContent = "Please enter a message.";
        return false;
    }

    // If all validations pass
    formMessage.textContent = "Your message has been sent successfully!";
    formMessage.style.color = "green";

    // Reset form fields (optional)
    document.getElementById("contactForm").reset();

    // Prevent form submission for demonstration purposes
    return false;
}
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute("data-skill");
        bar.style.width = skillLevel;
        bar.textContent = skillLevel;
    });
});
let slideIndex = 1;

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("lightbox-img");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}