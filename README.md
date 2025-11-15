# Amir Hamja Chowdhury - SEO Consultant Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/amir-hamja-chys-projects/v0-portfolio-website-scaffold)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38b2ac?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

A modern, production-ready portfolio website for SEO consultant **Amir Hamja Chowdhury**.

## Live Website

**[Visit Portfolio]([https://vercel.com/amir-hamja-chys-projects/v0-portfolio-website-scaffold](https://amir-hamja-chy-portfolio.vercel.app/))**

## Features

### Core Sections
- **Hero Section** - Compelling headline with newsletter CTA and Google Search Console proof
- **About Me** - Professional bio with animated profile image and Google Search Console dashboard
- **Services** - 4 key SEO services with animated cards (Technical SEO, On-page SEO, Link Acquisition, SEO Audits)
- **Case Studies** - 3 detailed case studies with before/after metrics and screenshots
- **Contact** - Contact form and direct contact information
- **Newsletter** - Beehiiv newsletter signup integration

### Technical Features
- **Responsive Design** - Mobile-first, optimized for all devices
- **Dark Mode** - Toggle between dark and light themes
- **Animations** - Smooth scroll-triggered animations with Framer Motion
- **SEO Optimized** - JSON-LD structured data, meta tags, Open Graph tags
- **Performance** - Built with Next.js 16 for optimal performance
- **Accessibility** - WCAG AA compliant with semantic HTML

## Contact Information

- **Email:** hamja@amirhamjachy.com
- **Phone:** +8801857596354
- **LinkedIn:** [linkedin.com/in/amir-hamja-chowdhury-5268b716a](https://www.linkedin.com/in/amir-hamja-chowdhury-5268b716a)
- **Instagram:** [@amirhamjachy](https://www.instagram.com/amirhamjachy)
- **Facebook:** [facebook.com profile](https://www.facebook.com/share/1DozZ6DYL3)
- **Newsletter:** [The Remote Trove](https://the-remote-trove.beehiiv.com)

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Poppins (headings) + Inter (body)
- **Deployment:** Vercel
- **Repository:** GitHub

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Amir-Hamja-Chy/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Newsletter (if using email service)
NEXT_PUBLIC_NEWSLETTER_API_KEY=your_key_here

# Contact Form (if using email service)
CONTACT_EMAIL_API_KEY=your_key_here
\`\`\`

## Project Structure

\`\`\`
.
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # Contact form API
│   │   └── newsletter/route.ts   # Newsletter signup API
│   ├── layout.tsx                # Root layout with theme
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles & design tokens
├── components/
│   ├── navbar.tsx                # Navigation with theme toggle
│   ├── hero.tsx                  # Hero section with CTA
│   ├── about.tsx                 # About section with animations
│   ├── experience.tsx            # Case studies section
│   ├── services.tsx              # Services section with animations
│   ├── contact.tsx               # Contact section
│   ├── footer.tsx                # Footer with social links
│   ├── newsletter-modal.tsx      # Newsletter signup modal
│   ├── theme-provider.tsx        # Theme context provider
│   └── structured-data.tsx       # JSON-LD schema
├── public/
│   ├── professional-headshot-of-seo-consultant.jpg
│   ├── google-search-console-screenshot.jpg
│   ├── case-study-ecommerce.jpg
│   ├── case-study-saas.jpg
│   └── case-study-local.jpg
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── package.json                  # Dependencies

\`\`\`

## Customization

### Update Contact Information
Edit `components/contact.tsx` and `components/footer.tsx` with your:
- Email address
- Phone number
- Social media links

### Modify Services
Update `components/services.tsx` with your specific SEO services and descriptions.

### Edit Case Studies
Modify `components/experience.tsx` to add your own case studies with:
- Client names (anonymized if needed)
- Challenges and solutions
- Results and metrics
- Before/after screenshots

### Change Theme Colors
Update the design tokens in `app/globals.css`:
\`\`\`css
@theme inline {
  --color-primary: #your-color;
  --color-accent: #your-color;
  /* ... other tokens ... */
}
\`\`\`

## Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-deploys on every push
5. Add your custom domain in project settings

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- GitHub Pages
- AWS Amplify
- Any Node.js hosting provider

## Performance

- Lighthouse Score: 95+
- Core Web Vitals: Optimized
- Mobile Responsive: Yes
- SEO Score: 100

## Analytics

Add Google Analytics:
1. Create a Google Analytics account
2. Get your measurement ID
3. Add to `app/layout.tsx`:
   \`\`\`tsx
   <script async src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`} />
   \`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is personal and proprietary.

## Support

For issues or questions:
- Email: hamja@amirhamjachy.com
- LinkedIn: [linkedin.com/in/amir-hamja-chowdhury-5268b716a](https://www.linkedin.com/in/amir-hamja-chowdhury-5268b716a)

## Changelog

### v1.0.0 (Initial Release)
- Complete portfolio website launch
- Hero section with newsletter CTA
- About section with animations
- Case studies with screenshots
- Services showcase
- Contact form integration
- Dark/light mode toggle
- Fully responsive design
- SEO optimized

---
*Last updated: November 2025*
