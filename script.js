// Hero Slider (5 slides)
let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll('.hero-slider .slide');
const totalHeroSlides = heroSlides.length;

// Function to change slide in hero section
function changeHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
    document.querySelector('.hero-slider').style.transform = `translateX(-${currentHeroSlide * 100}%)`;
}

// Change slide every 5 seconds for hero slider
setInterval(changeHeroSlide, 5000);

// Service Slider (Step-by-step slider for 5 slides)
let currentServiceSlide = 0;
const serviceSlides = document.querySelectorAll('.slider-item');
const totalServiceSlides = serviceSlides.length;
const serviceSlider = document.querySelector('.service-slider');

// Function to move to the next slide in the service section
function moveToNextServiceSlide() {
    currentServiceSlide = (currentServiceSlide + 1) % totalServiceSlides; // Loop back to the first slide after the last one
    const offset = -currentServiceSlide * 100; // Move the slider to the left by 100% of the width of each slide
    serviceSlider.style.transform = `translateX(${offset}%)`; // Apply the translation to show the next slide
}

// Set interval to move the slider step by step with pauses (e.g., every 4 seconds)
setInterval(moveToNextServiceSlide, 8000); // Change slides every 8 seconds


// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    hamburger.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});


// Optional: Add next/previous controls for manual sliding (for hero slider)
document.querySelector('.next').addEventListener('click', function() {
    currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
    document.querySelector('.hero-slider').style.transform = `translateX(-${currentHeroSlide * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', function() {
    currentHeroSlide = (currentHeroSlide - 1 + totalHeroSlides) % totalHeroSlides;
    document.querySelector('.hero-slider').style.transform = `translateX(-${currentHeroSlide * 100}%)`;
});



// Toggle the mobile menu on and off
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Add/remove the 'active' class
  }
  