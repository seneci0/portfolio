'use strict';

const projects = [
  {
    title: { cs: 'ZRNO — výběrová kavárna', en: 'ZRNO — Specialty Café' },
    desc: {
      cs: 'Editoriální web pro výběrovou kavárnu a pražírnu — velká typografie, menu s cenami, galerie a rezervace. Teplý, prémiový vzhled.',
      en: 'Editorial website for a specialty café & roastery — bold typography, full menu, gallery and reservations. Warm, premium look.'
    },
    url: './kavarna.html',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
    tags: ['HTML5', 'Editorial', 'Animace'],
    gradient: 'linear-gradient(135deg, #241710, #a84e29)'
  },
  {
    title: { cs: 'Amrit Palace — indická restaurace', en: 'Amrit Palace — Indian Restaurant' },
    desc: {
      cs: 'Elegantní web pro indickou restauraci — tmavá teplá atmosféra, serif typografie, menu s cenami, catering, nápoje a rezervace.',
      en: 'Elegant website for an Indian restaurant — warm dark mood, serif typography, full menu, catering, drinks and reservations.'
    },
    url: './restaurace.html',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=1000&q=80',
    tags: ['HTML5', 'Editorial', 'Restaurace'],
    gradient: 'linear-gradient(135deg, #15100c, #c8763c)'
  },
  {
    title: { cs: 'RING — Boxerská akademie', en: 'RING — Boxing Academy' },
    desc: {
      cs: 'Tvrdý, tmavý web pro boxerskou akademii — trenéři, 3 kategorie, fotky ze studia i ze zápasů, nábor a ceník.',
      en: 'Hard, dark website for a boxing academy — coaches, 3 categories, studio & fight photos, recruitment and pricing.'
    },
    url: './box.html',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=80',
    tags: ['HTML5', 'Dark UI', 'Animace'],
    gradient: 'linear-gradient(135deg, #1a1a1a, #7a1f1f)'
  },
  {
    title: { cs: 'FORMA — osobní trenér', en: 'FORMA — Personal Trainer' },
    desc: {
      cs: 'Tmavý editorial web osobního trenéra — serif typografie, číslované benefity, reference, termíny a silné fotky z tréninku.',
      en: 'Dark editorial website for a personal trainer — serif typography, numbered benefits, reviews, schedule and bold training photography.'
    },
    url: './fitness.html',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1000&q=80',
    tags: ['HTML5', 'Editorial', 'Fitness'],
    gradient: 'linear-gradient(135deg, #0b0a09, #c06a3e)'
  },
  {
    title: { cs: 'AddLab — 3D tisk na zakázku', en: 'AddLab — Custom 3D Printing' },
    desc: {
      cs: 'Technický web pro 3D tiskové studio — žlutý editorial styl, materiály, proces, ceník a galerie výtisků. Výrazný vývojářský vzhled.',
      en: 'Technical website for a 3D print studio — bold yellow editorial style, materials, process, pricing and a gallery of prints.'
    },
    url: './print3d.html',
    image: 'https://images.unsplash.com/photo-1758387933125-5ac945b4e2cd?auto=format&fit=crop&w=1000&q=80',
    tags: ['HTML5', 'Editorial', '3D'],
    gradient: 'linear-gradient(135deg, #0c0c0d, #e3bf00)'
  },
  {
    title: { cs: 'Lidský moment — fotograf', en: 'Lidský moment — Photographer' },
    desc: {
      cs: 'Černobílé brutalistické portfolio fotografa — obří typografie, portrétní grid, výrazný editorial vzhled a marquee.',
      en: 'Black & white brutalist photographer portfolio — oversized typography, portrait grid, bold editorial look and a marquee.'
    },
    url: './foto.html',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    tags: ['HTML5', 'Editorial', 'Černobílá'],
    gradient: 'linear-gradient(135deg, #0b0b0b, #6b6b69)'
  }
];

const translations = {
  cs: {
    'meta.title': 'Vojtěch Straka — Webový vývojář',
    'nav.home': 'Domů',
    'nav.services': 'Služby',
    'nav.projects': 'Projekty',
    'nav.pricing': 'Ceník',
    'nav.about': 'O mně',
    'nav.contact': 'Kontakt',

    'hero.chip': 'Dostupný pro nové projekty',
    'hero.taglines': [
      'Tvořím weby, které zaujmou na první pohled.',
      'Moderní prezentace pro vaši firmu.',
      'Design, který prodává.',
      'Weby, na které se nezapomíná.'
    ],
    'hero.cta1': 'Zobrazit projekty',
    'hero.cta2': 'Napište mi',
    'hero.scroll': 'Posuňte dolů',

    'services.eyebrow': 'Co nabízím',
    'services.title': 'Služby.',
    'services.sub': 'Moderní webové stránky pro podnikatele, firmy i jednotlivce — od návrhu po spuštění.',
    'services.learn': 'Zjistit více →',
    'services.hint': 'Procházejte šipkami',
    'service1.name': 'Prezentační web',
    'service1.desc': 'Firemní nebo osobní web, který vás reprezentuje. Zákazníci vás najdou, důvěřují vám a kontaktují.',
    'service2.name': 'Design na míru',
    'service2.desc': 'Každý design je unikátní. Pracuji s vašimi barvami, logem a představami — výsledek bude 100% váš.',
    'service3.name': 'Rychlé dodání',
    'service3.desc': 'Základní web hotový od 5 pracovních dnů. Bez kompromisů na kvalitě — vaše stránky fungují v řádu dnů.',
    'service4.name': 'Grafika',
    'service4.desc': 'Loga, bannery a grafika v Adobe — vizuály na míru, sladěné s vaším webem.',
    'service5.name': 'Údržba & podpora',
    'service5.desc': 'Po spuštění nejste sami. Nabízím údržbu, aktualizace obsahu a technickou podporu podle potřeby.',
    'service6.name': 'Landing Page',
    'service6.desc': 'Jedna silná stránka, která prodává. Ideální pro akce, produkty nebo jednoduché prezentace s CTA.',

    'projects.eyebrow': 'Moje práce',
    'projects.title': 'Projekty.',
    'projects.sub': 'Vybrané weby z různých oborů — od boxerské akademie po 3D tisk. Každý web je originální.',
    'projects.visit': 'Zobrazit ukázku',
    'projects.hint': 'Procházejte šipkami',

    'pricing.eyebrow': 'Ceník',
    'pricing.title': 'Jednoduché ceny.',
    'pricing.sub': 'Férové ceny bez skrytých poplatků. Vždy víte, za co platíte.',
    'plan1.name': 'Jednostránkový web',
    'plan1.desc': 'Ideální start — vše podstatné na jedné přehledné stránce.',
    'plan1.price': '3 990 Kč',
    'plan1.per': 'jednorázově',
    'plan1.f1': 'Moderní design na míru',
    'plan1.f2': 'Responzivní — mobil i počítač',
    'plan1.f3': 'Kontaktní formulář nebo odkazy',
    'plan1.f4': 'Napojení na sociální sítě',
    'plan1.f5': 'Dodání od 5 pracovních dnů',
    'plan1.f6': '1 kolo úprav zdarma',
    'plan2.badge': 'Nejoblíbenější',
    'plan2.name': 'Prezentační web',
    'plan2.desc': 'Více stránek, více obsahu, více zákazníků — přesně podle vašich představ.',
    'plan2.oldPrice': '5 990 Kč',
    'plan2.price': '5 990 Kč',
    'plan2.per': 'jednorázově',
    'plan2.f1': 'Vše z Jednostránkového webu',
    'plan2.f2': 'Až 5 samostatných stránek',
    'plan2.f3': 'Animace a interaktivní prvky',
    'plan2.f4': 'Grafika a bannery na míru',
    'plan2.f5': 'Česká i anglická verze webu',
    'plan2.f6': 'Dodání do 14 dnů',
    'plan2.f7': '3 kola úprav zdarma',
    'plan2.f8': '30 dní podpory po spuštění',
    'plan3.name': 'Web na míru',
    'plan3.desc': 'Komplexní projekt s vlastními požadavky? Napište mi a navrhneme řešení přesně pro vás.',
    'plan3.price': 'od 8 990 Kč',
    'plan3.per': 'podle rozsahu',
    'plan3.f1': 'Neomezený počet stránek',
    'plan3.f2': 'Individuální funkce dle zadání',
    'plan3.f3': 'CMS / admin panel',
    'plan3.f4': 'Analytika a napojení služeb',
    'plan3.f5': 'Priority podpora po spuštění',
    'plan3.f6': 'Termín a cena po konzultaci',
    'plan3.cta': 'Nezávazná konzultace',
    'pricing.cta': 'Mám zájem',
    'pricing.note': 'Potřebujete něco jiného? Napište mi — vždy najdeme řešení.',
    'free.tag': 'Zdarma',
    'free.title': '1 ukázková stránka zdarma',
    'free.desc': 'Než se rozhodnete, vytvořím vám nezávaznou ukázku jedné stránky ve vašem stylu. Slouží pouze jako náhled — není to hotový web a nebude nikde zveřejněn.',
    'free.cta': 'Chci ukázku zdarma',
    'trial.tag': 'Zkušební web · sleva 50 %',
    'trial.title': 'Zkušební web na ukázku',
    'trial.desc': 'Vyzkoušejte si spolupráci na malém zkušebním webu se slevou 50 %. Slouží pouze jako ukázka — nebude nikde zveřejněn ani nasazen.',
    'trial.old': '2 000 Kč',
    'trial.price': '1 000 Kč',
    'trial.cta': 'Chci zkušební web',

    'payment.title': 'Platební podmínky',
    'payment.deposit.label': 'Záloha předem',
    'payment.deposit.desc': '50 % ceny projektu uhradíte před zahájením práce jako zálohu.',
    'payment.time.label': 'Pracovních dnů',
    'payment.time.desc': 'Zpracování jednostránkového webu od 5 pracovních dnů po přijetí zálohy.',
    'payment.transfer.label': 'Bankovní převod',
    'payment.transfer.desc': 'Platba probíhá převodem na bankovní účet.',
    'payment.final.label': 'Doplatek po dokončení',
    'payment.final.desc': 'Zbývajících 50 % uhradíte po schválení hotového webu a před jeho spuštěním.',
    'payment.hosting.label': 'Nasazení na vaši doménu',
    'payment.hosting.desc': 'Hosting neprovozuji — web vám ale pomůžu nasadit na vlastní doménu, kterou si platíte sami.',
    'payment.dpp.label': 'Spolupráce na DPP',
    'payment.dpp.desc': 'Práce probíhá legálně na dohodu o provedení práce (DPP).',

    'about.eyebrow': 'Kdo jsem',
    'about.title': 'O mně.',
    'about.intro': 'Je mi 17, studuju IT a dělám weby — jednoduché, rychlé a hezké. Nic navíc, jen to, co funguje.',
    'about.role': 'Webový vývojář & student IT',
    'about.bioTitle': 'Pár vět o mně',
    'about.bio1': 'Webům se věnuju přes dva roky — začal jsem ze zvědavosti a zůstal, protože mě baví sledovat, jak nápad ožívá v prohlížeči. Studuju střední školu se zaměřením na IT.',
    'about.bio2': 'U každého webu mi jde hlavně o to, aby byl přehledný, rychlý a fungoval na mobilu i počítači. Žádné zbytečnosti — jen čistý design, který klientovi přivádí zákazníky.',
    'about.a1t': 'Jednoduchost',
    'about.a1d': 'Méně je více. Každý prvek na webu musí mít důvod, proč tam je.',
    'about.a2t': 'Rychlost',
    'about.a2d': 'Web hotový v řádu dnů a svižný i při načítání.',
    'about.a3t': 'Komunikace',
    'about.a3d': 'Jsem na příjmu — odpovídám rychle a srozumitelně.',
    'about.journey': 'Moje cesta',
    'about.tools': 'S čím pracuju',
    'about.factLabel1': 'Lokace',
    'about.fact1': 'Česká republika',
    'about.factLabel2': 'Vzdělání',
    'about.fact2': 'Střední škola — obor IT',
    'about.factLabel4': 'Praxe',
    'about.fact4': '2+ roky tvorby webů',
    'about.stat1': 'let',
    'about.stat2': 'roky praxe',
    'about.stat3': 'nasazení',
    'about.t1.title': 'Kde jsem teď',
    'about.t1.desc': 'Tvořím weby pro klienty, studuji IT a zdokonaluji se každý den. Každý projekt je výzva, které se nevyhýbám.',
    'about.t2.title': 'První reálné weby',
    'about.t2.desc': 'Vytvořil jsem první opravdové weby a projekty — pro sebe a pro známé. Naučil jsem se pracovat s reálnými požadavky, termíny a zpětnou vazbou.',
    'about.t3.title': 'Začátek',
    'about.t3.desc': 'Z čisté zvědavosti první HTML soubor. Ten pocit, když se stránka poprvé zobrazí v prohlížeči — přesně to mě chytilo.',
    'about.cta': 'Pojďme spolupracovat',

    'faq.eyebrow': 'Časté otázky',
    'faq.title': 'Máte dotazy?',
    'faq.sub': 'Odpovědi na nejčastější otázky. Nenašli jste odpověď? Napište mi.',
    'faq.q1': 'Kolik trvá vytvoření webu?',
    'faq.a1': 'Jednostránkový web od 5 pracovních dnů, prezentační web (více stránek) 10–14 dní. Záleží na rozsahu. Termín vždy upřesníme předem.',
    'faq.q2': 'Kolik stojí doména a hosting?',
    'faq.a2': 'Hosting neprovozuji, ale rád poradím s výběrem a web vám nasadím na vaši vlastní doménu. Doménu i hosting si platíte sami — doména stojí cca 200 Kč/rok.',
    'faq.q3': 'Jak probíhá platba?',
    'faq.a3': '50 % záloha před zahájením práce, 50 % doplatek po dokončení a schválení webu. Platba probíhá převodem na bankovní účet.',
    'faq.q4': 'Mohu si vyzkoušet web před spuštěním?',
    'faq.a4': 'Ano! Během vývoje zasílám náhled na privátní adrese. Zkontrolujete vše, dáte zpětnou vazbu a požádáte o úpravy.',
    'faq.q5': 'Co zahrnují úpravy zdarma?',
    'faq.a5': 'Kola úprav zahrnují textové změny, drobné designové úpravy a opravy chyb. Větší přepracování jsou účtována hodinovou sazbou.',
    'faq.q6': 'Pomůžete i s grafikou nebo logem?',
    'faq.a6': 'Ano — vytvořím grafiku, bannery i jednoduché logo v Adobe, sladěné s vaším webem.',

    'contact.eyebrow': 'Ozvěte se',
    'contact.title': 'Pojďme tvořit.',
    'contact.sub': 'Máte nápad na web? Rád ho proberu — odpovídám zpravidla do 24 hodin.',
    'contact.available': 'Aktuálně přijímám nové projekty',
    'contact.emailLabel': 'E-mail',
    'contact.emailBtn': 'Napsat e-mail',
    'contact.openBtn': 'Otevřít profil',
    'contact.copy': 'Kopírovat',
    'contact.copied': 'Zkopírováno ✓',
    'footer.desc': 'Webový vývojář · Česká republika',
    'footer.rights': 'Všechna práva vyhrazena.'
  },

  en: {
    'meta.title': 'Vojtěch Straka — Web Developer',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.pricing': 'Pricing',
    'nav.about': 'About Me',
    'nav.contact': 'Contact',

    'hero.chip': 'Available for new projects',
    'hero.taglines': [
      'I build websites that captivate at first glance.',
      'Modern online presence for your business.',
      'Design that sells.',
      'Websites people remember.'
    ],
    'hero.cta1': 'View projects',
    'hero.cta2': 'Get in touch',
    'hero.scroll': 'Scroll down',

    'services.eyebrow': 'What I offer',
    'services.title': 'Services.',
    'services.sub': 'Modern websites for entrepreneurs, companies, and individuals — from design to launch.',
    'services.learn': 'Learn more →',
    'services.hint': 'Browse with the arrows',
    'service1.name': 'Business website',
    'service1.desc': 'A company or personal website that represents you. Customers find you, trust you, and contact you.',
    'service2.name': 'Custom design',
    'service2.desc': 'Every design is unique. I work with your colours, logo, and ideas — the result will be 100% yours.',
    'service3.name': 'Fast delivery',
    'service3.desc': 'A basic website ready from 5 working days. No compromises on quality — your site is live within days.',
    'service4.name': 'Graphics',
    'service4.desc': 'Logos, banners and graphics in Adobe — custom visuals matched to your website.',
    'service5.name': 'Maintenance & support',
    'service5.desc': 'After launch, you are not alone. I offer maintenance, content updates, and technical support as needed.',
    'service6.name': 'Landing Page',
    'service6.desc': 'One powerful page that converts. Perfect for campaigns, products, or simple presentations with a CTA.',

    'projects.eyebrow': 'My work',
    'projects.title': 'Projects.',
    'projects.sub': 'Selected websites from different industries — from a boxing academy to 3D printing. Every site is original.',
    'projects.visit': 'View demo',
    'projects.hint': 'Browse with the arrows',

    'pricing.eyebrow': 'Pricing',
    'pricing.title': 'Simple pricing.',
    'pricing.sub': 'Fair prices with no hidden fees. You always know what you\'re paying for.',
    'plan1.name': 'One-page website',
    'plan1.desc': 'The perfect start — everything that matters on one clear page.',
    'plan1.price': '3,990 CZK',
    'plan1.per': 'one-time',
    'plan1.f1': 'Modern custom design',
    'plan1.f2': 'Responsive — mobile & desktop',
    'plan1.f3': 'Contact form or links',
    'plan1.f4': 'Social media integration',
    'plan1.f5': 'Delivery from 5 working days',
    'plan1.f6': '1 round of free revisions',
    'plan2.badge': 'Most popular',
    'plan2.name': 'Business website',
    'plan2.desc': 'More pages, more content, more customers — tailored exactly to your needs.',
    'plan2.oldPrice': '5,990 CZK',
    'plan2.price': '5,990 CZK',
    'plan2.per': 'one-time',
    'plan2.f1': 'Everything from One-page website',
    'plan2.f2': 'Up to 5 separate pages',
    'plan2.f3': 'Animations & interactive elements',
    'plan2.f4': 'Custom graphics & banners',
    'plan2.f5': 'Czech & English version',
    'plan2.f6': 'Delivery within 14 days',
    'plan2.f7': '3 rounds of free revisions',
    'plan2.f8': '30 days of post-launch support',
    'plan3.name': 'Custom project',
    'plan3.desc': 'Complex project with unique requirements? Contact me and we\'ll design a solution just for you.',
    'plan3.price': 'from 8,990 CZK',
    'plan3.per': 'depending on scope',
    'plan3.f1': 'Unlimited pages',
    'plan3.f2': 'Custom features per specification',
    'plan3.f3': 'CMS / admin panel',
    'plan3.f4': 'Analytics & service integrations',
    'plan3.f5': 'Priority support after launch',
    'plan3.f6': 'Timeline & price after consultation',
    'plan3.cta': 'Free consultation',
    'pricing.cta': "I'm interested",
    'pricing.note': 'Need something different? Write to me — we will always find a solution.',
    'free.tag': 'Free',
    'free.title': '1 sample page for free',
    'free.desc': 'Before you decide, I\'ll create a no-obligation sample of one page in your style. It serves only as a preview — it is not a finished website and will not be published anywhere.',
    'free.cta': 'Get a free sample',
    'trial.tag': 'Trial website · 50% off',
    'trial.title': 'Trial website for preview',
    'trial.desc': 'Try our collaboration on a small trial website at 50% off. It serves only as a preview — it will not be published or deployed anywhere.',
    'trial.old': '2,000 CZK',
    'trial.price': '1,000 CZK',
    'trial.cta': 'Get a trial website',

    'payment.title': 'Payment terms',
    'payment.deposit.label': 'Deposit upfront',
    'payment.deposit.desc': '50% of the project price is paid as a deposit before work begins.',
    'payment.time.label': 'Working days',
    'payment.time.desc': 'A one-page website takes from 5 working days after the deposit is received.',
    'payment.transfer.label': 'Bank transfer',
    'payment.transfer.desc': 'Payment is made by transfer to a bank account.',
    'payment.final.label': 'Final payment on delivery',
    'payment.final.desc': 'The remaining 50% is paid after the completed website is approved, before launch.',
    'payment.hosting.label': 'Deploy to your domain',
    'payment.hosting.desc': "I don't run hosting — but I'll help you deploy the site to your own domain, which you pay for yourself.",
    'payment.dpp.label': 'Work agreement (DPP)',
    'payment.dpp.desc': 'Work is carried out legally under a Czech work agreement (DPP).',

    'about.eyebrow': 'Who I am',
    'about.title': 'About me.',
    'about.intro': "I'm 17, I study IT and I build websites — simple, fast and good-looking. Nothing extra, just what works.",
    'about.role': 'Web Developer & IT student',
    'about.bioTitle': 'A few words about me',
    'about.bio1': "I've been building websites for over two years — I started out of curiosity and stayed because I love watching an idea come to life in the browser. I'm studying IT at high school.",
    'about.bio2': 'With every website my goal is the same: clear, fast and working perfectly on both mobile and desktop. No clutter — just clean design that brings clients real customers.',
    'about.a1t': 'Simplicity',
    'about.a1d': 'Less is more. Every element on the site has to earn its place.',
    'about.a2t': 'Speed',
    'about.a2d': 'Sites finished in days — and fast to load, too.',
    'about.a3t': 'Communication',
    'about.a3d': "I'm reachable — I reply quickly and in plain language.",
    'about.journey': 'My journey',
    'about.tools': 'What I work with',
    'about.factLabel1': 'Location',
    'about.fact1': 'Czech Republic',
    'about.factLabel2': 'Education',
    'about.fact2': 'High school — IT programme',
    'about.factLabel4': 'Experience',
    'about.fact4': '2+ years of building websites',
    'about.stat1': 'years old',
    'about.stat2': 'years exp.',
    'about.stat3': 'commitment',
    'about.t1.title': 'Where I am now',
    'about.t1.desc': 'Building websites for clients, studying IT, and improving every day. Every project is a challenge I embrace.',
    'about.t2.title': 'First real websites',
    'about.t2.desc': 'I built my first real websites and projects — for myself and for people I know. I learned to work with real requirements, deadlines and feedback.',
    'about.t3.title': 'The beginning',
    'about.t3.desc': "Out of pure curiosity — my first HTML file. The moment the page appeared in the browser, I was hooked.",
    'about.cta': "Let's work together",

    'faq.eyebrow': 'Frequently asked questions',
    'faq.title': 'Have questions?',
    'faq.sub': "Answers to the most common questions. Didn't find your answer? Write to me.",
    'faq.q1': 'How long does it take?',
    'faq.a1': 'A one-page website from 5 working days, a business website (multiple pages) 10–14 days. Depends on scope. We always confirm the timeline upfront.',
    'faq.q2': 'How much do domain and hosting cost?',
    'faq.a2': "I don't run hosting, but I'm happy to help you choose and I'll deploy the site to your own domain. You pay for the domain and hosting — a domain costs around 200 CZK/year.",
    'faq.q3': 'How does payment work?',
    'faq.a3': '50% deposit before work begins, 50% final payment after the website is completed and approved. Payment is made by bank transfer.',
    'faq.q4': 'Can I preview the website before launch?',
    'faq.a4': 'Yes! During development I send you a preview at a private URL. Check everything, give feedback, and request changes.',
    'faq.q5': 'What do free revisions include?',
    'faq.a5': 'Revision rounds cover text changes, minor design tweaks, and bug fixes. Larger reworks are charged at an hourly rate.',
    'faq.q6': 'Can you help with graphics or a logo?',
    'faq.a6': 'Yes — I can create graphics, banners and a simple logo in Adobe, all matched to your website.',

    'contact.eyebrow': 'Get in touch',
    'contact.title': "Let's create.",
    'contact.sub': 'Got an idea for a website? I usually reply within 24 hours.',
    'contact.available': 'Currently accepting new projects',
    'contact.emailLabel': 'Email',
    'contact.emailBtn': 'Send an email',
    'contact.openBtn': 'Open profile',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied ✓',
    'footer.desc': 'Web Developer · Czech Republic',
    'footer.rights': 'All rights reserved.'
  }
};

let lang = 'cs';
try { lang = localStorage.getItem('lang') || 'cs'; } catch (e) {}
if (!translations[lang]) lang = 'cs';

let booted = false;
const t = (key) => translations[lang][key] ?? key;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

function observeReveal(scope) {
  (scope || document).querySelectorAll('.reveal:not(.in-view)').forEach((el) => revealIO.observe(el));
}

const skillIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-box').forEach((box) => {
        box.querySelector('.bar-fill').style.width = box.style.getPropertyValue('--level');
      });
      skillIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-boxes').forEach((el) => skillIO.observe(el));

const projectsGrid = document.getElementById('projectsGrid');

function previewUrl(url) {
  if (url.startsWith('./') || url.startsWith('/')) return null;
  return 'https://s.wordpress.com/mshots/v1/' + encodeURIComponent(url) + '?w=1000';
}

function renderProjects(instant) {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';

  projects.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'glass card project-card';

    let host = p.url;
    try { host = new URL(p.url).hostname.replace(/^www\./, ''); } catch (e) { host = p.title[lang]; }
    const letter = (p.title[lang][0] || '•').toUpperCase();

    const gradient = p.gradient || 'linear-gradient(135deg, #0071e3, #5e5ce6)';
    const imgSrc = p.image || previewUrl(p.url);

    const num = String(i + 1).padStart(2, '0');

    card.innerHTML =
      '<a class="project-preview" href="' + p.url + '" target="_blank" rel="noopener">' +
        (imgSrc ? '<img loading="lazy" alt="' + p.title[lang] + '" src="' + imgSrc + '">' : '') +
        '<span class="preview-fallback" style="background:' + gradient + '"><b>' + letter + '</b><i>' + p.title[lang] + '</i></span>' +
        '<span class="preview-host">' + host + '</span>' +
        '<span class="project-num">' + num + '</span>' +
        '<span class="project-overlay"><span class="project-view">' + t('projects.visit') +
          ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>' +
        '</span></span>' +
      '</a>' +
      '<div class="project-body">' +
        '<div class="project-tags">' + (p.tags || []).map((tag) => '<span class="tag">' + tag + '</span>').join('') + '</div>' +
        '<h3>' + p.title[lang] + '</h3>' +
        '<p>' + p.desc[lang] + '</p>' +
        '<a class="project-link" href="' + p.url + '" target="_blank" rel="noopener">' + t('projects.visit') +
          ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>' +
        '</a>' +
      '</div>';

    if (imgSrc) {
      const img = card.querySelector('img');
      img.addEventListener('error', () => {
        card.querySelector('.project-preview').classList.add('no-img');
      });
    } else {
      card.querySelector('.project-preview').classList.add('no-img');
    }

    projectsGrid.appendChild(card);
  });

  if (projActive > projects.length - 1) projActive = projects.length - 1;
  projLayout();
}

let projActive = 0;
function projLayout() {
  if (!projectsGrid) return;
  const cards = projectsGrid.querySelectorAll('.project-card');
  const gap = window.innerWidth < 640 ? 230 : 320;
  cards.forEach((c, i) => {
    const off = i - projActive;
    const ab = Math.abs(off);
    c.style.transform =
      'translateX(' + (off * gap) + 'px) translateZ(' + (ab ? -180 : 0) + 'px)' +
      ' rotateY(' + (off * -34) + 'deg) scale(' + (off === 0 ? 1 : 0.86) + ')';
    c.style.opacity = ab > 2 ? '0' : '1';
    c.style.zIndex = String(30 - ab);
    c.style.pointerEvents = off === 0 ? 'auto' : 'none';
    c.classList.toggle('is-active', off === 0);
  });
}
function projGo(dir) {
  projActive = Math.max(0, Math.min(projActive + dir, projects.length - 1));
  projLayout();
}
(function () {
  const prev = document.querySelector('.proj-prev');
  const next = document.querySelector('.proj-next');
  if (prev) prev.addEventListener('click', () => projGo(-1));
  if (next) next.addEventListener('click', () => projGo(1));
  window.addEventListener('resize', projLayout, { passive: true });
})();

const typedEl = document.getElementById('typed');
let typeToken = 0;
let typeTimer = null;
let phraseIndex = 0;

function startTyping() {
  if (!typedEl) return;
  const phrases = translations[lang]['hero.taglines'] || [translations[lang]['hero.tagline'] || ''];
  const token = ++typeToken;
  clearTimeout(typeTimer);

  if (reducedMotion) {
    typedEl.textContent = phrases[0];
    return;
  }

  let i = 0;
  let deleting = false;
  const full = phrases[phraseIndex % phrases.length];

  const step = () => {
    if (token !== typeToken) return;

    if (!deleting) {
      i++;
      typedEl.textContent = full.slice(0, i);
      if (i === full.length) {
        deleting = true;
        typeTimer = setTimeout(step, 3800);
      } else {
        typeTimer = setTimeout(step, 36 + Math.random() * 44);
      }
    } else {
      i--;
      typedEl.textContent = full.slice(0, i);
      if (i === 0) {
        deleting = false;
        phraseIndex++;
        const next = phrases[phraseIndex % phrases.length];
        typeTimer = setTimeout(() => {
          i = 0;
          const nextFull = next;
          const stepNext = () => {
            if (token !== typeToken) return;
            i++;
            typedEl.textContent = nextFull.slice(0, i);
            if (i === nextFull.length) {
              deleting = true;
              typeTimer = setTimeout(stepNext, 3800);
            } else {
              typeTimer = setTimeout(stepNext, 36 + Math.random() * 44);
            }
            if (deleting) {
              const del = () => {
                if (token !== typeToken) return;
                i--;
                typedEl.textContent = nextFull.slice(0, i);
                if (i === 0) { phraseIndex++; startTyping(); } else { typeTimer = setTimeout(del, 16); }
              };
              typeTimer = setTimeout(del, 3800);
            }
          };
          stepNext();
        }, 600);
      } else {
        typeTimer = setTimeout(step, 16);
      }
    }
  };

  typedEl.textContent = '';
  typeTimer = setTimeout(step, 300);
}

function setLang(next) {
  lang = translations[next] ? next : 'cs';
  try { localStorage.setItem('lang', lang); } catch (e) {}

  document.documentElement.lang = lang;
  document.title = t('meta.title');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = translations[lang][el.getAttribute('data-i18n')];
    if (val !== undefined && typeof val === 'string') el.textContent = val;
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  renderProjects(booted);
  phraseIndex = 0;
  startTyping();
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => { if (btn.dataset.lang !== lang) setLang(btn.dataset.lang); });
});

const spyLinks = {};
document.querySelectorAll('.island-link').forEach((a) => { spyLinks[a.dataset.spy] = a; });

const spyIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && spyLinks[entry.target.id]) {
      document.querySelectorAll('.island-link.active').forEach((el) => el.classList.remove('active'));
      spyLinks[entry.target.id].classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

['home', 'services', 'projects', 'pricing', 'about', 'contact'].forEach((id) => {
  const s = document.getElementById(id);
  if (s) spyIO.observe(s);
});

const island = document.querySelector('.island');
const heroEl = document.querySelector('.hero');
const heroInner = document.querySelector('.hero-inner');
const mountainImg = document.querySelector('.hero-mountain-img');
const cloudsBack = document.querySelector('.hero-clouds-back');
const cloudsFront = document.querySelector('.hero-clouds-front');
const heroWash = document.querySelector('.hero-wash');
const pageHeroImg = document.querySelector('.page-hero-img');
const heroNameEl = document.querySelector('.hero-name');

window.addEventListener('scroll', () => {
  if (island) island.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

if (!reducedMotion) {
  const lerp = (a, b, f) => a + (b - a) * f;
  const s = { mtnY: 0, mtnSc: 1.12, cbY: 52, cbSc: 1.05, cfY: 74, cfSc: 1, wash: 0, hiY: 0, hiOp: 1, nmBlur: 0 };
  const loop = () => {
    const y = window.scrollY;
    const vh = window.innerHeight || 1;
    const p = Math.min(y / vh, 1.25);
    const pc = Math.min(p, 1);
    const cp = Math.min(p * 0.78, 1);
    const t = {
      mtnY: -y * 0.028,
      mtnSc: 1.12 - pc * 0.15,
      cbY: 52 - cp * 64,
      cbSc: 1.05 + cp * 0.26,
      cfY: 74 - cp * 126,
      cfSc: 1 + cp * 0.55,
      wash: Math.min(Math.max(p - 0.2, 0) * 1.25, 1),
      hiY: y * 0.1,
      hiOp: Math.max(0, 1 - p * 1.05),
      nmBlur: Math.min(p * 13, 13)
    };
    const F = 0.12;
    for (const k in t) s[k] = lerp(s[k], t[k], F);

    if (y <= vh * 1.4) {
      if (mountainImg) { mountainImg.style.setProperty('--mtnY', s.mtnY.toFixed(2) + 'px'); mountainImg.style.setProperty('--mtnSc', s.mtnSc.toFixed(4)); }
      if (cloudsBack) { cloudsBack.style.setProperty('--cbY', s.cbY.toFixed(2) + '%'); cloudsBack.style.setProperty('--cbSc', s.cbSc.toFixed(4)); }
      if (cloudsFront) { cloudsFront.style.setProperty('--cfY', s.cfY.toFixed(2) + '%'); cloudsFront.style.setProperty('--cfSc', s.cfSc.toFixed(4)); }
      if (heroWash) heroWash.style.opacity = s.wash.toFixed(3);
      if (heroInner) { heroInner.style.transform = 'translateY(' + s.hiY.toFixed(1) + 'px)'; heroInner.style.opacity = s.hiOp.toFixed(3); }
      if (heroNameEl) heroNameEl.style.filter = 'blur(' + s.nmBlur.toFixed(2) + 'px)';
    }
    if (pageHeroImg) pageHeroImg.style.transform = 'translateY(' + (y * 0.32) + 'px) scale(1.06)';
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

if (heroEl && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
  let pointerTicking = false;
  heroEl.addEventListener('pointermove', (e) => {
    if (pointerTicking) return;
    pointerTicking = true;
    requestAnimationFrame(() => {
      const r = heroEl.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
      heroEl.style.setProperty('--mx', nx.toFixed(3));
      heroEl.style.setProperty('--my', ny.toFixed(3));
      pointerTicking = false;
    });
  }, { passive: true });
  heroEl.addEventListener('pointerleave', () => {
    heroEl.style.setProperty('--mx', '0');
    heroEl.style.setProperty('--my', '0');
  });
}

(function () {
  const ring = document.getElementById('svcRing');
  if (!ring) return;
  const cards = Array.from(ring.querySelectorAll('.svc3d'));
  const n = cards.length || 1;
  const step = 360 / n;
  let angle = 0;

  function update() {
    ring.style.setProperty('--ring', angle + 'deg');
    let idx = Math.round(-angle / step) % n;
    if (idx < 0) idx += n;
    cards.forEach((c, i) => c.classList.toggle('is-front', i === idx));
  }
  function rotate(dir) { angle -= dir * step; update(); }
  update();

  const prev = document.querySelector('.svc-prev');
  const next = document.querySelector('.svc-next');
  if (prev) prev.addEventListener('click', () => rotate(-1));
  if (next) next.addEventListener('click', () => rotate(1));
})();

function animateCount(el) {
  const target = Number(el.dataset.count) || 0;
  const suffix = el.dataset.suffix || '';
  if (reducedMotion) { el.textContent = target + suffix; return; }
  const duration = 1400;
  const start = performance.now();
  const frame = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

const countIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { animateCount(entry.target); countIO.unobserve(entry.target); }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach((el) => countIO.observe(el));

document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const value = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(value);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = value; ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (err) {}
      ta.remove();
    }
    const label = btn.querySelector('[data-i18n]');
    if (label) {
      label.textContent = t('contact.copied');
      setTimeout(() => { label.textContent = t('contact.copy'); }, 1800);
    }
  });
});

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

setLang(lang);
booted = true;
observeReveal(document);
