# Client Accounts Ltd — Website Project

## Project Overview
Marketing website for **Client Accounts Ltd** (Company No. 17268964), a UK-registered business support company.

- **Domain:** clientaccounts.ltd
- **Email:** info@clientaccounts.ltd
- **Address:** 417 Carlton Hill, Nottingham, NG4 1HW, UK
- **Hosting:** Vercel (connected via GitHub)
- **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Lucide React

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Home — hero, services grid, why us, CTA |
| `/about` | `src/app/about/page.tsx` | Company overview, mission, values, markets |
| `/services` | `src/app/services/page.tsx` | All 6 services in detail (problem → solution format) |
| `/solutions` | `src/app/solutions/page.tsx` | Industries, process, comparison table, FAQ |
| `/contact` | `src/app/contact/page.tsx` | GDPR contact form, address, hours |

## Services Covered
1. Bookkeeping & Accounting
2. Local Business Marketing
3. Social Media Marketing
4. Marketing CRM
5. Bookkeeping CRM
6. Business Automation

## Target Markets
- UK businesses (primary)
- Australian businesses
- US businesses
- Startups and SMEs

## Colours
- Navy primary: `#0D1B3E` (Tailwind: `navy-900`)
- Navy dark: `#070F22` (Tailwind: `navy-950`)
- Gold: `#C4A44A` (Tailwind: `gold-500`)
- White: `#FFFFFF`

## Contact Form
The contact form in `/contact` submits to **Formspree**.

To activate it:
1. Sign up at https://formspree.io (free tier: 50 submissions/month)
2. Create a new form → copy the form ID
3. Replace `YOUR_FORMSPREE_FORM_ID` in `src/app/contact/page.tsx` line ~60

## Deployment
**Credentials are stored in `.env` (gitignored).**

### GitHub
- PAT stored in `.env` as `GITHUB_PAT`
- Scope: repo + workflow

### Vercel
- Token stored in `.env` as `VERCEL_TOKEN`

### Deploy Steps
```bash
# 1. Install Vercel CLI globally (once)
npm install -g vercel

# 2. Login with token
vercel login --token $VERCEL_TOKEN

# 3. Link to Vercel project and deploy
vercel --prod
```

Or push to GitHub main branch and Vercel auto-deploys via GitHub integration.

## Development Commands
```bash
npm install        # install dependencies
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # ESLint check
```

## SEO
All pages have `export const metadata` with title, description and keywords.
Root metadata in `src/app/layout.tsx` includes OpenGraph and Twitter card tags.

## Key Components
- `src/components/Header.tsx` — sticky nav, mobile hamburger, scroll shadow
- `src/components/Footer.tsx` — links, address, company registration, CTA strip

## Design System (Tailwind classes)
- `.btn-gold` — primary CTA button (gold background)
- `.btn-navy` — secondary CTA (navy background)
- `.btn-outline-white` — ghost button on dark backgrounds
- `.btn-outline-navy` — ghost button on light backgrounds
- `.card-service` — service card with hover lift
- `.section-tag` — small uppercase label above headings
- `.gold-divider` — decorative gold line
- `.icon-circle` — navy circle icon container
- `.gradient-hero` — navy gradient background
- `.bg-dot-navy` — dot grid overlay for dark sections
- `.bg-dot-gray` — dot grid overlay for light sections

## Notes
- No long-term contracts mentioned in copy — intentional brand positioning
- Company number 17268964 appears in footer, contact page, and homepage CTA
- GDPR consent checkbox is required on contact form
- Phone number is currently "To be confirmed" — update when known
- Privacy Policy and Terms pages are not yet built (links point to `/contact`)
