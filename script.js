'use strict';

/* ============================================================
   PROJEKTY — přidej nebo uprav tady
   ============================================================ */
const projects = [
  {
    title: { cs: 'Květinářství Novotná', en: 'Novotná Flower Shop' },
    desc: {
      cs: 'Elegantní web pro místní květinářství. Galerie kytic, kontaktní formulář a napojení na Google Mapy.',
      en: 'Elegant website for a local florist. Bouquet gallery, contact form and Google Maps integration.'
    },
    url: './kvetinarstvi.html',
    tags: ['HTML5', 'CSS3', 'Design'],
    gradient: 'linear-gradient(135deg, #a8e063, #56ab2f)'
  },
  {
    title: { cs: 'LUXE Fashion Boutique', en: 'LUXE Fashion Boutique' },
    desc: {
      cs: 'Prémiová prezentace módního butiku — lookbook, ceník, rezervace a Instagram feed.',
      en: 'Premium fashion boutique presentation — lookbook, pricing, reservations and Instagram feed.'
    },
    url: 'https://vogue.com',
    tags: ['Web Design', 'Animace', 'Mobile'],
    gradient: 'linear-gradient(135deg, #1a1a2e, #c9a96e)'
  },
  {
    title: { cs: 'Restaurace U Matěje', en: 'U Matěje Restaurant' },
    desc: {
      cs: 'Moderní web pro restauraci s online menu, rezervačním formulářem a galerií interiéru.',
      en: 'Modern restaurant site with online menu, booking form and interior gallery.'
    },
    url: 'https://www.tripadvisor.com',
    tags: ['PHP', 'Rezervace', 'SEO'],
    gradient: 'linear-gradient(135deg, #d4813a, #8b2500)'
  },
  {
    title: { cs: 'RealityPro Group', en: 'RealityPro Group' },
    desc: {
      cs: 'Profesionální stránky realitní kanceláře s listingem nemovitostí a filtrovatelným vyhledáváním.',
      en: 'Professional real estate agency website with property listings and filterable search.'
    },
    url: 'https://sreality.cz',
    tags: ['JavaScript', 'PHP', 'MySQL'],
    gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)'
  },
  {
    title: { cs: 'TaskFlow — Demo web', en: 'TaskFlow — Demo website' },
    desc: {
      cs: '🎁 Ukázka webu zadarmo. Moderní jednostránkový web pro SaaS produkt s animacemi a CTA sekcemi.',
      en: '🎁 Free website sample. Modern one-page website for a SaaS product with animations and CTA sections.'
    },
    url: './demo.html',
    tags: ['HTML5', 'CSS3', 'Animace'],
    gradient: 'linear-gradient(135deg, #0071e3, #5e5ce6)'
  },
  {
    title: { cs: 'Foto Studio Marek', en: 'Marek Photo Studio' },
    desc: {
      cs: 'Portfolio fotografa s lightboxem, ceníkem focení a online rezervací termínu.',
      en: "Photographer's portfolio with lightbox, photo pricing and online session booking."
    },
    url: 'https://unsplash.com',
    tags: ['Design', 'Lightbox', 'CSS'],
    gradient: 'linear-gradient(135deg, #2c2c2c, #686868)'
  }
];

/* ============================================================
   PŘEKLADY
   ============================================================ */
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
    'service1.name': 'Prezentační web',
    'service1.desc': 'Firemní nebo osobní web, který vás reprezentuje. Zákazníci vás najdou, důvěřují vám a kontaktují.',
    'service2.name': 'Design na míru',
    'service2.desc': 'Každý design je unikátní. Pracuji s vašimi barvami, logem a představami — výsledek bude 100% váš.',
    'service3.name': 'Rychlé dodání',
    'service3.desc': 'Základní web hotový od 5 pracovních dnů. Bez kompromisů na kvalitě — vaše stránky fungují v řádu dnů.',
    'service4.name': 'SEO optimalizace',
    'service4.desc': 'Web bez návštěvníků je jen tichá galerie. Zajistím, aby vás zákazníci našli přes Google organicky.',
    'service5.name': 'Údržba & podpora',
    'service5.desc': 'Po spuštění nejste sami. Nabízím údržbu, aktualizace obsahu a technickou podporu podle potřeby.',
    'service6.name': 'Landing Page',
    'service6.desc': 'Jedna silná stránka, která prodává. Ideální pro akce, produkty nebo jednoduché prezentace s CTA.',

    'projects.eyebrow': 'Moje práce',
    'projects.title': 'Projekty.',
    'projects.sub': 'Ukázky webů různých oborů — od květinářství po módní butiky. Každý web je originální.',
    'projects.visit': 'Zobrazit ukázku',

    'pricing.eyebrow': 'Ceník',
    'pricing.title': 'Jednoduché ceny.',
    'pricing.sub': 'Férové ceny bez skrytých poplatků. Vždy víte, za co platíte.',
    'plan1.name': 'Jednostránkový web',
    'plan1.desc': 'Ideální start — vše podstatné na jedné přehledné stránce.',
    'plan1.price': '2 990 Kč',
    'plan1.per': 'jednorázově',
    'plan1.f1': 'Moderní design na míru',
    'plan1.f2': 'Responzivní — mobil i počítač',
    'plan1.f3': 'Kontaktní formulář nebo odkazy',
    'plan1.f4': 'Základní SEO optimalizace',
    'plan1.f5': 'Dodání od 5 pracovních dnů',
    'plan1.f6': '1 kolo úprav zdarma',
    'plan2.badge': 'Nejoblíbenější',
    'plan2.name': 'Prezentační web',
    'plan2.desc': 'Více stránek, více obsahu, více zákazníků — přesně podle vašich představ.',
    'plan2.oldPrice': '5 990 Kč',
    'plan2.price': '4 990 Kč',
    'plan2.per': 'jednorázově',
    'plan2.f1': 'Vše z Jednostránkového webu',
    'plan2.f2': 'Až 5 samostatných stránek',
    'plan2.f3': 'Animace a interaktivní prvky',
    'plan2.f4': 'Pokročilá SEO optimalizace',
    'plan2.f5': 'Česká i anglická verze webu',
    'plan2.f6': 'Dodání do 14 dnů',
    'plan2.f7': '3 kola úprav zdarma',
    'plan2.f8': '30 dní podpory po spuštění',
    'plan3.name': 'Web na míru',
    'plan3.desc': 'Komplexní projekt s vlastními požadavky? Napište mi a navrhneme řešení přesně pro vás.',
    'plan3.price': 'Cena na míru',
    'plan3.f1': 'Neomezený počet stránek',
    'plan3.f2': 'Individuální funkce dle zadání',
    'plan3.f3': 'CMS / admin panel',
    'plan3.f4': 'Pokročilá SEO & analytika',
    'plan3.f5': 'Priority podpora po spuštění',
    'plan3.f6': 'Termín a cena po konzultaci',
    'plan3.cta': 'Nezávazná konzultace',
    'pricing.cta': 'Mám zájem',
    'pricing.note': 'Potřebujete něco jiného? Napište mi — vždy najdeme řešení.',
    'free.tag': 'Zdarma',
    'free.title': '1 ukázková stránka zdarma',
    'free.desc': 'Než se rozhodnete, vytvořím vám nezávaznou ukázku jedné stránky ve vašem stylu. Slouží pouze jako náhled — není to hotový web a nebude nikde zveřejněn.',
    'free.cta': 'Chci ukázku zdarma',

    'payment.title': 'Platební podmínky',
    'payment.deposit.label': 'Záloha předem',
    'payment.deposit.desc': '50 % ceny projektu uhradíte před zahájením práce jako zálohu.',
    'payment.time.label': 'Pracovních dnů',
    'payment.time.desc': 'Zpracování jednostránkového webu od 5 pracovních dnů po přijetí zálohy.',
    'payment.transfer.label': 'Bankovní převod',
    'payment.transfer.desc': 'Platba výhradně převodem na bankovní účet. Na vyžádání vystavím fakturu.',
    'payment.final.label': 'Doplatek po dokončení',
    'payment.final.desc': 'Zbývajících 50 % uhradíte po schválení hotového webu a před jeho spuštěním.',

    'about.eyebrow': 'Kdo jsem',
    'about.title': 'O mně.',
    'about.intro': 'Jsem 17letý student IT školy z České republiky, který věří, že skvělý web je přesně tak jednoduchý, jak musí být — ne méně, ne více.',
    'about.role': 'Webový vývojář & student IT',
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
    'faq.a2': 'Doména a hosting nejsou součástí ceny, ale pomohu vám s výběrem. Doména cca 200 Kč/rok, hosting od 150 Kč/měsíc.',
    'faq.q3': 'Jak probíhá platba?',
    'faq.a3': '50 % záloha před zahájením práce, 50 % doplatek po dokončení a schválení webu. Platba převodem na bankovní účet. Na vyžádání vystavím fakturu.',
    'faq.q4': 'Mohu si vyzkoušet web před spuštěním?',
    'faq.a4': 'Ano! Během vývoje zasílám náhled na privátní adrese. Zkontrolujete vše, dáte zpětnou vazbu a požádáte o úpravy.',
    'faq.q5': 'Co zahrnují úpravy zdarma?',
    'faq.a5': 'Kola úprav zahrnují textové změny, drobné designové úpravy a opravy chyb. Větší přepracování jsou účtována hodinovou sazbou.',
    'faq.q6': 'Zajišťujete SEO?',
    'faq.a6': 'Základní SEO — meta tagy, struktura URL, rychlost — je součástí každého balíčku. Pokročilá optimalizace je v balíčku Prezentační web.',

    'contact.eyebrow': 'Ozvěte se',
    'contact.title': 'Pojďme tvořit.',
    'contact.sub': 'Máte nápad na web? Rád ho proberu — odpovídám zpravidla do 24 hodin.',
    'contact.available': 'Aktuálně přijímám nové projekty',
    'contact.emailLabel': 'E-mail',
    'contact.emailBtn': 'Napsat e-mail',
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
    'service1.name': 'Business website',
    'service1.desc': 'A company or personal website that represents you. Customers find you, trust you, and contact you.',
    'service2.name': 'Custom design',
    'service2.desc': 'Every design is unique. I work with your colours, logo, and ideas — the result will be 100% yours.',
    'service3.name': 'Fast delivery',
    'service3.desc': 'A basic website ready from 5 working days. No compromises on quality — your site is live within days.',
    'service4.name': 'SEO optimization',
    'service4.desc': 'A website without visitors is just a silent gallery. I ensure customers find you on Google organically.',
    'service5.name': 'Maintenance & support',
    'service5.desc': 'After launch, you are not alone. I offer maintenance, content updates, and technical support as needed.',
    'service6.name': 'Landing Page',
    'service6.desc': 'One powerful page that converts. Perfect for campaigns, products, or simple presentations with a CTA.',

    'projects.eyebrow': 'My work',
    'projects.title': 'Projects.',
    'projects.sub': 'Website samples from various industries — from florists to fashion boutiques. Every site is original.',
    'projects.visit': 'View demo',

    'pricing.eyebrow': 'Pricing',
    'pricing.title': 'Simple pricing.',
    'pricing.sub': 'Fair prices with no hidden fees. You always know what you\'re paying for.',
    'plan1.name': 'One-page website',
    'plan1.desc': 'The perfect start — everything that matters on one clear page.',
    'plan1.price': '2,990 CZK',
    'plan1.per': 'one-time',
    'plan1.f1': 'Modern custom design',
    'plan1.f2': 'Responsive — mobile & desktop',
    'plan1.f3': 'Contact form or links',
    'plan1.f4': 'Basic SEO optimization',
    'plan1.f5': 'Delivery from 5 working days',
    'plan1.f6': '1 round of free revisions',
    'plan2.badge': 'Most popular',
    'plan2.name': 'Business website',
    'plan2.desc': 'More pages, more content, more customers — tailored exactly to your needs.',
    'plan2.oldPrice': '5,990 CZK',
    'plan2.price': '4,990 CZK',
    'plan2.per': 'one-time',
    'plan2.f1': 'Everything from One-page website',
    'plan2.f2': 'Up to 5 separate pages',
    'plan2.f3': 'Animations & interactive elements',
    'plan2.f4': 'Advanced SEO optimization',
    'plan2.f5': 'Czech & English version',
    'plan2.f6': 'Delivery within 14 days',
    'plan2.f7': '3 rounds of free revisions',
    'plan2.f8': '30 days of post-launch support',
    'plan3.name': 'Custom project',
    'plan3.desc': 'Complex project with unique requirements? Contact me and we\'ll design a solution just for you.',
    'plan3.price': 'Price on request',
    'plan3.f1': 'Unlimited pages',
    'plan3.f2': 'Custom features per specification',
    'plan3.f3': 'CMS / admin panel',
    'plan3.f4': 'Advanced SEO & analytics',
    'plan3.f5': 'Priority support after launch',
    'plan3.f6': 'Timeline & price after consultation',
    'plan3.cta': 'Free consultation',
    'pricing.cta': "I'm interested",
    'pricing.note': 'Need something different? Write to me — we will always find a solution.',
    'free.tag': 'Free',
    'free.title': '1 sample page for free',
    'free.desc': 'Before you decide, I\'ll create a no-obligation sample of one page in your style. It serves only as a preview — it is not a finished website and will not be published anywhere.',
    'free.cta': 'Get a free sample',

    'payment.title': 'Payment terms',
    'payment.deposit.label': 'Deposit upfront',
    'payment.deposit.desc': '50% of the project price is paid as a deposit before work begins.',
    'payment.time.label': 'Working days',
    'payment.time.desc': 'A one-page website takes from 5 working days after the deposit is received.',
    'payment.transfer.label': 'Bank transfer',
    'payment.transfer.desc': 'Payment exclusively by bank transfer. An invoice can be issued on request.',
    'payment.final.label': 'Final payment on delivery',
    'payment.final.desc': 'The remaining 50% is paid after the completed website is approved, before launch.',

    'about.eyebrow': 'Who I am',
    'about.title': 'About me.',
    'about.intro': "I'm a 17-year-old IT student from the Czech Republic who believes a great website is exactly as simple as it needs to be — not less, not more.",
    'about.role': 'Web Developer & IT student',
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
    'faq.a2': 'Domain and hosting are not included in the price, but I help you choose. Domain ~200 CZK/year, hosting from 150 CZK/month.',
    'faq.q3': 'How does payment work?',
    'faq.a3': '50% deposit before work begins, 50% final payment after the website is completed and approved. Payment by bank transfer. Invoice available on request.',
    'faq.q4': 'Can I preview the website before launch?',
    'faq.a4': 'Yes! During development I send you a preview at a private URL. Check everything, give feedback, and request changes.',
    'faq.q5': 'What do free revisions include?',
    'faq.a5': 'Revision rounds cover text changes, minor design tweaks, and bug fixes. Larger reworks are charged at an hourly rate.',
    'faq.q6': 'Do you handle SEO?',
    'faq.a6': 'Basic SEO — meta tags, URL structure, speed — is included in every package. Advanced optimization is included in the Business website plan.',

    'contact.eyebrow': 'Get in touch',
    'contact.title': "Let's create.",
    'contact.sub': 'Got an idea for a website? I usually reply within 24 hours.',
    'contact.available': 'Currently accepting new projects',
    'contact.emailLabel': 'Email',
    'contact.emailBtn': 'Send an email',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied ✓',
    'footer.desc': 'Web Developer · Czech Republic',
    'footer.rights': 'All rights reserved.'
  }
};

/* ============================================================
   Stav
   ============================================================ */
let lang = 'cs';
try { lang = localStorage.getItem('lang') || 'cs'; } catch (e) {}
if (!translations[lang]) lang = 'cs';

let booted = false;
const t = (key) => translations[lang][key] ?? key;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   Scroll reveal
   ============================================================ */
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

/* ============================================================
   Skill bar observer (skill-boxes are nested, need special handling)
   ============================================================ */
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

/* ============================================================
   Projekty
   ============================================================ */
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
    card.className = 'glass card project-card reveal' + (instant ? ' in-view' : '');
    card.style.setProperty('--d', (i * 0.07) + 's');

    let host = p.url;
    try { host = new URL(p.url).hostname.replace(/^www\./, ''); } catch (e) { host = p.title[lang]; }
    const letter = (p.title[lang][0] || '•').toUpperCase();

    const gradient = p.gradient || 'linear-gradient(135deg, #0071e3, #5e5ce6)';
    const imgSrc = previewUrl(p.url);

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

  if (!instant) observeReveal(projectsGrid);
}

/* ============================================================
   Psací efekt — rotuje mezi frázemi
   ============================================================ */
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

/* ============================================================
   Přepínání jazyka
   ============================================================ */
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

/* ============================================================
   Scrollspy
   ============================================================ */
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

/* ============================================================
   Scroll efekty — island + parallax hero
   ============================================================ */
const island = document.querySelector('.island');
const heroEl = document.querySelector('.hero');
const heroInner = document.querySelector('.hero-inner');
const mountainImg = document.querySelector('.hero-mountain-img');
const cloudsBack = document.querySelector('.hero-clouds-back');
const cloudsFront = document.querySelector('.hero-clouds-front');
const heroWash = document.querySelector('.hero-wash');
const pageHeroImg = document.querySelector('.page-hero-img');
let scrollTicking = false;

window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    if (island) island.classList.toggle('scrolled', y > 40);
    if (!reducedMotion) {
      const vh = window.innerHeight || 1;
      if (y <= vh) {
        const p = y / vh;             // 0 → 1 napříč úvodem
        const cp = Math.min(p * 1.1, 1);

        // Text se vzdaluje a mizí
        if (heroInner) {
          heroInner.style.opacity = String(Math.max(0, 1 - p * 1.3));
          heroInner.style.transform = 'translateY(' + (y * 0.3) + 'px) scale(' + (1 - p * 0.06) + ')';
        }
        // Drone se zvedá — hora se oddálí (zoom out)
        if (mountainImg) {
          mountainImg.style.setProperty('--mtnY', (-y * 0.04) + 'px');
          mountainImg.style.setProperty('--mtnSc', (1.12 - p * 0.24).toFixed(4));
        }
        // Vzdálené mraky stoupají pomaleji (hloubka)
        if (cloudsBack) {
          cloudsBack.style.setProperty('--cbY', (54 - cp * 80) + '%');
          cloudsBack.style.setProperty('--cbSc', (1.05 + cp * 0.35).toFixed(4));
        }
        // Přední mraky stoupají a zvětšují se — prolétneš skrz ně
        if (cloudsFront) {
          cloudsFront.style.setProperty('--cfY', (72 - cp * 122) + '%');
          cloudsFront.style.setProperty('--cfSc', (1 + cp * 0.75).toFixed(4));
        }
        // Čistý bílý přechod na text
        if (heroWash) {
          heroWash.style.opacity = String(Math.min(Math.max(p - 0.05, 0) * 1.7, 1));
        }
      }
      // Parallax obrázku na podstránce „O mně"
      if (pageHeroImg) {
        pageHeroImg.style.transform = 'translateY(' + (y * 0.32) + 'px) scale(1.06)';
      }
    }
    scrollTicking = false;
  });
}, { passive: true });

/* 3D náklon scény podle pohybu myši / pointer-driven 3D parallax */
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

/* ============================================================
   Počítadla stats
   ============================================================ */
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

/* ============================================================
   Kopírování
   ============================================================ */
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

/* ============================================================
   Start
   ============================================================ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

setLang(lang);
booted = true;
observeReveal(document);
