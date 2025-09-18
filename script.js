// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved user preference, if any, on load of the website
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
} else if (localStorage.getItem('theme') === 'light') {
    html.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    feather.replace();
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    feather.replace();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Initialize AOS and Feather Icons
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    feather.replace();
});

const texts = [
    "Designer",
    "Software Developer",
    "Tester",
    "Product Manager"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let currentText = "";
  const speed = 100; // typing speed (ms per char)
  const pause = 1000; // pause between texts

  function typeEffect() {
    if (charIndex < texts[textIndex].length) {
      currentText += texts[textIndex].charAt(charIndex);
      document.getElementById("output").textContent = currentText;
      charIndex++;
      setTimeout(typeEffect, speed);
    } else {
      setTimeout(() => {
        currentText = "";
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length; // loop through texts
        typeEffect();
      }, pause);
    }
  }

  typeEffect();