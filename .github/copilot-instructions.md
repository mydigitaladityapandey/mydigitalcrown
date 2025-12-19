# MyDigital Crown – AI Coding Agent Guide

## 🎯 Project Overview
**Scale:** Next.js 15.5.4 digital marketing agency generating **200+ SEO-optimized pages** for 40+ Indian cities and 60+ services. Highly templated for **SEO**, **VSO** (Voice Search Optimization), and **ASO** (App Store Optimization).

**Stack:** Next.js 15.5.4, React 19, TypeScript 5, Tailwind CSS 4, Nodemailer 7  
**Build System:** Custom memory optimization for large-scale static generation  
**Deployment:** Vercel with environment-based configuration

## 🚨 Critical First Steps
1. **Always run `npm run build` before deploying** - validates ALL 200+ pages
2. **Use `@/app/` import aliases** everywhere - never relative paths  
   ```tsx
   import Navbar from '@/app/components/Navbar'  // ✅ Correct
   import Navbar from '../components/Navbar'     // ❌ Wrong
   ```
3. **Follow the Three-Tier Page System** - don't create random page structures
4. **Mumbai has NO folder** - it's the default market (homepage at `/app/page.tsx`)
5. **All city pages MUST have 8 core services** - non-negotiable requirement
6. **Never copy-paste pages** - use `QUICK_SERVICE_PAGE_PROMPTS.md` templates instead

---

## Architecture & Key Patterns

### Three-Tier Page System
1. **Global service pages** (`/app/services/[service]/page.tsx`): 
   - Rich, comprehensive pages with 13 sections, 15+ schema types, 3000+ words
   - Example: `/app/services/advertising-strategy/page.tsx`
   - Generate using `SERVICE_PAGE_GENERATION_PROMPT.md` template
   
2. **City landing pages** (`/app/[city]/page.tsx`):
   - **CRITICAL REQUIREMENTS for all city landing pages:**
     - **All 8 Core Services Required:** Every city page MUST display all 8 service cards:
       1. SEO Services
       2. Digital Branding
       3. Social Media Marketing
       4. Website Development
       5. YouTube Marketing
       6. Complete Digital Marketing
       7. Artificial Intelligence (AI)
       8. Machine Learning (ML)
     - **Target Keyword:** "Digital Marketing Services Near Me in [City Name]"
     - **100/100 SEO Score:** Perfect metadata, 11+ FAQs, 15+ schema types, 35+ keywords
     - **SEO/ASO/VSO Optimization:** Answer Search, Voice Search, Zero Ranking
     - **Proper Internal Linking:** Links to all 8 service sub-pages + global services
     - **Brand Consistency:** DO NOT change theme, colors, logo, or design patterns
   - Enhanced structure: Hero, 8 service cards, voice search answers, comprehensive content, FAQs, schema
   - Example: `/app/assam/page.tsx` (fully optimized reference)
   
3. **City+service pages** (`/app/[city]/[service]/page.tsx`):
   - Minimal, lean pages with hero, description, stats, back link
   - Example: `/app/bangalore/seo/page.tsx`
   - **Must exist for all 8 core services in every city**

**Critical:** No `/app/mumbai/` folder—Mumbai is the default market (homepage).

### Reusable Components Pattern
All service pages import shared components from `@/app/components/`:
- `Navbar`, `Footer` (layout)
- `EnquiryForm`, `CourseEnquiryForm` (forms - use `'use client'`)
- `TrustedBrands`, `ClientSuccessStories`, `RelatedServices`, `OurLocations` (sections)

### Schema Markup Pattern
Every service page includes **single JSON-LD script** with 15+ schema types:
```tsx
<script type="application/ld+json" 
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
```
Includes: Service, Organization, WebPage, BreadcrumbList, FAQPage, ItemList, Review (2), HowTo, Article, LocalBusiness, VideoObject, Course, SpecialAnnouncement, AggregateRating, Offer.

### Metadata Pattern
Every page exports `metadata` object with:
- 35+ keywords (primary, secondary, long-tail, LSI)
- `authors: [{ name: 'Aditya Pandey', url: '...' }]`
- `creator: 'MyDigital Crown'`, `publisher: 'MyDigital Crown'`
- OpenGraph: images (1200x630), locale `en_IN`
- Twitter: `@mydigitalcrown` handle, `summary_large_image` card
- Canonical URL, mobile meta tags, verification fields
- `category` and `classification` fields

### Styling Conventions
**Tailwind CSS 4 with inline @theme** (no tailwind.config.ts, config in `globals.css`):
- Glass morphism: `bg-white/10 backdrop-blur-lg border border-white/20`
- Gradients: `from-blue-900 via-purple-900 to-indigo-900`
- Custom animations defined in `globals.css`:
  - `animate-blob` - 7s infinite floating animation for background blobs
  - `animation-delay-2000` - 2s delay for staggered animations
  - `animation-delay-4000` - 4s delay for third blob
- Hover effects: `hover:scale-105 hover:shadow-2xl transition-all duration-500`
- Color variables: `--primary-blue: #2D4BB5`, `--secondary-blue: #3b82f6`

### Semantic HTML & Microdata
Use `itemScope`, `itemProp`, `itemType` attributes:
```tsx
<main itemScope itemType="https://schema.org/WebPage">
  <section itemScope itemType="https://schema.org/Service">
    <h1 itemProp="name">...</h1>
  </section>
  <section itemScope itemType="https://schema.org/FAQPage">
    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
```

---

## Developer Workflows

### Build & Test
```bash
npm run dev          # Development server (port 3000)
npm run build        # Production build - validates ALL pages
npm run build:vercel # Memory-optimized build for Vercel deployment (same as build)
npm run build:full   # Full build with 4GB memory allocation
npm run start        # Production server
npm run lint         # ESLint checks
```
**Always run `npm run build` before deploying** to catch errors across 200+ pages.

### Memory Optimization for Large Scale
This project has **custom build optimizations** in `next.config.ts` for handling 200+ pages:
- `memoryBasedWorkersCount: false` - Prevents memory overflow
- `webpackMemoryOptimizations: true` - Enables webpack memory optimizations
- Aggressive chunk splitting with `maxSize: 100000` (100KB per chunk)
- TypeScript/ESLint checks disabled during builds (`ignoreBuildErrors: true`, `ignoreDuringBuilds: true`)
- Build commands use explicit memory limits: `--max-old-space-size=2048` (default), `--max-old-space-size=4096` (full build)

**Why this matters:** Without these optimizations, builds fail with "JavaScript heap out of memory" errors.

### Active vs Disabled Cities
**Current structure:** All active city pages are in `/app/[city]/` directory  
**Note:** Previously disabled cities were in `/temp_cities_disabled/`, but this directory doesn't exist in current workspace  
**When adding cities:** Create directly in `/app/[city]/` and test build memory usage

### SEO Validation Scripts
Audit tools for checking page quality (run with `node`):
- `seo-audit-script.js` - Analyzes all service pages for SEO compliance
- `service-page-seo-audit.js` - Detailed service page audits
- `seo-audit-all-services.js` - Comprehensive multi-page analysis
- `analyze-issues.js` - Identifies common build and SEO issues
- Generate reports: Creates JSON files (`seo-audit-report.json`, `seo-audit-service-pages.json`)

**PowerShell usage:** `node seo-audit-script.js` or `node analyze-issues.js`

### Deploy
```bash
./deploy.sh          # Interactive deploy script (handles env vars)
vercel --prod        # Direct Vercel deploy
```
`deploy.sh` prompts for `WEB3FORMS_ACCESS_KEY` and runs `vercel env add`.

**Note:** On Windows, run deploy.sh using Git Bash or WSL. For PowerShell, use `vercel --prod` directly.

### Form Handling
`/app/api/send-enquiry/route.ts` handles POST requests:
- Accepts **both JSON and FormData** (checks `content-type` header)
- 3-tier fallback: Web3Forms → Gmail SMTP → Console logging
- Supports `service` or `course` field names (for flexibility)
- Required fields: `name`, `email`, `phone`, `service` (validates with 400 response)
- Environment variables:
  - `WEB3FORMS_ACCESS_KEY` (preferred, no SMTP config needed)
  - `GMAIL_APP_PASSWORD` (16-char app password, not regular Gmail password)
  - Use `vercel env add` for production deployment
- Console fallback logs enquiries when no email config available (dev mode)

### Image Handling
- Use Next.js `<Image>` component with explicit `width` and `height`
- Only `images.unsplash.com` and `assets.goodfirms.co` allowed (see `next.config.ts`)
- All images require `alt` text for accessibility

### Redirects
Legacy HTML to Next.js routes defined in `next.config.ts`:
- `index.html → /`, `about.html → /about`, `seo.html → /services/search-engine-optimisation`
- Check redirects array before adding new services

---

## Data Management

### Data Files Pattern
Structured data in `/app/data/`:
```typescript
// blogs.ts
export interface Blog { id, title, slug, excerpt, content, image, author, date, category, readTime }
export const blogs: Blog[] = [...]

// jobs.ts
export interface Job { id, title, department, location, type, experience, description, requirements, responsibilities, benefits, applyLink, postedDate }
export const jobs: Job[] = [...]
```
Use TypeScript interfaces for type safety.

---

## Page Generation Workflow

### Creating New Service Pages
1. **Do NOT copy-paste existing pages** (generates outdated patterns)
2. Use `QUICK_SERVICE_PAGE_PROMPTS.md` for one-line prompts:
   ```
   Using SERVICE_PAGE_GENERATION_PROMPT template, create complete [Service] page for Mumbai with: Service="...", Keywords="...", USPs="...", Price="₹...". Include all 13 sections with 15+ schema types.
   ```
3. Review `SERVICE_PAGE_GENERATION_PROMPT.md` for full template (2500+ lines)
4. Validate with `npm run build` after generation

### Service Page Structure (13 Required Sections)
1. Hero (gradient background, floating emojis, stats cards, dual CTAs)
2. Voice Search Quick Answers (3 cards)
3. Our Services (6 offerings grid)
4. Why Choose Us (6 benefits)
5. Client Success Stories (metrics + testimonials)
6. Trusted Brands (client logos)
7. Comprehensive Content (1000+ words: What is, Types, Benefits, Process, Mumbai Insights)
8. Related Services (9 internal links)
9. FAQ (11+ questions with `<details>/<summary>`)
10. Our Locations (3 offices with Google Maps iframes)
11. Metadata (exported `metadata` object)
12. Schema Markup (JSON-LD script)
13. Footer/Navbar (imported components)

### City Pages Requirements (MANDATORY FOR ALL CITIES)

**Every city landing page (`/app/[city]/page.tsx`) MUST meet these exact requirements:**

#### 1. Target Keyword & SEO
- **Primary Keyword:** "Digital Marketing Services Near Me in [City Name]"
- **SEO Score:** 100/100 on-page SEO
- **Title Format:** "Digital Marketing Services Near Me in [City] | #1 Agency"
- **Description:** Include city name, services, stats (150+ brands, 300% ROI), location coverage
- **35+ Keywords Array:** Primary, location-based, service-specific, long-tail, voice search, LSI keywords

#### 2. All 8 Core Services REQUIRED
Every city page MUST display these exact 8 service cards:
1. **SEO Services** - Links to `/[city]/seo`
2. **Digital Branding** - Links to `/[city]/digital-branding`
3. **Social Media Marketing** - Links to `/[city]/social-media-marketing`
4. **Website Development** - Links to `/[city]/website-development`
5. **YouTube Marketing** - Links to `/[city]/youtube-marketing`
6. **Complete Digital Marketing** - Links to `/[city]/digital-marketing`
7. **Artificial Intelligence (AI)** - Links to `/[city]/artificial-intelligence`
8. **Machine Learning (ML)** - Links to `/[city]/machine-learning`

#### 3. Page Structure (10 Required Sections)
1. **Hero Section** - City name, gradient background, floating emojis, 4 stats, dual CTAs
2. **8 Service Cards Grid** - All core services with icons, descriptions, links
3. **Voice Search Quick Answers** - 3 cards answering "Who provides?", "How much?", "How long?"
4. **Comprehensive Content** - What is digital marketing in [City], 8 services detailed, why choose us, process, cities served
5. **Why Choose MyDigital Crown** - 3-6 benefit cards with icons
6. **FAQ Section** - 11+ questions using `<details>` elements with schema markup
7. **CTA Section** - Gradient background, compelling copy, contact link
8. **Metadata** - 35+ keywords, OG tags, Twitter cards, canonical URL
9. **Schema Markup** - 15+ types: LocalBusiness, Service, WebPage, BreadcrumbList, FAQPage, ItemList, Organization, ProfessionalService
10. **Internal Linking** - Links to all 8 service sub-pages, global services, contact

#### 4. Optimization Requirements
- **SEO:** Perfect metadata, heading hierarchy (H1→H2→H3), keyword density, internal links
- **VSO (Voice Search):** HowTo schema, FAQ schema, natural language answers, question-based content
- **ASO (Answer Search):** Quick answer cards, featured snippet optimization, zero-click content
- **Zero Ranking:** Position 0 optimization, structured data, direct answers above fold

#### 5. Brand Consistency Rules
- **DO NOT CHANGE:** Theme colors, logo, font families, brand voice
- **MAINTAIN:** Blue/purple/indigo gradients, glass morphism effects, consistent spacing
- **USE:** Existing Navbar and Footer components, standard CTA button styles
- **FOLLOW:** Tailwind CSS 4 conventions from `globals.css`

#### 6. Content Guidelines
- **Word Count:** 2000+ words total (content sections)
- **Tone:** Professional yet approachable, data-driven, locally relevant
- **Stats:** 300% ROI, 150+ clients, 8+ years experience, 24/7 support
- **Local Focus:** Mention specific cities/areas within state, local market insights
- **Call-to-Actions:** "Get Free Consultation" and phone number (+91-83695-11877)

#### 7. Technical Requirements
- **File Location:** `/app/[city]/page.tsx`
- **Imports:** Navbar, Footer, Link from Next.js
- **TypeScript:** Proper typing for metadata, services array
- **Accessibility:** Semantic HTML, ARIA labels, alt text, role attributes
- **Mobile:** Responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4)

#### 8. Reference Implementation
**Gold Standard:** `/app/assam/page.tsx` - Use this as the template for ALL city pages
- Perfect 100/100 SEO score
- All 8 services present
- Comprehensive content and FAQs
- Complete schema markup
- Voice search optimized

### City Pages (Previous Structure - OUTDATED)
~~- Hero section with city name~~
~~- 6 service cards linking to `/[city]/[service]`~~
~~- Stats/metrics~~
~~- Local market insights~~
~~- Keep under 500 lines~~

**NEW STANDARD:** City pages should be 600-800 lines with comprehensive content, 11+ FAQs, voice search answers, and all 8 services.

---

## Scale & Structure

### Current Implementation
- **40+ city folders:** bangalore, delhi, mumbai (no folder—homepage), pune, hyderabad, etc.
- **60+ services:** SEO, social media marketing, web development, google ads, etc.
- **200+ pages total:** city pages, city+service pages, global service pages
- **Core services for each city:**
  - `digital-branding/page.tsx`
  - `digital-marketing/page.tsx`
  - `seo/page.tsx`
  - `social-media-marketing/page.tsx`
  - `website-development/page.tsx`
  - `youtube-marketing/page.tsx`

### URL Structure
```
/ (Mumbai homepage)
/services/[service] (global service page)
/[city] (city landing page)
/[city]/[service] (city+service page)
```

---

## Critical Conventions

### Import Paths
**Always use `@/app/` alias:**
```tsx
import Navbar from '@/app/components/Navbar'
import { blogs } from '@/app/data/blogs'
```

### Client vs Server Components
- **Server by default** (no `'use client'` directive)
- **Client only for:** Forms (`EnquiryForm`, `CourseEnquiryForm`), Navbar (hamburger menu), interactive elements with state/events
- Example client component pattern:
  ```tsx
  'use client';
  import { useState } from 'react';
  // Component with state/handlers
  ```
- Never use `console.log` in production code (except API routes for debugging enquiries)

### Contact Information
- Phone: `+91-83695-11877` (use `tel:+918369511877` in links)
- Email: `info@mydigitalcrown.in`
- Mumbai office: Chembur, Maharashtra - 400071
- Hours: Mon-Sat: 9:00 AM - 7:00 PM

### Accessibility Requirements
- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`)
- Correct heading hierarchy (single H1, then H2→H3→H4)
- ARIA labels on decorative elements: `role="img" aria-label="description"`
- Alt text on all images
- Focus states on interactive elements

---

## Key Reference Files

### Templates & Guides
- `SERVICE_PAGE_GENERATION_PROMPT.md` - Full 2500-line template for service pages
- `QUICK_SERVICE_PAGE_PROMPTS.md` - One-line prompts for rapid generation
- `SEO_VSO_ASO_OPTIMIZATION_REPORT.md` - Example of complete optimization
- `SERVICE_PAGE_SYSTEM_GUIDE.md` - System architecture documentation

### Example Pages
- `/app/services/advertising-strategy/page.tsx` - Gold standard global service page
- `/app/bangalore/seo/page.tsx` - Minimal city+service page
- `/app/bangalore/page.tsx` - City landing page

### Configuration
- `next.config.ts` - Image domains, redirects
- `app/layout.tsx` - Root metadata, fonts, theme
- `app/globals.css` - Tailwind inline @theme config, custom animations, color variables
- `deploy.sh` - Deployment automation

---

## Optimization Targets

Every service page must achieve:
- ✅ **SEO Score:** 100% (35+ keywords, proper metadata, internal links)
- ✅ **VSO Score:** 100% (HowTo schema, FAQ schema, voice-friendly content)
- ✅ **ASO Score:** 100% (mobile meta tags, touch-friendly, fast loading)
- ✅ **Schema:** 15+ types validated in Google Rich Results Test
- ✅ **Accessibility:** WCAG 2.1 AA compliance
- ✅ **Performance:** 90+ Lighthouse score
- ✅ **Word Count:** 3000+ words

---

## Common Tasks Quick Reference

### Add new service page
```bash
# 1. Use template prompt from QUICK_SERVICE_PAGE_PROMPTS.md
# 2. Generate page → /app/services/[slug]/page.tsx
# 3. Check for legacy redirects in next.config.ts
# 4. npm run build (validate)
# 5. Deploy
```

### Add new city
```bash
# 1. Create /app/[city]/page.tsx (city landing)
# 2. Create /app/[city]/[service]/page.tsx for each service
# 3. No Mumbai folder (it's the default)
# 4. npm run build
```

### Update contact form
```bash
# Edit /app/api/send-enquiry/route.ts
# Test with both JSON and FormData
# Check console logs for validation
```

### Add redirect
```bash
# Edit next.config.ts redirects array
# Format: { source: '/old.html', destination: '/new', permanent: true }
```

---

## Troubleshooting

### Build fails with "cannot find module"
- Check import paths use `@/app/` alias
- Verify file exists and has correct export

### Images not loading
- Check domain is allowed in `next.config.ts` remotePatterns
- Verify `width` and `height` props are set

### Form submissions not working
- Check environment variables: `WEB3FORMS_ACCESS_KEY` or `GMAIL_APP_PASSWORD`
- Look for console logs in API route (fallback mode)
- Test both JSON and FormData submissions

### Schema validation errors
- Use Google Rich Results Test
- Ensure all required fields present
- Check for proper nesting in schema structure

---

**For unclear sections or missing examples, ask for clarification!**
