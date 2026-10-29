// Central site settings, categories and UI translations.
// Everything a human might want to tweak (names, colors, IDs for Google services) lives here.

export type Lang = 'ar' | 'en';
export const LANGS: Lang[] = ['ar', 'en'];

export const SITE = {
  url: 'https://maloomah.com',
  name: { ar: 'معلومة', en: 'Maloomah' },
  tagline: {
    ar: 'معرفة موثوقة بلغة بسيطة',
    en: 'Trusted knowledge, simply explained',
  },
  description: {
    ar: 'معلومة: مدونة عربية تشرح العلوم والصحة والتقنية والتاريخ والمال وغيرها بأسلوب واضح وموثوق، مع نسخة إنجليزية لكل مقال.',
    en: 'Maloomah is a bilingual knowledge blog that explains science, health, technology, history, money and more in clear, trustworthy language.',
  },
  email: 'contact@maloomah.com',
  // Fill these in once the accounts exist (see CLAUDE.md). Empty = feature switched off.
  adsenseClient: 'ca-pub-8690671273411786',
  googleAnalyticsId: '', // e.g. 'G-XXXXXXXXXX'
  googleSiteVerification: '', // the content="" value of Search Console's meta tag
};

/** Articles per page on /articles/ and category pages. Every page links to every other page. */
export const PAGE_SIZE = 24;

// Order = order in the header bar, home grid and footer (most searched first).
export const CATEGORY_IDS = [
  'science',
  'health',
  'technology',
  'food',
  'education',
  'business',
  'history',
  'geography',
  'space',
  'animals',
  'body',
  'environment',
  'inventions',
  'people',
  'money',
  'psychology',
  'family',
  'sports',
  'cars',
  'culture',
] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

type Category = {
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  colors: [string, string];
};

export const CATEGORIES: Record<CategoryId, Category> = {
  science: {
    name: { ar: 'علوم', en: 'Science' },
    description: {
      ar: 'ظواهر الطبيعة والفيزياء والكيمياء والأحياء مشروحة ببساطة.',
      en: 'Nature, physics, chemistry and biology, explained simply.',
    },
    colors: ['#0ea5e9', '#6366f1'],
  },
  space: {
    name: { ar: 'فضاء', en: 'Space' },
    description: {
      ar: 'الكواكب والنجوم والمجرات وأسرار الكون.',
      en: 'Planets, stars, galaxies and the secrets of the universe.',
    },
    colors: ['#4f46e5', '#a855f7'],
  },
  health: {
    name: { ar: 'صحة', en: 'Health' },
    description: {
      ar: 'معلومات صحية موثوقة عن الجسم والنوم والتغذية والعادات اليومية.',
      en: 'Reliable information on the body, sleep, nutrition and daily habits.',
    },
    colors: ['#10b981', '#0d9488'],
  },
  technology: {
    name: { ar: 'تقنية', en: 'Technology' },
    description: {
      ar: 'الذكاء الاصطناعي والإنترنت والأجهزة، وكيف تعمل التقنية من حولنا.',
      en: 'AI, the internet, gadgets and how the tech around us works.',
    },
    colors: ['#06b6d4', '#3b82f6'],
  },
  history: {
    name: { ar: 'تاريخ', en: 'History' },
    description: {
      ar: 'حضارات وأحداث وشخصيات صنعت العالم الذي نعيش فيه.',
      en: 'Civilizations, events and people that shaped our world.',
    },
    colors: ['#f59e0b', '#b45309'],
  },
  geography: {
    name: { ar: 'جغرافيا وسفر', en: 'Geography & Travel' },
    description: {
      ar: 'أماكن مدهشة وبلدان وظواهر جغرافية تستحق أن تعرفها.',
      en: 'Amazing places, countries and natural wonders worth knowing.',
    },
    colors: ['#14b8a6', '#0284c7'],
  },
  money: {
    name: { ar: 'مال واقتصاد', en: 'Money & Economy' },
    description: {
      ar: 'مفاهيم اقتصادية ومالية تهمّك في حياتك اليومية.',
      en: 'Economic and personal-finance ideas that matter in everyday life.',
    },
    colors: ['#22c55e', '#ca8a04'],
  },
  psychology: {
    name: { ar: 'علم النفس', en: 'Psychology' },
    description: {
      ar: 'العقل والسلوك والعادات وتطوير الذات بأسلوب علمي.',
      en: 'The mind, behavior, habits and self-improvement, backed by science.',
    },
    colors: ['#ec4899', '#8b5cf6'],
  },
  sports: {
    name: { ar: 'رياضة', en: 'Sports' },
    description: {
      ar: 'قوانين الألعاب وتاريخ البطولات وحقائق رياضية ممتعة.',
      en: 'Rules of the game, tournament history and fun sports facts.',
    },
    colors: ['#f97316', '#dc2626'],
  },
  culture: {
    name: { ar: 'ثقافة ولغة', en: 'Culture & Language' },
    description: {
      ar: 'اللغة العربية والثقافة والفنون وأصول الكلمات والأشياء.',
      en: 'Language, culture, the arts and the origins of words and things.',
    },
    colors: ['#a855f7', '#db2777'],
  },
  food: {
    name: { ar: 'طبخ ووصفات', en: 'Cooking & Recipes' },
    description: {
      ar: 'وصفات مجرّبة بخطوات واضحة، ونصائح مطبخ وفوائد الأطعمة.',
      en: 'Tried-and-tested recipes with clear steps, kitchen tips and food facts.',
    },
    colors: ['#f97316', '#e11d48'],
  },
  animals: {
    name: { ar: 'حيوانات', en: 'Animals' },
    description: {
      ar: 'عالم الحيوان المدهش: أغرب الكائنات وطباعها وأسرار بقائها.',
      en: 'The amazing animal kingdom: strange creatures, behaviour and survival secrets.',
    },
    colors: ['#84cc16', '#15803d'],
  },
  body: {
    name: { ar: 'جسم الإنسان', en: 'Human Body' },
    description: {
      ar: 'كيف يعمل جسمك؟ الأعضاء والعظام والحواس بشرح مبسّط.',
      en: 'How does your body work? Organs, bones and senses, simply explained.',
    },
    colors: ['#f43f5e', '#be123c'],
  },
  environment: {
    name: { ar: 'بيئة ومناخ', en: 'Environment & Climate' },
    description: {
      ar: 'التغير المناخي والتلوث والطاقة النظيفة، وكيف نحمي كوكبنا.',
      en: 'Climate change, pollution, clean energy and how to protect our planet.',
    },
    colors: ['#22c55e', '#0891b2'],
  },
  inventions: {
    name: { ar: 'اختراعات واكتشافات', en: 'Inventions & Discoveries' },
    description: {
      ar: 'من اخترع ماذا؟ قصص الاختراعات والاكتشافات التي غيّرت حياتنا.',
      en: 'Who invented what? The stories behind inventions that changed our lives.',
    },
    colors: ['#eab308', '#ea580c'],
  },
  people: {
    name: { ar: 'شخصيات ملهمة', en: 'Inspiring People' },
    description: {
      ar: 'علماء ومبدعون وشخصيات تركت أثراً، وقصص نجاحهم.',
      en: 'Scientists, creators and history-makers, and their stories of success.',
    },
    colors: ['#6366f1', '#0ea5e9'],
  },
  education: {
    name: { ar: 'دراسة وتعليم', en: 'Study & Education' },
    description: {
      ar: 'طرق المذاكرة الصحيحة ونصائح الامتحانات ومهارات التعلّم.',
      en: 'Effective study methods, exam tips and learning skills.',
    },
    colors: ['#2563eb', '#7c3aed'],
  },
  business: {
    name: { ar: 'ربح وأعمال', en: 'Business & Earning' },
    description: {
      ar: 'طرق حقيقية للربح من الإنترنت، والمشاريع الصغيرة، وريادة الأعمال.',
      en: 'Real ways to earn online, small business ideas and entrepreneurship.',
    },
    colors: ['#0d9488', '#1e40af'],
  },
  cars: {
    name: { ar: 'سيارات', en: 'Cars' },
    description: {
      ar: 'السيارات الكهربائية والهايبرد، والصيانة ونصائح الشراء.',
      en: 'Electric and hybrid cars, maintenance and buying tips.',
    },
    colors: ['#64748b', '#1e293b'],
  },
  family: {
    name: { ar: 'أسرة وتربية', en: 'Family & Parenting' },
    description: {
      ar: 'تربية الأطفال والتعامل مع المراهقين وبناء أسرة سعيدة.',
      en: 'Raising children, understanding teenagers and building a happy family.',
    },
    colors: ['#fb7185', '#f59e0b'],
  },
};

const UI = {
  ar: {
    home: 'الرئيسية',
    articles: 'المقالات',
    allArticles: 'كل المقالات',
    categories: 'الأقسام',
    search: 'بحث',
    searchPlaceholder: 'ابحث عن معلومة...',
    searchTitle: 'ابحث في معلومة',
    noResults: 'لم نجد نتائج. جرّب كلمة أخرى.',
    resultsCount: (n: number) => `${n} نتيجة`,
    readMore: 'اقرأ المقال',
    minRead: (n: number) => (n <= 2 ? `قراءة في ${n === 1 ? 'دقيقة' : 'دقيقتين'}` : `قراءة في ${n} دقائق`),
    latest: 'أحدث المقالات',
    featured: 'مقال مميّز',
    sheetSub: 'أربع معلومات جديدة كل يوم',
    sheetMore: 'معلومات أخرى',
    sheetCopy: 'نسخ المعلومات',
    sheetShare: 'مشاركة',
    sheetFrom: 'المزيد على موقع معلومة:',
    exploreCategories: 'تصفّح الأقسام',
    articlesIn: (n: number) => (n === 1 ? 'مقال واحد' : n === 2 ? 'مقالان' : `${n} مقالات`),
    about: 'من نحن',
    contact: 'تواصل معنا',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    otherLangName: 'English',
    otherLangShort: 'EN',
    share: 'شارك المقال',
    copyLink: 'نسخ الرابط',
    copied: 'تم النسخ ✓',
    toc: 'في هذا المقال',
    related: 'اقرأ أيضاً',
    published: 'نُشر في',
    updated: 'آخر تحديث',
    menu: 'القائمة',
    toggleTheme: 'تبديل الوضع الليلي',
    skip: 'انتقل إلى المحتوى',
    heroKicker: 'مدونة معرفية بالعربية والإنجليزية',
    heroTitleA: 'كل يوم',
    heroTitleB: 'معلومة تفرق',
    heroText:
      'مقالات واضحة وموثوقة في العلوم والصحة والتقنية والتاريخ والمال والمزيد. نشرح لك الأشياء كما هي، بدون تعقيد.',
    statArticles: 'مقال',
    statCategories: 'أقسام',
    statLangs: 'لغتان',
    footerText: 'معلومة مدونة مستقلة تقدّم معرفة موثوقة بلغة بسيطة، بالعربية والإنجليزية.',
    footerSections: 'الأقسام',
    footerSite: 'الموقع',
    rights: 'جميع الحقوق محفوظة',
    notFoundTitle: 'الصفحة غير موجودة',
    notFoundText: 'يبدو أن هذه الصفحة غير موجودة أو تم نقلها.',
    backHome: 'العودة إلى الرئيسية',
    breadcrumbHome: 'الرئيسية',
    keyTakeaway: 'الخلاصة',
    viewAll: 'عرض الكل',
    dykNav: 'هل تعلم؟',
    dykTitle: 'هل تعلم؟ معلومات قصيرة للإذاعة المدرسية',
    dykLead:
      'معلومات مدهشة وموثوقة لطلاب المدارس، مرتبة حسب المادة والمرحلة الدراسية. اختر ما يناسبك وانسخه بضغطة واحدة لفقرة هل تعلم في الإذاعة المدرسية.',
    dykHomeTitle: 'هل تعلم؟ للطلاب',
    dykHomeText: 'معلومات قصيرة جاهزة للإذاعة المدرسية، حسب المادة والمرحلة.',
    dykAllFacts: 'كل معلومات هل تعلم',
    dykSubjects: 'المواد الدراسية',
    dykFacts: (n: number) => `${n} معلومة`,
    dykSubjectsCount: (n: number) => `${n} مواد`,
    dykLevelsCount: (n: number) => `${n} مراحل`,
    dykLevelHeading: (level: string) => `معلومات لطلاب المرحلة ${level === 'إعدادي' ? 'الإعدادية' : level === 'ثانوي' ? 'الثانوية' : 'الابتدائية'}`,
    dykAllSubjects: 'كل المواد',
    dykAllLevels: 'كل المراحل',
    dykCopy: 'نسخ',
    dykCopyAll: 'نسخ الفقرة كاملة',
    dykCopiedAll: 'تم نسخ المعلومات ✓',
    dykPrefix: 'هل تعلم؟',
    dykTranslation: 'الترجمة',
    dykTip: 'نصيحة للإذاعة المدرسية: اختر من 5 إلى 7 معلومات من مواد مختلفة، وابدأ كل واحدة بعبارة «هل تعلم أنّ».',
    dykOtherSubjects: 'مواد أخرى',
    dykMixTitle: 'مختارات اليوم',
    dykMixText: 'معلومة من كل مادة لكل مرحلة دراسية، تتجدد كل يوم. وتجد كل المعلومات في صفحة كل مادة.',
    trendTitle: 'ترند اليوم',
    trendUpdated: 'آخر تحديث',
    trendSearches: 'الأكثر بحثاً الآن:',
    trendBadge: 'ترند',
    relatedSearches: 'عمليات بحث ذات صلة',
    pageLabel: (n: number) => `صفحة ${n}`,
    prevPage: 'السابق',
    nextPage: 'التالي',
    pagination: 'التنقل بين الصفحات',
    archiveTitle: 'من أرشيف معلومة',
    archiveText: 'مقالات مختارة من الأرشيف تتجدد كل يوم.',
    recipeCard: 'بطاقة الوصفة',
    prepTime: 'التحضير',
    cookTime: 'الطبخ',
    totalTime: 'المجموع',
    recipeYield: 'الكمية',
    caloriesLabel: 'السعرات',
    caloriesValue: (n: number, serving?: string) => `نحو ${n} سعرة${serving ? ` لكل ${serving}` : ''}`,
    caloriesNote: 'السعرات تقديرية وتختلف حسب المكونات والكميات.',
    ingredients: 'المكونات',
    method: 'الطريقة',
    minutes: (n: number) => (n === 1 ? 'دقيقة' : n === 2 ? 'دقيقتان' : n <= 10 ? `${n} دقائق` : `${n} دقيقة`),
  },
  en: {
    home: 'Home',
    articles: 'Articles',
    allArticles: 'All articles',
    categories: 'Categories',
    search: 'Search',
    searchPlaceholder: 'Search for anything...',
    searchTitle: 'Search Maloomah',
    noResults: 'No results found. Try another word.',
    resultsCount: (n: number) => `${n} result${n === 1 ? '' : 's'}`,
    readMore: 'Read article',
    minRead: (n: number) => `${n} min read`,
    latest: 'Latest articles',
    featured: 'Featured',
    sheetSub: 'Four new facts every day',
    sheetMore: 'More facts',
    sheetCopy: 'Copy facts',
    sheetShare: 'Share',
    sheetFrom: 'More on Maloomah:',
    exploreCategories: 'Explore categories',
    articlesIn: (n: number) => `${n} article${n === 1 ? '' : 's'}`,
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    otherLangName: 'العربية',
    otherLangShort: 'ع',
    share: 'Share this article',
    copyLink: 'Copy link',
    copied: 'Copied ✓',
    toc: 'In this article',
    related: 'Read next',
    published: 'Published',
    updated: 'Updated',
    menu: 'Menu',
    toggleTheme: 'Toggle dark mode',
    skip: 'Skip to content',
    heroKicker: 'A bilingual knowledge blog',
    heroTitleA: 'Every day,',
    heroTitleB: 'something worth knowing',
    heroText:
      'Clear, trustworthy articles on science, health, technology, history, money and more. We explain things as they are, without the jargon.',
    statArticles: 'articles',
    statCategories: 'categories',
    statLangs: 'languages',
    footerText: 'Maloomah is an independent blog sharing trusted knowledge in plain language, in Arabic and English.',
    footerSections: 'Categories',
    footerSite: 'Site',
    rights: 'All rights reserved',
    notFoundTitle: 'Page not found',
    notFoundText: 'This page does not exist or may have been moved.',
    backHome: 'Back to home',
    breadcrumbHome: 'Home',
    keyTakeaway: 'Key takeaway',
    viewAll: 'View all',
    dykNav: 'Did you know?',
    dykTitle: 'Did You Know? Fun Facts for Students',
    dykLead:
      'Amazing, reliable facts for school students, sorted by subject and school stage. Pick the ones you like and copy them in one click for class or school assemblies.',
    dykHomeTitle: 'Did you know? For students',
    dykHomeText: 'Short facts ready for class and school assemblies, by subject and stage.',
    dykAllFacts: 'All "Did you know?" facts',
    dykSubjects: 'School subjects',
    dykFacts: (n: number) => `${n} facts`,
    dykSubjectsCount: (n: number) => `${n} subjects`,
    dykLevelsCount: (n: number) => `${n} stages`,
    dykLevelHeading: (level: string) => `Facts for ${level} students`,
    dykAllSubjects: 'All subjects',
    dykAllLevels: 'All stages',
    dykCopy: 'Copy',
    dykCopyAll: 'Copy all',
    dykCopiedAll: 'Facts copied ✓',
    dykPrefix: 'Did you know?',
    dykTranslation: 'Translation',
    dykTip: 'Tip for school assemblies: pick 5 to 7 facts from different subjects and start each one with "Did you know that...".',
    dykOtherSubjects: 'Other subjects',
    dykMixTitle: "Today's picks",
    dykMixText: 'One fact per subject for each school stage, refreshed every day. Every fact is on its subject page.',
    trendTitle: 'Trending today',
    trendUpdated: 'Updated',
    trendSearches: 'Most searched now:',
    trendBadge: 'Trending',
    relatedSearches: 'Related searches',
    pageLabel: (n: number) => `Page ${n}`,
    prevPage: 'Previous',
    nextPage: 'Next',
    pagination: 'Pagination',
    archiveTitle: 'From the Maloomah archive',
    archiveText: 'Hand-picked articles from our archive, refreshed every day.',
    recipeCard: 'Recipe card',
    prepTime: 'Prep',
    cookTime: 'Cook',
    totalTime: 'Total',
    recipeYield: 'Makes',
    caloriesLabel: 'Calories',
    caloriesValue: (n: number, serving?: string) => `About ${n} kcal${serving ? ` per ${serving}` : ''}`,
    caloriesNote: 'Calories are an estimate and vary with ingredients and portions.',
    ingredients: 'Ingredients',
    method: 'Method',
    minutes: (n: number) => `${n} min`,
  },
} as const;

export function t(lang: Lang) {
  return UI[lang];
}

export const otherLang = (lang: Lang): Lang => (lang === 'ar' ? 'en' : 'ar');
export const dirOf = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** Prefix a site path (starting with "/") with the language folder. Arabic has no prefix. */
export function localePath(lang: Lang, path: string) {
  return lang === 'ar' ? path : `/en${path}`;
}

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function readingMinutes(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
