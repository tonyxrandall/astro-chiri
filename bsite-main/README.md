# The B-Side — Linkbuilding Consultancy Site

Built on the [Microblog](https://lexingtonthemes.com/) Astro + Tailwind theme.
Fully editable via [Pages CMS](https://pagescms.org).

## Stack
- **Framework**: Astro
- **Styling**: Tailwind CSS v4
- **CMS**: Pages CMS (`.pages.yml`)
- **Blog**: Astro content collections

## Pages
| URL | File | CMS Label |
|-----|------|-----------|
| `/` | `src/content/pages/index.md` | Home Page |
| `/about` | `src/content/pages/about.md` | About Page |
| `/posts` | Blog listing (auto-generated) | — |
| `/posts/[slug]` | `src/content/posts/*.md` | Blog Posts |

## CMS Editable Content
Every piece of content is editable in Pages CMS:
- **Navigation**: site name, nav links, CTA button
- **Footer**: company name, tagline, copyright, links
- **Home page**: hero, feature splits, all 5 services, CTA section
- **About page**: heading, full body copy, contact section headings
- **Blog page**: SEO title, SEO description, main heading, intro copy
- **Blog posts**: title, date, author, image, tags, body

## Pages CMS Setup
1. Push this repo to GitHub
2. Go to [pagescms.org](https://pagescms.org) and connect your GitHub repo
3. The `.pages.yml` at the root configures all editable fields
4. Start editing!

## Image Uploads
Pages CMS sends uploaded media through its own upload request before the image is committed to the repo. If a large photo fails with `413`, the request body is too large for that upload endpoint, so the fix is to upload a web-optimized copy instead of the original camera/phone file.

Recommended export settings:
- Resize the long edge to about 1600–2000px.
- Save as JPG or WebP.
- Keep the file under roughly 4 MB.

The CMS config restricts image uploads to `jpg`, `jpeg`, `png`, and `webp`, safely renames uploaded files, and points About page images to `public/images/about` and blog cover images to `public/images/blog`.

## Local Development
```bash
npm install
npm run dev
```

## Deployment
Works on Netlify, Vercel, Cloudflare Pages, or any static host.
