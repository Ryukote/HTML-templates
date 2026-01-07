# Elite Performance Tuning - Professional Car Tuning Website

A modern, professional car tuning website template built with HTML, Tailwind CSS, and vanilla JavaScript. Features smooth animations, dark/light theme toggle, and JSON-based content management.

## Features

- **Modern Design**: Professional and sleek design perfect for automotive businesses
- **Dark/Light Theme**: User-controlled theme switching with localStorage persistence
- **Smooth Animations**: Multiple animation libraries for a polished user experience
  - Vanilla Tilt.js for 3D tilt effects
  - Splide for carousel/slider functionality
  - Lottie for animated icons
  - Lenis for smooth scrolling
  - AOS for scroll animations
- **Responsive**: Fully responsive design that works on all devices
- **JSON Content Management**: Easy content updates through JSON file
- **Performance Optimized**: Fast loading with optimized assets
- **Accessibility**: Built with accessibility best practices

## Technologies Used

### Core
- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No framework dependencies

### Animation Libraries
- **Vanilla Tilt.js** v1.8.1 - 3D tilt effect on cards
- **Splide** v4 - Carousel/slider functionality
- **Lottie** v2.4.2 - JSON-based animations
- **Lenis** v1.3.17 - Smooth scroll
- **AOS** v2.3.1 - Animate on scroll

## Project Structure

```
car-tuning/
│
├── index.html              # Main HTML file
├── style.css              # Custom CSS styles
├── app.js                 # Main JavaScript file
├── content.json           # Content configuration
├── download-images.js     # Image download script
├── README.md             # This file
│
└── images/               # Image assets
    ├── IMAGES_GUIDE.md   # Image specifications guide
    ├── hero-car.jpg
    ├── gallery-1.jpg to gallery-6.jpg
    └── avatar-1.jpg to avatar-6.jpg
```

## Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, only needed for image download script)
- A code editor (VS Code, Sublime Text, etc.)

### Quick Start

1. **Download/Clone the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd car-tuning

   # Or download and extract the ZIP file
   ```

2. **Download placeholder images** (optional)
   ```bash
   node download-images.js
   ```
   This will download sample placeholder images. Replace these with actual car photos for production.

3. **Open in browser**
   ```bash
   # Simple method: Double-click index.html

   # Or use a local server (recommended)
   # Using Python
   python -m http.server 8000

   # Using Node.js http-server
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

4. **View the website**
   Open your browser and navigate to:
   - Direct file: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## Customization

### Updating Content

All text content is managed through the `content.json` file. Edit this file to update:

- Site title and branding
- Navigation menu items
- Hero section text
- Services descriptions
- Statistics
- Gallery images
- Testimonials
- Contact information
- Footer content

**Example:**
```json
{
  "hero": {
    "title": "Your Custom Title Here",
    "subtitle": "Your custom subtitle",
    "ctaPrimary": "Get Started",
    "ctaSecondary": "Learn More"
  }
}
```

### Changing Colors

Colors are defined in both the HTML (Tailwind config) and CSS file:

**In `index.html`** (Tailwind config):
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#ff6b35',    // Change primary color
                secondary: '#004e89',  // Change secondary color
                dark: '#0a0a0a',       // Change dark theme background
                light: '#f8f9fa',      // Change light theme background
            }
        }
    }
}
```

**In `style.css`** (CSS variables):
```css
:root {
    --primary: #ff6b35;
    --secondary: #004e89;
    --dark: #0a0a0a;
    --light: #f8f9fa;
}
```

### Adding/Removing Sections

1. Edit the HTML in `index.html` to add new sections
2. Update `app.js` to add any JavaScript functionality
3. Update `content.json` to add content for new sections
4. Add corresponding styles in `style.css` if needed

### Replacing Images

See `images/IMAGES_GUIDE.md` for detailed instructions on image specifications and sources.

**Quick steps:**
1. Replace image files in the `images/` folder
2. Keep filenames the same, OR
3. Update references in `content.json`

## Configuration

### Animation Settings

**Vanilla Tilt** (in `app.js`):
```javascript
VanillaTilt.init(tiltElements, {
    max: 15,              // Max tilt rotation (degrees)
    speed: 400,           // Speed of enter/exit transition
    glare: true,          // Enable glare effect
    'max-glare': 0.3,     // Max glare opacity
    scale: 1.05,          // Scale on hover
});
```

**Splide Carousel** (in `app.js`):
```javascript
new Splide('.splide', {
    type: 'loop',
    perPage: 3,           // Slides per page
    gap: '2rem',          // Gap between slides
    autoplay: true,       // Auto-advance
    interval: 3000,       // Autoplay interval (ms)
});
```

**AOS (Animate on Scroll)** (in `app.js`):
```javascript
AOS.init({
    duration: 1000,       // Animation duration
    easing: 'ease-out-cubic',
    once: true,           // Animate only once
    offset: 100,          // Trigger offset
});
```

**Lenis (Smooth Scroll)** (in `app.js`):
```javascript
const lenis = new Lenis({
    duration: 1.2,        // Scroll duration
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,    // Smooth wheel scrolling
});
```

### Theme Toggle

The theme preference is saved in localStorage. Users can switch between light and dark modes using the toggle button in the navigation.

Default theme can be changed in `app.js`:
```javascript
const currentTheme = localStorage.getItem('theme') || 'light'; // Change 'light' to 'dark' for dark default
```

## Deployment

### Option 1: Traditional Web Hosting

Upload the following files to your web server via FTP/SFTP:
```
- index.html
- style.css
- app.js
- content.json
- images/ (folder with all images)
```

### Option 2: Netlify (Recommended - Free)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live!

**Using Git:**
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin <your-repo-url>
git push -u origin main

# Connect to Netlify through their dashboard
```

### Option 3: Vercel (Free)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```

### Option 4: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://username.github.io/repository-name`

### Option 5: Cloudflare Pages (Free)

1. Create account at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repository
3. Deploy with one click

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**
   - Use WebP format for better compression
   - Compress images before uploading
   - Use tools like TinyPNG or Squoosh

2. **Enable Caching**
   - Add cache headers in your server configuration
   - Use a CDN for static assets

3. **Minify Files** (for production)
   ```bash
   # CSS
   npx csso style.css -o style.min.css

   # JavaScript
   npx terser app.js -o app.min.js -c -m
   ```

4. **Lazy Loading**
   - Images are lazy-loaded by default in the script
   - Ensure images have proper dimensions set

## Troubleshooting

### Images not loading
- Check file paths in `content.json`
- Ensure image files exist in the `images/` folder
- Check browser console for errors

### Animations not working
- Check browser console for JavaScript errors
- Ensure all CDN links are accessible
- Clear browser cache

### Theme toggle not working
- Check if localStorage is enabled in browser
- Check browser console for errors

### Content not updating
- Clear browser cache
- Check `content.json` for valid JSON syntax
- Use a JSON validator: [jsonlint.com](https://jsonlint.com)

## Development

### Local Development Server

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

### Live Reload (Optional)

Install live-server for auto-reload during development:
```bash
npm install -g live-server
live-server
```

## Security Considerations

1. **Form Handling**: The contact form currently shows an alert. For production:
   - Add server-side form processing
   - Implement CAPTCHA (reCAPTCHA)
   - Sanitize all inputs
   - Use HTTPS

2. **Content Security**:
   - Sanitize user inputs
   - Implement Content Security Policy (CSP)
   - Use HTTPS for production

## License

This template is free to use for personal and commercial projects.

## Credits

- **Tailwind CSS**: https://tailwindcss.com
- **Vanilla Tilt.js**: https://micku7zu.github.io/vanilla-tilt.js/
- **Splide**: https://splidejs.com
- **Lottie**: https://lottiefiles.com
- **Lenis**: https://lenis.darkroom.engineering
- **AOS**: https://michalsnik.github.io/aos/

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review the documentation for each library
3. Check browser console for errors

## Future Enhancements

Possible additions for future versions:
- Backend integration for contact form
- Blog section
- Customer portal
- Before/after comparison slider
- Video integration
- Multi-language support
- Advanced SEO optimization

---

**Made with ❤️ for car enthusiasts**
