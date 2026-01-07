# Dynamic Image System Documentation

## Overview

The website now uses a dynamic image loading system powered by `images.json`. All images are loaded from JSON configuration, making it easy to update and manage your gallery without touching the code.

## Directory Structure

```
images/
├── diagonal/          # Hero section diagonal split images (pairs)
│   ├── car-1-left.jpg
│   ├── car-1-right.jpg
│   ├── car-2-left.jpg
│   ├── car-2-right.jpg
│   └── ... (5 pairs total)
│
├── gallery/           # Gallery carousel images
│   ├── bmw-m4-tuned.jpg
│   ├── audi-rs6-performance.jpg
│   ├── mercedes-c63-amg.jpg
│   └── ... (9 images total)
│
└── avatars/          # Testimonial client photos
    ├── client-1.jpg
    ├── client-2.jpg
    └── ... (6 images)
```

## Diagonal Split Hero Section

### What is it?

The hero section features a stunning diagonal split effect with two car images displayed side by side, separated by a diagonal line. The images automatically rotate through a collection every 6 seconds with smooth fade transitions.

### Features

- ✨ **Auto-rotation**: Images change every 6 seconds
- 🎭 **Smooth transitions**: 1.5-second fade in/out effects
- 📱 **Responsive**: Adapts to mobile (horizontal split) and desktop (diagonal split)
- 🖼️ **5 image pairs**: Rotates through 10 different car images (5 pairs)

### How it works

1. On page load, the first image pair is displayed
2. After 5 seconds, rotation begins
3. Every 6 seconds, images fade out, new images load, then fade in
4. Cycles through all 5 pairs in `images.json`

### Customization

Edit `images.json` to change the diagonal split images:

```json
{
  "hero": {
    "diagonal": [
      {
        "left": "images/diagonal/car-1-left.jpg",
        "right": "images/diagonal/car-1-right.jpg",
        "alt": "High-performance BMW M3 tuning"
      },
      // Add more pairs here...
    ]
  }
}
```

### Timing Configuration

In `app.js`, you can adjust:

```javascript
// Initial delay before rotation starts (line ~89)
setTimeout(() => {
    startDiagonalRotation();
}, 5000); // 5 seconds

// Interval between image changes (line ~94)
setInterval(() => {
    rotateDiagonalImages();
}, 6000); // 6 seconds
```

## Gallery System

### Dynamic Loading

Gallery images are now loaded from `images.json`. Each image includes:

- **url**: Path to the image file
- **alt**: Description for accessibility
- **category**: Car brand/type (displayed on hover)

### Adding Gallery Images

1. Add image to `images/gallery/` folder
2. Update `images.json`:

```json
{
  "gallery": [
    {
      "url": "images/gallery/your-car.jpg",
      "alt": "Description of your car",
      "category": "Brand Name"
    }
  ]
}
```

3. Refresh the page - image appears automatically!

### Hover Effect

When users hover over gallery images:
- Dark gradient overlay appears
- Category name shows in primary color
- Full description displays
- Smooth 300ms transition

## Testimonial Avatars

Avatar images for testimonials are also managed through `images.json`:

```json
{
  "testimonials": [
    {
      "avatar": "images/avatars/client-1.jpg",
      "name": "Client Name",
      "car": "Car Model"
    }
  ]
}
```

## Image Specifications

### Diagonal Split Images
- **Dimensions**: 1200x1600px (portrait orientation)
- **Aspect Ratio**: 3:4
- **Format**: JPG
- **Max Size**: 500KB each
- **Note**: Need pairs (left + right)

### Gallery Images
- **Dimensions**: 1200x800px (landscape)
- **Aspect Ratio**: 3:2
- **Format**: JPG
- **Max Size**: 400KB each

### Avatar Images
- **Dimensions**: 200x200px (square)
- **Aspect Ratio**: 1:1
- **Format**: JPG
- **Max Size**: 50KB each

## Downloading Images

### Automatic Download

Run the download script to get placeholder images:

```bash
node download-images.js
```

This downloads:
- 10 diagonal images (5 pairs) from Unsplash
- 9 gallery images of performance cars
- 6 avatar images

### Manual Download

1. Find your images (from Unsplash, Pexels, or your own photos)
2. Optimize them to the correct dimensions
3. Save them in the appropriate folder
4. Update `images.json` with the paths

## Image Optimization Tips

### Online Tools
- **TinyPNG**: https://tinypng.com (best compression)
- **Squoosh**: https://squoosh.app (advanced options)
- **Compressor.io**: https://compressor.io

### Command Line (ImageMagick)
```bash
# Resize and optimize diagonal image
magick input.jpg -resize 1200x1600^ -gravity center -extent 1200x1600 -quality 85 output.jpg

# Resize and optimize gallery image
magick input.jpg -resize 1200x800^ -gravity center -extent 1200x800 -quality 85 output.jpg

# Resize and optimize avatar
magick input.jpg -resize 200x200^ -gravity center -extent 200x200 -quality 85 output.jpg
```

## Advanced: Image Lazy Loading

Images support lazy loading for better performance. To enable:

```html
<img src="image.jpg" loading="lazy" alt="Description">
```

This is already implemented for gallery images in the JavaScript.

## Troubleshooting

### Images not showing
1. Check file paths in `images.json`
2. Ensure images exist in correct folders
3. Verify image filenames match exactly (case-sensitive)
4. Hard refresh browser: `Ctrl + Shift + R`

### Diagonal split not rotating
1. Open browser console (F12)
2. Look for JavaScript errors
3. Check that `images.json` loaded successfully
4. Verify you have at least 2 image pairs

### Gallery carousel not working
1. Ensure images are in `images/gallery/` folder
2. Check `images.json` syntax at jsonlint.com
3. Verify Splide library loaded (check Network tab)

## Performance

### Current Implementation
- Images load asynchronously
- Smooth fade transitions
- Optimized for 60fps animations
- Minimal JavaScript overhead

### Metrics
- Hero image rotation: ~5KB JavaScript
- No layout shift (CLS = 0)
- Lazy loading ready
- Progressive enhancement

## Future Enhancements

Possible improvements:
- [ ] Touch/swipe support for manual image change
- [ ] Pause rotation on hover
- [ ] Progress indicator for rotation
- [ ] Parallax effect on scroll
- [ ] WebP format support
- [ ] Automatic image optimization

## API Reference

### `loadImages()`
Loads images from `images.json` and initializes all image systems.

### `initDiagonalSplit()`
Sets up the diagonal split rotation timer.

### `rotateDiagonalImages()`
Performs the image transition with fade in/out effects.

### `populateGallery(images)`
Populates the gallery carousel with images from JSON.

### `updateTestimonialAvatars(avatars)`
Updates testimonial avatars from JSON data.

## Examples

### Adding a New Diagonal Pair

1. Add two images to `images/diagonal/`:
   - `car-6-left.jpg`
   - `car-6-right.jpg`

2. Update `images.json`:
```json
{
  "hero": {
    "diagonal": [
      // ... existing pairs ...
      {
        "left": "images/diagonal/car-6-left.jpg",
        "right": "images/diagonal/car-6-right.jpg",
        "alt": "Your car description"
      }
    ]
  }
}
```

3. Refresh page - new pair is in rotation!

### Changing Rotation Speed

In `app.js` (line ~94):
```javascript
// Change from 6000 to 4000 for faster rotation
setInterval(() => {
    rotateDiagonalImages();
}, 4000); // Now rotates every 4 seconds
```

---

**Need help?** Check the main README.md or TROUBLESHOOTING.md files.
