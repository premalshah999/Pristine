# Pristine Functional Health

Marketing site and patient portal for Pristine Functional Health — virtual functional medicine practice with Dr. Megha Shah, PT, CFNC.

Built with **Next.js 16** (App Router, Turbopack), **Tailwind CSS v4**, and **React 19**.

## Local development

```bash
npm install
npm run dev
```

The site runs on `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

This project is a standard Next.js app and deploys to Vercel with zero config:

1. Push the repo to GitHub.
2. On [vercel.com](https://vercel.com), click **New Project** → import the GitHub repo.
3. Framework: **Next.js** (auto-detected). Root directory: `./`. Build command: `next build`. Output: `.next`.
4. Click **Deploy**.

No environment variables are required for the marketing site itself.

### Cal.com booking

The booking page (`/book-appointment`) uses Cal.com's element-click embed pointed at `megha.shah/free-functional-health-consultation`. Update that handle in `app/book-appointment/page.tsx` if the Cal.com username changes.

## Project structure

```
app/                    # Next.js App Router pages
  about/                # About Dr. Shah
  blog/                 # Blog index + [slug]
  book-appointment/     # Cal.com embed
  conditions/           # Conditions list + [slug]
  contact/              # Contact form
  new-patient-special/  # Promo page
  privacy/              # Privacy policy
  services/             # Services list + [slug]
  terms/                # Terms & conditions
components/             # Shared React components
lib/                    # Static data (services, conditions, blog posts)
public/                 # Logo, photos, favicons
```

## Editing content

- **Services**: `lib/services.ts`
- **Conditions**: `lib/conditions.ts`
- **Blog posts**: `lib/blog.ts`

All content is statically rendered at build time via `generateStaticParams`.
