# Maloomah (معلومة): project guide for Claude

A bilingual (Arabic + English) knowledge blog at **https://maloomah.com**, built with Astro and hosted on GitHub Pages.

**Owner:** Mahmoud (GitHub: `mahabujamil`). He speaks Levantine Arabic, so reply to him in Arabic. He is not a developer: run the commands yourself, explain results in plain language, and avoid jargon.

**Goal:** rank well on Google (SEO) and earn from Google AdSense. Every change should keep pages fast, accurate and well structured.

## Two computers, one repo

Mahmoud works from two Windows PCs, his home PC and his work PC. GitHub is the single source of truth.

- **Start of every session:** `git pull` before touching anything.
- **End of every change:** build, commit and `git push`. A push to `main` deploys the live site automatically through `.github/workflows/deploy.yml`, in about 1–2 minutes.
- Never leave work uncommitted at the end of a session. The other PC won't see it.

## Commands

```bash
npm install          # once per machine
npm run dev          # local preview at http://localhost:4321 (drafts visible)
npm run build        # production build into dist/ (must pass before pushing)
node scripts/make-images.ts   # regenerate social images in public/og/ (after changing categories or colors)
```

On these Windows machines the Bash tool may not have Node on PATH. If so, prefix with `export PATH="/c/Program Files/nodejs:$PATH"`.

## Structure

| Path | What it is |
| --- | --- |
| `src/site.ts` | Site name, categories (names, descriptions, colors), UI translations, and the AdSense / Analytics / Search Console IDs |
| `src/content/articles/ar/<slug>.md` and `src/content/articles/en/<slug>.md` | Articles. **The same slug in both folders = translations of each other.** |
| `src/content/pages/<lang>/` | About, contact, privacy and terms pages |
| `src/data/facts.ts` | The "fact of the day" list on the home page |
| `src/views/` | Page templates shared by both languages |
| `src/pages/` | Routes: Arabic at `/`, English under `/en/` |
| `src/styles/global.css` | All styling. Uses logical CSS properties so RTL and LTR share one stylesheet |

## Adding an article (the most common task)

1. Choose an English, lowercase, hyphenated slug that matches the search query, e.g. `how-to-lower-blood-pressure`.
2. Create **both** `src/content/articles/ar/<slug>.md` and `src/content/articles/en/<slug>.md`.
3. Frontmatter (validated in `src/content.config.ts`):
   ```yaml
   title: "..."            # target keyword first; aim for 60 characters or fewer
   description: "..."      # 120–160 characters; this becomes the Google snippet (max 200)
   category: science       # science | space | health | technology | history | geography | money | psychology | sports | culture
   date: 2026-10-23
   updated: 2026-11-01     # optional; set it when you substantially revise
   tags: ["...", "..."]
   featured: false         # one featured article is shown big on the home page
   draft: false            # true = only visible in npm run dev
   ```
4. Body format, matching the existing articles:
   - A short hook intro with no heading
   - 4–7 `##` sections; their headings feed the table of contents
   - One `> **هل تعلم؟** ...` / `> **Did you know?** ...` callout
   - A `## أسئلة شائعة` / `## Frequently asked questions` section with `###` questions (good for long-tail search)
   - Final `## الخلاصة` / `## Key takeaway`
   - Use tables where data fits naturally
5. Arabic articles use Modern Standard Arabic (فصحى). The English version is a natural translation, not word for word.
6. **Accuracy is non-negotiable.** Only state facts you are confident about, hedge estimates ("about", "نحو"), and never invent studies or statistics. Health and money articles automatically get a disclaimer.
7. Run `npm run build`, then commit and push.

## Trend-driven content

Mahmoud wants to catch trending topics early. When he asks for a trend article:

- Check the search trend first (Google Trends, news), and pick a specific question people are searching.
- Prefer evergreen angles that keep getting traffic after the trend fades.
- Publish in both languages, link from related older articles where relevant, and set `featured: true` on it, removing it from the previous featured article.

## Still to do (update this list as items are completed)

- [x] Namecheap DNS → GitHub Pages: A records for `@` to 185.199.108.153, .109.153, .110.153, .111.153 and a CNAME for `www` to `mahabujamil.github.io` (done 2026-10-23)
- [ ] Enable "Enforce HTTPS" once GitHub issues the certificate: `gh api -X PUT repos/mahabujamil/maloomah/pages -F https_enforced=true`
- [ ] Namecheap email forwarding: `contact@maloomah.com` → Mahmoud's Gmail
- [ ] Google Search Console: verify the domain, submit `https://maloomah.com/sitemap-index.xml`, put the verification code in `SITE.googleSiteVerification`
- [ ] Google Analytics: put the measurement ID in `SITE.googleAnalyticsId`
- [x] Google AdSense code added: `SITE.adsenseClient = 'ca-pub-8690671273411786'` (loads on every page) and `public/ads.txt` (2026-10-23)
- [ ] AdSense approval is pending. Keep adding solid articles, since about 25–30 makes approval much more likely. Once approved, either turn on Auto ads in the AdSense dashboard, or create ad units and pass their slot IDs to `<AdSlot slot="..."/>` in `src/views/ArticleView.astro`
