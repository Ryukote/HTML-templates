# Modern Portfolio Website

A stunning, modern portfolio website built with HTML, Tailwind CSS, and Vanilla JavaScript. Features smooth animations, light/dark theme switching, and fully customizable content via JSON files.

![Portfolio Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop)

## ✨ Features

- **🎨 Modern Design**: Beautiful gradient colors and smooth animations
- **🌓 Dark/Light Mode**: Toggle between themes with persistent preferences
- **📱 Fully Responsive**: Optimized for all device sizes
- **🚀 Smooth Animations**: Powered by AOS, Lenis, Vanilla Tilt, and Lottie
- **📊 Interactive Slider**: Project showcase with Splide.js
- **📝 JSON-Based Content**: Easily update all content via JSON file
- **⚡ Fast & Lightweight**: No framework bloat, pure vanilla JavaScript
- **♿ Accessible**: Built with accessibility best practices

## 🛠️ Technologies Used

### Core Technologies
- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No frameworks, just pure JS

### Animation Libraries
- **[AOS](https://michalsnik.github.io/aos/)**: Animate On Scroll library
- **[Lenis](https://lenis.darkroom.engineering/)**: Smooth scroll library
- **[Vanilla Tilt.js](https://micku7zu.github.io/vanilla-tilt.js/)**: 3D tilt effect
- **[Splide.js](https://splidejs.com/)**: Lightweight carousel/slider
- **[Lottie](https://lottiefiles.com/)**: Vector animations

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Custom CSS styles
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── theme.js           # Theme switching logic
├── data/
│   └── content.json       # All website content (editable)
└── README.md              # Documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. **Download or Clone the Repository**
   ```bash
   # If using git
   git clone <repository-url>

   # Or download and extract the ZIP file
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd portfolio
   ```

3. **Open the Website**

   **Option A: Direct Browser Opening (Simple)**
   - Double-click `index.html` to open in your default browser
   - Note: Some features may require a local server

   **Option B: Using a Local Server (Recommended)**

   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   Using Node.js (with http-server):
   ```bash
   # Install http-server globally
   npm install -g http-server

   # Run server
   http-server -p 8000
   ```

   Using VS Code Live Server:
   - Install "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

4. **Access the Website**
   - Open your browser and go to `http://localhost:8000`

## 🎨 Customization

### Editing Content

All website content can be easily modified through the `data/content.json` file:

#### 1. Hero Section
```json
"hero": {
  "greeting": "Hello, I'm",
  "name": "Your Name",
  "title": "Your Title",
  "description": "Your description"
}
```

#### 2. About Section
```json
"about": {
  "title": "About Me",
  "description": "Your bio...",
  "stats": [
    {"value": "5+", "label": "Years of Experience"},
    ...
  ]
}
```

#### 3. Skills Section
```json
"skills": {
  "categories": [
    {
      "name": "Frontend Development",
      "icon": "🎨",
      "items": ["React", "Vue.js", ...]
    },
    ...
  ]
}
```

#### 4. Projects Section
```json
"projects": {
  "items": [
    {
      "title": "Project Name",
      "description": "Project description...",
      "image": "https://your-image-url.com/image.jpg",
      "tags": ["React", "Node.js"],
      "liveUrl": "https://...",
      "githubUrl": "https://github.com/..."
    }
  ]
}
```

#### 5. Contact Information
```json
"contact": {
  "info": [
    {
      "label": "Email",
      "value": "your.email@example.com",
      "link": "mailto:your.email@example.com",
      "icon": "<svg>...</svg>"
    }
  ],
  "social": [
    {
      "name": "GitHub",
      "url": "https://github.com/yourusername",
      "icon": "<svg>...</svg>"
    }
  ]
}
```

### Changing Colors

Edit the Tailwind config in `index.html` (lines 31-48):

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#667eea',    // Change these hex codes
          DEFAULT: '#764ba2',
          dark: '#553c9a',
        },
        accent: {
          light: '#f093fb',
          DEFAULT: '#f5576c',
          dark: '#fa709a',
        }
      }
    }
  }
}
```

### Changing Images

1. **Using Unsplash URLs (Current Method)**
   - Find images on [Unsplash](https://unsplash.com)
   - Copy the photo URL
   - Add `?w=800&h=600&fit=crop` for optimization
   - Update the `image` field in `content.json`

2. **Using Local Images**
   - Create an `assets/images/` folder
   - Add your images there
   - Reference them: `"image": "assets/images/your-image.jpg"`

### Changing Lottie Animation

1. Browse [LottieFiles](https://lottiefiles.com/free-animations)
2. Find an animation you like
3. Get the Lottie JSON URL
4. Update `CONFIG.lottieAnimation` in `js/main.js`:
   ```javascript
   const CONFIG = {
     lottieAnimation: 'YOUR_LOTTIE_JSON_URL'
   };
   ```

### Customizing Animations

#### AOS (Animate On Scroll)
Adjust settings in `js/main.js`:
```javascript
AOS.init({
  duration: 1000,    // Animation duration
  easing: 'ease-out-cubic',
  once: true,        // Animate only once
  offset: 100,       // Offset from viewport
});
```

#### Lenis (Smooth Scroll)
Adjust settings in `js/main.js`:
```javascript
const lenis = new Lenis({
  duration: 1.2,     // Scroll duration
  lerp: 0.1,         // Smoothness (0-1)
  wheelMultiplier: 1,
});
```

#### Vanilla Tilt
Adjust settings in `js/main.js`:
```javascript
VanillaTilt.init(element, {
  max: 15,           // Max tilt rotation
  speed: 400,        // Transition speed
  glare: true,       // Enable glare effect
  'max-glare': 0.3,  // Max glare opacity
});
```

## 📱 Adding New Sections

1. **Add HTML Section** in `index.html`:
```html
<section id="new-section" class="py-20 px-6">
  <div class="container mx-auto max-w-6xl">
    <h2 class="text-4xl font-bold text-center mb-16" data-aos="fade-up">
      <span class="bg-gradient-to-r from-primary-light to-accent-DEFAULT bg-clip-text text-transparent">
        New Section Title
      </span>
    </h2>
    <!-- Your content here -->
  </div>
</section>
```

2. **Add Navigation Link** in `index.html`:
```html
<a href="#new-section" class="nav-link hover:text-primary-light transition-colors">
  New Section
</a>
```

3. **Add Content to JSON** (if needed):
```json
"newSection": {
  "title": "New Section",
  "items": [...]
}
```

4. **Add JavaScript Logic** in `js/main.js`:
```javascript
function populateNewSection(data) {
  // Your logic here
}
```

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. Create account at [Netlify](https://www.netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop your portfolio folder
4. Your site is live! (Free custom domain available)

**Or using Netlify CLI:**
```bash
npm install -g netlify-cli
cd portfolio
netlify deploy --prod
```

### Option 2: Vercel

1. Create account at [Vercel](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   cd portfolio
   vercel
   ```

### Option 3: GitHub Pages

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
3. Go to Settings → Pages
4. Select "main" branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 4: Traditional Web Hosting

1. Get hosting (Bluehost, HostGator, etc.)
2. Upload files via FTP:
   - Use FileZilla or similar FTP client
   - Upload all files to `public_html` or `www` folder
3. Access your site at your domain

## 🔧 Customization Tips

### Performance Optimization

1. **Optimize Images**
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Use appropriate dimensions

2. **Self-Host Libraries** (Optional)
   - Download libraries from CDNs
   - Place in `js/vendor/` folder
   - Update script src paths

3. **Minimize JSON**
   - Remove whitespace in `content.json`
   - Use JSON minifier

### SEO Optimization

1. **Update Meta Tags** in `index.html`:
```html
<meta name="description" content="Your description">
<meta name="keywords" content="portfolio, web developer, ...">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://your-image.jpg">
```

2. **Add Structured Data**:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yourwebsite.com",
  "jobTitle": "Web Developer"
}
</script>
```

### Accessibility Improvements

1. Add alt text to all images
2. Use semantic HTML
3. Ensure keyboard navigation works
4. Test with screen readers
5. Maintain good color contrast

## 🐛 Troubleshooting

### Common Issues

**Issue: Animations not working**
- Clear browser cache
- Check browser console for errors
- Ensure all CDN links are accessible

**Issue: Content not loading from JSON**
- Use a local server (not file://)
- Check JSON syntax validity
- Open browser console to see errors

**Issue: Theme toggle not working**
- Check if localStorage is enabled
- Clear browser cache and cookies
- Check browser console for errors

**Issue: Mobile menu not showing**
- Check if JavaScript is enabled
- Inspect element to verify classes
- Clear cache and reload

## 📄 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Opera (latest 2 versions)

## 📝 License

This project is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! If you create something cool, share it!

## 📧 Support

If you need help or have questions:
1. Check the troubleshooting section
2. Review the customization guide
3. Check browser console for errors
4. Ensure all files are in correct locations

## 🎉 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [AOS](https://michalsnik.github.io/aos/) - Scroll animations
- [Lenis](https://lenis.darkroom.engineering/) - Smooth scrolling
- [Vanilla Tilt](https://micku7zu.github.io/vanilla-tilt.js/) - Tilt effects
- [Splide](https://splidejs.com/) - Slider library
- [Lottie](https://lottiefiles.com/) - Animations
- [Unsplash](https://unsplash.com) - Free images

## 🚀 Quick Start Checklist

- [ ] Download/clone the repository
- [ ] Edit `data/content.json` with your information
- [ ] Replace placeholder images with your own
- [ ] Update colors in Tailwind config (optional)
- [ ] Customize Lottie animation (optional)
- [ ] Test locally with a web server
- [ ] Deploy to your preferred platform
- [ ] Share your portfolio with the world! 🎉

---

**Built with ❤️ using modern web technologies**

*Happy coding! 💻✨*
