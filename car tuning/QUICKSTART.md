# Quick Start Guide

Get your Elite Performance Tuning website up and running in minutes!

## 5-Minute Setup

### Step 1: Download Project
```bash
# If you have the files, navigate to the folder
cd "car tuning"
```

### Step 2: Add Images (Optional)

**Option A - Automatic (requires Node.js):**
```bash
node download-images.js
```

**Option B - Manual:**
- Add your own images to the `images/` folder
- Follow the specifications in `images/IMAGES_GUIDE.md`

### Step 3: Customize Content

Edit `content.json` to update:
- Company name and branding
- Services offered
- Contact information
- Testimonials

**Example:**
```json
{
  "site": {
    "title": "Your Company Name",
    "brandName": "Your Brand"
  }
}
```

### Step 4: View Locally

**No Installation Required:**
```bash
# Just double-click index.html
```

**Better Option - Local Server:**
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then open: http://localhost:8000

### Step 5: Deploy (Choose One)

**Netlify (Easiest):**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Done! Your site is live

**GitHub Pages:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
# Enable Pages in GitHub repo settings
```

**Vercel:**
```bash
npx vercel
# Follow the prompts
```

## Common Customizations

### Change Colors
Edit in `index.html` (line ~30):
```javascript
colors: {
    primary: '#YOUR_COLOR',
    secondary: '#YOUR_COLOR',
}
```

### Change Theme Default
Edit in `app.js` (line ~10):
```javascript
const currentTheme = localStorage.getItem('theme') || 'dark'; // 'light' or 'dark'
```

### Update Services
Edit `content.json` > `services` > `items`:
```json
{
  "icon": "🚀",
  "title": "Your Service",
  "description": "Service description",
  "features": ["Feature 1", "Feature 2"]
}
```

### Add/Remove Testimonials
Edit `content.json` > `testimonials` > `items`

## Need Help?

1. Check `README.md` for full documentation
2. See `images/IMAGES_GUIDE.md` for image help
3. Validate JSON at [jsonlint.com](https://jsonlint.com) if content isn't updating

## Tips

✅ **DO:**
- Test on mobile devices
- Optimize images before adding them
- Keep content.json properly formatted
- Use HTTPS for production

❌ **DON'T:**
- Edit HTML directly for content (use content.json)
- Upload huge unoptimized images
- Forget to test the contact form
- Deploy without replacing placeholder images

## Next Steps

Once your site is running:
1. Replace placeholder images with real photos
2. Update all content in content.json
3. Test contact form with your email service
4. Add Google Analytics (optional)
5. Set up SEO meta tags
6. Test on multiple devices
7. Deploy to production!

---

**Questions?** Check the full README.md file for detailed information.
