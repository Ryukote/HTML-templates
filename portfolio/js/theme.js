/**
 * Theme Management
 * Handles light/dark mode switching with localStorage persistence
 */

// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Check for saved theme preference or default to 'light' mode
let theme = localStorage.getItem('theme') || 'light';

// Function to set theme
function setTheme(newTheme) {
    theme = newTheme;

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
    }

    localStorage.setItem('theme', theme);
}

// Initialize theme on page load
setTheme(theme);

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    // Add a subtle animation to the toggle button
    themeToggleBtn.classList.add('rotate-180');
    setTimeout(() => {
        themeToggleBtn.classList.remove('rotate-180');
    }, 300);
});

// Listen for system theme changes
if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkModeQuery.addEventListener('change', (e) => {
        // Only apply system preference if user hasn't manually set a theme
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// Add transition class to theme toggle button
themeToggleBtn.style.transition = 'transform 0.3s ease';
