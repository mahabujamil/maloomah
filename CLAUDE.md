# Maloomah (معلومة): project guide for Claude

A bilingual (Arabic + English) knowledge blog at **https://maloomah.com**, built with Astro and hosted on GitHub Pages.

**Owner:** Mahmoud (GitHub: `mahabujamil`). He speaks Levantine Arabic, so reply to him in Arabic. He is not a developer: run the commands yourself, explain results in plain language, and avoid jargon.

**Goal:** rank well on Google (SEO) and earn from Google AdSense. Every change should keep pages fast, accurate and well structured.

## Owner's content rules (Mahmoud). These override everything else in this file and in the daily routine

1. **No content about the United Arab Emirates.** This is Mahmoud's editorial decision, made on 2026-10-29.
   - Write no articles, trend pieces or news about it.
   - Don't mention it in passing either: not its name, cities, landmarks, currency, companies, events or people. Use no photos taken there.
   - Use other countries as examples.
   - Skip any trend or topic that can't be covered accurately without it.
   - On 2026-10-29 the articles `how-are-fuel-prices-set-in-uae` and `uae-national-day` were removed, along with every passing mention. Don't recreate them.

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
node scripts/keywords.mjs ar "طريقة عمل" "فوائد"   # keyword research via Google autocomplete
node scripts/images.mjs search <slug> "<english query>"   # find free photos (Wikimedia Commons) -> .image-candidates/<slug>-sheet.jpg
node scripts/images.mjs pick <slug> <n> "<alt ar>" "<alt en>"   # save photo #n + its credit
```

## Photos

Every article should have a photo at `src/assets/articles/<slug>.jpg`, with its credit in `src/data/images.json`. It's used on cards, as the article hero, and as the social and Google share image (1200×630 is generated automatically). Without a photo, the generated category art is shown instead.

- Only use the image tool, which keeps only licences that allow commercial use (CC0, Public Domain, CC BY, CC BY-SA). Never use random web images.
- **Look at the contact sheet before picking.** Choose landscape, high-quality, relevant photos that suit a conservative Arab family audience: no nudity, swimwear, alcohol or violence. Avoid identifiable children; backs and silhouettes are fine.
- The credit line under the hero photo is required by the licences, so don't remove it.

## Daily cloud routine (auto-publishing)

A Claude Code cloud routine, "معلومة — ترند اليوم" (`trig_01Ny4m6t5mQCaC4Afm8rReE1`, managed at https://claude.ai/code/routines/trig_01Ny4m6t5mQCaC4Afm8rReE1), runs every day at 07:00 Asia/Amman. It researches trends (Google Trends for Jordan, Saudi Arabia, Egypt and Kuwait) and writes 2–3 bilingual articles. Since 2026-10-29 it also writes **3 "category builder" articles** each day, one in each of the 3 categories with the fewest articles. It also **refreshes one older article**, re-checking its time-sensitive facts and setting `updated:` only when something really changed. It then updates `src/data/trending.ts`, builds, and **pushes straight to `main`**. Mahmoud chose auto-publish without review.

- Because of this, **always `git pull` before local work**; `main` changes every morning.
- Network: on 2026-10-25 Mahmoud added `*.wikimedia.org`, `trends.google.com` and `suggestqueries.google.com` to the **Default** cloud environment's allowed domains (claude.ai/code → environment selector → Default → ⚙️ → Network access). Google Trends, autocomplete and the Wikimedia photo tool were verified working there on 2026-10-25, so the routine adds photos itself. As a safety net during local sessions, run `node scripts/images.mjs missing` and add photos for anything listed.
- Its sandbox Node is too old for Astro. It fetches Node 24 with `npm pack node-linux-x64@24`, which is already in its prompt.

## «ترند اليوم» (home page trending block)

`src/data/trending.ts` controls it. Put the hottest article slugs first and update `TRENDING_UPDATED` whenever new trend articles go live. Trending articles get a 🔥 badge everywhere. The "most searched now" chips use each article's first `keywords` entry.

## Recipes

Every recipe article must have a `recipe:` block in its frontmatter. It holds:
- `prepTime` and `cookTime` as ISO durations such as `PT20M`
- `yield`, `cuisine` and `type`
- `calories` (approximate kcal per serving, estimated from the ingredient amounts) and `servingSize` (for example «قطعة» or "piece")
- `ingredients` and `steps`

See `basbousa-recipe.md`. The block renders a visible «بطاقة الوصفة» card, whose steps carry ids, and Recipe structured data with nutrition plus a name, url and image for every step. Google Search Console asked for exactly these on 2026-10-25. Video is optional, and we don't have any.

On these Windows machines the Bash tool may not have Node on PATH. If so, prefix with `export PATH="/c/Program Files/nodejs:$PATH"`.

## Structure

| Path | What it is |
| --- | --- |
| `src/site.ts` | Site name, categories (names, descriptions, colors), UI translations, and the AdSense / Analytics / Search Console IDs |
| `src/content/articles/ar/<slug>.md` and `src/content/articles/en/<slug>.md` | Articles. **The same slug in both folders = translations of each other.** |
| `src/content/pages/<lang>/` | About, contact, privacy and terms pages |
| `src/data/facts.ts` | The "fact of the day" list on the home page |
| `src/data/did-you-know.ts` | The students' «هل تعلم؟» section: 8 subjects, facts tagged by school stage (primary, middle, secondary), shown at `/did-you-know/` and in a tab on the home page |
| `src/views/` | Page templates shared by both languages |
| `src/pages/` | Routes: Arabic at `/`, English under `/en/` |
| `src/styles/global.css` | All styling. Uses logical CSS properties so RTL and LTR share one stylesheet |

## Design decisions (made by Mahmoud, 2026-10-23)

- **Font:** Cairo, via `@fontsource/cairo`, imported in `BaseLayout.astro`.
- **Colours:** the emerald palette (`--brand` #059669 and `--brand-2` #10b981, with amber `--accent`), chosen by Mahmoud. The interface must not use pink or violet anymore. Category colours stay varied.
- **Pagination:** `/articles/` and the category pages show `PAGE_SIZE` (24) per page, with numbered links to every page. Old articles must never become unreachable. The home page section «من أرشيف معلومة» shows 6 older articles, reshuffled every day.
- **Template:** keep the current design and improve it. Don't switch to a different layout style without asking.
- **20 categories,** defined in `src/site.ts`, with the most searched first.
- **The «هل تعلم؟» students section** is organised by subject, with a school-stage badge on every fact. Arabic pages show English-language facts in English with the Arabic translation, because «هل تعلم بالانجليزي مترجمة» is a popular search.

## Content growth plan

Mahmoud's long-term goal is about 100 articles per category. **The first milestone (set 2026-10-29) is at least 30 articles in every category.** Always fill the categories with the fewest articles first; check with `grep -h '^category:' src/content/articles/ar/*.md | sort | uniq -c | sort -n`. **Grow in batches of about 20–30 quality articles per session, never thousands at once.** Google's spam policies target mass-produced, low-value content, which could sink the whole site and block AdSense approval.

- Run keyword research first (`node scripts/keywords.mjs ...`) and pick the real queries people type.
- Prioritise categories with few articles and the highest-volume queries.
- Add student facts to `src/data/did-you-know.ts` in the same careful, verified way.

## Adding an article (the most common task)

1. Choose an English, lowercase, hyphenated slug that matches the search query, e.g. `how-to-lower-blood-pressure`.
2. Create **both** `src/content/articles/ar/<slug>.md` and `src/content/articles/en/<slug>.md`.
3. Frontmatter (validated in `src/content.config.ts`):
   ```yaml
   title: "..."            # target keyword first; aim for 60 characters or fewer
   description: "..."      # 120–160 characters; this becomes the Google snippet (max 200)
   category: science       # one of the 20 CATEGORY_IDS in src/site.ts, e.g. science | health | food | education | business ...
   date: 2026-10-23
   updated: 2026-11-01     # optional; set it when you substantially revise
   tags: ["...", "..."]    # shown on the page; link to search
   keywords: ["...", "..."] # the exact search queries this article targets (from keyword research)
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
   - Put the main keyword in the title, the description, the first paragraph and at least one `##` heading, written naturally and not stuffed.
5. Arabic articles use Modern Standard Arabic (فصحى). In Arabic text, put a space after «و» when the next word is English (`Upwork و Fiverr`, not `وFiverr`). Otherwise the bidi rendering glues them together. The English version is a natural translation, not word for word.
6. **Accuracy is non-negotiable.** Only state facts you are confident about, hedge estimates ("about", "نحو"), and never invent studies or statistics. Health and money articles automatically get a disclaimer.
7. Run `npm run build`, then commit and push.

## Trend-driven content

Mahmoud wants to catch trending topics early. When he asks for a trend article:

- Check the search trend first (Google Trends, news), and pick a specific question people are searching.
- Prefer evergreen angles that keep getting traffic after the trend fades.
- Publish in both languages, link from related older articles where relevant, and set `featured: true` on it, removing it from the previous featured article.

## Still to do (update this list as items are completed)

- [x] Namecheap DNS → GitHub Pages: A records for `@` to 185.199.108.153, .109.153, .110.153, .111.153 and a CNAME for `www` to `mahabujamil.github.io` (done 2026-10-23)
- [x] HTTPS certificate issued for maloomah.com and www, with "Enforce HTTPS" on (2026-10-23)
- [ ] Namecheap email forwarding: `contact@maloomah.com` → Mahmoud's Gmail
- [x] Google Search Console verified for `https://maloomah.com` using the HTML file method (2026-10-23). **Never delete `public/googled3f535bad5389f96.html`**, or the verification breaks.
- [ ] Confirm that `sitemap-index.xml` has been submitted in Search Console → Sitemaps
- [ ] Google Analytics: put the measurement ID in `SITE.googleAnalyticsId`
- [x] Google AdSense code added: `SITE.adsenseClient = 'ca-pub-8690671273411786'` (loads on every page) and `public/ads.txt` (2026-10-23)
- [ ] AdSense approval is pending. Keep adding solid articles, since about 25–30 makes approval much more likely. Once approved, either turn on Auto ads in the AdSense dashboard, or create ad units and pass their slot IDs to `<AdSlot slot="..."/>` in `src/views/ArticleView.astro`
