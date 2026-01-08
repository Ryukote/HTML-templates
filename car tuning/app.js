// PowerTune - Main JavaScript
// Author: Antonio Halužan
// Copyright © 2024 Antonio Halužan. All rights reserved.

// ==================== CONFIGURATION ====================
// Hardcoded diagonal split image pairs
const diagonalImages = [
    {
        left: "images/diagonal/car-1-left.jpg",
        right: "images/diagonal/car-1-right.jpg",
        alt: "Elite Performance Tuning and McLaren 720S"
    },
    {
        left: "images/diagonal/car-2-left.jpg",
        right: "images/diagonal/car-2-right.jpg",
        alt: "BMW M4 and Ford Mustang GT performance builds"
    },
    {
        left: "images/diagonal/car-3-left.jpg",
        right: "images/diagonal/car-3-right.jpg",
        alt: "Audi RS6 Avant and Nissan GT-R R35 tuning"
    },
    {
        left: "images/diagonal/car-4-left.jpg",
        right: "images/diagonal/car-4-right.jpg",
        alt: "Mercedes C63 AMG and Lamborghini Huracan upgrades"
    },
    {
        left: "images/diagonal/car-5-left.jpg",
        right: "images/diagonal/car-5-right.jpg",
        alt: "Porsche 911 Turbo S and Tesla Model S Plaid optimization"
    }
];

let currentDiagonalIndex = 0;

// ==================== THEME TOGGLE ====================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
if (currentTheme === 'dark') {
    htmlElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
} else {
    htmlElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
}

// Toggle theme
themeToggleBtn.addEventListener('click', function() {
    htmlElement.classList.toggle('dark');

    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleDarkIcon.classList.remove('hidden');
        themeToggleLightIcon.classList.add('hidden');
    }
});

// ==================== MOBILE MENU ====================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ==================== DIAGONAL SPLIT IMAGE ROTATION ====================
function initDiagonalSplit() {
    // Start rotation after initial load
    setTimeout(() => {
        startDiagonalRotation();
    }, 5000); // Wait 5 seconds before first transition
}

function startDiagonalRotation() {
    setInterval(() => {
        rotateDiagonalImages();
    }, 8000); // Change images every 8 seconds
}

function rotateDiagonalImages() {
    const leftImg = document.getElementById('diagonal-left-img');
    const rightImg = document.getElementById('diagonal-right-img');

    if (!leftImg || !rightImg) return;

    // Slide out current images
    leftImg.classList.remove('active', 'slide-in');
    rightImg.classList.remove('active', 'slide-in');
    leftImg.classList.add('slide-out');
    rightImg.classList.add('slide-out');

    // After slide out, change images
    setTimeout(() => {
        currentDiagonalIndex = (currentDiagonalIndex + 1) % diagonalImages.length;
        const newImages = diagonalImages[currentDiagonalIndex];

        leftImg.src = newImages.left;
        rightImg.src = newImages.right;
        leftImg.alt = newImages.alt + ' Left';
        rightImg.alt = newImages.alt + ' Right';

        // Reset to slide-in position
        leftImg.classList.remove('slide-out');
        rightImg.classList.remove('slide-out');
        leftImg.classList.add('slide-in');
        rightImg.classList.add('slide-in');

        // Slide in new images
        setTimeout(() => {
            leftImg.classList.remove('slide-in');
            rightImg.classList.remove('slide-in');
            leftImg.classList.add('active');
            rightImg.classList.add('active');
        }, 50);
    }, 1300); // Wait for slide out to complete (matches 1.2s CSS transition)
}

// ==================== VANILLA TILT INITIALIZATION ====================
function initTilt() {
    const tiltElements = document.querySelectorAll('.tilt-card');

    if (tiltElements.length === 0) return;

    VanillaTilt.init(tiltElements, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
        scale: 1.05,
        perspective: 1000,
        transition: true
    });
}

// ==================== SPLIDE CAROUSEL INITIALIZATION ====================
function initSplide() {
    const splideElement = document.querySelector('.splide');

    if (!splideElement) {
        console.warn('Splide element not found');
        return;
    }

    try {
        const splideInstance = new Splide('.splide', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            breakpoints: {
                1024: {
                    perPage: 2,
                },
                768: {
                    perPage: 1,
                }
            }
        });

        splideInstance.mount();
        console.log('Splide initialized successfully');
    } catch (error) {
        console.error('Error initializing Splide:', error);
    }
}

// ==================== AOS INITIALIZATION ====================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        try {
            AOS.init({
                duration: 1000,
                easing: 'ease-out-cubic',
                once: true,
                offset: 100,
                delay: 0
            });
            console.log('AOS initialized successfully');
        } catch (error) {
            console.warn('AOS initialization failed:', error);
        }
    } else {
        console.warn('AOS library not loaded - animations will be skipped');
    }
}

// ==================== LENIS SMOOTH SCROLL INITIALIZATION ====================
function initLenis() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target, {
                    offset: -80,
                    duration: 1.5
                });
            }
        });
    });
}

// ==================== SOCIAL CONTACT TRACKING ====================
// Track social media contact clicks (optional analytics)
document.addEventListener('DOMContentLoaded', function() {
    const socialCards = document.querySelectorAll('.social-contact-card');

    socialCards.forEach(card => {
        card.addEventListener('click', function() {
            const platform = this.querySelector('h3').textContent;
            console.log(`User clicked on ${platform} contact option`);
            // You can add analytics tracking here if needed
        });
    });
});

// ==================== NAVIGATION SCROLL EFFECT ====================
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }

    lastScroll = currentScroll;
});

// ==================== INITIALIZE EVERYTHING ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing website...');

    // Initialize all libraries
    initTilt();
    initAOS();
    initLenis();
    initSplide();

    // Initialize diagonal split rotation
    initDiagonalSplit();

    // Add smooth reveal animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    console.log('Website initialized successfully');
});

// ==================== PERFORMANCE OPTIMIZATIONS ====================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Refresh AOS after all content is loaded
window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
        // Try to initialize if it wasn't initialized before
        if (!AOS.initialized) {
            initAOS();
        } else {
            AOS.refresh();
        }
    } else {
        // Retry initialization on window load
        setTimeout(() => {
            if (typeof AOS !== 'undefined') {
                initAOS();
            }
        }, 100);
    }
});
