# Images Guide

This folder should contain all images used in the website. Below is a list of required images with their recommended specifications.

## Required Images

### Hero Section
- **hero-car.jpg**
  - Dimensions: 1200x800px (3:2 ratio)
  - Description: Main hero image of a high-performance tuned car
  - Format: JPG
  - Max size: 500KB

### Gallery Images
All gallery images should be:
- Dimensions: 1200x800px (3:2 ratio)
- Format: JPG
- Max size: 400KB each

Required gallery images:
1. **gallery-1.jpg** - BMW M3 or similar performance car
2. **gallery-2.jpg** - Audi RS6 or similar
3. **gallery-3.jpg** - Mercedes AMG or dyno testing shot
4. **gallery-4.jpg** - Porsche 911 Turbo or similar
5. **gallery-5.jpg** - Ford Mustang or American muscle car
6. **gallery-6.jpg** - Nissan GT-R or Japanese performance car

### Avatar Images
All avatar images should be:
- Dimensions: 200x200px (1:1 ratio - square)
- Format: JPG
- Max size: 50KB each

Required avatar images:
1. **avatar-1.jpg** - Male client photo
2. **avatar-2.jpg** - Female client photo
3. **avatar-3.jpg** - Male client photo
4. **avatar-4.jpg** - Female client photo
5. **avatar-5.jpg** - Male client photo
6. **avatar-6.jpg** - Male client photo

## Image Sources

### Free Stock Photo Websites
1. **Unsplash** (https://unsplash.com)
   - Search for: "sports car", "performance car", "car tuning"

2. **Pexels** (https://pexels.com)
   - Search for: "luxury car", "racing car", "modified car"

3. **Pixabay** (https://pixabay.com)
   - Search for: "car engine", "sports car", "automotive"

### Avatar Sources
1. **This Person Does Not Exist** (https://thispersondoesnotexist.com)
   - AI-generated faces (free to use)

2. **UI Faces** (https://uifaces.co)
   - Free avatar collection

## Quick Setup Script

We've provided a Node.js script to download placeholder images automatically:

```bash
node download-images.js
```

This will download sample images from placeholder services.

## Image Optimization

Before adding images to the website, optimize them using:

1. **Online Tools**:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)

2. **Command Line** (if you have ImageMagick installed):
   ```bash
   magick hero-car.jpg -resize 1200x800 -quality 85 hero-car.jpg
   ```

## Updating Images

To change images:
1. Replace the image files in this folder
2. Keep the same filenames, OR
3. Update the `content.json` file with new filenames

## Tips for Best Results

1. **Use high-quality images** - Blurry or low-quality images will hurt the professional appearance
2. **Consistent style** - Try to maintain a consistent visual style across all images
3. **Optimize file sizes** - Large images slow down page load times
4. **Use WebP format** - For better compression (modern browsers support it)
5. **Add alt text** - Update descriptions in `content.json` for accessibility
