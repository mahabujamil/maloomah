# معلومة | Maloomah

مدونة معرفية بالعربية والإنجليزية: **https://maloomah.com**

---

## كيف تكمل الشغل من أي جهاز (البيت أو الدوام)

المشروع محفوظ على **GitHub**، وأي تعديل بينرفع عليه بيوصل للجهاز الثاني، وبيتحدّث الموقع لحاله خلال دقيقة أو دقيقتين.

### أول مرة على جهاز جديد (مرة وحدة بس)

1. افتح **PowerShell** والصق هالأوامر، واحد ورا الثاني:
   ```powershell
   winget install --id Git.Git -e
   winget install --id OpenJS.NodeJS.LTS -e
   winget install --id GitHub.cli -e
   ```
2. سكّر PowerShell وافتحه من جديد، وسجّل دخول على GitHub:
   ```powershell
   gh auth login
   ```
   اختار: **GitHub.com**، وبعدها **HTTPS**، وبعدها **Login with a web browser**، وانسخ الكود اللي بيطلعلك.
3. نزّل المشروع:
   ```powershell
   cd "C:\claude code"
   gh repo clone maloomah
   ```
4. افتح مجلد `C:\claude code\maloomah` بـ **VS Code**، وافتح Claude واحكيله: **«كمّل شغل موقع معلومة»**.

> أسهل طريقة: بعد الخطوة 2 بتقدر تحكي لـ Claude: «نزّل مشروع maloomah من حسابي على GitHub وافتحه»، وهو بيعمل الباقي.

### كل يوم

- **أول ما تبلّش:** احكي لـ Claude «اسحب آخر التحديثات» (هو بيعملها لحاله غالباً).
- **لما تخلّص:** احكي «ارفع التعديلات». Claude بيحفظ الشغل وبيرفعه، والموقع بيتحدّث لحاله.

---

## شو في جوّا المشروع؟

- **المقالات:** `src/content/articles/ar` للعربي و`src/content/articles/en` للإنجليزي، ولكل مقال نسخة بكل لغة بنفس الاسم.
- **الأقسام والألوان وإعدادات Google:** `src/site.ts`
- **معلومة اليوم:** `src/data/facts.ts`
- **تعليمات Claude الكاملة:** `CLAUDE.md`
