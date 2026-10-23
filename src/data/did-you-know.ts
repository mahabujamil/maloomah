// «هل تعلم؟» for school students: short, verifiable facts grouped by school subject,
// each tagged with the school stage it suits. Shown at /did-you-know/ and on the home page.
import type { Lang } from '../site';

export const SUBJECT_IDS = ['science', 'math', 'arabic', 'english', 'history', 'geography', 'space', 'body'] as const;
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
};

export type Fact = { subject: SubjectId; level: LevelId; ar: string; en: string };

const f = (subject: SubjectId, level: LevelId, ar: string, en: string): Fact => ({ subject, level, ar, en });

export const DID_YOU_KNOW: Fact[] = [
  // ---------- Science ----------
  f('science', 'primary', 'يغلي الماء عند 100 درجة مئوية عند مستوى سطح البحر، ويتجمد عند صفر درجة مئوية.', 'Water boils at 100 °C at sea level and freezes at 0 °C.'),
  f('science', 'primary', 'تصنع النباتات غذاءها بنفسها من ضوء الشمس والماء وثاني أكسيد الكربون، في عملية تسمى البناء الضوئي.', 'Plants make their own food from sunlight, water and carbon dioxide, in a process called photosynthesis.'),
  f('science', 'primary', 'يرقص النحل رقصة خاصة ليخبر رفاقه في الخلية بمكان الأزهار وبعدها عنها.', 'Honeybees perform a special dance to tell the rest of the hive where flowers are and how far away.'),
  f('science', 'primary', 'الضوء الأبيض مزيج من ألوان كثيرة، ويمكن تحليله بالمنشور الزجاجي إلى ألوان قوس قزح.', 'White light is a mix of many colours, and a glass prism can split it into the colours of the rainbow.'),
  f('science', 'middle', 'الصوت لا ينتقل في الفراغ، لذلك يكون الفضاء صامتاً تماماً.', 'Sound cannot travel through a vacuum, so space is completely silent.'),
  f('science', 'middle', 'نرى البرق قبل أن نسمع الرعد لأن الضوء أسرع من الصوت بنحو 900 ألف مرة.', 'We see lightning before we hear thunder because light travels about 900,000 times faster than sound.'),
  f('science', 'middle', 'الماس والغرافيت الموجود في أقلام الرصاص مكوّنان من العنصر نفسه: الكربون.', 'Diamond and the graphite in pencils are made of the same element: carbon.'),
  f('science', 'middle', 'الذهب لا يصدأ، لأنه لا يكاد يتفاعل مع الأكسجين والماء.', 'Gold does not rust, because it hardly reacts with oxygen or water.'),
  f('science', 'middle', 'الماء من المواد القليلة التي توجد طبيعياً على الأرض في حالاتها الثلاث: صلبة وسائلة وغازية.', 'Water is one of the few substances found naturally on Earth as a solid, a liquid and a gas.'),
  f('science', 'middle', 'للمغناطيس قطبان، شمالي وجنوبي. الأقطاب المتشابهة تتنافر، والمختلفة تتجاذب.', 'A magnet has a north and a south pole. Like poles repel each other, and opposite poles attract.'),
  f('science', 'secondary', 'الهيدروجين هو العنصر الأكثر وفرة في الكون.', 'Hydrogen is the most abundant element in the universe.'),
  f('science', 'secondary', 'لو فُرد الحمض النووي (DNA) الموجود في خلية بشرية واحدة، لبلغ طوله نحو مترين.', 'If you stretched out the DNA in a single human cell, it would be about two metres long.'),

  // ---------- Math ----------
  f('math', 'primary', 'أي عدد نضربه في صفر يكون الناتج صفراً.', 'Any number multiplied by zero equals zero.'),
  f('math', 'primary', 'مجموع زوايا أي مثلث يساوي 180 درجة.', 'The angles of any triangle add up to 180 degrees.'),
  f('math', 'primary', 'العدد 1 ليس عدداً أولياً ولا عدداً مركّباً.', 'The number 1 is neither a prime number nor a composite number.'),
  f('math', 'primary', 'لا يمكن القسمة على الصفر، فناتجها غير معرّف في الرياضيات.', 'You cannot divide by zero; the result is undefined in mathematics.'),
  f('math', 'middle', 'العدد 2 هو العدد الأولي الزوجي الوحيد.', '2 is the only even prime number.'),
  f('math', 'middle', 'العدد باي (π) يساوي تقريباً 3.14159، وأرقامه بعد الفاصلة لا تنتهي ولا تتكرر.', 'Pi (π) is about 3.14159, and its digits after the decimal point never end and never repeat.'),
  f('math', 'middle', 'كلمة «الجبر» عربية، وجاءت من كتاب الخوارزمي «المختصر في حساب الجبر والمقابلة».', 'The word "algebra" comes from Arabic, from al-Khwarizmi\'s book on "al-jabr wa\'l-muqabala".'),
  f('math', 'middle', 'مجموع الأعداد من 1 إلى 100 يساوي 5050، وتُروى قصة أن العالم غاوس حسبه بطريقة ذكية وهو طفل.', 'The numbers from 1 to 100 add up to 5,050; a famous story says the mathematician Gauss worked it out cleverly as a child.'),
  f('math', 'middle', 'الأرقام 1 و2 و3 التي يستخدمها العالم اليوم تطورت من «الأرقام الغبارية» التي استخدمها العرب في المغرب والأندلس.', 'The digits 1, 2, 3 used worldwide today developed from the "ghubar" numerals used by Arabs in North Africa and al-Andalus.'),
  f('math', 'secondary', 'يحتفل محبو الرياضيات بيوم «باي» في 14 مارس، لأن التاريخ يُكتب 3/14.', 'Maths lovers celebrate Pi Day on 14 March, because the date is written 3/14.'),
  f('math', 'secondary', 'الشكل السداسي يملأ المساحة دون فراغات وبأقل محيط، ولهذا يبني النحل خلاياه سداسية.', 'Hexagons fill a surface with no gaps using the least perimeter, which is why bees build hexagonal cells.'),
  f('math', 'secondary', 'العدد 0.999... (تسعة متكررة إلى ما لا نهاية) يساوي 1 تماماً.', 'The number 0.999... (nines repeating forever) is exactly equal to 1.'),

  // ---------- Arabic language ----------
  f('arabic', 'primary', 'عدد حروف اللغة العربية 28 حرفاً.', 'The Arabic alphabet has 28 letters.'),
  f('arabic', 'primary', 'يحتفل العالم باليوم العالمي للغة العربية في 18 ديسمبر من كل عام.', 'World Arabic Language Day is celebrated every year on 18 December.'),
  f('arabic', 'primary', 'في العربية أسماء كثيرة للأسد، منها: الليث والضرغام والغضنفر والهزبر.', 'Arabic has many names for the lion, including layth, dirgham, ghadanfar and hizabr.'),
  f('arabic', 'primary', 'الحروف التي لا تتصل بما بعدها في الكتابة ستة: ا، د، ذ، ر، ز، و.', 'Six Arabic letters never join to the letter after them: ا، د، ذ، ر، ز، و.'),
  f('arabic', 'middle', 'يتحدث العربية نحو 400 مليون إنسان، وهي من أكثر لغات العالم انتشاراً.', 'Around 400 million people speak Arabic, making it one of the most widely spoken languages in the world.'),
  f('arabic', 'middle', 'تُسمى العربية «لغة الضاد» لأن حرف الضاد من الأصوات المميزة لها.', 'Arabic is called "the language of the ḍād" because the letter ض is one of its most distinctive sounds.'),
  f('arabic', 'middle', 'تُكتب العربية من اليمين إلى اليسار، لكن الأعداد تُكتب فيها والمنازل الكبرى على اليسار.', 'Arabic is written from right to left, but numbers are written with the largest place value on the left.'),
  f('arabic', 'middle', 'يُنسب إلى أبي الأسود الدؤلي وضع أول علامات لضبط أواخر الكلمات، ثم طوّرها الخليل بن أحمد إلى الحركات التي نعرفها.', 'Abu al-Aswad al-Du\'ali is credited with the first marks for word endings; al-Khalil ibn Ahmad later developed them into today\'s vowel marks.'),
  f('arabic', 'middle', 'كلمات إنجليزية كثيرة انتقلت من العربية، مثل: Sugar (سكر) و Coffee (قهوة) و Cotton (قطن).', 'Many English words came from Arabic, such as sugar (sukkar), coffee (qahwa) and cotton (qutn).'),
  f('arabic', 'secondary', 'أقدم معجم عربي معروف هو معجم «العين» للخليل بن أحمد الفراهيدي.', 'The oldest known Arabic dictionary is "Kitab al-Ayn" by al-Khalil ibn Ahmad al-Farahidi.'),
  f('arabic', 'secondary', 'الخليل بن أحمد الفراهيدي هو واضع علم العروض الذي يدرس أوزان الشعر العربي.', 'Al-Khalil ibn Ahmad al-Farahidi founded the science of Arabic prosody, the study of poetic metres.'),
  f('arabic', 'secondary', 'أصبحت العربية إحدى اللغات الرسمية الست في الأمم المتحدة عام 1973.', 'Arabic became one of the six official languages of the United Nations in 1973.'),

  // ---------- English language (Arabic pages show the English with its translation) ----------
  f('english', 'primary', 'الحرف الأكثر استخداماً في اللغة الإنجليزية هو حرف E.', 'The most common letter in English is E.'),
  f('english', 'primary', 'في الأبجدية الإنجليزية 26 حرفاً، منها 5 حروف علّة: A و E و I و O و U.', 'The English alphabet has 26 letters, including 5 vowel letters: A, E, I, O and U.'),
  f('english', 'primary', 'الضمير I (أنا) يُكتب دائماً بحرف كبير في اللغة الإنجليزية.', 'In English, the word "I" is always written with a capital letter.'),
  f('english', 'primary', 'الكلمات التي تُقرأ من الجهتين بالطريقة نفسها تسمى Palindrome، مثل level و racecar.', 'Words that read the same backwards and forwards are called palindromes, like "level" and "racecar".'),
  f('english', 'middle', 'جملة The quick brown fox jumps over the lazy dog تحتوي على كل حروف الأبجدية الإنجليزية.', 'The sentence "The quick brown fox jumps over the lazy dog" uses every letter of the English alphabet.'),
  f('english', 'middle', 'كلمة facetious تحتوي على حروف العلّة الخمسة بالترتيب الأبجدي.', 'The word "facetious" contains all five vowels in alphabetical order.'),
  f('english', 'middle', 'في كلمة bookkeeper ثلاثة أزواج متتالية من الحروف المكررة: oo و kk و ee.', 'The word "bookkeeper" has three double letters in a row: oo, kk and ee.'),
  f('english', 'middle', 'النقطة فوق حرفي i و j لها اسم في الإنجليزية هو tittle.', 'The dot above the letters i and j is called a "tittle".'),
  f('english', 'middle', 'كلمات مثل set و run لها مئات المعاني المختلفة في المعاجم الإنجليزية.', 'Words like "set" and "run" have hundreds of different meanings in English dictionaries.'),
  f('english', 'secondary', 'كلمات إنجليزية كثيرة أصلها عربي، مثل algebra و algorithm و coffee.', 'Many English words have Arabic roots, such as "algebra", "algorithm" and "coffee".'),
  f('english', 'secondary', 'الإنجليزية لغة رسمية في أكثر من 50 دولة حول العالم.', 'English is an official language in more than 50 countries around the world.'),
  f('english', 'secondary', 'يُنسب إلى شكسبير أول استخدام مسجّل لكلمات كثيرة، مثل lonely و bedroom.', 'Shakespeare is credited with the first recorded use of many words, such as "lonely" and "bedroom".'),

  // ---------- History ----------
  f('history', 'primary', 'نحت الأنباط مدينة البتراء في الأردن في الصخر الوردي قبل أكثر من ألفي عام.', 'The Nabataeans carved the city of Petra in Jordan out of rose-coloured rock more than 2,000 years ago.'),
  f('history', 'primary', 'أول إنسان مشى على سطح القمر هو نيل آرمسترونغ، عام 1969.', 'The first person to walk on the Moon was Neil Armstrong, in 1969.'),
  f('history', 'primary', 'الكتابة المسمارية في بلاد الرافدين من أقدم أنظمة الكتابة في العالم، وعمرها أكثر من 5000 عام.', 'Cuneiform writing from Mesopotamia is one of the oldest writing systems in the world, more than 5,000 years old.'),
  f('history', 'middle', 'بُني الهرم الأكبر في الجيزة قبل نحو 4500 عام، وهو العجيبة الوحيدة الباقية من عجائب الدنيا السبع القديمة.', 'The Great Pyramid of Giza was built about 4,500 years ago and is the only surviving wonder of the ancient world.'),
  f('history', 'middle', 'بُني سور الصين العظيم على مراحل امتدت أكثر من ألفي عام.', 'The Great Wall of China was built in stages over more than 2,000 years.'),
  f('history', 'middle', 'أسست فاطمة الفهرية جامعة القرويين في فاس عام 859م، وتُعد أقدم مؤسسة تعليمية ما زالت تعمل.', 'Fatima al-Fihri founded al-Qarawiyyin in Fez in 859 CE; it is considered the oldest educational institution still operating.'),
  f('history', 'middle', 'كان بيت الحكمة في بغداد مركزاً عالمياً للترجمة والعلوم في العصر العباسي.', 'The House of Wisdom in Baghdad was a world centre of translation and science in the Abbasid era.'),
  f('history', 'middle', 'نال الأردن استقلاله في 25 أيار (مايو) 1946.', 'Jordan gained its independence on 25 May 1946.'),
  f('history', 'middle', 'الأبجدية الفينيقية من أقدم الأبجديات، ويُعتقد أن أبجديات كثيرة تطورت عنها، منها اليونانية واللاتينية.', 'The Phoenician alphabet is one of the oldest, and many alphabets, including Greek and Latin, are believed to descend from it.'),
  f('history', 'secondary', 'طوّر يوهان غوتنبرغ آلة الطباعة بالحروف المتحركة في أوروبا نحو عام 1440.', 'Johannes Gutenberg developed the movable-type printing press in Europe around 1440.'),
  f('history', 'secondary', 'افتُتحت قناة السويس عام 1869، وهي تربط البحر المتوسط بالبحر الأحمر.', 'The Suez Canal opened in 1869, linking the Mediterranean Sea to the Red Sea.'),
  f('history', 'secondary', 'على عكس الشائع، لا يمكن رؤية سور الصين العظيم بالعين المجردة من القمر.', 'Contrary to popular belief, the Great Wall of China cannot be seen with the naked eye from the Moon.'),

  // ---------- Geography ----------
  f('geography', 'primary', 'آسيا هي أكبر قارات العالم مساحةً وسكاناً.', 'Asia is the largest continent by both area and population.'),
  f('geography', 'primary', 'المحيط الهادئ هو أكبر محيطات العالم وأعمقها.', 'The Pacific is the largest and deepest ocean in the world.'),
  f('geography', 'primary', 'أعلى جبل في العالم فوق مستوى سطح البحر هو إيفرست، بارتفاع نحو 8849 متراً.', 'The highest mountain above sea level is Mount Everest, at about 8,849 metres.'),
  f('geography', 'primary', 'يقسم خط الاستواء الكرة الأرضية إلى نصفين: شمالي وجنوبي.', 'The equator divides the Earth into a northern and a southern hemisphere.'),
  f('geography', 'middle', 'نهر النيل من أطول أنهار العالم، ويبلغ طوله نحو 6650 كيلومتراً.', 'The Nile is one of the longest rivers in the world, at about 6,650 kilometres.'),
  f('geography', 'middle', 'البحر الميت أخفض نقطة على اليابسة، إذ يقع على عمق يزيد على 430 متراً تحت مستوى سطح البحر.', 'The Dead Sea is the lowest point on land, more than 430 metres below sea level.'),
  f('geography', 'middle', 'روسيا هي أكبر دولة في العالم من حيث المساحة.', 'Russia is the largest country in the world by area.'),
  f('geography', 'middle', 'الفاتيكان هي أصغر دولة في العالم من حيث المساحة.', 'Vatican City is the smallest country in the world by area.'),
  f('geography', 'middle', 'بحسب التقسيم الأكثر شيوعاً، للعالم سبع قارات: آسيا، إفريقيا، أمريكا الشمالية، أمريكا الجنوبية، القارة القطبية الجنوبية، أوروبا، وأستراليا.', 'In the most common model, there are seven continents: Asia, Africa, North America, South America, Antarctica, Europe and Australia.'),
  f('geography', 'secondary', 'الصحراء الكبرى أكبر صحراء حارة في العالم، أما أكبر صحراء على الإطلاق فهي القارة القطبية الجنوبية لشدة جفافها.', 'The Sahara is the largest hot desert, but the largest desert of all is Antarctica, because it is so dry.'),
  f('geography', 'secondary', 'خليج العقبة هو المنفذ البحري الوحيد للأردن.', 'The Gulf of Aqaba is Jordan\'s only access to the sea.'),
  f('geography', 'secondary', 'أُدرجت محمية وادي رم في الأردن على قائمة التراث العالمي لليونسكو عام 2011.', 'Wadi Rum Protected Area in Jordan was added to the UNESCO World Heritage List in 2011.'),

  // ---------- Space ----------
  f('space', 'primary', 'الشمس نجم، وهي أقرب النجوم إلى الأرض.', 'The Sun is a star, and it is the closest star to Earth.'),
  f('space', 'primary', 'في المجموعة الشمسية ثمانية كواكب تدور حول الشمس.', 'There are eight planets in the solar system orbiting the Sun.'),
  f('space', 'primary', 'القمر لا يضيء بنفسه، بل يعكس ضوء الشمس.', 'The Moon does not make its own light; it reflects sunlight.'),
  f('space', 'primary', 'يُسمى المريخ «الكوكب الأحمر» بسبب أكاسيد الحديد (الصدأ) في تربته.', 'Mars is called the "Red Planet" because of the iron oxide (rust) in its soil.'),
  f('space', 'middle', 'المشتري أكبر كواكب المجموعة الشمسية، ويمكن أن يتسع لأكثر من 1300 كوكب بحجم الأرض.', 'Jupiter is the largest planet in the solar system; more than 1,300 Earths could fit inside it.'),
  f('space', 'middle', 'الزهرة أسخن كواكب المجموعة الشمسية، مع أن عطارد أقرب منها إلى الشمس.', 'Venus is the hottest planet in the solar system, even though Mercury is closer to the Sun.'),
  f('space', 'middle', 'يستغرق ضوء الشمس نحو 8 دقائق و20 ثانية ليصل إلى الأرض.', 'Sunlight takes about 8 minutes and 20 seconds to reach Earth.'),
  f('space', 'middle', 'اليوم على كوكب الزهرة أطول من سنته.', 'A day on Venus is longer than its year.'),
  f('space', 'middle', 'كثافة كوكب زحل أقل من كثافة الماء، فلو وُجد حوض ماء ضخم بما يكفي لطفا فيه نظرياً.', 'Saturn is less dense than water, so in theory it would float in a big enough bathtub.'),
  f('space', 'secondary', 'تدور محطة الفضاء الدولية حول الأرض مرة كل 90 دقيقة تقريباً.', 'The International Space Station orbits the Earth about once every 90 minutes.'),
  f('space', 'secondary', 'تشكّل الشمس نحو 99.8% من كتلة المجموعة الشمسية كلها.', 'The Sun makes up about 99.8% of the mass of the entire solar system.'),
  f('space', 'secondary', 'قد تبقى آثار أقدام رواد الفضاء على القمر ملايين السنين، لعدم وجود رياح أو أمطار هناك.', 'Astronauts\' footprints on the Moon could last for millions of years, because there is no wind or rain there.'),

  // ---------- Human body ----------
  f('body', 'primary', 'الجلد هو أكبر عضو في جسم الإنسان.', 'The skin is the largest organ of the human body.'),
  f('body', 'primary', 'عظمة الفخذ هي أطول عظمة في جسم الإنسان.', 'The thigh bone (femur) is the longest bone in the human body.'),
  f('body', 'primary', 'لا تتشابه بصمات الأصابع بين شخصين، حتى التوائم المتطابقة.', 'No two people have the same fingerprints, not even identical twins.'),
  f('body', 'primary', 'يرمش الإنسان نحو 15 إلى 20 مرة في الدقيقة.', 'People blink about 15 to 20 times a minute.'),
  f('body', 'middle', 'الكبد هو أكبر عضو داخلي في جسم الإنسان.', 'The liver is the largest internal organ in the human body.'),
  f('body', 'middle', 'أصغر عظمة في جسم الإنسان هي عظمة الركاب في الأذن الوسطى.', 'The smallest bone in the human body is the stirrup (stapes) in the middle ear.'),
  f('body', 'middle', 'يولد الطفل بنحو 300 عظمة، يلتحم بعضها مع النمو ليصبح عددها 206 عظام عند البالغ.', 'Babies are born with about 300 bones; some fuse as they grow, leaving adults with 206.'),
  f('body', 'middle', 'ينبض قلب الإنسان نحو 100 ألف مرة في اليوم.', 'The human heart beats about 100,000 times a day.'),
  f('body', 'middle', 'تتجدد خلايا بطانة المعدة كل بضعة أيام، لتحميها من حمض المعدة القوي.', 'The cells lining the stomach are renewed every few days to protect it from strong stomach acid.'),
  f('body', 'secondary', 'يحتوي دماغ الإنسان على نحو 86 مليار خلية عصبية.', 'The human brain contains about 86 billion nerve cells (neurons).'),
  f('body', 'secondary', 'العضلة الألوية الكبرى في منطقة الورك هي أكبر عضلة في جسم الإنسان.', 'The gluteus maximus in the hip is the largest muscle in the human body.'),
  f('body', 'secondary', 'تستطيع العين البشرية تمييز نحو مليون لون أو أكثر، بحسب التقديرات العلمية.', 'Scientists estimate the human eye can tell apart around a million colours or more.'),
];

export const factsBySubject = (id: SubjectId) => DID_YOU_KNOW.filter((x) => x.subject === id);
