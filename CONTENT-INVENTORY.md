# Site Content Inventory

A reference of all user-facing words and content used across the Mernet web portal, with their file locations.

---

## Global (All Pages)

### Navbar — `app/components/layout/Navbar.tsx`

| Content | Type | Location in file |
|--------|------|------------------|
| Home | Nav link | `navLinks` array |
| About | Nav link | `navLinks` array |
| Services | Nav link | `navLinks` array |
| Projects | Nav link | `navLinks` array |
| Contact | Nav link | `navLinks` array |
| logo | Image alt | `<img alt="logo">` |
| Toggle theme | Button aria-label | `aria-label="Toggle theme"` |

### Footer — `app/components/layout/Footer.tsx`

| Content | Type | Location in file |
|--------|------|------------------|
| Company | Section heading | `footerLinks[0].title` |
| Home | Link | `footerLinks[0].links` |
| About | Link | `footerLinks[0].links` |
| Services | Link | `footerLinks[0].links` |
| Projects | Link | `footerLinks[0].links` |
| Contact | Link | `footerLinks[0].links` |
| Legal | Section heading | `footerLinks[1].title` |
| Privacy Policy | Link | `footerLinks[1].links` |
| Terms of Service | Link | `footerLinks[1].links` |
| Connect | Section heading | `footerLinks[2].title` |
| Twitter | Link | `footerLinks[2].links` |
| LinkedIn | Link | `footerLinks[2].links` |
| GitHub | Link | `footerLinks[2].links` |
| We are a digital agency focused on strategy, design and development—helping brands build meaningful digital experiences and grow sustainably. | Paragraph | Footer description `<p>` |
| © {year} Mernet Technologies | Copyright | Footer bottom `<p>` |

---

## Metadata (SEO / Browser)

### Layout — `app/layout.tsx`

| Content | Type | Location |
|--------|------|----------|
| Mernet – Digital Agency \| Software & ICT Solutions | Default page title | `metadata.title.default` |
| %s \| Mernet | Title template | `metadata.title.template` |
| Mernet is a modern digital agency delivering tailored software and intelligent ICT solutions. We help startups and businesses grow through thoughtful design, scalable development, and performance-driven strategy. | Meta description | `metadata.description` |
| Mernet, digital agency, software development, ICT solutions, web development, UI UX design, startup website, business solutions | Meta keywords | `metadata.keywords` |
| Mernet – Digital Agency \| Software & ICT Solutions | Open Graph title | `metadata.openGraph.title` |
| Transform your business with tailored software and intelligent ICT solutions. Strategy, design, development, and growth support. | Open Graph description | `metadata.openGraph.description` |
| Mernet | Open Graph site name | `metadata.openGraph.siteName` |
| Mernet – Digital Agency | Twitter title | `metadata.twitter.title` |
| A full-service digital agency helping businesses grow through design, development, and strategy. | Twitter description | `metadata.twitter.description` |
| @mernet | Twitter creator | `metadata.twitter.creator` |

---

## Home Page

**Route:** `/`  
**Composed of:** Hero, ServicesPreview, FeaturedProjects, WhyChooseUs, CTA

### Hero — `app/components/sections/Hero.tsx`

| Content | Type | Location |
|--------|------|----------|
| Trusted by brands & founders worldwide | Badge/subline | `trustedUserImages` block `<span>` |
| Transforming Businesses through | H1 (line 1) | `<motion.h1>` |
| Tailored Software & Intelligent ICT Solutions | H1 (line 2, gradient) | `<span>` inside h1 |
| We develop custom business systems, web applications, and integrated ICT solutions that streamline operations, strengthen security, and drive sustainable growth. | Lead paragraph | `<motion.p>` |
| Start your project | Primary button | `<PrimaryButton>` |
| View our work | Secondary button | `<GhostButton>` |
| Strategic led execution | Feature label | First feature block |
| Focused on growth & results | Feature subline | First feature block |
| Full-service delivery | Feature label | Second feature block |
| Design and develop tailored solutions. | Feature subline | Second feature block |
| Branding • Web • Growth | Card badge (hero image) | Overlay on hero image |
| See case study | Button on hero image | Button `<span>` |
| 20+ completed projects | Stats text | Below thumbnails |
| Startups | Marquee item | `trustedLogosText` array |
| Scale-ups | Marquee item | `trustedLogosText` array |
| Founders | Marquee item | `trustedLogosText` array |
| Global teams | Marquee item | `trustedLogosText` array |
| Creative brands | Marquee item | `trustedLogosText` array |
| Client 1, Client 2, Client 3 | Image alt | `alt={Client ${i + 1}}` |
| agency-work-preview | Image alt | Hero image |
| project-thumbnail | Image alt | Gallery strip images |

### Services Preview — `app/components/sections/ServicesPreview.tsx`

| Content | Type | Location |
|--------|------|----------|
| Services | Section label | `SectionTitle` prop `title` |
| Everything your business needs to grow digitally | Section heading | `SectionTitle` prop `heading` |
| From planning to deployment, we deliver reliable software systems and ICT solutions that improve efficiency and drive measurable results. | Section description | `SectionTitle` prop `description` |
| Discovery & Planning | Card title | `servicesData[0].title` |
| We understand your goals, audience and challenges to craft a clear, actionable strategy. | Card description | `servicesData[0].desc` |
| Design & Development | Card title | `servicesData[1].title` |
| High-quality design and scalable development focused on performance and usability. | Card description | `servicesData[1].desc` |
| Launch & Growth | Card title | `servicesData[2].title` |
| We launch, optimize and continuously improve to drive measurable business growth. | Card description | `servicesData[2].desc` |

### Featured Projects — `app/components/sections/FeaturedProjects.tsx`

| Content | Type | Location |
|--------|------|----------|
| Projects | Section label | `SectionTitle` prop `title` |
| Featured work | Section heading | `SectionTitle` prop `heading` |
| Explore some of our recent projects that showcase our expertise and creativity. | Section description | `SectionTitle` prop `description` |
| E-Commerce Platform | Project title | `projectsData[0].title` |
| Web Development | Category | `projectsData[0].category` |
| A modern e-commerce solution with seamless checkout experience. | Project description | `projectsData[0].description` |
| Brand Identity | Project title | `projectsData[1].title` |
| Branding | Category | `projectsData[1].category` |
| Complete brand overhaul for a tech startup. | Project description | `projectsData[1].description` |
| Mobile App | Project title | `projectsData[2].title` |
| App Development | Category | `projectsData[2].category` |
| Cross-platform mobile app for fitness tracking. | Project description | `projectsData[2].description` |
| View all projects | CTA button | `<GhostButton>` |

### Why Choose Us (Pricing) — `app/components/sections/WhyChooseUs.tsx`

| Content | Type | Location |
|--------|------|----------|
| Pricing | Section label | `SectionTitle` prop `title` |
| Simple, transparent pricing | Section heading | `SectionTitle` prop `heading` |
| Flexible agency packages designed to fit startups, growing teams and established brands. | Section description | `SectionTitle` prop `description` |
| Starter | Plan name | `plansData[0].name` |
| $499 | Price | `plansData[0].price` |
| One-time | Credits | `plansData[0].credits` |
| Best for early-stage startups. | Plan description | `plansData[0].desc` |
| Project discovery & planning | Feature | `plansData[0].features` |
| UI/UX design | Feature | `plansData[0].features` |
| Basic website development | Feature | `plansData[0].features` |
| 1 revision round | Feature | `plansData[0].features` |
| Email support | Feature | `plansData[0].features` |
| Growth | Plan name | `plansData[1].name` |
| $1,499 | Price | `plansData[1].price` |
| Monthly | Credits | `plansData[1].credits` |
| Growing teams and businesses. | Plan description | `plansData[1].desc` |
| Most popular | Badge | `plan.popular` block |
| Everything in Starter | Feature | `plansData[1].features` |
| Advanced UI/UX design | Feature | `plansData[1].features` |
| Custom development | Feature | `plansData[1].features` |
| Performance optimization | Feature | `plansData[1].features` |
| Priority support | Feature | `plansData[1].features` |
| Scale | Plan name | `plansData[2].name` |
| $3,999 | Price | `plansData[2].price` |
| Custom | Credits | `plansData[2].credits` |
| For brands ready to scale fast. | Plan description | `plansData[2].desc` |
| Everything in Growth | Feature | `plansData[2].features` |
| Dedicated project manager | Feature | `plansData[2].features` |
| Ongoing optimization | Feature | `plansData[2].features` |
| Marketing & growth support | Feature | `plansData[2].features` |
| Chat + Email support | Feature | `plansData[2].features` |
| Get started | Button (each plan) | `<PrimaryButton>` / `<GhostButton>` |

### CTA — `app/components/sections/CTA.tsx`

| Content | Type | Location |
|--------|------|----------|
| Ready to grow your brand? | Heading | `<motion.h2>` |
| Partner with our agency to design, build and scale digital products that deliver real business results. | Paragraph | `<motion.p>` |
| Start your project | Button | `<GhostButton>` |

---

## About Page

**Route:** `/about`  
**File:** `app/about/page.tsx`

| Content | Type | Location |
|--------|------|----------|
| About Us | Section label | `SectionTitle` prop `title` |
| We build digital experiences that matter | Section heading | `SectionTitle` prop `heading` |
| A team of designers, developers, and strategists dedicated to helping businesses thrive in the digital age. | Section description | `SectionTitle` prop `description` |
| Our Story | Subheading | `<h3>` |
| Founded with a vision to bridge the gap between technology and business success, we have grown into a full-service digital agency that partners with startups and enterprises alike. | Paragraph | First `<p>` |
| Our team brings together diverse expertise in design, development, and strategy to deliver solutions that not only look great but also drive real results. | Paragraph | Second `<p>` |
| Work with us | Button | `<GhostButton>` |
| Our team | Image alt | `<img alt="Our team">` |
| Our Values | Section label | `SectionTitle` prop `title` |
| What drives us forward | Section heading | `SectionTitle` prop `heading` |
| The principles that guide our work and relationships. | Section description | `SectionTitle` prop `description` |
| Client-Focused | Value title | `values[0].title` |
| We put our clients at the center of everything we do, ensuring their success is our success. | Value description | `values[0].description` |
| Results-Driven | Value title | `values[1].title` |
| Every decision we make is guided by measurable outcomes and real business impact. | Value description | `values[1].description` |
| Excellence | Value title | `values[2].title` |
| We strive for excellence in every project, delivering quality that exceeds expectations. | Value description | `values[2].description` |
| Passion | Value title | `values[3].title` |
| We are passionate about technology and design, bringing enthusiasm to every challenge. | Value description | `values[3].description` |

---

## Services Page

**Route:** `/services`  
**File:** `app/services/page.tsx`

| Content | Type | Location |
|--------|------|----------|
| Our Services | Section label | `SectionTitle` prop `title` |
| Everything you need to succeed online | Section heading | `SectionTitle` prop `heading` |
| Comprehensive digital solutions tailored to your business goals and growth objectives. | Section description | `SectionTitle` prop `description` |
| UI/UX Design | Service title | `services[0].title` |
| Create stunning, user-centered designs that engage your audience and drive conversions. | Service description | `services[0].description` |
| User Research, Wireframing, Prototyping, Visual Design | Service features | `services[0].features` |
| Web Development | Service title | `services[1].title` |
| Build fast, scalable, and secure web applications using modern technologies. | Service description | `services[1].description` |
| Frontend Development, Backend Systems, API Integration, Performance Optimization | Service features | `services[1].features` |
| Mobile Apps | Service title | `services[2].title` |
| Develop cross-platform mobile applications that deliver seamless experiences. | Service description | `services[2].description` |
| iOS & Android, React Native, Flutter, App Store Optimization | Service features | `services[2].features` |
| Branding | Service title | `services[3].title` |
| Craft memorable brand identities that resonate with your target audience. | Service description | `services[3].description` |
| Logo Design, Brand Guidelines, Visual Identity, Brand Strategy | Service features | `services[3].features` |
| Digital Marketing | Service title | `services[4].title` |
| Drive growth through data-driven marketing strategies and campaigns. | Service description | `services[4].description` |
| SEO, Content Marketing, Social Media, PPC Advertising | Service features | `services[4].features` |
| Analytics & Strategy | Service title | `services[5].title` |
| Make informed decisions with comprehensive analytics and strategic planning. | Service description | `services[5].description` |
| Data Analysis, Market Research, Growth Strategy, KPI Tracking | Service features | `services[5].features` |
| Ready to start your project? | Subtext | `<p>` above CTA |
| Get in touch | Button | `<GhostButton>` |

---

## Projects Page

**Route:** `/projects`  
**File:** `app/projects/page.tsx`

| Content | Type | Location |
|--------|------|----------|
| Our Work | Section label | `SectionTitle` prop `title` |
| Projects we're proud of | Section heading | `SectionTitle` prop `heading` |
| Explore our portfolio of successful projects across various industries and technologies. | Section description | `SectionTitle` prop `description` |
| E-Commerce Platform | Project title | `projects[0].title` |
| Web Development | Category | `projects[0].category` |
| A modern e-commerce solution with seamless checkout experience and inventory management. | Description | `projects[0].description` |
| Next.js, Stripe, PostgreSQL | Tags | `projects[0].tags` |
| Brand Identity System | Project title | `projects[1].title` |
| Branding | Category | `projects[1].category` |
| Complete brand overhaul for a tech startup including logo, guidelines, and marketing materials. | Description | `projects[1].description` |
| Logo Design, Brand Strategy, Visual Identity | Tags | `projects[1].tags` |
| Fitness Tracking App | Project title | `projects[2].title` |
| Mobile App | Category | `projects[2].category` |
| Cross-platform mobile app for fitness tracking with social features and personalized plans. | Description | `projects[2].description` |
| React Native, Firebase, HealthKit | Tags | `projects[2].tags` |
| SaaS Dashboard | Project title | `projects[3].title` |
| Web Application | Category | `projects[3].category` |
| Analytics dashboard for a B2B SaaS platform with real-time data visualization. | Description | `projects[3].description` |
| React, D3.js, Node.js | Tags | `projects[3].tags` |
| Restaurant Website | Project title | `projects[4].title` |
| Web Design | Category | `projects[4].category` |
| Modern website with online ordering system and reservation management. | Description | `projects[4].description` |
| WordPress, WooCommerce, Custom Theme | Tags | `projects[4].tags` |
| Corporate Rebrand | Project title | `projects[5].title` |
| Branding | Category | `projects[5].category` |
| Strategic rebrand for a financial services company entering new markets. | Description | `projects[5].description` |
| Brand Strategy, Marketing, Design System | Tags | `projects[5].tags` |
| Have a project in mind? | Subtext | `<p>` above CTA |
| Let's talk | Button | `<GhostButton>` |

---

## Contact Page

**Route:** `/contact`  
**File:** `app/contact/page.tsx`

| Content | Type | Location |
|--------|------|----------|
| Contact Us | Section label | `SectionTitle` prop `title` |
| Let's start a conversation | Section heading | `SectionTitle` prop `heading` |
| Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible. | Section description | `SectionTitle` prop `description` |
| Get in touch | Subheading | `<h3>` |
| Email | Contact type | `contactInfo[0].title` |
| hello@agency.com | Contact value | `contactInfo[0].value` |
| Phone | Contact type | `contactInfo[1].title` |
| +1 (555) 123-4567 | Contact value | `contactInfo[1].value` |
| Location | Contact type | `contactInfo[2].title` |
| San Francisco, CA | Contact value | `contactInfo[2].value` |
| Office Hours | Box heading | `<h4>` |
| Monday - Friday: 9:00 AM - 6:00 PM (PST) / Saturday - Sunday: Closed | Office hours text | `<p>` |
| First Name | Form label | `<label>` |
| Last Name | Form label | `<label>` |
| Email | Form label | `<label>` |
| Subject | Form label | `<label>` |
| Message | Form label | `<label>` |
| John | Placeholder | First name input |
| Doe | Placeholder | Last name input |
| john@example.com | Placeholder | Email input |
| Project inquiry | Placeholder | Subject input |
| Tell us about your project... | Placeholder | Message textarea |
| Send Message | Submit button | `<PrimaryButton>` |

---

## Quick reference: File → content

| File | Contains |
|------|----------|
| `app/layout.tsx` | Site metadata (title, description, keywords, OG, Twitter) |
| `app/components/layout/Navbar.tsx` | Nav links: Home, About, Services, Projects, Contact |
| `app/components/layout/Footer.tsx` | Footer copy, Company/Legal/Connect links, copyright |
| `app/components/sections/Hero.tsx` | Hero headline, subline, trust badge, features, marquee, CTAs |
| `app/components/sections/ServicesPreview.tsx` | Services section title + 3 service cards (home) |
| `app/components/sections/FeaturedProjects.tsx` | Projects section title + 3 featured projects + CTA |
| `app/components/sections/WhyChooseUs.tsx` | Pricing section + 3 plans + features |
| `app/components/sections/CTA.tsx` | CTA heading, paragraph, button |
| `app/about/page.tsx` | About copy, Our Story, Our Values (4 cards) |
| `app/services/page.tsx` | Our Services heading + 6 service cards + CTA |
| `app/projects/page.tsx` | Our Work heading + 6 projects + CTA |
| `app/contact/page.tsx` | Contact heading, contact info, office hours, form labels/placeholders, Send Message |

---

*Generated as a content inventory for the Mernet web portal. Update this file when adding or changing copy.*
