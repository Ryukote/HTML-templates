# 🎨 Customization Guide

A comprehensive guide to customizing every aspect of your portfolio website.

## Table of Contents

1. [Quick Customizations](#quick-customizations)
2. [Editing Content](#editing-content)
3. [Changing Colors & Styles](#changing-colors--styles)
4. [Modifying Animations](#modifying-animations)
5. [Adding New Sections](#adding-new-sections)
6. [Images & Media](#images--media)
7. [Advanced Customizations](#advanced-customizations)

---

## Quick Customizations

### 5-Minute Setup

**Essential changes to make it yours:**

1. **Update Personal Info** (`data/content.json`):
   ```json
   "hero": {
     "name": "Your Name",
     "title": "Your Job Title"
   }
   ```

2. **Update Contact Details**:
   ```json
   "contact": {
     "info": [
       {"value": "your.email@example.com", "link": "mailto:your.email@example.com"}
     ]
   }
   ```

3. **Update Social Links**:
   ```json
   "social": [
     {"name": "GitHub", "url": "https://github.com/yourusername"}
   ]
   ```

4. **Update Footer**:
   ```json
   "footer": {
     "text": "&copy; 2024 Your Name. All rights reserved."
   }
   ```

---

## Editing Content

### File Location
All content is in `data/content.json`

### Hero Section

```json
"hero": {
  "greeting": "Hello, I'm",           // Greeting text
  "name": "Your Full Name",           // Your name
  "title": "Your Job Title",          // Job title/profession
  "description": "A brief intro..."   // 1-2 sentence description
}
```

**Tips:**
- Keep name short for better display on mobile
- Title should be concise (2-4 words)
- Description: 1-2 sentences, 15-20 words

### About Section

```json
"about": {
  "title": "About Me",
  "description": "Your bio here...",
  "stats": [
    {"value": "5+", "label": "Years of Experience"},
    {"value": "50+", "label": "Projects Completed"},
    {"value": "30+", "label": "Happy Clients"}
  ]
}
```

**Customization Options:**
- Change stat values to match your experience
- Add/remove stats (keep 3-4 for best layout)
- Use emojis in labels: `"Projects 🚀"`

### Skills Section

```json
"skills": {
  "title": "Skills & Expertise",
  "categories": [
    {
      "name": "Category Name",
      "icon": "🎨",              // Any emoji
      "items": [
        "Skill 1",
        "Skill 2",
        "Skill 3"
      ]
    }
  ]
}
```

**Best Practices:**
- Use 3 categories for balanced layout
- 4-6 skills per category
- Choose relevant emojis:
  - Frontend: 🎨 💻 🖥️ ⚡
  - Backend: ⚙️ 🛠️ 🔧 📡
  - Design: 🎭 ✏️ 🖌️ 🎪
  - Mobile: 📱 📲 💫
  - DevOps: 🚀 ☁️ 🐳 🔐

### Projects Section

```json
"projects": {
  "items": [
    {
      "title": "Project Name",
      "description": "Brief project description (1-2 sentences)",
      "image": "https://image-url.com/image.jpg",
      "tags": ["React", "Node.js", "MongoDB"],
      "liveUrl": "https://live-demo.com",
      "githubUrl": "https://github.com/user/repo"
    }
  ]
}
```

**Project Guidelines:**
- Add 3-6 projects (slider works best with multiple)
- Use high-quality images (800x600px minimum)
- Keep descriptions under 150 characters
- Include 3-5 relevant tags
- Use "#" if no live URL/GitHub available

**Finding Project Images:**
- [Unsplash](https://unsplash.com) - Free high-quality photos
- Your actual project screenshots
- [Pexels](https://pexels.com) - Free stock photos
- [Dribbble](https://dribbble.com) - Design inspiration

### Testimonials Section

```json
"testimonials": {
  "items": [
    {
      "name": "Client Name",
      "position": "Job Title, Company",
      "avatar": "https://avatar-url.com/avatar.jpg",
      "text": "Testimonial text...",
      "rating": 5
    }
  ]
}
```

**Tips:**
- Use 3 testimonials for best layout
- Avatar images: 200x200px, square
- Rating: 1-5 stars
- Keep testimonials under 200 characters

**Avatar Sources:**
- [UI Faces](https://uifaces.co/) - Free avatar images
- [This Person Does Not Exist](https://thispersondoesnotexist.com/) - AI-generated faces
- Unsplash portraits
- Real client photos (with permission)

### Contact Section

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
      "name": "Platform",
      "url": "https://platform.com/yourprofile",
      "icon": "<svg>...</svg>"
    }
  ]
}
```

**Available Icons:**
Use SVG icons from [Heroicons](https://heroicons.com/) or [Bootstrap Icons](https://icons.getbootstrap.com/)

---

## Changing Colors & Styles

### Update Primary Colors

Edit Tailwind config in `index.html` (around line 35):

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#667eea',    // Light purple
          DEFAULT: '#764ba2',  // Main purple
          dark: '#553c9a',     // Dark purple
        },
        accent: {
          light: '#f093fb',    // Light pink
          DEFAULT: '#f5576c',  // Main pink
          dark: '#fa709a',     // Dark pink
        }
      }
    }
  }
}
```

### Popular Color Schemes

**Blue Professional:**
```javascript
primary: {
  light: '#60a5fa',
  DEFAULT: '#3b82f6',
  dark: '#2563eb',
}
```

**Green Nature:**
```javascript
primary: {
  light: '#34d399',
  DEFAULT: '#10b981',
  dark: '#059669',
}
```

**Orange Energy:**
```javascript
primary: {
  light: '#fb923c',
  DEFAULT: '#f97316',
  dark: '#ea580c',
}
```

**Red Bold:**
```javascript
primary: {
  light: '#f87171',
  DEFAULT: '#ef4444',
  dark: '#dc2626',
}
```

**Color Resources:**
- [Coolors](https://coolors.co/) - Color palette generator
- [Color Hunt](https://colorhunt.co/) - Color palette inspiration
- [Adobe Color](https://color.adobe.com/) - Color wheel tool

### Update Typography

In `css/styles.css`, change the Google Font:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
```

Then update in `index.html`:

```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
}
```

**Popular Font Combinations:**
- **Modern:** Inter + Inter
- **Professional:** Roboto + Roboto
- **Creative:** Poppins + Poppins
- **Elegant:** Playfair Display + Source Sans Pro
- **Bold:** Montserrat + Montserrat

### Custom CSS Styles

Add custom styles in `css/styles.css`:

```css
/* Custom button style */
.custom-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

---

## Modifying Animations

### AOS (Animate On Scroll)

#### Global Settings

Edit in `js/main.js`:

```javascript
AOS.init({
  duration: 1000,           // Animation duration (ms)
  easing: 'ease-out-cubic', // Easing function
  once: true,               // Animate only once
  offset: 100,              // Trigger offset (px)
  delay: 0,                 // Global delay (ms)
});
```

#### Animation Types

In `index.html`, use different `data-aos` values:

```html
<!-- Fade animations -->
<div data-aos="fade-up">Fade Up</div>
<div data-aos="fade-down">Fade Down</div>
<div data-aos="fade-left">Fade Left</div>
<div data-aos="fade-right">Fade Right</div>

<!-- Zoom animations -->
<div data-aos="zoom-in">Zoom In</div>
<div data-aos="zoom-out">Zoom Out</div>

<!-- Flip animations -->
<div data-aos="flip-left">Flip Left</div>
<div data-aos="flip-right">Flip Right</div>

<!-- Custom duration and delay -->
<div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
  Custom Animation
</div>
```

### Lenis (Smooth Scroll)

Edit settings in `js/main.js`:

```javascript
const lenis = new Lenis({
  duration: 1.2,      // Scroll duration (slower = higher number)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,  // Scroll speed (higher = faster)
  touchMultiplier: 2,  // Touch scroll speed
});
```

**Presets:**

**Slow & Smooth:**
```javascript
duration: 2.0,
wheelMultiplier: 0.8,
```

**Fast & Snappy:**
```javascript
duration: 0.8,
wheelMultiplier: 1.5,
```

### Vanilla Tilt

Edit settings in `js/main.js`:

```javascript
VanillaTilt.init(element, {
  max: 15,              // Max tilt angle
  speed: 400,           // Transition speed
  glare: true,          // Enable glare effect
  'max-glare': 0.3,     // Max glare opacity
  scale: 1.05,          // Hover scale
  perspective: 1000,    // Perspective depth
  transition: true,     // Enable transitions
  reset: true,          // Reset on mouse leave
  axis: null,           // Restrict to 'x' or 'y'
});
```

**Subtle Effect:**
```javascript
max: 8,
speed: 600,
glare: false,
scale: 1.02,
```

**Dramatic Effect:**
```javascript
max: 25,
speed: 300,
glare: true,
'max-glare': 0.5,
scale: 1.1,
```

### Splide Slider

Edit settings in `js/main.js`:

```javascript
new Splide('#projects-slider', {
  type: 'loop',          // 'loop', 'slide', or 'fade'
  perPage: 3,            // Items per page
  perMove: 1,            // Items to move
  gap: '2rem',           // Gap between slides
  autoplay: true,        // Enable autoplay
  interval: 4000,        // Autoplay interval (ms)
  speed: 600,            // Transition speed (ms)
  pauseOnHover: true,    // Pause on hover
  arrows: true,          // Show arrows
  pagination: true,      // Show pagination
  drag: true,            // Enable drag
  breakpoints: {
    1024: { perPage: 2 },
    768: { perPage: 1 },
  },
});
```

### Lottie Animation

Change animation in `js/main.js`:

```javascript
const CONFIG = {
  lottieAnimation: 'YOUR_LOTTIE_URL_HERE'
};
```

**Finding Lottie Animations:**
1. Browse [LottieFiles](https://lottiefiles.com/featured)
2. Select an animation
3. Click "Lottie Animation URL"
4. Copy the URL
5. Replace in `CONFIG.lottieAnimation`

**Popular Categories:**
- Coding animations
- Developer themes
- Abstract shapes
- Loading animations
- Tech illustrations

---

## Adding New Sections

### Step-by-Step Guide

#### 1. Add HTML Section

In `index.html`, add after an existing section:

```html
<section id="new-section" class="py-20 px-6">
  <div class="container mx-auto max-w-6xl">
    <!-- Title -->
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="fade-up">
      <span class="bg-gradient-to-r from-primary-light to-accent-DEFAULT bg-clip-text text-transparent">
        New Section Title
      </span>
    </h2>

    <!-- Content -->
    <div class="grid md:grid-cols-2 gap-12" id="new-section-content">
      <!-- Your content here -->
    </div>
  </div>
</section>
```

#### 2. Add Navigation Link

In `index.html`, add to navigation:

```html
<a href="#new-section" class="nav-link hover:text-primary-light transition-colors">
  New Section
</a>
```

#### 3. Add to Mobile Menu

```html
<div id="mobile-menu" class="hidden md:hidden mt-4 pb-4 space-y-2">
  <!-- Existing links -->
  <a href="#new-section" class="block py-2 hover:text-primary-light transition-colors">
    New Section
  </a>
</div>
```

#### 4. Add Content to JSON

In `data/content.json`:

```json
"newSection": {
  "title": "New Section",
  "items": [
    {
      "name": "Item 1",
      "description": "Description..."
    }
  ]
}
```

#### 5. Add JavaScript Logic

In `js/main.js`:

```javascript
// In loadContent function, add:
populateNewSection(contentData.newSection);

// Create populate function:
function populateNewSection(data) {
  if (!data) return;

  const container = document.getElementById('new-section-content');
  container.innerHTML = '';

  data.items.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('data-aos', 'fade-up');
    itemDiv.setAttribute('data-aos-delay', index * 100);
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;
    container.appendChild(itemDiv);
  });
}
```

---

## Images & Media

### Using Images

#### Option 1: Unsplash (Free, Hosted)

```
https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop
```

**Benefits:**
- Free CDN
- Automatic optimization
- High quality

#### Option 2: Local Images

1. Create folder: `assets/images/`
2. Add images
3. Reference: `"image": "assets/images/photo.jpg"`

**Optimization:**
- Use WebP format
- Compress with [TinyPNG](https://tinypng.com/)
- Recommended sizes:
  - Projects: 800x600px
  - Avatars: 200x200px
  - Hero: 1200x800px

### Video Backgrounds (Advanced)

Add to hero section:

```html
<video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
  <source src="assets/video/background.mp4" type="video/mp4">
</video>
```

---

## Advanced Customizations

### Adding Contact Form Backend

Replace form handler in `js/main.js`:

```javascript
async function initContactForm() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  });
}
```

**Form Services:**
- [Formspree](https://formspree.io/) - Free form backend
- [EmailJS](https://www.emailjs.com/) - Email from JavaScript
- [Web3Forms](https://web3forms.com/) - Simple form API

### Adding Google Analytics

Before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Adding Blog Section

See full guide in [Adding New Sections](#adding-new-sections)

### Multi-language Support

Create multiple JSON files:
- `content-en.json`
- `content-es.json`
- `content-fr.json`

Add language switcher and load appropriate file.

---

## Quick Reference

### File Locations

```
portfolio/
├── index.html         → Main structure
├── css/styles.css     → Custom styles
├── js/
│   ├── main.js       → Functionality & animations
│   └── theme.js      → Dark mode
└── data/
    └── content.json  → All content
```

### Tailwind Class Reference

```html
<!-- Spacing -->
p-4    → padding: 1rem
m-4    → margin: 1rem
gap-4  → gap: 1rem

<!-- Colors -->
bg-primary-light    → Background
text-primary-light  → Text color

<!-- Typography -->
text-2xl  → font-size: 1.5rem
font-bold → font-weight: 700

<!-- Layout -->
flex            → display: flex
grid            → display: grid
grid-cols-2     → 2 columns
md:grid-cols-3  → 3 columns on medium screens

<!-- Effects -->
hover:shadow-lg     → Box shadow on hover
transition-all      → Transition all properties
transform scale-105 → Scale transform
```

---

## Need More Help?

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [AOS Documentation](https://github.com/michalsnik/aos)
- [Splide Documentation](https://splidejs.com/)
- Check `README.md` for troubleshooting

---

**Happy Customizing! 🎨✨**
