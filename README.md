# Sophia Lane Interiors - Landing Page

A modern, elegant landing page for an interior designer, built with React, TailwindCSS, and Framer Motion. This project showcases a sophisticated design aesthetic optimized for desktop viewing.

## 🎨 Design Features

- **Elegant Typography**: Playfair Display for headlines, Inter for body text
- **Soft Neutral Color Palette**: Cream, sand, taupe, and off-white with charcoal accents
- **Smooth Animations**: Framer Motion for fade-in, slide, and hover effects
- **Full-width Hero Section**: High-quality background imagery
- **Modern UI Components**: Rounded buttons, image cards with soft shadows
- **Generous White Space**: Clean, breathable layout

## 📋 Sections Included

1. **Hero Section** - Full-screen background with headline and CTA
2. **About Section** - Designer story and philosophy
3. **Portfolio Section** - Project showcase with hover effects
4. **Services Section** - Three-column service offerings
5. **Testimonials Section** - Client reviews with portraits
6. **Contact Section** - Contact form and social links
7. **Footer** - Brand signature

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Google Fonts** - Playfair Display & Inter

## 📐 Layout Specifications

- **Optimized for**: Desktop view (1440px width)
- **Max Content Width**: 1200px
- **Mobile Responsive**: Not included (desktop-only design)

## 🎯 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  cream: '#F5F3EF',
  sand: '#E8E4DC',
  taupe: '#C8BFB0',
  // ... more colors
}
```

### Images

Replace the Unsplash image URLs in `src/InteriorDesignLandingPage.jsx` with your own high-quality images:

- Hero background
- About section headshot
- Portfolio project images
- Testimonial portraits

### Content

All content is located in `src/InteriorDesignLandingPage.jsx`. Update:

- Headlines and subtext
- Service descriptions
- Testimonials
- Contact information
- Social media links

## 📦 Project Structure

```
interior-designer-landing/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── InteriorDesignLandingPage.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## ✨ Key Features

- **Smooth Scrolling**: CTA button smoothly scrolls to contact section
- **Form Handling**: Contact form with validation
- **Hover Effects**: Interactive project cards and buttons
- **Animation on Scroll**: Elements fade in as you scroll
- **Professional Design**: Clean, sophisticated aesthetic

## 📝 License

This project is provided as-is for educational and commercial use.

## 🙏 Credits

- Images: [Unsplash](https://unsplash.com)
- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: SVG icons included in component

---

**Sophia Lane Interiors** - Elevate Every Space.

# interior-designer-1
