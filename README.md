# Mernet Technologies – Web Portal

Official website for **Mernet Technologies**, a software development and ICT solutions company based in Mbeya, Tanzania.

## About the site

This portal showcases Mernet’s services, projects, and contact information:

- **Home** – Hero slideshow, services preview, featured systems, why choose us, and CTA
- **About** – Company story, values (Client-Focused, Innovation, Excellence, Integrity)
- **Services** – Custom software development, business management systems, web applications, ICT infrastructure, maintenance & support, ICT consultancy and training
- **Projects** – Portfolio (e.g. Inventory Management, Church Management, Restaurant Management, Custom Client Portal)
- **Contact** – Email, phone, location (Mbeya, Tanzania), office hours, and contact form

### Features

- Light and dark theme with persistent preference
- Responsive layout (mobile, tablet, desktop)
- Hero section with image slideshow and synced thumbnails
- Animated CTAs and hover effects
- Active page indicator in the navigation
- Footer with company links, legal links, and Instagram connect

## Tech stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React

## Getting started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mernet-Technology/mernet-web-portal.git
   cd mernet-web-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

   Other package managers:
   ```bash
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project structure

```
app/
├── layout.tsx          # Root layout, metadata, theme
├── page.tsx            # Home
├── about/
├── services/
├── projects/
├── contact/
└── components/
    ├── layout/         # Navbar, Footer, Container
    ├── ui/             # Button, SectionTitle, Card, Badge, etc.
    └── sections/       # Hero, ServicesPreview, FeaturedProjects, WhyChooseUs, CTA
public/
├── images/             # Slideshow and project images
└── logo.svg
```

## Contact

- **Email:** mernettechnology@gmail.com  
- **Phone:** +255 767 956 613 / +255 743 463 710  
- **Location:** Mbeya, Tanzania  
- **Instagram:** [@mernettechnologies_](https://www.instagram.com/mernettechnologies_/)

---

© Mernet Technologies. All rights reserved.
