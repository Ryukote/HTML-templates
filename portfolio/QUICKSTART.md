# ⚡ Quick Start Guide

Get your portfolio up and running in **5 minutes**!

## 📋 Prerequisites Checklist

- [ ] A computer 💻
- [ ] A web browser (Chrome, Firefox, Safari, Edge)
- [ ] A text editor (VS Code recommended)
- [ ] 5 minutes of your time ⏱️

That's it! No coding experience required.

---

## 🚀 3 Simple Steps

### Step 1: Get the Files (30 seconds)

**Option A: Download**
1. Download the portfolio folder
2. Extract the ZIP file
3. Open the folder

**Option B: Clone (if you use Git)**
```bash
git clone <repository-url>
cd portfolio
```

### Step 2: Customize Your Content (3 minutes)

Open `data/content.json` in any text editor and update:

```json
{
  "hero": {
    "name": "YOUR NAME HERE",           ← Change this
    "title": "YOUR JOB TITLE",         ← And this
    "description": "Your intro..."      ← And this
  },
  "contact": {
    "info": [
      {
        "value": "your.email@example.com"  ← Your email
      }
    ]
  }
}
```

**What to update:**
- ✏️ Your name
- 💼 Your job title
- 📧 Your email
- 📱 Your phone (optional)
- 🔗 Your social media links
- 💬 About section
- 🛠️ Skills list
- 🎨 Projects (optional for now)

### Step 3: Open Your Portfolio (1 minute)

**⚡ Super Easy Method (Windows):**
1. Double-click `START_HERE.bat`
2. Your browser will open automatically
3. Done! 🎉

**🌐 Manual Browser Method:**
1. Double-click `index.html`
2. It opens in your browser with default content
3. Note: For full features (JSON loading), use a local server

**💻 Using Python (Recommended):**
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

**📝 Using VS Code:**
1. Open folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html`
4. Select "Open with Live Server"

**⚙️ Using Node.js:**
```bash
npx http-server -p 8000
```

---

## 🎨 Make It Yours (Optional)

### Change Colors (2 minutes)

Open `index.html`, find line ~35, change these colors:

```javascript
colors: {
  primary: {
    light: '#667eea',    ← Change to your color
    DEFAULT: '#764ba2',  ← And this
  }
}
```

**Popular Colors:**
- Blue: `#3b82f6`
- Green: `#10b981`
- Red: `#ef4444`
- Purple: `#8b5cf6`
- Orange: `#f97316`

Pick colors from [Coolors.co](https://coolors.co/)

### Add Your Projects (5 minutes)

In `data/content.json`, find the `projects` section:

```json
"projects": {
  "items": [
    {
      "title": "My Awesome Project",
      "description": "What the project does...",
      "image": "https://images.unsplash.com/photo-...",
      "tags": ["React", "Node.js"],
      "liveUrl": "https://myproject.com",
      "githubUrl": "https://github.com/me/project"
    }
  ]
}
```

**Finding Images:**
1. Go to [Unsplash.com](https://unsplash.com)
2. Search for relevant images
3. Click on image
4. Copy URL
5. Add `?w=800&h=600&fit=crop` to the end

### Update Your Photo (1 minute)

In `data/content.json`, find `about` section:

```json
"about": {
  "image": "YOUR_PHOTO_URL_HERE"
}
```

---

## 🌐 Deploy Your Portfolio (5 minutes)

### Netlify Drop (Easiest - No Account Needed)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire `portfolio` folder
3. Drop it on the page
4. Your site is LIVE! 🎉
5. Share your link: `something-random-123.netlify.app`

### Get a Custom Domain (Optional)

Later, you can buy a domain (like `yourname.com`) for $10/year from:
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://godaddy.com)

---

## ✅ Final Checklist

Before sharing your portfolio:

- [ ] Your name is correct
- [ ] Contact email works
- [ ] Social media links are correct
- [ ] Test on mobile (open on your phone)
- [ ] Try the dark/light theme toggle
- [ ] Click all navigation links
- [ ] Check that all sections loaded

---

## 🆘 Troubleshooting

### "Images aren't loading"
- Check your internet connection
- Try refreshing the page
- Clear browser cache

### "Animations aren't working"
- Use a local server (not just double-clicking)
- Check browser console (F12) for errors
- Try a different browser

### "Theme toggle doesn't work"
- Clear browser cache
- Try incognito/private mode
- Check if JavaScript is enabled

### "Content not updating"
- Save the `content.json` file
- Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check JSON syntax is valid

### "Mobile menu not showing"
- Resize your browser to mobile size
- Check on actual mobile device
- Try clearing cache

---

## 📚 Next Steps

Once you're comfortable with the basics:

1. **Customize More**
   - Read `CUSTOMIZATION.md` for detailed guides
   - Change colors, fonts, animations
   - Add custom sections

2. **Add Advanced Features**
   - Connect contact form to email
   - Add Google Analytics
   - Set up custom domain

3. **Deploy Properly**
   - Read `DEPLOYMENT.md` for all options
   - Set up custom domain
   - Enable auto-deploy from GitHub

4. **Optimize**
   - Compress images
   - Add your own photos
   - Write better project descriptions

---

## 🎯 Common Tasks

### Update a Single Section

**Change your job title:**
1. Open `data/content.json`
2. Find `"hero"` section
3. Change `"title"` value
4. Save and refresh browser

**Add a new skill:**
1. Open `data/content.json`
2. Find `"skills"` section
3. Add to `"items"` array: `"New Skill"`
4. Save and refresh

**Update social links:**
1. Open `data/content.json`
2. Find `"contact"` → `"social"`
3. Update `"url"` values
4. Save and refresh

### Test Before Deploying

```bash
# Check JSON is valid
python -m json.tool data/content.json

# Start local server
python -m http.server 8000

# Open in browser
# Visit: http://localhost:8000
```

---

## 💡 Pro Tips

1. **Save Often** - Don't lose your changes!
2. **Test Changes** - Refresh browser after each edit
3. **Use Valid JSON** - Don't forget commas and quotes
4. **Start Simple** - Get basic info working first
5. **One Change at a Time** - Easier to fix if something breaks

---

## 📱 Mobile Testing

**On Computer:**
1. Open browser DevTools (F12)
2. Click device icon (Ctrl+Shift+M)
3. Select iPhone or Android

**On Phone:**
1. Deploy to Netlify
2. Open link on your phone
3. Check all sections scroll smoothly

---

## 🎨 JSON Editing Tips

**Valid JSON:**
```json
{
  "key": "value",        ← Note the comma
  "another": "value"     ← No comma on last item
}
```

**Common Mistakes:**
```json
{
  "key": "value"         ✗ Missing comma
  "another": "value",
}                        ✗ Extra comma
```

**Testing JSON:**
Use [JSONLint](https://jsonlint.com/) to validate your JSON

---

## 🚀 You're Ready!

You now have:
- ✅ A fully functional portfolio
- ✅ Customized with your information
- ✅ Deployed and live on the internet
- ✅ Mobile responsive
- ✅ Dark/light theme
- ✅ Smooth animations

**Share your portfolio with the world! 🌟**

---

## 📞 Need More Help?

- **Customization:** Read `CUSTOMIZATION.md`
- **Deployment:** Read `DEPLOYMENT.md`
- **Detailed Docs:** Read `README.md`
- **Stuck?** Check browser console (F12)

---

**Time to completion: ~5-15 minutes**
**Difficulty: Beginner-friendly ⭐**

*Now go build something amazing! 💪*
