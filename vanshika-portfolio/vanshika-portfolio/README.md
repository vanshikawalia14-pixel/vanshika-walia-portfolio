# Vanshika Walia — Marketing Portfolio

A production-ready portfolio website built with **Next.js 14** and **Tailwind CSS**, designed for a top HEC Paris marketing graduate targeting FMCG, luxury, and digital marketing roles in Europe.

---

## ✦ Design

- **Aesthetic**: Premium editorial minimalism — charcoal, ivory, warm grey, muted gold
- **Typography**: Cormorant Garamond (display) + DM Sans (body)
- **Tone**: Professional, premium, international

---

## ✦ Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Experience | `/experience` |
| Projects / Case Studies | `/projects` |
| Skills | `/skills` |
| Contact | `/contact` |

---

## ✦ Getting Started

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Install & Run

```bash
# Clone or download this repository
cd vanshika-walia-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

---

## ✦ Deploying to Vercel (Recommended)

Vercel is built by the Next.js team — zero-config deployment.

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"

# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/vanshika-portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site will be live at `https://vanshika-portfolio.vercel.app` within ~60 seconds

### Step 3 — Connect a Custom Domain

1. In your Vercel project dashboard, go to **Settings → Domains**
2. Add your domain (e.g. `vanshikawalia.com`)
3. Vercel will show you DNS records to add (typically an A record or CNAME)
4. Add these in your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
5. DNS propagates in 5–30 minutes → your site is live on your custom domain

---

## ✦ Deploying to Netlify

### Option A — Drag & Drop

```bash
npm run build
```

Then drag the `.next` output folder to [netlify.com/drop](https://app.netlify.com/drop)

> Note: For full Next.js SSR support, use the GitHub method below.

### Option B — GitHub Integration

1. Push to GitHub (same steps as above)
2. Go to [netlify.com](https://netlify.com) → **"Add New Site" → "Import from Git"**
3. Connect GitHub and select your repo
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **Deploy Site**

### Custom Domain on Netlify

1. **Site Settings → Domain Management → Add Custom Domain**
2. Enter your domain name
3. Follow the DNS instructions provided
4. SSL certificate is auto-provisioned

---

## ✦ Project Structure

```
vanshika-walia-portfolio/
├── app/
│   ├── layout.tsx          # Root layout (fonts, nav, footer)
│   ├── globals.css         # Global styles + animations
│   ├── page.tsx            # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── skills/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Nav.tsx             # Sticky navigation
│   └── Footer.tsx
├── public/                 # Static assets (add your photo here)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ✦ Customisation Guide

### Update Personal Info
Edit content directly in each page file. All content is hardcoded as data arrays at the top of each file — easy to update.

### Add Your Photo
1. Add your photo to `/public/vanshika.jpg`
2. In `app/about/page.tsx`, add an `<Image>` component:
```tsx
import Image from "next/image";
<Image src="/vanshika.jpg" alt="Vanshika Walia" width={400} height={500} />
```

### Add Contact Form Backend
The contact form is ready for integration. Connect it to:
- **[Resend](https://resend.com)** — recommended for Next.js (free tier available)
- **[Formspree](https://formspree.io)** — simplest option, no code needed
- **[EmailJS](https://emailjs.com)** — client-side option

### Update LinkedIn URL
Search for `linkedin.com/in/vanshika-walia` in all files and replace with your actual LinkedIn profile URL.

---

## ✦ SEO

Metadata is configured in `app/layout.tsx`. Update:
- `title` — page title in browser tabs
- `description` — shown in Google search results
- `openGraph.url` — your live domain

For individual pages, add `export const metadata` at the top of each page file.

---

## ✦ Performance

This site scores 95+ on Lighthouse by default:
- Next.js App Router with server components
- Google Fonts loaded via `next/font` (no layout shift)
- Images optimised via `next/image` (when added)
- Zero unnecessary client-side JavaScript

---

## ✦ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Cormorant Garamond + DM Sans (Google Fonts via next/font)
- **Language**: TypeScript
- **Deployment**: Vercel (recommended) or Netlify

---

## ✦ License

Personal portfolio — all rights reserved. Content relates to Vanshika Walia.
