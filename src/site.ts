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

export const CATEGORY_IDS = [
  'science',
  'space',
  'health',
  'technology',
  'history',
  'geography',
  'money',
  'psychology',
  'sports',
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
    factOfDay: 'معلومة اليوم',
    anotherFact: 'معلومة أخرى',
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
    factOfDay: 'Fact of the day',
    anotherFact: 'Another fact',
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
