# Team Photos Setup Instructions

## ✅ What's Been Completed

1. **Created folder structure**: `src/assets/team/`
2. **Updated AboutPage.jsx**: Added flip card component with hover animation
3. **Updated AboutPage.css**: Added all flip card styling with X-axis rotation
4. **Configured team data**: Names, roles, and motivation statements are ready

## 📸 Next Steps: Add Your Team Photos

### Required Photos
You need to add 3 team member photos to the `src/assets/team/` folder:

```
src/assets/team/
├── member1.jpg  (Mouhammad Al-Rifai)
├── member2.jpg  (Abdelelah Bamarouf)
└── member3.jpg  (Tarik Bamarouf)
```

### Photo Guidelines
- **Format**: JPG, PNG, or WebP
- **Dimensions**: At least 400x400px (square preferred)
- **File Size**: Under 500KB each for best performance
- **Style**: Professional headshots, consistent lighting
- **Background**: Dark or black backgrounds match the site theme best

### How to Add the Photos

**Option 1: Manual Copy**
1. Rename your team photos to `member1.jpg`, `member2.jpg`, `member3.jpg`
2. Copy them to `src/assets/team/`
3. Restart your dev server: `npm run dev`

**Option 2: Using Terminal (Windows)**
```powershell
# Navigate to project root
cd "C:\Users\Karee\OneDrive\Desktop\TG Website React\TG"

# Copy your photos (replace paths with your actual photo locations)
copy "path\to\your\photo1.jpg" "src\assets\team\member1.jpg"
copy "path\to\your\photo2.jpg" "src\assets\team\member2.jpg"
copy "path\to\your\photo3.jpg" "src\assets\team\member3.jpg"
```

## 🎨 Current Team Configuration

| Member Name           | Role                | Motivation Statement |
|-----------------------|---------------------|----------------------|
| Mouhammad Al-Rifai    | CEO & Founder       | Driving digital transformation across MENA with passion and innovation |
| Abdelelah Bamarouf    | Technical Director  | Building cutting-edge solutions that shape the future of technology |
| Tarik Bamarouf        | Creative Director   | Crafting visual experiences that inspire and connect with audiences |

## 🔄 How the Flip Card Works

### Front of Card (Default View)
- Large circular photo (200px)
- Team member name
- Role title in red (#E50914)
- Hover effect: Glow and slight scale

### Back of Card (On Hover)
- Flips on X-axis (180°)
- Shows name and role again
- Red horizontal divider
- Motivation statement in italic
- Dark gradient background with red tint

### Animation Details
- **Flip Duration**: 0.6 seconds
- **Rotation Axis**: X (rotateX)
- **Trigger**: Mouse hover
- **Easing**: ease-in-out
- **3D Perspective**: 1000px

## 🎯 Features Implemented

✅ 3D flip card animation on hover  
✅ X-axis rotation (as requested)  
✅ Smooth transitions with Framer Motion  
✅ Role and motivation display on back  
✅ Theme-consistent red accent colors  
✅ Responsive design for all screen sizes  
✅ Glassmorphism effects  
✅ Red glow effects on images  
✅ Professional typography  

## 📱 Responsive Breakpoints

- **Desktop** (> 992px): 3 columns, 450px card height
- **Tablet** (768px - 992px): 1 column, 400px card height
- **Mobile** (< 768px): 1 column, 380px card height, smaller images

## 🔧 Customization

### To Change Team Member Data
Edit `src/pages/AboutPage/AboutPage.jsx` lines 358-376:

```javascript
{
  name: "Your Name",
  role: "Your Role",
  motivation: "Your motivation statement here",
  image: teamImageVariable,
}
```

### To Add More Team Members
1. Add new photo to `src/assets/team/`
2. Import it in AboutPage.jsx:
   ```javascript
   import team4 from "../../assets/team/member4.jpg";
   ```
3. Add new object to the array (lines 358-376)

### To Change Animation Speed
Edit `src/pages/AboutPage/AboutPage.jsx` line 395:
```javascript
duration: 0.6,  // Change this value (in seconds)
```

### To Change Card Colors
Edit `src/pages/AboutPage/AboutPage.css`:
- Front card: Line 414 (`background`)
- Back card: Line 476 (`background`)
- Red accent: Search for `#E50914`

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly: `member1.jpg`, `member2.jpg`, `member3.jpg`
- Verify images are in `src/assets/team/`
- Try restarting dev server: `Ctrl+C` then `npm run dev`

**Flip not working?**
- Hover must be working (check console for errors)
- Framer Motion must be installed: `npm install framer-motion`
- Check browser compatibility (modern browsers only)

**Cards too small/large?**
- Adjust in `src/pages/AboutPage/AboutPage.css` line 387 (`.team-card-container` height)
- Adjust image size at line 430 (`.member-image` width/height)

## 🚀 Testing

Once photos are added:
1. Run `npm run dev`
2. Navigate to `/about` page
3. Scroll to "Our Team" section
4. Hover over cards to see flip animation
5. Check on mobile/tablet sizes

---

**Everything is ready!** Just add your three team photos and the flip cards will work automatically. 🎉

