# Maloomah (معلومة): project guide for Claude

A bilingual (Arabic + English) **learning site for students and teachers** at **https://maloomah.com**, built with Astro and hosted on GitHub Pages. It started as a general knowledge blog and became a learning site on 2026-11-06 (Owner's rule 3).

**Owner:** Mahmoud (GitHub: `mahabujamil`). He speaks Levantine Arabic, so reply to him in Arabic. He is not a developer: run the commands yourself, explain results in plain language, and avoid jargon.

**Goal:** rank well on Google (SEO) and earn from Google AdSense. Every change should keep pages fast, accurate and well structured.

## Owner's content rules (Mahmoud). These override everything else in this file and in the daily routine

1. **No content about the United Arab Emirates.** This is Mahmoud's editorial decision, made on 2026-10-29.
   - Write no articles, trend pieces or news about it.
   - Don't mention it in passing either: not its name, cities, landmarks, currency, companies, events or people. Use no photos taken there.
   - Use other countries as examples.
   - Skip any trend or topic that can't be covered accurately without it.
   - On 2026-10-29 the articles `how-are-fuel-prices-set-in-uae` and `uae-national-day` were removed, along with every passing mention. Don't recreate them.
2. **Keep SEO in everything we publish.** Mahmoud set this on 2026-10-29. Every article, page and design change must keep or improve SEO.
   - **Articles:**
     - Do keyword research first and use the real search queries in `keywords`.
     - Put the main keyword in the title (about 60 characters or fewer), in the description (120–160 characters), in the first paragraph and in at least one `##` heading.
     - Include an FAQ section and 1–3 internal links.
     - Add a photo with descriptive alt text in both languages.
     - Publish both languages under the same slug.
   - **Pages and design:**
     - Use one `h1` per page, with logical `h2`/`h3` headings below it.
     - Real content must be in the HTML, not added only by JavaScript.
     - Keep pages fast: no heavy scripts or unoptimised images.
     - Keep layouts mobile-friendly, with no horizontal scrolling.
     - Never break canonical, hreflang, structured data, the sitemap, RSS or `robots.txt`.
   - **Before every push:** `npm run build`, then `node scripts/audit.mjs`. Every count it prints must be 0.
3. **Maloomah is a learning site for students and teachers.** Mahmoud decided this on 2026-11-06, after AdSense rejected the site for "low-value content". This replaces the old "2 make-money-online articles a day" rule from 2026-10-30.
   - **Why this niche:** Search Console shows the site's real traction is students. The top pages are `/did-you-know/science/` and `/did-you-know/arabic/`, and the top queries are «هل تعلم عن العلوم للصف الثاني الاعدادي» and «هل تعلم عن اللغة العربية للإذاعة المدرسية», mostly from Egypt. Make-money articles were ranking 50–90.
   - **Write only for students, teachers and parents.** Good shapes are:
     - school-radio material («إذاعة مدرسية عن …», «فقرة هل تعلم عن …»), especially for occasions in the next 2–3 weeks
     - essay topics («موضوع تعبير عن …»), with an intro, body and conclusion
     - simple lessons and explainers for school subjects: science, space, the human body, Arabic language and grammar, history, geography, animals and the environment
     - general-knowledge questions with answers («أسئلة ثقافية مع الأجوبة»), famous scientists and inventors, «كم / لماذا / ما هو / من اخترع»
   - **Fewer, deeper articles:** 3 new articles a day, about 900–1500 words per language. Never thin, near-duplicate or mass-produced pages.
   - **Categories:** use the study categories in `STUDY_CATEGORY_IDS` in `src/site.ts`. The other categories (`OTHER_CATEGORY_IDS`) stay online but get no new articles, except a refresh.
   - **Religious text in school-radio pieces:** quote a Quran verse only word for word from quran.com, with its surah and verse number. Quote a hadith only if its text and grading are verified on sunnah.com or dorar.net; otherwise leave it out. Never give religious rulings.
   - **Never delete old articles.** Off-niche articles (money, cars, sports, recipes and so on) stay online and keep their links.
   - **AdSense:** don't request a new review until about 2026-12-01, so the site can build up real visitors first.
   - **For the daily routine:** its prompt (`trig_01Ny4m6t5mQCaC4Afm8rReE1`) was rewritten for this rule on 2026-11-06. `content-plan/make-money-online.md` is kept for reference but is no longer worked through.
   - Check English descriptions with a real character count (Python `len`); bash `wc`/`${#var}` count bytes in this sandbox.
   - The cloud checkout can be on a detached HEAD. Push with `git push origin HEAD:main` after `git fetch origin main && git rebase origin/main`.

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
node scripts/audit.mjs   # SEO audit of dist/: broken links, hreflang, canonicals, images, sitemap, duplicate titles (all must be 0)
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

A Claude Code cloud routine, "معلومة — دروس يومية للطلاب (نشر يومي)" (`trig_01Ny4m6t5mQCaC4Afm8rReE1`, renamed from «ترند اليوم» on 2026-11-06, managed at https://claude.ai/code/routines/trig_01Ny4m6t5mQCaC4Afm8rReE1), runs every day at 07:00 Asia/Amman. Since 2026-11-06 (Owner's rule 3) it writes **3 deeper bilingual learning articles** a day for students and teachers, adds **6 verified «هل تعلم؟» facts** to the fact bank, and **refreshes one older article**, re-checking its facts and setting `updated:` only when something really changed. It then updates `src/data/trending.ts`, builds, and **pushes straight to `main`**. Mahmoud chose auto-publish without review. (Before 2026-11-06 it wrote about 7 articles a day: trends, category builders and make-money-online pieces.)

- Because of this, **always `git pull` before local work**; `main` changes every morning.
- Network: on 2026-10-25 Mahmoud added `*.wikimedia.org`, `trends.google.com` and `suggestqueries.google.com` to the **Default** cloud environment's allowed domains (claude.ai/code → environment selector → Default → ⚙️ → Network access). Google Trends, autocomplete and the Wikimedia photo tool were verified working there on 2026-10-25, so the routine adds photos itself. As a safety net during local sessions, run `node scripts/images.mjs missing` and add photos for anything listed.
- Its sandbox Node is too old for Astro. It fetches Node 24 with `npm pack node-linux-x64@24`, which is already in its prompt.

## Admin dashboard (`/admin/`, added 2026-11-06)

Mahmoud asked for a dashboard on the site itself, behind a username and password: https://maloomah.com/admin/. The site has no server, so the login is real encryption, not a page that only hides its content:

- **Numbers:** `public/admin/data.json` holds the Search Console and Analytics numbers plus site stats. They are gzipped and AES-256-GCM encrypted with a fresh key each day, and that key is wrapped with the RSA-OAEP public key in `public/admin/key.json`.
- **Opening them:** the private key is in `key.json` too, locked with PBKDF2 (600,000 rounds) of Mahmoud's username and password. `src/pages/admin/index.astro` asks for them, opens the data in the browser and draws the dashboard.
- **Not stored anywhere:** the password. Neither the repo nor the routine knows it.
- **Changing or resetting the login:** open `scripts/admin-setup.html` on Mahmoud's computer in Chrome. It downloads a new `maloomah-admin-key.json`; copy that to `public/admin/key.json`, push, then run the data routine once. Old `data.json` files can't be opened with a new key.
- **Daily data:** a cloud routine, "معلومة — تحديث لوحة الإدارة" (`trig_018y1FdZbDq4SzsHzdzqX4mh`), runs every day at 09:30 Asia/Amman with the OpenSEO connector attached. It saves 12 OpenSEO answers to `/tmp/admin-raw/`, runs `node scripts/admin-data.mjs /tmp/admin-raw` and pushes only `public/admin/data.json`. Its prompt lists the exact calls.
- **Search Console:** daily rows cover up to 90 days; countries, queries, pages and devices cover the last 28 days. Analytics covers 28 days, from 2026-11-04 when the GA4 stream started.
- **Keep it private:**
  - The page is `noindex, nofollow`, is filtered out of the sitemap in `astro.config.mjs`, and loads no Analytics or AdSense.
  - Never put readable numbers in the HTML, and never commit the raw OpenSEO answers.
- **Don't break `key.json` or `data.json`** in other work. The daily editor routine must not touch `public/admin/`.
- **The second dashboard:** the live claude.ai Dashboard artifact (https://claude.ai/artifact/FXKpj12LYY19BS4JSUPdb9) still exists as a backup view.

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
| `content-plan/make-money-online.md` | The make-money-online keyword queue the daily routine works through (2 articles a day) |
| `src/content/pages/<lang>/` | About, contact, privacy and terms pages |
| `src/data/facts.ts` | General facts that used to feed the old home «هل تعلم؟» sheet. Since 2026-11-06 nothing shows them: the sheet was replaced by `src/components/DailyFacts.astro` |
| `src/data/did-you-know.ts` and `src/data/dyk/<subject>.json` | The «هل تعلم؟» fact bank. Mahmoud asked for about 1,000 facts on 2026-10-29. It has 16 subjects of about 62 facts each, every one tagged by school stage. Subject names, titles and colours live in `did-you-know.ts`. The facts live in one JSON file per subject, each entry `["primary" \| "middle" \| "secondary", "Arabic", "English"]`. They're shown on `/did-you-know/<subject>/`, in a daily mix on the hub, and in the home «هل تعلم؟ معلومات اليوم» section (`src/components/DailyFacts.astro`). That section shows 8 facts from 8 subjects with mixed stages. Each fact has its own copy button, and the section has «معلومات أخرى», «نسخ الكل» and «مشاركة». Mahmoud asked for it on 2026-11-06. New facts must be verified and must not duplicate existing ones |
| `src/views/` | Page templates shared by both languages |
| `src/pages/` | Routes: Arabic at `/`, English under `/en/` |
| `src/styles/global.css` | All styling. Uses logical CSS properties so RTL and LTR share one stylesheet |

## Design decisions (made by Mahmoud, 2026-10-23)

- **Font:** Cairo, via `@fontsource/cairo`, imported in `BaseLayout.astro`.
- **Colours:** the emerald palette (`--brand` #059669 and `--brand-2` #10b981, with amber `--accent`), chosen by Mahmoud. The interface must not use pink or violet anymore. Category colours stay varied.
- **Pagination:** `/articles/` and the category pages show `PAGE_SIZE` (24) per page, with numbered links to every page. Old articles must never become unreachable. The home page section «من أرشيف معلومة» shows 6 older articles, reshuffled every day.
- **Template:** keep the current design and improve it. Don't switch to a different layout style without asking.
- **20 categories,** defined in `src/site.ts`. Since 2026-11-06 the 11 study categories (`STUDY_CATEGORY_IDS`) come first: they fill the header bar and the home «المواد الدراسية» grid. The other 9 (`OTHER_CATEGORY_IDS`) appear in the home «أقسام منوعة» row and the footer.
- **Home page (redesigned by Mahmoud's request on 2026-11-06, learning site):**
  - The hero has the heading, search, «اختر مرحلتك» stage buttons (linking to `/did-you-know/?level=<stage>#browse`) and stats.
  - Beside the hero, the «تعلّم حسب المادة» panel holds the 16 subject tiles.
  - Then come «هل تعلم؟ معلومات اليوم» (8 facts, each with a copy button), «المواد الدراسية» with the «أقسام منوعة» chips, «أحدث الدروس والمقالات», «ترند اليوم» and the archive.
  - Inspired by Arab learning platforms; the design is our own.
- **The «هل تعلم؟» students section** is organised by subject, with a school-stage badge on every fact. Arabic pages show English-language facts in English with the Arabic translation, because «هل تعلم بالانجليزي مترجمة» is a popular search.

## Content growth plan

Since 2026-11-06 growth is only in the **study categories** (`STUDY_CATEGORY_IDS`), aiming for at least 30 articles in each, then about 100. Fill the study categories with the fewest articles first; check with `grep -h '^category:' src/content/articles/ar/*.md | sort | uniq -c | sort -n`. **Grow in batches of about 20–30 quality articles per session, never thousands at once.** Google's spam policies target mass-produced, low-value content, which could sink the whole site and block AdSense approval.

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

## The «الذاكرين» app (Mahmoud's Android app, added 2026-10-31)

maloomah.com is also the developer website of Mahmoud's Android app «الذاكرين» (azkar, prayer times and the Quran; package `com.abwaab.thakireen`; code in `D:\claude code\sakina`, not in this repo). Mahmoud plans to add a «الذاكرين» tab to the site later.

- **Never delete `public/app-ads.txt`.** AdMob uses it to verify the app's ad inventory. It contains the same line as `ads.txt`, because AdSense and AdMob share the publisher ID `pub-8690671273411786`.
- **The app's privacy policy is in `src/content/pages/<lang>/thakireen-privacy.md`** (`/thakireen-privacy/` and `/en/thakireen-privacy/`). Google Play links to it and the app opens it from Settings, so don't rename or remove it. Update it when the app gains features that touch data.

## Still to do (update this list as items are completed)

- [x] Namecheap DNS → GitHub Pages: A records for `@` to 185.199.108.153, .109.153, .110.153, .111.153 and a CNAME for `www` to `mahabujamil.github.io` (done 2026-10-23)
- [x] HTTPS certificate issued for maloomah.com and www, with "Enforce HTTPS" on (2026-10-23)
- [x] Email forwarding `contact@maloomah.com` → Mahmoud's Gmail runs through Cloudflare Email Routing (DNS is on Cloudflare: max/raegan.ns.cloudflare.com, not Namecheap). Verified 2026-11-04
- [x] Google Search Console verified for `https://maloomah.com` using the HTML file method (2026-10-23). **Never delete `public/googled3f535bad5389f96.html`**, or the verification breaks.
- [x] `sitemap-index.xml` submitted in Search Console (27 Oct 2026, success)
- [x] Google Analytics: measurement ID `G-G3KTSCJWHL` (stream «موقع معلومة», account ABU JAMIL ANALYTICS) added to `SITE.googleAnalyticsId` (2026-11-04)
- [x] Google AdSense code added: `SITE.adsenseClient = 'ca-pub-8690671273411786'` (loads on every page) and `public/ads.txt` (2026-10-23)
- [ ] **AdSense rejected the site on 2026-11-06 for "low-value content"** (site 2 weeks old, about 7 auto-published articles a day). Response: the learning-site niche (Owner's rule 3), 3 deeper articles a day, and a fuller «من نحن» page naming Mahmoud as the founder. Request a new review around 2026-12-01, not before. Earlier note: AdSense approval was pending. Keep adding solid articles, since about 25–30 makes approval much more likely. Once approved, either turn on Auto ads in the AdSense dashboard, or create ad units and pass their slot IDs to `<AdSlot slot="..."/>` in `src/views/ArticleView.astro`
