// Keyword research: prints Google autocomplete suggestions (what people actually type) for seed phrases.
// usage: node scripts/keywords.mjs ar "طريقة عمل" "فوائد"      (or: en "how to" "what is")
const [hl = 'ar', ...seeds] = process.argv.slice(2);
if (!seeds.length) {
  console.log('usage: node scripts/keywords.mjs <ar|en> "seed phrase" ["another seed" ...]');
  process.exit(1);
}
for (const q of seeds) {
  try {
    const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=${hl}&gl=jo&q=${encodeURIComponent(q)}`;
    const res = await fetch(url);
    const [, list] = JSON.parse(new TextDecoder('utf-8').decode(await res.arrayBuffer()));
    console.log(`## ${q}\n  ${list.slice(0, 10).join(' | ')}`);
  } catch (e) {
    console.log(`## ${q}: ERROR ${e.message}`);
  }
}
