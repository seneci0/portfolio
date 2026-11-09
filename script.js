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
    'meta.title': 'Senecio.dev — Vojtěch Straka, webový vývojář',
    'nav.services': 'Služby',
    'nav.projects': 'Projekty',
    'nav.process': 'Jak to probíhá',
    'nav.pricing': 'Ceník',
    'nav.about': 'O mně',
    'nav.cta': 'Napište mi',

    'hero.chip': 'Přijímám nové projekty',
    'hero.title': 'Web, který pro vaši firmu pracuje 24/7.',
    'hero.sub': 'Jsem Vojtěch Straka a tvořím moderní, rychlé weby pro malé firmy a živnostníky — od návrhu až po spuštění na vaší doméně.',
    'hero.cta1': 'Nezávazná poptávka',
    'hero.cta2': 'Živé ukázky',

    'showcase.open': 'Otevřít ↗',
    'showcase.view': 'Prohlédnout celou ukázku',
    'showcase.hint': 'Živé ukázky mých webů — vyberte projekt',
    'dock.cafe': 'Kavárna',
    'dock.rest': 'Restaurace',
    'dock.fit': 'Trenér',
    'dock.print': '3D tisk',
    'dock.photo': 'Fotograf',

    'logos.label': 'Postaveno na moderních, ověřených technologiích',

    'services.eyebrow': 'Služby',
    'services.title': 'Všechno pro váš web na jednom místě.',
    'services.more': 'Zobrazit ceník',
    'services.learn': 'Zjistit více →',
    'services.hint': 'Procházejte šipkami',
    'feat1.t': 'Design na míru',
    'feat1.d': '— žádné šablony, web ladí s vaší značkou.',
    'feat2.t': 'Perfektní na mobilu',
    'feat2.d': '— většina zákazníků vás hledá v telefonu.',
    'feat3.t': 'Bleskové načítání',
    'feat3.d': '— nikdo nečeká na pomalé stránky.',
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
    'stat.kicker': 'Responzivní design',
    'stat.mobile': 'mých webů funguje perfektně i na mobilu. Tenhle je živý — zkuste si ho.',

    'integr.label': 'Napojení na služby',
    'integr.title': 'Zapadne do toho, jak fungujete.',
    'integr.desc': 'Napojím web na nástroje, které už používáte — mapy, rezervace, sociální sítě, formuláře i statistiky návštěvnosti.',
    'integr.cta': 'Zeptat se na napojení',

    'projects.eyebrow': 'Ukázky prací',
    'projects.title': 'Weby, které si zákazníci zapamatují.',
    'projects.sub': 'Každý web je originál navržený pro konkrétní obor — od kavárny po 3D tisk.',
    'projects.cta': 'Chci podobný web',
    'projects.visit': 'Zobrazit ukázku',
    'projects.f1': 'Žádné šablony',
    'projects.f2': 'Ladí na mobilu i počítači',
    'projects.f3': 'Rychlé načítání',

    'old.label': 'Postaru',
    'old.p1': 'Spousta firem má pořád web jako z roku 2009 — pomalý, nečitelný na mobilu a s kontaktem schovaným na páté podstránce.',
    'old.p2': 'Zákazník ho za pár vteřin zavře a jde jinam. Vy si zasloužíte web, který prodává.',

    'process.eyebrow': 'Jak to probíhá',
    'process.title': 'Od první zprávy po spuštění.',
    'process.sub': 'Přesně víte, co se děje a kolik to stojí. Bez rizika a bez závazků.',
    'process.s1t': 'Napíšete mi',
    'process.s1d': 'Stačí pár vět o tom, co potřebujete. Žádné formuláře, žádné závazky.',
    'process.s2t': 'Návrh a cena zdarma',
    'process.s2d': 'Do 48 hodin pošlu návrh řešení, přesnou cenu a termín. Nezávazně — rozhodnete se sami.',
    'process.s3t': 'Tvorba webu',
    'process.s3d': 'Průběžně posílám náhledy a ladíme detaily společně, dokud nejste spokojení.',
    'process.s4t': 'Spuštění',
    'process.s4d': 'Nasadím web na vaši doménu a předám vám vše potřebné. Doplatek až po schválení.',
    'app.crumb': 'Projekty',
    'app.title': 'Průběh projektu',
    'app.client': 'Klient',
    'app.term': 'Termín',
    'app.termV': '10 pracovních dnů',
    'app.price': 'Cena',
    'app.priceV': '5 990 Kč · předem daná',
    'app.colStep': 'Krok',
    'app.colWhen': 'Kdy',
    'app.colState': 'Stav',
    'app.w1': 'Den 1',
    'app.w2': 'Do 48 hodin',
    'app.w3': 'Dny 3–9',
    'app.w4': 'Den 10',
    'app.wait': 'Čeká',
    'app.doing': 'Probíhá',
    'app.done': 'Hotovo',
    'app.live': 'Probíhá',
    'app.launched': 'Spuštěno',
    'app.note': 'Doplatek 50 % platíte až po schválení hotového webu.',

    'faq.eyebrow': 'Časté otázky',
    'faq.title': 'Máte dotazy?',
    'faq.sub': 'Odpovědi na nejčastější otázky. Nenašli jste odpověď? Napište mi.',
    'faq.cta': 'Zeptat se přímo',
    'faq.q1': 'Kolik trvá vytvoření webu?',
    'faq.a1': 'Jednostránkový web od 5 pracovních dnů, prezentační web (více stránek) 10–14 dní. Záleží na rozsahu. Termín vždy upřesníme předem.',
    'faq.q2': 'Kolik stojí doména a hosting?',
    'faq.a2': 'Hosting neprovozuji, ale rád poradím s výběrem a web vám nasadím na vaši vlastní doménu. Doménu i hosting si platíte sami — doména stojí cca 200 Kč/rok.',
    'faq.q3': 'Jak probíhá platba?',
    'faq.a3': '50 % záloha před zahájením práce, 50 % doplatek až po dokončení a schválení webu — platíte tedy, až když jste spokojení. Platba převodem na účet.',
    'faq.q4': 'Mohu si vyzkoušet web před spuštěním?',
    'faq.a4': 'Ano! Během vývoje zasílám náhled na privátní adrese. Zkontrolujete vše, dáte zpětnou vazbu a požádáte o úpravy.',
    'faq.q5': 'Co zahrnují úpravy zdarma?',
    'faq.a5': 'Kola úprav zahrnují textové změny, drobné designové úpravy a opravy chyb. Větší přepracování jsou účtována hodinovou sazbou.',
    'faq.q6': 'Pomůžete i s grafikou nebo logem?',
    'faq.a6': 'Ano — vytvořím grafiku, bannery i jednoduché logo v Adobe, sladěné s vaším webem.',

    'contact.title': 'Ať vám web nosí zákazníky.',
    'contact.sub': 'Napište mi nezávazně, co potřebujete — do 24 hodin se ozvu s návrhem a cenou. Nic vás to nestojí.',
    'contact.trust1': 'Odpověď do 24 hodin',
    'contact.trust2': 'Nezávazná poptávka zdarma',
    'contact.trust3': 'Cena a termín předem',
    'contact.emailLabel': 'E-mail',
    'contact.emailBtn': 'Napsat e-mail',
    'contact.copy': 'Kopírovat',
    'contact.copied': 'Zkopírováno ✓',
    'notif.t1': 'Nová poptávka z webu',
    'notif.d1': 'Kavárna ZRNO · Dobrý den, chtěla bych objednat dort na sobotu…',
    'notif.time1': 'teď',
    'notif.t2': 'Nová rezervace',
    'notif.d2': 'Amrit Palace · Stůl pro 4 osoby, pátek 19:00',
    'notif.time2': 'před 5 min',
    'notif.t3': 'Nová zpráva',
    'notif.d3': 'FORMA · Dobrý den, kdy máte volný termín?',
    'notif.time3': 'před 12 min',

    'footer.desc': 'Webový vývojář · Česká republika',
    'footer.nav': 'Navigace',
    'footer.social': 'Sítě',
    'footer.top': 'Nahoru ↑',
    'footer.rights': 'Všechna práva vyhrazena.',

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
    'about.cta': 'Pojďme spolupracovat'
  },

  en: {
    'meta.title': 'Senecio.dev — Vojtěch Straka, web developer',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.cta': 'Get in touch',

    'hero.chip': 'Accepting new projects',
    'hero.title': 'A website that works for your business 24/7.',
    'hero.sub': "I'm Vojtěch Straka and I build modern, fast websites for small businesses and freelancers — from design all the way to launch on your own domain.",
    'hero.cta1': 'Free quote',
    'hero.cta2': 'Live demos',

    'showcase.open': 'Open ↗',
    'showcase.view': 'View the full demo',
    'showcase.hint': 'Live demos of my websites — pick a project',
    'dock.cafe': 'Café',
    'dock.rest': 'Restaurant',
    'dock.fit': 'Trainer',
    'dock.print': '3D print',
    'dock.photo': 'Photographer',

    'logos.label': 'Built on modern, proven technology',

    'services.eyebrow': 'Services',
    'services.title': 'Everything for your website in one place.',
    'services.more': 'See pricing',
    'services.learn': 'Learn more →',
    'services.hint': 'Browse with the arrows',
    'feat1.t': 'Custom design',
    'feat1.d': '— no templates, the site matches your brand.',
    'feat2.t': 'Perfect on mobile',
    'feat2.d': '— most customers look you up on their phone.',
    'feat3.t': 'Lightning fast',
    'feat3.d': '— nobody waits for a slow website.',
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
    'stat.kicker': 'Responsive design',
    'stat.mobile': 'of my websites work perfectly on mobile. This one is live — give it a try.',

    'integr.label': 'Integrations',
    'integr.title': 'Fits the way you already work.',
    'integr.desc': 'I connect your website to the tools you already use — maps, bookings, social media, forms and visitor analytics.',
    'integr.cta': 'Ask about integrations',

    'projects.eyebrow': 'Work',
    'projects.title': 'Websites customers remember.',
    'projects.sub': 'Every site is an original, designed for a specific industry — from a café to 3D printing.',
    'projects.cta': 'I want a site like this',
    'projects.visit': 'View demo',
    'projects.f1': 'No templates',
    'projects.f2': 'Looks great on mobile & desktop',
    'projects.f3': 'Fast loading',

    'old.label': 'The old way',
    'old.p1': 'Plenty of businesses still have a website straight out of 2009 — slow, unreadable on a phone, with the contact details hidden on the fifth subpage.',
    'old.p2': 'A customer closes it within seconds and goes elsewhere. You deserve a website that sells.',

    'process.eyebrow': 'How it works',
    'process.title': 'From the first message to launch.',
    'process.sub': 'You always know what is happening and what it costs. No risk, no commitment.',
    'process.s1t': 'You write to me',
    'process.s1d': 'A few sentences about what you need is enough. No forms, no obligations.',
    'process.s2t': 'Free proposal & quote',
    'process.s2d': 'Within 48 hours I send a proposed solution, exact price and timeline. No strings attached.',
    'process.s3t': 'Building the website',
    'process.s3d': 'I share previews as I go and we fine-tune the details together until you are happy.',
    'process.s4t': 'Launch',
    'process.s4d': 'I deploy the website to your domain and hand everything over. Final payment only after approval.',
    'app.crumb': 'Projects',
    'app.title': 'Project progress',
    'app.client': 'Client',
    'app.term': 'Timeline',
    'app.termV': '10 working days',
    'app.price': 'Price',
    'app.priceV': '5,990 CZK · fixed upfront',
    'app.colStep': 'Step',
    'app.colWhen': 'When',
    'app.colState': 'Status',
    'app.w1': 'Day 1',
    'app.w2': 'Within 48 h',
    'app.w3': 'Days 3–9',
    'app.w4': 'Day 10',
    'app.wait': 'Waiting',
    'app.doing': 'In progress',
    'app.done': 'Done',
    'app.live': 'In progress',
    'app.launched': 'Launched',
    'app.note': 'You pay the remaining 50% only after approving the finished website.',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Have questions?',
    'faq.sub': "Answers to the most common questions. Didn't find yours? Write to me.",
    'faq.cta': 'Ask me directly',
    'faq.q1': 'How long does it take?',
    'faq.a1': 'A one-page website from 5 working days, a business website (multiple pages) 10–14 days. Depends on scope. We always confirm the timeline upfront.',
    'faq.q2': 'How much do domain and hosting cost?',
    'faq.a2': "I don't run hosting, but I'm happy to help you choose and I'll deploy the site to your own domain. You pay for the domain and hosting — a domain costs around 200 CZK/year.",
    'faq.q3': 'How does payment work?',
    'faq.a3': '50% deposit before work begins, the remaining 50% only after the website is finished and approved — you pay when you are happy. Payment by bank transfer.',
    'faq.q4': 'Can I preview the website before launch?',
    'faq.a4': 'Yes! During development I send you a preview at a private URL. Check everything, give feedback, and request changes.',
    'faq.q5': 'What do free revisions include?',
    'faq.a5': 'Revision rounds cover text changes, minor design tweaks, and bug fixes. Larger reworks are charged at an hourly rate.',
    'faq.q6': 'Can you help with graphics or a logo?',
    'faq.a6': 'Yes — I can create graphics, banners and a simple logo in Adobe, all matched to your website.',

    'contact.title': 'Let your website bring you customers.',
    'contact.sub': 'Tell me what you need — within 24 hours I will get back to you with a proposal and price. Free of charge.',
    'contact.trust1': 'Reply within 24 hours',
    'contact.trust2': 'Free, no-obligation quote',
    'contact.trust3': 'Price & deadline agreed upfront',
    'contact.emailLabel': 'Email',
    'contact.emailBtn': 'Send an email',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied ✓',
    'notif.t1': 'New enquiry from the website',
    'notif.d1': 'ZRNO Café · Hello, I would like to order a cake for Saturday…',
    'notif.time1': 'now',
    'notif.t2': 'New booking',
    'notif.d2': 'Amrit Palace · Table for 4, Friday 7 pm',
    'notif.time2': '5 min ago',
    'notif.t3': 'New message',
    'notif.d3': 'FORMA · Hi, when is your next free slot?',
    'notif.time3': '12 min ago',

    'footer.desc': 'Web Developer · Czech Republic',
    'footer.nav': 'Navigation',
    'footer.social': 'Social',
    'footer.top': 'Back to top ↑',
    'footer.rights': 'All rights reserved.',

    'pricing.eyebrow': 'Pricing',
    'pricing.title': 'Simple pricing.',
    'pricing.sub': "Fair prices with no hidden fees. You always know what you're paying for.",
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
    'plan3.desc': "Complex project with unique requirements? Contact me and we'll design a solution just for you.",
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
    'about.t3.desc': 'Out of pure curiosity — my first HTML file. The moment the page appeared in the browser, I was hooked.',
    'about.cta': "Let's work together"
  }
};

let lang = 'cs';
try { lang = localStorage.getItem('lang') || 'cs'; } catch (e) {}
if (!translations[lang]) lang = 'cs';

const t = (key) => translations[lang][key] ?? key;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

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
let projActive = 0;

function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';

  projects.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    const host = 'senecio.dev/' + p.url.replace('./', '').replace('.html', '');
    const letter = (p.title[lang][0] || '•').toUpperCase();
    const num = String(i + 1).padStart(2, '0');
    const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';

    card.innerHTML =
      '<a class="project-preview" href="' + p.url + '" target="_blank" rel="noopener">' +
        '<img loading="lazy" alt="' + p.title[lang] + '" src="' + p.image + '">' +
        '<span class="preview-fallback" style="background:' + p.gradient + '"><b>' + letter + '</b><i>' + p.title[lang] + '</i></span>' +
        '<span class="preview-host">' + host + '</span>' +
        '<span class="project-num">' + num + '</span>' +
        '<span class="project-overlay"><span class="project-view">' + t('projects.visit') + ' ' + arrow + '</span></span>' +
      '</a>' +
      '<div class="project-body">' +
        '<div class="project-tags">' + p.tags.map((tag) => '<span class="tag">' + tag + '</span>').join('') + '</div>' +
        '<h3>' + p.title[lang] + '</h3>' +
        '<p>' + p.desc[lang] + '</p>' +
        '<a class="project-link" href="' + p.url + '" target="_blank" rel="noopener">' + t('projects.visit') + ' ' + arrow + '</a>' +
      '</div>';

    card.querySelector('img').addEventListener('error', () => {
      card.querySelector('.project-preview').classList.add('no-img');
    });
    projectsGrid.appendChild(card);
  });

  projLayout();
}

function projLayout() {
  if (!projectsGrid) return;
  const gap = window.innerWidth < 640 ? 230 : 320;
  projectsGrid.querySelectorAll('.project-card').forEach((c, i) => {
    const off = i - projActive;
    const ab = Math.abs(off);
    c.style.transform =
      'translateX(' + (off * gap) + 'px) translateZ(' + (ab ? -180 : 0) + 'px)' +
      ' rotateY(' + (off * -34) + 'deg) scale(' + (off === 0 ? 1 : 0.86) + ')';
    c.style.opacity = ab > 2 ? '0' : String(1 - ab * 0.28);
    c.style.zIndex = String(30 - ab);
    c.style.pointerEvents = off === 0 ? 'auto' : 'none';
    c.classList.toggle('is-active', off === 0);
  });
}

function projGo(dir) {
  projActive = Math.max(0, Math.min(projActive + dir, projects.length - 1));
  projLayout();
}

const projPrev = document.querySelector('.proj-prev');
const projNext = document.querySelector('.proj-next');
if (projPrev) projPrev.addEventListener('click', () => projGo(-1));
if (projNext) projNext.addEventListener('click', () => projGo(1));

const projViewport = document.querySelector('.proj-viewport');
if (projViewport) {
  let startX = null;
  projViewport.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  projViewport.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) projGo(dx < 0 ? 1 : -1);
    startX = null;
  }, { passive: true });
}

const scrubEl = document.getElementById('scrub');
let scrubWords = [];
let lastLit = -1;

function renderScrub() {
  if (!scrubEl) return;
  scrubEl.innerHTML = '';
  ['old.p1', 'old.p2'].forEach((key, pi) => {
    const block = document.createElement('span');
    block.className = pi === 1 ? 'scrub-p strong' : 'scrub-p';
    t(key).split(' ').forEach((word) => {
      const w = document.createElement('span');
      w.className = 'w';
      w.textContent = word + ' ';
      block.appendChild(w);
    });
    scrubEl.appendChild(block);
  });
  scrubWords = Array.from(scrubEl.querySelectorAll('.w'));
  lastLit = -1;
}

const appWin = document.getElementById('appwin');
const appState = document.getElementById('appState');
let appStage = -1;

function paintApp() {
  if (!appWin) return;
  const rows = appWin.querySelectorAll('.app-row[data-row]');
  rows.forEach((row) => {
    const i = Number(row.dataset.row);
    const state = appStage < 0 || i > appStage ? 'wait' : i < appStage ? 'done' : 'doing';
    row.classList.toggle('done', state === 'done');
    row.classList.toggle('doing', state === 'doing');
    row.querySelector('.app-pill').textContent = t('app.' + state);
  });
  const finished = appStage >= rows.length;
  appWin.style.setProperty('--p', (Math.max(appStage, 0) / rows.length) * 100 + '%');
  if (appState) {
    appState.textContent = t(finished ? 'app.launched' : 'app.live');
    appState.classList.toggle('done', finished);
  }
}

if (appWin) {
  const appIO = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    appIO.disconnect();
    if (reducedMotion) { appStage = 4; paintApp(); return; }
    appStage = 0;
    paintApp();
    const timer = setInterval(() => {
      appStage++;
      paintApp();
      if (appStage >= 4) clearInterval(timer);
    }, 1300);
  }, { threshold: 0.4 });
  appIO.observe(appWin);
}

const phoneClock = document.getElementById('phoneClock');
const phoneTime = document.getElementById('phoneTime');
const phoneDate = document.getElementById('phoneDate');

function paintPhone() {
  if (!phoneClock) return;
  const now = new Date();
  const hm = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
  phoneClock.textContent = hm;
  if (phoneTime) phoneTime.textContent = hm;
  if (phoneDate) {
    const d = new Intl.DateTimeFormat(lang === 'cs' ? 'cs-CZ' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' }).format(now);
    phoneDate.textContent = d.charAt(0).toUpperCase() + d.slice(1);
  }
}
if (phoneClock) setInterval(paintPhone, 30000);

function setLang(next) {
  lang = translations[next] ? next : 'cs';
  try { localStorage.setItem('lang', lang); } catch (e) {}

  document.documentElement.lang = lang;
  document.title = t('meta.title');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = translations[lang][el.getAttribute('data-i18n')];
    if (typeof val === 'string') el.textContent = val;
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  renderProjects();
  renderScrub();
  paintApp();
  paintPhone();
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => { if (btn.dataset.lang !== lang) setLang(btn.dataset.lang); });
});

const island = document.querySelector('.island');
const menuBtn = document.querySelector('.menu-btn');
if (island && menuBtn) {
  const closeMenu = () => { island.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); };
  menuBtn.addEventListener('click', () => {
    const open = island.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  island.querySelectorAll('.island-link').forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
}

const spyLinks = {};
document.querySelectorAll('.island-link[data-spy]').forEach((a) => { spyLinks[a.dataset.spy] = a; });
const spyIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    Object.values(spyLinks).forEach((a) => a.classList.toggle('active', a === spyLinks[entry.target.id]));
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
['home', 'services', 'projects', 'process', 'faq', 'contact'].forEach((id) => {
  const s = document.getElementById(id);
  if (s) spyIO.observe(s);
});

function fitFrame(frame) {
  const box = frame.parentElement;
  const base = Number(frame.dataset.w) || 1440;
  const scale = box.clientWidth / base;
  if (!scale) return;
  frame.style.width = base + 'px';
  frame.style.height = Math.ceil(box.clientHeight / scale) + 'px';
  frame.style.transform = 'scale(' + scale + ')';
}
const liveFrames = Array.from(document.querySelectorAll('.live-frame'));
liveFrames.forEach((frame) => {
  fitFrame(frame);
  frame.addEventListener('load', () => frame.parentElement.classList.remove('loading'));
});
window.addEventListener('resize', () => {
  liveFrames.forEach(fitFrame);
  projLayout();
}, { passive: true });

const showFrame = document.getElementById('showFrame');
const showScreen = document.getElementById('showScreen');
const showUrl = document.getElementById('showUrl');
const showLinks = document.querySelectorAll('[data-show-link]');
const dockBtns = document.querySelectorAll('.dock-btn');
dockBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!showFrame || btn.classList.contains('active')) return;
    dockBtns.forEach((b) => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', String(b === btn));
    });
    showScreen.classList.add('loading');
    showUrl.textContent = btn.dataset.url;
    showLinks.forEach((a) => { a.href = btn.dataset.src; });
    setTimeout(() => { showFrame.src = btn.dataset.src; }, 200);
  });
});

const ring = document.getElementById('svcRing');
if (ring) {
  const cards = Array.from(ring.querySelectorAll('.svc3d'));
  const step = 360 / cards.length;
  let angle = 0;
  const update = () => {
    ring.style.setProperty('--ring', angle + 'deg');
    let idx = Math.round(-angle / step) % cards.length;
    if (idx < 0) idx += cards.length;
    cards.forEach((c, i) => c.classList.toggle('is-front', i === idx));
  };
  const rotate = (dir) => { angle -= dir * step; update(); };
  update();
  const svcPrev = document.querySelector('.svc-prev');
  const svcNext = document.querySelector('.svc-next');
  if (svcPrev) svcPrev.addEventListener('click', () => rotate(-1));
  if (svcNext) svcNext.addEventListener('click', () => rotate(1));
}

function animateCount(el) {
  const target = Number(el.dataset.count) || 0;
  const suffix = el.dataset.suffix || '';
  if (reducedMotion) { el.textContent = target + suffix; return; }
  const start = performance.now();
  const frame = (now) => {
    const p = Math.min((now - start) / 1400, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
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

const emailValue = document.getElementById('emailValue');
if (emailValue) {
  const addr = emailValue.dataset.n + String.fromCharCode(64) + emailValue.dataset.h + '.' + emailValue.dataset.x;
  emailValue.textContent = addr;
  const emailLink = document.getElementById('emailLink');
  if (emailLink) emailLink.href = 'mailto:' + addr;
  const emailCopy = document.getElementById('emailCopy');
  if (emailCopy) {
    emailCopy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(addr);
      } catch (e) {
        const ta = document.createElement('textarea');
        ta.value = addr;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (err) {}
        ta.remove();
      }
      const label = emailCopy.querySelector('[data-i18n]');
      label.textContent = t('contact.copied');
      setTimeout(() => { label.textContent = t('contact.copy'); }, 1800);
    });
  }
}

const heroEl = document.querySelector('.hero');
const heroBg = document.querySelector('.hero-bg');
const browserEl = document.querySelector('.browser');
const pageHeroImg = document.querySelector('.page-hero-img');
const oldway = document.getElementById('oldway');
const floaters = oldway ? Array.from(oldway.querySelectorAll('.fl')) : [];
let mx = 0;
let my = 0;

if (heroEl && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
  heroEl.addEventListener('pointermove', (e) => {
    const r = heroEl.getBoundingClientRect();
    mx = (e.clientX - r.left) / r.width - 0.5;
    my = (e.clientY - r.top) / r.height - 0.5;
  }, { passive: true });
  heroEl.addEventListener('pointerleave', () => { mx = 0; my = 0; });
}

const tilt = { x: reducedMotion ? 0 : 14, y: 0 };

function tick() {
  const y = window.scrollY;
  const vh = window.innerHeight || 1;

  if (island) island.classList.toggle('scrolled', y > 30);

  if (browserEl && y < vh * 1.6) {
    const tx = reducedMotion ? 0 : Math.max(0, 14 - y / 26) - my * 5;
    const ty = reducedMotion ? 0 : mx * 7;
    tilt.x += (tx - tilt.x) * 0.1;
    tilt.y += (ty - tilt.y) * 0.1;
    browserEl.style.setProperty('--tx', tilt.x.toFixed(2) + 'deg');
    browserEl.style.setProperty('--ty', tilt.y.toFixed(2) + 'deg');
  }

  if (!reducedMotion) {
    if (heroBg && y < vh * 1.2) heroBg.style.transform = 'translate3d(0,' + (y * 0.25).toFixed(1) + 'px,0) scale(1.08)';
    if (pageHeroImg && y < vh * 1.2) pageHeroImg.style.transform = 'translate3d(0,' + (y * 0.3).toFixed(1) + 'px,0) scale(1.06)';
  }

  if (oldway) {
    const r = oldway.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) {
      const p = Math.min(Math.max(-r.top / (r.height - vh || 1), 0), 1);
      if (!reducedMotion) {
        const amp = window.innerWidth < 640 ? 0.4 : 1;
        floaters.forEach((el) => {
          const sp = (Number(el.dataset.speed) || 0) * amp;
          const rot = Number(el.dataset.rot) || 0;
          el.style.setProperty('--fy', ((0.5 - p) * sp).toFixed(1) + 'px');
          el.style.setProperty('--fr', (rot * (0.6 + p * 0.8)).toFixed(2) + 'deg');
        });
      }
      const lit = Math.round(Math.min(p / 0.75, 1) * scrubWords.length);
      if (lit !== lastLit) {
        scrubWords.forEach((w, i) => w.classList.toggle('lit', i < lit));
        lastLit = lit;
      }
    }
  }

  requestAnimationFrame(tick);
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

setLang(lang);
document.querySelectorAll('.reveal').forEach((el) => revealIO.observe(el));
requestAnimationFrame(tick);
