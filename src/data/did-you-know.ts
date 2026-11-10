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
  /** The subject as it follows «هل تعلم عن …» / "Did you know … facts", used in the assembly segment and FAQ. */
  about: Record<Lang, string>;
  icon: string;
  colors: [string, string];
};

export const SUBJECTS: Record<SubjectId, Subject> = {
  science: {
    name: { ar: 'علوم', en: 'Science' },
    title: { ar: 'هل تعلم عن العلوم للإذاعة المدرسية: أكثر من 60 معلومة قصيرة', en: 'Did You Know? Science Facts for Students' },
    description: {
      ar: 'فقرة هل تعلم عن العلوم للإذاعة المدرسية: معلومات علمية قصيرة ومدهشة عن الضوء والماء والطاقة والكائنات الحية، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Short, surprising science facts for students, perfect for school assemblies, sorted by school stage.',
    },
    about: { ar: 'العلوم', en: 'science' },
    icon: 'science',
    colors: ['#0ea5e9', '#6366f1'],
  },
  math: {
    name: { ar: 'رياضيات', en: 'Math' },
    title: { ar: 'هل تعلم عن الرياضيات للإذاعة المدرسية: معلومات ممتعة', en: 'Did You Know? Fun Math Facts for Students' },
    description: {
      ar: 'فقرة هل تعلم عن الرياضيات للإذاعة المدرسية: معلومات رياضية ممتعة عن الأعداد والأشكال وتاريخ الرياضيات، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Fun, easy math facts about numbers, shapes and the history of mathematics for students.',
    },
    about: { ar: 'الرياضيات', en: 'math' },
    icon: 'math',
    colors: ['#f59e0b', '#ea580c'],
  },
  arabic: {
    name: { ar: 'لغة عربية', en: 'Arabic Language' },
    title: { ar: 'هل تعلم عن اللغة العربية للإذاعة المدرسية: أكثر من 60 معلومة قصيرة', en: 'Did You Know? Facts About the Arabic Language' },
    description: {
      ar: 'فقرة هل تعلم عن اللغة العربية للإذاعة المدرسية: معلومات جميلة عن اللغة العربية وحروفها وتاريخها وعلمائها، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Fascinating facts about the Arabic language, its letters, history and scholars.',
    },
    about: { ar: 'اللغة العربية', en: 'the Arabic language' },
    icon: 'pen',
    colors: ['#10b981', '#0d9488'],
  },
  english: {
    name: { ar: 'لغة إنجليزية', en: 'English Language' },
    title: { ar: 'هل تعلم بالإنجليزي مترجمة بالعربي للإذاعة المدرسية', en: 'Did You Know? Fun Facts About the English Language' },
    description: {
      ar: 'هل تعلم بالإنجليزي مترجمة: معلومات قصيرة بالإنجليزي مع الترجمة العربية عن الحروف والكلمات وتاريخ اللغة، جاهزة للإذاعة المدرسية ومرتبة حسب المرحلة.',
      en: 'Fun facts about the English language, its letters, words and history, for students.',
    },
    about: { ar: 'اللغة الإنجليزية', en: 'the English language' },
    icon: 'english',
    colors: ['#ef4444', '#be123c'],
  },
  history: {
    name: { ar: 'تاريخ', en: 'History' },
    title: { ar: 'هل تعلم عن التاريخ للإذاعة المدرسية: معلومات تاريخية قصيرة', en: 'Did You Know? History Facts for Students' },
    description: {
      ar: 'فقرة هل تعلم عن التاريخ للإذاعة المدرسية: معلومات تاريخية قصيرة عن الحضارات القديمة والمدن والأحداث المهمة، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Short history facts about great civilisations and key events, sorted by school stage.',
    },
    about: { ar: 'التاريخ', en: 'history' },
    icon: 'history',
    colors: ['#f59e0b', '#b45309'],
  },
  geography: {
    name: { ar: 'جغرافيا', en: 'Geography' },
    title: { ar: 'هل تعلم عن الجغرافيا للإذاعة المدرسية: قارات ودول وأنهار', en: 'Did You Know? Geography Facts for Students' },
    description: {
      ar: 'فقرة هل تعلم عن الجغرافيا للإذاعة المدرسية: معلومات جغرافية مدهشة عن القارات والدول والجبال والأنهار والبحار، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Short geography facts about continents, oceans, countries and rivers for students.',
    },
    about: { ar: 'الجغرافيا', en: 'geography' },
    icon: 'geography',
    colors: ['#14b8a6', '#0284c7'],
  },
  space: {
    name: { ar: 'فضاء', en: 'Space' },
    title: { ar: 'هل تعلم عن الفضاء والكواكب للإذاعة المدرسية', en: 'Did You Know? Space Facts for Students' },
    description: {
      ar: 'فقرة هل تعلم عن الفضاء للإذاعة المدرسية: معلومات مدهشة عن الكواكب والنجوم والشمس والقمر والمجرات، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Amazing facts about the Sun, the Moon, the planets and the stars, short and easy for students.',
    },
    about: { ar: 'الفضاء', en: 'space' },
    icon: 'space',
    colors: ['#4f46e5', '#a855f7'],
  },
  body: {
    name: { ar: 'جسم الإنسان', en: 'Human Body' },
    title: { ar: 'هل تعلم عن جسم الإنسان للإذاعة المدرسية: معلومات مدهشة', en: 'Did You Know? Human Body Facts for Students' },
    description: {
      ar: 'فقرة هل تعلم عن جسم الإنسان للإذاعة المدرسية: معلومات غريبة ومفيدة عن القلب والدماغ والعظام والحواس، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Weird and wonderful facts about the human body, its organs and bones, for students.',
    },
    about: { ar: 'جسم الإنسان', en: 'the human body' },
    icon: 'body',
    colors: ['#f43f5e', '#be123c'],
  },
  animals: {
    name: { ar: 'عالم الحيوان', en: 'Animals' },
    title: { ar: 'هل تعلم عن الحيوانات للإذاعة المدرسية: معلومات غريبة', en: 'Did You Know? Amazing Animal Facts for Students' },
    description: {
      ar: 'فقرة هل تعلم عن الحيوانات للإذاعة المدرسية: معلومات غريبة ومدهشة عن الحيوانات والطيور والحشرات والكائنات البحرية، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Weird and wonderful facts about animals, birds, insects and sea creatures, for students.',
    },
    about: { ar: 'الحيوانات', en: 'animals' },
    icon: 'animals',
    colors: ['#84cc16', '#15803d'],
  },
  environment: {
    name: { ar: 'البيئة والنبات', en: 'Environment & Plants' },
    title: { ar: 'هل تعلم عن البيئة والنباتات للإذاعة المدرسية', en: 'Did You Know? Environment and Plant Facts' },
    description: {
      ar: 'فقرة هل تعلم عن البيئة للإذاعة المدرسية: معلومات عن البيئة والنباتات والماء والهواء وكيف نحافظ على كوكبنا، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Facts about the environment, plants, water, clean energy and protecting our planet, for students.',
    },
    about: { ar: 'البيئة', en: 'the environment' },
    icon: 'environment',
    colors: ['#22c55e', '#0891b2'],
  },
  technology: {
    name: { ar: 'التقنية والحاسوب', en: 'Technology & Computers' },
    title: { ar: 'هل تعلم عن التكنولوجيا والحاسوب للإذاعة المدرسية', en: 'Did You Know? Technology and Computer Facts' },
    description: {
      ar: 'فقرة هل تعلم عن التكنولوجيا للإذاعة المدرسية: معلومات تقنية ممتعة عن الحاسوب والإنترنت والهواتف والبرمجة، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Fun facts about computers, the internet, phones, artificial intelligence and staying safe online.',
    },
    about: { ar: 'التكنولوجيا', en: 'technology' },
    icon: 'technology',
    colors: ['#06b6d4', '#3b82f6'],
  },
  inventions: {
    name: { ar: 'اختراعات واكتشافات', en: 'Inventions & Discoveries' },
    title: { ar: 'هل تعلم عن الاختراعات والمخترعين للإذاعة المدرسية', en: 'Did You Know? Inventions and Discoveries' },
    description: {
      ar: 'فقرة هل تعلم عن الاختراعات للإذاعة المدرسية: معلومات عن أشهر الاختراعات والمخترعين والاكتشافات التي غيّرت العالم، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Short facts about famous inventions and discoveries and the people behind them, from Arab scholars to modern inventors.',
    },
    about: { ar: 'الاختراعات', en: 'inventions' },
    icon: 'inventions',
    colors: ['#eab308', '#ea580c'],
  },
  health: {
    name: { ar: 'الصحة والتغذية', en: 'Health & Nutrition' },
    title: { ar: 'هل تعلم عن الصحة والغذاء للإذاعة المدرسية', en: 'Did You Know? Health and Nutrition Facts' },
    description: {
      ar: 'فقرة هل تعلم عن الصحة للإذاعة المدرسية: معلومات صحية مفيدة عن الغذاء والنوم والرياضة والنظافة، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Useful facts about food, sleep, exercise and hygiene, for students.',
    },
    about: { ar: 'الصحة', en: 'health' },
    icon: 'health',
    colors: ['#10b981', '#0d9488'],
  },
  sports: {
    name: { ar: 'الرياضة', en: 'Sports' },
    title: { ar: 'هل تعلم عن الرياضة للإذاعة المدرسية: معلومات رياضية', en: 'Did You Know? Sports Facts for Students' },
    description: {
      ar: 'فقرة هل تعلم عن الرياضة للإذاعة المدرسية: معلومات رياضية ممتعة عن كرة القدم والألعاب الأولمبية وأبطال الرياضة، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Fun sports facts about football, the Olympics, chess and Arab and world champions, for students.',
    },
    about: { ar: 'الرياضة', en: 'sports' },
    icon: 'sports',
    colors: ['#f97316', '#dc2626'],
  },
  general: {
    name: { ar: 'ثقافة عامة', en: 'General Knowledge' },
    title: { ar: 'هل تعلم؟ معلومات عامة وثقافية قصيرة للإذاعة المدرسية', en: 'Did You Know? General Knowledge Facts' },
    description: {
      ar: 'هل تعلم معلومات عامة للإذاعة المدرسية: معلومات عامة وثقافية متنوعة وقصيرة للطلاب، مرتبة حسب المرحلة الدراسية ومع زر نسخ لكل معلومة.',
      en: 'General knowledge facts about countries, landmarks, world days, art and books, for students.',
    },
    about: { ar: 'المعلومات العامة', en: 'general knowledge' },
    icon: 'culture',
    colors: ['#a855f7', '#db2777'],
  },
  money: {
    name: { ar: 'المال والاقتصاد', en: 'Money & Economics' },
    title: { ar: 'هل تعلم عن المال والاقتصاد للإذاعة المدرسية', en: 'Did You Know? Money and Economics Facts' },
    description: {
      ar: 'فقرة هل تعلم عن المال والاقتصاد للإذاعة المدرسية: معلومات مبسطة عن النقود والادخار وتاريخ العملات والاقتصاد، مرتبة حسب المرحلة الدراسية ومع زر نسخ.',
      en: 'Simple facts about money, saving, banks, the history of currencies and economics, for students.',
    },
    about: { ar: 'المال والاقتصاد', en: 'money and economics' },
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
