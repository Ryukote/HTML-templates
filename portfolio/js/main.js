/**
 * Main JavaScript File
 * Handles all animations, interactions, and dynamic content loading
 */

// Configuration
const CONFIG = {
    contentPath: 'data/content.json',
    // Keyboard typing/coding animation - developer theme
    lottieAnimation: 'https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json'
};

// Store content data
let contentData = null;

/**
 * Initialize Lenis Smooth Scroll
 */
function initLenis() {
    // Check if Lenis is available
    if (typeof Lenis === 'undefined') {
        console.warn('Lenis not loaded, using native smooth scroll');
        // Fallback to native smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
        return null;
    }

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

    // Add smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    return lenis;
}

/**
 * Initialize AOS (Animate On Scroll)
 */
function initAOS() {
    if (typeof AOS === 'undefined') {
        console.warn('AOS not loaded, animations will not work');
        return;
    }

    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0,
    });
}

/**
 * Initialize Vanilla Tilt
 */
function initVanillaTilt() {
    if (typeof VanillaTilt === 'undefined') {
        console.warn('VanillaTilt not loaded, tilt effects will not work');
        return;
    }

    const tiltElements = document.querySelectorAll('.tilt-card');

    tiltElements.forEach(element => {
        VanillaTilt.init(element, {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.3,
            scale: 1.05,
            perspective: 1000,
            transition: true,
        });
    });
}

/**
 * Initialize Lottie Animation
 */
function initLottie() {
    const lottieContainer = document.getElementById('hero-lottie');

    if (lottieContainer) {
        try {
            // Create lottie-player element
            const player = document.createElement('lottie-player');
            player.setAttribute('src', CONFIG.lottieAnimation);
            player.setAttribute('background', 'transparent');
            player.setAttribute('speed', '1');
            player.setAttribute('style', 'width: 100%; height: 100%;');
            player.setAttribute('loop', '');
            player.setAttribute('autoplay', '');

            // Add error handler
            player.addEventListener('error', function() {
                console.warn('Lottie animation failed to load, hiding container');
                lottieContainer.style.display = 'none';
            });

            // Add load success handler
            player.addEventListener('load', function() {
                console.log('✅ Lottie animation loaded successfully');
            });

            lottieContainer.appendChild(player);
        } catch (error) {
            console.warn('Failed to initialize Lottie player:', error);
            lottieContainer.style.display = 'none';
        }
    }
}

/**
 * Initialize Splide Slider
 */
function initSplide() {
    if (typeof Splide === 'undefined') {
        console.warn('Splide not loaded, slider will display as static list');
        return null;
    }

    try {
        const splide = new Splide('#projects-slider', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            padding: '2rem',
            pagination: true,
            arrows: true,
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            pauseOnFocus: true,
            breakpoints: {
                1024: {
                    perPage: 2,
                    gap: '1.5rem',
                },
                768: {
                    perPage: 1,
                    gap: '1rem',
                    padding: '1rem',
                },
            },
        });

        splide.mount();
        return splide;
    } catch (error) {
        console.warn('Failed to initialize Splide:', error);
        return null;
    }
}

/**
 * Load and populate content from JSON
 */
async function loadContent() {
    try {
        const response = await fetch(CONFIG.contentPath);

        // Check if fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        contentData = await response.json();

        // Populate all sections
        populateHero(contentData.hero);
        populateAbout(contentData.about);
        populateSkills(contentData.skills);
        populateProjects(contentData.projects);
        populateTestimonials(contentData.testimonials);
        populateContact(contentData.contact);
        populateFooter(contentData.footer);

        // Initialize animations after content is loaded
        initVanillaTilt();
        initSplide();

        console.log('✅ Content loaded successfully from JSON');
    } catch (error) {
        // This is expected when opening the file directly (file:// protocol)
        // The page will work fine with default HTML content
        console.info('ℹ️ Using default content from HTML (JSON not loaded)');
        console.info('💡 Tip: For JSON content loading, run a local server:');
        console.info('   python -m http.server 8000');

        // Initialize animations with default content
        initVanillaTilt();
        initSplide();
    }
}

/**
 * Populate Hero Section
 */
function populateHero(hero) {
    if (!hero) return;

    document.getElementById('hero-greeting').textContent = hero.greeting;
    document.getElementById('hero-name').textContent = hero.name;
    document.getElementById('hero-title').textContent = hero.title;
    document.getElementById('hero-description').textContent = hero.description;
}

/**
 * Populate About Section
 */
function populateAbout(about) {
    if (!about) return;

    document.getElementById('about-title').textContent = about.title;
    document.getElementById('about-text').textContent = about.description;

    const statsContainer = document.getElementById('about-stats');
    statsContainer.innerHTML = '';

    about.stats.forEach(stat => {
        const statDiv = document.createElement('div');
        statDiv.className = 'flex items-center gap-4';
        statDiv.innerHTML = `
            <div class="w-12 h-12 bg-gradient-to-r from-primary-light to-primary-DEFAULT rounded-lg flex items-center justify-center text-white font-bold">
                ${stat.value}
            </div>
            <span class="text-gray-700 dark:text-gray-300">${stat.label}</span>
        `;
        statsContainer.appendChild(statDiv);
    });
}

/**
 * Populate Skills Section
 */
function populateSkills(skills) {
    if (!skills) return;

    document.getElementById('skills-title').textContent = skills.title;

    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = '';

    skills.categories.forEach((category, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card tilt-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl';
        skillCard.setAttribute('data-aos', 'fade-up');
        skillCard.setAttribute('data-aos-delay', index * 100);

        const skillsList = category.items.map(skill =>
            `<li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                ${skill}
            </li>`
        ).join('');

        skillCard.innerHTML = `
            <div class="text-4xl mb-4">${category.icon}</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">${category.name}</h3>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
                ${skillsList}
            </ul>
        `;

        skillsGrid.appendChild(skillCard);
    });
}

/**
 * Populate Projects Section
 */
function populateProjects(projects) {
    if (!projects) return;

    document.getElementById('projects-title').textContent = projects.title;

    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';

    projects.items.forEach(project => {
        const projectSlide = document.createElement('li');
        projectSlide.className = 'splide__slide';

        const tags = project.tags.map(tag =>
            `<span class="px-3 py-1 bg-primary-light/10 text-primary-light rounded-full text-sm">${tag}</span>`
        ).join('');

        projectSlide.innerHTML = `
            <div class="project-card h-full">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">${project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${tags}
                    </div>
                    <div class="flex gap-4">
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 text-center px-4 py-2 bg-gradient-to-r from-primary-light to-primary-DEFAULT text-white rounded-lg hover:shadow-lg transition-all">
                            Live Demo
                        </a>
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 text-center px-4 py-2 border-2 border-primary-light text-primary-light rounded-lg hover:bg-primary-light hover:text-white transition-all">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        `;

        projectsList.appendChild(projectSlide);
    });
}

/**
 * Populate Testimonials Section
 */
function populateTestimonials(testimonials) {
    if (!testimonials) return;

    document.getElementById('testimonials-title').textContent = testimonials.title;

    const testimonialsGrid = document.getElementById('testimonials-grid');
    testimonialsGrid.innerHTML = '';

    testimonials.items.forEach((testimonial, index) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl';
        testimonialCard.setAttribute('data-aos', 'fade-up');
        testimonialCard.setAttribute('data-aos-delay', index * 100);

        const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);

        testimonialCard.innerHTML = `
            <div class="flex items-center gap-4 mb-4">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-16 h-16 rounded-full object-cover">
                <div>
                    <h4 class="font-bold text-gray-900 dark:text-white">${testimonial.name}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">${testimonial.position}</p>
                </div>
            </div>
            <div class="text-yellow-400 text-xl mb-3">${stars}</div>
            <p class="text-gray-700 dark:text-gray-300 italic">"${testimonial.text}"</p>
        `;

        testimonialsGrid.appendChild(testimonialCard);
    });
}

/**
 * Populate Contact Section
 */
function populateContact(contact) {
    if (!contact) return;

    document.getElementById('contact-title').textContent = contact.title;
    document.getElementById('contact-description').textContent = contact.description;

    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = '';

    contact.info.forEach(item => {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'flex items-center gap-4';
        infoDiv.innerHTML = `
            <div class="w-12 h-12 bg-gradient-to-r from-primary-light to-primary-DEFAULT rounded-lg flex items-center justify-center text-white">
                ${item.icon}
            </div>
            <div>
                <p class="text-sm text-gray-600 dark:text-gray-400">${item.label}</p>
                <a href="${item.link}" class="text-gray-900 dark:text-white font-semibold hover:text-primary-light transition-colors">${item.value}</a>
            </div>
        `;
        contactInfo.appendChild(infoDiv);
    });

    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = '';

    contact.social.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'social-link w-12 h-12 bg-gradient-to-r from-primary-light to-primary-DEFAULT rounded-lg flex items-center justify-center text-white hover:shadow-lg';
        link.innerHTML = social.icon;
        socialLinks.appendChild(link);
    });
}

/**
 * Populate Footer
 */
function populateFooter(footer) {
    if (!footer) return;

    document.getElementById('footer-text').innerHTML = footer.text;
}

/**
 * Handle Contact Form Submission
 */
function initContactForm() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        form.reset();
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

/**
 * Navbar Scroll Effect
 */
function initNavbarScroll() {
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Initialize all features
 */
async function init() {
    console.log('Initializing portfolio...');

    // Load content first
    await loadContent();

    // Initialize animations and features
    initLenis();
    initAOS();
    initLottie();
    initContactForm();
    initMobileMenu();
    initNavbarScroll();

    // Refresh AOS after content is loaded
    setTimeout(() => {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 100);

    console.log('🎉 Portfolio initialized successfully!');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Reload AOS on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 250);
});
