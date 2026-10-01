// Nav Bar Toggle (Mobile)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');

    // Burger Animation
    hamburger.classList.toggle('toggle');
});

// Close nav when clicking a link (mobile)
links.forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        }
    });
});

// Form Submission (Simulated)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
    this.reset();
});
