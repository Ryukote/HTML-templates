# 🎬 Lottie Animation Guide

Learn how to change the hero section animation to personalize your portfolio!

---

## 🎯 Current Animation

The portfolio uses a keyboard typing/coding-themed Lottie animation in the hero section (right side on desktop, below text on mobile).

**Current Animation:** Keyboard typing/coding animation
**Source:** LottieFiles public library
**Perfect for:** Developers, programmers, coders

---

## 🔄 How to Change the Animation

### Quick Method (5 minutes)

1. **Find a Lottie Animation**
   - Go to [LottieFiles.com](https://lottiefiles.com/)
   - Browse free animations
   - Search for: "developer", "coding", "tech", "portfolio", "creative", etc.

2. **Get the Animation URL**
   - Click on the animation you like
   - Click the "Lottie Animation URL" button
   - Copy the URL (should end with `.json`)

3. **Update Your Portfolio**
   - Open `js/main.js`
   - Find line ~10 (the CONFIG section):
   ```javascript
   const CONFIG = {
       contentPath: 'data/content.json',
       lottieAnimation: 'YOUR_URL_HERE'  // ← Change this
   };
   ```
   - Replace the URL with your copied URL
   - Save the file
   - Refresh your browser

---

## 🎨 Recommended Animation Themes

### For Developers
- **Coding animations** - Keyboards, code typing, terminal
- **Tech icons** - Gears, circuits, binary code
- **Website building** - Browser windows, responsive design
- **Data/AI** - Neural networks, data flow, algorithms

### For Designers
- **Creative tools** - Pen, brush, design software
- **Color palettes** - Paint mixing, color wheels
- **Design process** - Sketching, prototyping
- **Portfolio showcase** - Image gallery, mockups

### For Creatives
- **Abstract shapes** - Geometric patterns, flowing lines
- **Motion graphics** - Smooth transitions, morphing
- **Artistic** - Paint strokes, creative expression
- **Minimal** - Simple, elegant movements

---

## 📋 Popular Animation URLs

Here are some tested, working Lottie animations you can use:

### Keyboard/Typing Animations (Perfect for Developers!)

```javascript
// Keyboard typing/coding - CURRENT
'https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json'

// Laptop with code typing
'https://assets2.lottiefiles.com/packages/lf20_xyadoh9h.json'

// Computer coding workspace
'https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json'

// Code editor typing
'https://assets10.lottiefiles.com/packages/lf20_eroqjb7w.json'

// Terminal/command line typing
'https://assets7.lottiefiles.com/packages/lf20_5tl1xxnz.json'
```

### Other Developer/Tech Animations

```javascript
// Abstract tech sphere
'https://assets4.lottiefiles.com/packages/lf20_r6zpblji.json'

// Abstract tech patterns
'https://assets9.lottiefiles.com/packages/lf20_yd9tyh8v.json'

// Data/code visualization
'https://assets3.lottiefiles.com/packages/lf20_9wpyhdzo.json'

// Developer tools
'https://assets6.lottiefiles.com/packages/lf20_myejiggj.json'
```

### Creative/Design Animations

```javascript
// Creative bulb
'https://assets3.lottiefiles.com/packages/lf20_jk6c1n2n.json'

// Design tools
'https://assets8.lottiefiles.com/packages/lf20_mldlrxod.json'

// Rocket launch (startup)
'https://assets7.lottiefiles.com/packages/lf20_u4yrau.json'
```

### Abstract/Minimal Animations

```javascript
// Geometric shapes
'https://assets2.lottiefiles.com/packages/lf20_yhx2iwsd.json'

// Flowing lines
'https://assets1.lottiefiles.com/packages/lf20_aqlahcvt.json'

// Particle wave
'https://assets6.lottiefiles.com/packages/lf20_khzniaya.json'
```

---

## 🛠️ Advanced: Using Your Own Animation

### Option 1: Host on LottieFiles

1. Create your animation in After Effects
2. Export using Bodymovin plugin
3. Upload to [LottieFiles.com](https://lottiefiles.com/)
4. Get the public URL
5. Use that URL in your config

### Option 2: Self-Host the JSON File

1. Download the Lottie JSON file
2. Create folder: `assets/lottie/`
3. Save the file as `hero-animation.json`
4. Update config:
   ```javascript
   lottieAnimation: 'assets/lottie/hero-animation.json'
   ```
5. **Important:** Must use a local server for this to work!

---

## 🎛️ Animation Settings

You can customize how the animation plays. Open `js/main.js` and find the `initLottie()` function (around line 123):

```javascript
player.setAttribute('speed', '1');      // Animation speed (1 = normal)
player.setAttribute('loop', '');        // Loop forever
player.setAttribute('autoplay', '');    // Start automatically
```

### Customize Speed
```javascript
player.setAttribute('speed', '0.5');   // Half speed (slower)
player.setAttribute('speed', '1.5');   // 1.5x speed (faster)
player.setAttribute('speed', '2');     // Double speed
```

### Stop Looping
```javascript
// Remove the loop attribute to play once
player.setAttribute('loop', '');        // Loops forever
// or
// player.setAttribute('loop', 'false'); // Plays once
```

### Disable Autoplay
```javascript
// Remove autoplay to require user interaction
player.setAttribute('autoplay', '');      // Plays automatically
// or
// Don't set autoplay at all              // Waits for user
```

---

## 🖼️ Animation Size & Position

The animation container is in `index.html` around line 108:

```html
<div data-aos="fade-left" class="flex justify-center">
    <div id="hero-lottie" class="w-full max-w-lg"></div>
</div>
```

### Make Animation Larger
```html
<div id="hero-lottie" class="w-full max-w-2xl"></div>  <!-- Larger -->
<div id="hero-lottie" class="w-full max-w-xl"></div>   <!-- Medium -->
<div id="hero-lottie" class="w-full max-w-lg"></div>   <!-- Current -->
<div id="hero-lottie" class="w-full max-w-md"></div>   <!-- Smaller -->
```

### Set Fixed Height
```html
<div id="hero-lottie" class="w-full max-w-lg h-96"></div>  <!-- 384px height -->
<div id="hero-lottie" class="w-full max-w-lg h-80"></div>  <!-- 320px height -->
```

---

## 🆘 Troubleshooting

### Animation Doesn't Show

**Check:**
1. Is the URL correct and ends with `.json`?
2. Open the URL in browser - does it show JSON code?
3. Check browser console for errors (F12)
4. Try a different animation URL from the list above

### Animation Shows But Doesn't Play

**Solutions:**
1. Make sure `autoplay` is set
2. Check `speed` is not set to `0`
3. Verify `loop` attribute is present
4. Try refreshing the page

### Animation URL Returns 403 Error

**This means:**
- The animation URL is private or restricted
- Solution: Use a different animation from LottieFiles public library
- Or: Download and self-host the animation

### Animation is Too Large/Small

**Adjust in HTML:**
```html
<!-- Change max-w-lg to: -->
max-w-xs   (extra small)
max-w-sm   (small)
max-w-md   (medium)
max-w-lg   (large - current)
max-w-xl   (extra large)
max-w-2xl  (2x large)
```

---

## 💡 Pro Tips

1. **Choose animations that match your theme**
   - Dark mode friendly (works on both light/dark backgrounds)
   - Not too distracting
   - Loops smoothly

2. **File size matters**
   - Smaller animations load faster
   - Check file size on LottieFiles
   - Under 100KB is ideal

3. **Test on mobile**
   - Animations should work well on small screens
   - Not too complex or detailed

4. **Consider removing the animation**
   - You can hide it entirely in `css/styles.css`:
   ```css
   #hero-lottie {
       display: none;
   }
   ```
   - Or use a static image instead

---

## 🎨 Alternative: Use an Image Instead

Don't want an animation? Use an image instead!

In `index.html`, replace the Lottie container:

```html
<!-- Replace this: -->
<div id="hero-lottie" class="w-full max-w-lg"></div>

<!-- With this: -->
<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
     alt="Developer workspace"
     class="w-full max-w-lg rounded-2xl shadow-2xl">
```

---

## 📚 Resources

- **Find Animations:** [LottieFiles.com](https://lottiefiles.com/)
- **Create Animations:** [Adobe After Effects](https://www.adobe.com/products/aftereffects.html) + [Bodymovin Plugin](https://aescripts.com/bodymovin/)
- **Learn More:** [Lottie Documentation](https://airbnb.io/lottie/)

---

**Now go find the perfect animation for your portfolio! 🎬✨**
