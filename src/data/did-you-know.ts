// «هل تعلم؟» for school students: short, verifiable facts grouped by school subject,
// each tagged with the school stage it suits. Shown at /did-you-know/ and on the home page.
import type { Lang } from '../site';

export const SUBJECT_IDS = [
  'science',
  'math',
  'arabic',
  'english',
  'history',
  'geography',
  'space',
  'body',
  'animals',
  'environment',
  'technology',
  'inventions',
  'health',
  'sports',
  'general',
  'money',
] as const;
export type SubjectId = (typeof SUBJECT_IDS)[number];

export const LEVEL_IDS = ['primary', 'middle', 'secondary'] as const;
export type LevelId = (typeof LEVEL_IDS)[number];

export const LEVELS: Record<LevelId, { name: Record<Lang, string>; color: string }> = {
  primary: { name: { ar: 'ابتدائي', en: 'Primary' }, color: '#16a34a' },
  middle: { name: { ar: 'إعدادي', en: 'Middle school' }, color: '#2563eb' },
  secondary: { name: { ar: 'ثانوي', en: 'Secondary' }, color: '#9333ea' },
};

type Subject = {
  name: Record<Lang, string>;
  /** Page <title>, built around what students actually search for. */
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  colors: [string, string];
};

export const SUBJECTS: Record<SubjectId, Subject> = {
  science: {
    name: { ar: 'علوم', en: 'Science' },
    title: { ar: 'هل تعلم عن العلوم؟ معلومات علمية قصيرة للإذاعة المدرسية', en: 'Did You Know? Science Facts for Students' },
    description: {
      ar: 'معلومات علمية قصيرة ومدهشة للطلاب، مناسبة لفقرة هل تعلم في الإذاعة المدرسية، مرتبة حسب المرحلة الدراسية.',
      en: 'Short, surprising science facts for students, perfect for school assemblies, sorted by school stage.',
    },
    icon: 'science',
    colors: ['#0ea5e9', '#6366f1'],
  },
  math: {
    name: { ar: 'رياضيات', en: 'Math' },
    title: { ar: 'هل تعلم في الرياضيات؟ معلومات رياضية ممتعة للطلاب', en: 'Did You Know? Fun Math Facts for Students' },
    description: {
      ar: 'معلومات رياضية ممتعة وسهلة للطلاب عن الأعداد والأشكال وتاريخ الرياضيات، لفقرة هل تعلم في الإذاعة المدرسية.',
      en: 'Fun, easy math facts about numbers, shapes and the history of mathematics for students.',
    },
    icon: 'math',
    colors: ['#f59e0b', '#ea580c'],
  },
  arabic: {
    name: { ar: 'لغة عربية', en: 'Arabic Language' },
    title: { ar: 'هل تعلم عن اللغة العربية؟ معلومات للإذاعة المدرسية', en: 'Did You Know? Facts About the Arabic Language' },
    description: {
      ar: 'معلومات جميلة عن اللغة العربية وحروفها وتاريخها وعلمائها، مناسبة للإذاعة المدرسية ولكل المراحل.',
      en: 'Fascinating facts about the Arabic language, its letters, history and scholars.',
    },
    icon: 'pen',
    colors: ['#10b981', '#0d9488'],
  },
  english: {
    name: { ar: 'لغة إنجليزية', en: 'English Language' },
    title: { ar: 'هل تعلم بالإنجليزي مترجمة بالعربي للإذاعة المدرسية', en: 'Did You Know? Fun Facts About the English Language' },
    description: {
      ar: 'فقرة هل تعلم بالإنجليزي مع الترجمة العربية، معلومات قصيرة عن اللغة الإنجليزية جاهزة للإذاعة المدرسية.',
      en: 'Fun facts about the English language, its letters, words and history, for students.',
    },
    icon: 'english',
    colors: ['#ef4444', '#be123c'],
  },
  history: {
    name: { ar: 'تاريخ', en: 'History' },
    title: { ar: 'هل تعلم عن التاريخ؟ معلومات تاريخية قصيرة للطلاب', en: 'Did You Know? History Facts for Students' },
    description: {
      ar: 'معلومات تاريخية قصيرة عن الحضارات والأحداث المهمة، مناسبة للإذاعة المدرسية ومرتبة حسب المرحلة.',
      en: 'Short history facts about great civilisations and key events, sorted by school stage.',
    },
    icon: 'history',
    colors: ['#f59e0b', '#b45309'],
  },
  geography: {
    name: { ar: 'جغرافيا', en: 'Geography' },
    title: { ar: 'هل تعلم عن الجغرافيا؟ معلومات عن القارات والدول والأنهار', en: 'Did You Know? Geography Facts for Students' },
    description: {
      ar: 'معلومات جغرافية قصيرة عن القارات والمحيطات والدول والأنهار، لفقرة هل تعلم في الإذاعة المدرسية.',
      en: 'Short geography facts about continents, oceans, countries and rivers for students.',
    },
    icon: 'geography',
    colors: ['#14b8a6', '#0284c7'],
  },
  space: {
    name: { ar: 'فضاء', en: 'Space' },
    title: { ar: 'هل تعلم عن الفضاء؟ معلومات عن الكواكب والنجوم للطلاب', en: 'Did You Know? Space Facts for Students' },
    description: {
      ar: 'معلومات مدهشة عن الشمس والقمر والكواكب والنجوم، قصيرة وسهلة للطلاب والإذاعة المدرسية.',
      en: 'Amazing facts about the Sun, the Moon, the planets and the stars, short and easy for students.',
    },
    icon: 'space',
    colors: ['#4f46e5', '#a855f7'],
  },
  body: {
    name: { ar: 'جسم الإنسان', en: 'Human Body' },
    title: { ar: 'هل تعلم عن جسم الإنسان؟ معلومات غريبة ومفيدة للطلاب', en: 'Did You Know? Human Body Facts for Students' },
    description: {
      ar: 'معلومات غريبة ومفيدة عن جسم الإنسان وأعضائه وعظامه، مناسبة لفقرة هل تعلم في الإذاعة المدرسية.',
      en: 'Weird and wonderful facts about the human body, its organs and bones, for students.',
    },
    icon: 'body',
    colors: ['#f43f5e', '#be123c'],
  },
  animals: {
    name: { ar: 'عالم الحيوان', en: 'Animals' },
    title: { ar: 'هل تعلم عن الحيوانات؟ معلومات غريبة ومدهشة للطلاب', en: 'Did You Know? Amazing Animal Facts for Students' },
    description: {
      ar: 'معلومات غريبة ومدهشة عن الحيوانات والطيور والحشرات والكائنات البحرية، لفقرة هل تعلم في الإذاعة المدرسية.',
      en: 'Weird and wonderful facts about animals, birds, insects and sea creatures, for students.',
    },
    icon: 'animals',
    colors: ['#84cc16', '#15803d'],
  },
  environment: {
    name: { ar: 'البيئة والنبات', en: 'Environment & Plants' },
    title: { ar: 'هل تعلم عن البيئة والنباتات؟ معلومات للإذاعة المدرسية', en: 'Did You Know? Environment and Plant Facts' },
    description: {
      ar: 'معلومات عن البيئة والنباتات والمياه والطاقة النظيفة وحماية كوكبنا، مناسبة للإذاعة المدرسية ولكل المراحل.',
      en: 'Facts about the environment, plants, water, clean energy and protecting our planet, for students.',
    },
    icon: 'environment',
    colors: ['#22c55e', '#0891b2'],
  },
  technology: {
    name: { ar: 'التقنية والحاسوب', en: 'Technology & Computers' },
    title: { ar: 'هل تعلم عن التكنولوجيا والحاسوب؟ معلومات تقنية للطلاب', en: 'Did You Know? Technology and Computer Facts' },
    description: {
      ar: 'معلومات تقنية ممتعة عن الحاسوب والإنترنت والهواتف والذكاء الاصطناعي والأمان الرقمي، لفقرة هل تعلم.',
      en: 'Fun facts about computers, the internet, phones, artificial intelligence and staying safe online.',
    },
    icon: 'technology',
    colors: ['#06b6d4', '#3b82f6'],
  },
  inventions: {
    name: { ar: 'اختراعات واكتشافات', en: 'Inventions & Discoveries' },
    title: { ar: 'هل تعلم عن الاختراعات؟ معلومات عن المخترعين والاكتشافات', en: 'Did You Know? Inventions and Discoveries' },
    description: {
      ar: 'قصص قصيرة عن أشهر الاختراعات والاكتشافات ومن يقف وراءها، من علماء العرب إلى مخترعي العصر الحديث.',
      en: 'Short facts about famous inventions and discoveries and the people behind them, from Arab scholars to modern inventors.',
    },
    icon: 'inventions',
    colors: ['#eab308', '#ea580c'],
  },
  health: {
    name: { ar: 'الصحة والتغذية', en: 'Health & Nutrition' },
    title: { ar: 'هل تعلم عن الصحة والغذاء؟ معلومات صحية للإذاعة المدرسية', en: 'Did You Know? Health and Nutrition Facts' },
    description: {
      ar: 'معلومات صحية مفيدة عن الغذاء والنوم والرياضة والنظافة الشخصية، مناسبة لفقرة هل تعلم في الإذاعة المدرسية.',
      en: 'Useful facts about food, sleep, exercise and hygiene, for students.',
    },
    icon: 'health',
    colors: ['#10b981', '#0d9488'],
  },
  sports: {
    name: { ar: 'الرياضة', en: 'Sports' },
    title: { ar: 'هل تعلم عن الرياضة؟ معلومات رياضية للإذاعة المدرسية', en: 'Did You Know? Sports Facts for Students' },
    description: {
      ar: 'معلومات رياضية ممتعة عن كرة القدم والألعاب الأولمبية والشطرنج وأبطال العرب والعالم، للإذاعة المدرسية.',
      en: 'Fun sports facts about football, the Olympics, chess and Arab and world champions, for students.',
    },
    icon: 'sports',
    colors: ['#f97316', '#dc2626'],
  },
  general: {
    name: { ar: 'ثقافة عامة', en: 'General Knowledge' },
    title: { ar: 'هل تعلم؟ معلومات عامة وثقافية متنوعة للإذاعة المدرسية', en: 'Did You Know? General Knowledge Facts' },
    description: {
      ar: 'معلومات عامة متنوعة عن الدول والمعالم والمناسبات العالمية والفنون والكتب، لفقرة هل تعلم في الإذاعة المدرسية.',
      en: 'General knowledge facts about countries, landmarks, world days, art and books, for students.',
    },
    icon: 'culture',
    colors: ['#a855f7', '#db2777'],
  },
  money: {
    name: { ar: 'المال والاقتصاد', en: 'Money & Economics' },
    title: { ar: 'هل تعلم عن المال والاقتصاد؟ معلومات للطلاب', en: 'Did You Know? Money and Economics Facts' },
    description: {
      ar: 'معلومات مبسطة عن النقود والادخار والبنوك وتاريخ العملات والاقتصاد، مناسبة للطلاب في كل المراحل.',
      en: 'Simple facts about money, saving, banks, the history of currencies and economics, for students.',
    },
    icon: 'money',
    colors: ['#22c55e', '#ca8a04'],
  },
};

export type Fact = { subject: SubjectId; level: LevelId; ar: string; en: string };

// The facts live in one JSON file per subject, src/data/dyk/<subject>.json, as [level, Arabic, English].
type RawFact = [LevelId, string, string];
const RAW = import.meta.glob<RawFact[]>('./dyk/*.json', { eager: true, import: 'default' });

export const DID_YOU_KNOW: Fact[] = SUBJECT_IDS.flatMap((subject) =>
  (RAW[`./dyk/${subject}.json`] ?? []).map(([level, ar, en]) => ({ subject, level, ar, en })),
);

export const factsBySubject = (id: SubjectId) => DID_YOU_KNOW.filter((x) => x.subject === id);
