# Troubleshooting Guide

## ⚠️ CORS Errors (Most Common Issue)

### Problem
You see errors like:
- "Access to script has been blocked by CORS policy"
- "Failed to load resource: net::ERR_FILE_NOT_FOUND"
- "Access to fetch has been blocked by CORS policy"
- "AOS is not defined"

### Cause
You're opening `index.html` directly in the browser using `file://` protocol instead of running a local server.

### ✅ Solution: Run a Local Server

**Option 1: Use the Batch File (Windows)**
```bash
# Just double-click this file:
START-SERVER.bat
```

**Option 2: Node.js (Recommended)**
```bash
cd "D:\templates\car tuning"
npx http-server -p 8000 -o
```
Then open: http://localhost:8000

**Option 3: Python**
```bash
cd "D:\templates\car tuning"
python -m http.server 8000
```
Then open: http://localhost:8000

**Option 4: PHP**
```bash
cd "D:\templates\car tuning"
php -S localhost:8000
```
Then open: http://localhost:8000

**Option 5: VS Code Live Server Extension**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 🖼️ Images Not Showing

### Problem
Images appear as broken or don't load.

### Solutions

**1. Check if images exist**
```bash
# Navigate to images folder and check
cd images
dir
```

**2. Download placeholder images**
```bash
node download-images.js
```

**3. Verify image paths in content.json**
Make sure paths start with `images/` like:
```json
"url": "images/hero-car.jpg"
```

**4. Check image file names**
Images must match exactly (case-sensitive):
- hero-car.jpg
- gallery-1.jpg to gallery-6.jpg
- avatar-1.jpg to avatar-6.jpg

---

## 🎨 Theme Toggle Not Working

### Problem
Theme switch button doesn't change light/dark mode.

### Solutions

**1. Check localStorage**
- Open browser DevTools (F12)
- Go to Application > Local Storage
- Clear localStorage and refresh

**2. Check console for errors**
- Open DevTools (F12)
- Go to Console tab
- Look for JavaScript errors

**3. Try different browser**
Some browsers block localStorage in file:// mode

---

## 📝 Content Not Updating

### Problem
Changes to `content.json` don't appear on the website.

### Solutions

**1. Validate JSON syntax**
- Go to https://jsonlint.com
- Paste your `content.json`
- Fix any syntax errors

**2. Hard refresh the page**
- Windows: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

**3. Clear browser cache**
- Chrome: Settings > Privacy > Clear browsing data
- Firefox: Options > Privacy > Clear Data

**4. Check console**
Look for "Error loading content" messages

---

## 🎭 Animations Not Working

### Problem
Cards don't tilt, carousel doesn't slide, or scroll animations don't trigger.

### Solutions

**1. Check if libraries loaded**
Open DevTools Console and type:
```javascript
console.log(typeof VanillaTilt, typeof Splide, typeof AOS, typeof Lenis);
```
Should show: `function function object function`

**2. Clear cache and hard refresh**
```
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

**3. Check for JavaScript errors**
- Open DevTools (F12)
- Look for red error messages in Console

**4. Verify CDN links are loading**
- Open DevTools > Network tab
- Refresh page
- All scripts should show status 200

---

## 📱 Mobile Menu Stuck Open

### Problem
Mobile hamburger menu won't close.

### Solution
```
1. Hard refresh: Ctrl + Shift + R
2. If still stuck, add this to browser console:
   document.getElementById('mobile-menu').classList.add('hidden');
```

---

## 🚀 Deployment Issues

### Netlify Deployment

**Problem: Site shows 404 errors**
```
Solution: Check netlify.toml is in root folder
```

**Problem: Images not loading**
```
Solution: Ensure images/ folder is uploaded
```

### GitHub Pages

**Problem: Site not showing**
```
1. Go to Settings > Pages
2. Select branch: main
3. Select folder: / (root)
4. Save and wait 2-3 minutes
```

**Problem: Styles not loading**
```
Solution: GitHub Pages needs HTTPS
Update all links to use https://
```

---

## 💻 Browser Compatibility

### Problem
Site doesn't work in older browsers.

### Solution
This site requires modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Update your browser to the latest version.

---

## 🔧 Common Error Messages

### "Uncaught ReferenceError: AOS is not defined"
**Cause**: CDN script didn't load or file:// protocol
**Solution**: Use local server (see CORS section above)

### "Failed to load resource: net::ERR_FILE_NOT_FOUND"
**Cause**: Wrong file path or missing file
**Solution**: Check file exists and path is correct

### "SyntaxError: Unexpected token < in JSON"
**Cause**: Invalid JSON in content.json
**Solution**: Validate at jsonlint.com

### "Cannot read property 'textContent' of null"
**Cause**: Missing HTML element with specified ID
**Solution**: Don't modify HTML element IDs

---

## 🐛 Debug Mode

To see detailed debug information:

1. Open DevTools (F12)
2. Go to Console tab
3. Type:
```javascript
localStorage.setItem('debug', 'true');
location.reload();
```

4. Check console for detailed logs

To disable:
```javascript
localStorage.removeItem('debug');
location.reload();
```

---

## 📞 Still Having Issues?

### Checklist
- [ ] Using a local server (not file://)
- [ ] All images exist in images/ folder
- [ ] content.json is valid JSON
- [ ] Browser is up to date
- [ ] No console errors
- [ ] Cache cleared

### Getting Help
1. Check browser Console (F12) for errors
2. Verify all files are in correct locations
3. Try in different browser
4. Try in incognito/private mode
5. Check README.md for setup instructions

### Quick Fixes
```bash
# Reset everything
1. Delete images folder
2. Run: node download-images.js
3. Hard refresh browser: Ctrl + Shift + R
4. Start server: npx http-server -p 8000 -o
```

---

## 🎯 Performance Issues

### Site Loading Slowly

**Solutions:**
1. Optimize images (use TinyPNG.com)
2. Check internet connection (CDN libraries)
3. Clear browser cache
4. Disable browser extensions

### Animations Laggy

**Solutions:**
1. Close other browser tabs
2. Update graphics drivers
3. Disable hardware acceleration in browser
4. Reduce animation complexity in app.js

---

## ✅ Best Practices

1. **Always use a local server** during development
2. **Validate JSON** before saving content.json
3. **Optimize images** before adding them
4. **Test in multiple browsers**
5. **Clear cache** when testing changes
6. **Use HTTPS** for production deployment

---

**Need more help?** Check the README.md for complete documentation.
