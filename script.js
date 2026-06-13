'use strict';

/* ============================================================ 
   PROJEKTY / PROJECTS — UPRAV TADY / EDIT HERE
   ------------------------------------------------------------
   CZ: Přidej projekt zkopírováním bloku { ... } níže.
       Náhled webu se vygeneruje automaticky z adresy "url".
       Chceš vlastní obrázek? Přidej řádek:  image: 'cesta/obrazek.png'
   EN: Add a project by copying one { ... } block below.
       The preview is generated automatically from the "url".
       Want a custom image? Add:  image: 'path/image.png'
   ============================================================ */
const projects = [
  {
    title: { cs: 'Ukázkový projekt 1', en: 'Sample project 1' },
    desc: {
      cs: 'Ukázková karta s automatickým náhledem webu. Nahraď ji vlastním projektem tady v souboru script.js.',
      en: 'A sample card with an automatic website preview. Replace it with your own project here in script.js.'
    },
    url: 'https://www.apple.com',
    tags: ['HTML5', 'CSS', 'JavaScript']
  },
  {
    title: { cs: 'Ukázkový projekt 2', en: 'Sample project 2' },
    desc: {
      cs: 'Náhled se generuje automaticky z adresy „url" — stačí vložit odkaz na web.',
      en: 'The preview is generated automatically from the "url" — just paste a link.'
    },
    url: 'https://github.com',
    tags: ['PHP', 'MySQL']
  },
  {
    title: { cs: 'Ukázkový projekt 3', en: 'Sample project 3' },
    desc: {
      cs: 'Karet můžeš mít, kolik chceš — mřížka se přizpůsobí sama.',
      en: 'Add as many cards as you like — the grid adapts automatically.'
    },
    url: 'https://www.wikipedia.org',
    tags: ['Python', 'Design']
  }
];

/* ============================================================
   PŘEKLADY / TRANSLATIONS
   ============================================================ */
const translations = {
  cs: {
    'meta.title': 'Vojtěch Straka — Webový vývojář',
    'nav.home': 'Domů',
    'nav.about': 'O mně',
    'nav.projects': 'Projekty',
    'nav.contact': 'Kontakt',
    'hero.chip': 'Dostupný pro nové projekty',
    'hero.tagline': 'Tvořím moderní, rychlé a přehledné weby pro každého.',
    'hero.cta1': 'Zobrazit projekty',
    'hero.cta2': 'Napište mi',
    'hero.scroll': 'Posuňte dolů',
    'about.eyebrow': 'Kdo jsem',
    'about.title': 'O mně.',
    'about.intro': 'Jsem 17letý student IT školy ze České republiky, který věří, že skvělý web je přesně tak jednoduchý, jak musí být — ne méně, ne více.',
    'about.role': 'Webový vývojář & student IT',
    'about.factLabel1': 'Lokace',
    'about.fact1': 'Česká republika',
    'about.factLabel2': 'Vzdělání',
    'about.fact2': 'Střední škola — obor IT',
    'about.factLabel3': 'Věk',
    'about.fact3': '17 let',
    'about.factLabel4': 'Praxe',
    'about.fact4': '2+ roky tvorby webů',
    'about.storyTitle1': 'Jak to začalo',
    'about.storyBody1': 'K webovým technologiím jsem se dostal před dvěma lety — z čisté zvědavosti. První HTML soubor byl jen pár řádků, ale ten pocit, když se stránka poprvé zobrazí v prohlížeči, mě chytil okamžitě. Od té doby jsem nepřestal.',
    'about.storyTitle2': 'Vzdělání',
    'about.storyBody2': 'Studuji střední školu se zaměřením na informační technologie v České republice. Denně pracuji s tématy jako počítačové sítě, programování a databáze — základ, na kterém každý den stavím při práci na reálných projektech.',
    'about.storyTitle3': 'Přístup k práci',
    'about.storyBody3': 'Každý projekt začínám tak, že pochopím, co klient skutečně potřebuje. Pak hledám nejjednodušší řešení, které funguje perfektně. Nevěřím na zbytečné efekty ani na složité věci pro složité věci. Inspiruji se přístupem Apple: méně, ale lépe.',
    'about.intEyebrow': 'Zájmy & inspirace',
    'about.interests': 'Co mě pohání.',
    'about.int1': 'Apple & Technologie',
    'about.int1.desc': 'Sleduji každou keynote a čtu každou recenzi. Způsob, jakým Apple přistupuje k hardwaru i softwaru, mě každý den inspiruje k lepší práci.',
    'about.int2': 'Design',
    'about.int2.desc': 'Barvy, mezery, typografie — věřím, že vizuální detail rozhoduje o celkovém dojmu z webu. Dobrý design se nemá vysvětlovat, má být cítit.',
    'about.int3': 'Tvoření',
    'about.int3.desc': 'Nejraději mám okamžik, kdy se nápad promění v něco skutečného — ať je to web, grafika, nebo jen funkční skript. Proces tvoření mě baví stejně jako výsledek.',
    'about.int4': 'Minimalismus',
    'about.int4.desc': 'Méně je více. Každý prvek na stránce musí mít důvod být tam — jinak pryč. Právě tahle filozofie dělá weby přehledné a zážitek z nich příjemný.',
    'about.stat1': 'let',
    'about.stat2': 'roky zkušeností',
    'about.stat3': 'nasazení v každém projektu',
    'skills.eyebrow': 'Co umím',
    'skills.title': 'Dovednosti.',
    'skills.sub': 'Technologie a nástroje, se kterými pracuji nejraději.',
    'skills.python': 'Skripty, automatizace a logika v zákulisí.',
    'skills.html': 'Sémantický a moderní základ každého webu.',
    'skills.php': 'Dynamické weby a komunikace se serverem.',
    'skills.ps': 'Grafika, úprava fotek a návrhy designu.',
    'projects.eyebrow': 'Moje práce',
    'projects.title': 'Projekty.',
    'projects.sub': 'Vybrané weby, na kterých jsem pracoval. Náhledy se načítají přímo ze živých stránek.',
    'projects.visit': 'Navštívit web',
    'pricing.eyebrow': 'Ceník',
    'pricing.title': 'Jednoduché ceny.',
    'pricing.sub': 'Férové ceny bez skrytých poplatků.',
    'plan1.name': 'Jednostránkový web',
    'plan1.desc': 'Ideální start — vše podstatné na jedné přehledné stránce.',
    'plan1.price': '2 990 Kč',
    'plan1.per': '30% záloha',
    'plan1.f1': 'Moderní design na míru',
    'plan1.f2': 'Responzivní zobrazení (mobil i počítač)',
    'plan1.f3': 'Kontaktní formulář nebo odkazy',
    'plan1.f4': 'Základní SEO optimalizace',
    'plan1.f5': 'Dodání do 7 dnů',
    'plan1.f6': '1 kolo úprav zdarma',
    'plan2.badge': 'Sleva 17 %',
    'plan2.name': 'Web na míru',
    'plan2.desc': 'Až 5 stránek přesně podle vašich představ.',
    'plan2.oldPrice': '5 990 Kč',
    'plan2.price': '4 990 Kč',
    'plan2.per': '30% záloha',
    'plan2.f1': 'Vše z balíčku Jednostránkový web',
    'plan2.f2': 'Až 5 samostatných stránek',
    'plan2.f3': 'Animace a interaktivní prvky',
    'plan2.f4': 'Pokročilá SEO optimalizace',
    'plan2.f5': 'Česká i anglická verze webu',
    'plan2.f6': 'Dodání do 14 dnů',
    'plan2.f7': '3 kola úprav zdarma',
    'plan2.f8': '30 dní podpory po spuštění zdarma',
    'pricing.cta': 'Mám zájem',
    'pricing.note': 'Potřebujete něco jiného? Napište mi a domluvíme se na řešení na míru.',
    'contact.eyebrow': 'Ozvěte se',
    'contact.title': 'Pojďme tvořit.',
    'contact.sub': 'Máte nápad na web? Rád ho s vámi proberu — odpovídám zpravidla do 24 hodin.',
    'contact.emailLabel': 'E-mail',
    'contact.emailBtn': 'Napsat e-mail',
    'contact.copy': 'Kopírovat',
    'contact.copied': 'Zkopírováno ✓',
    'footer.rights': 'Všechna práva vyhrazena.'
  },
  en: {
    'meta.title': 'Vojtěch Straka — Web Developer',
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.chip': 'Available for new projects',
    'hero.tagline': 'I create modern, fast, and clear websites for everyone.',
    'hero.cta1': 'View projects',
    'hero.cta2': 'Get in touch',
    'hero.scroll': 'Scroll down',
    'about.eyebrow': 'Who I am',
    'about.title': 'About me.',
    'about.intro': "I'm a 17-year-old IT student from the Czech Republic who believes a great website is exactly as simple as it needs to be — not less, not more.",
    'about.role': 'Web Developer & IT student',
    'about.factLabel1': 'Location',
    'about.fact1': 'Czech Republic',
    'about.factLabel2': 'Education',
    'about.fact2': 'High school — IT programme',
    'about.factLabel3': 'Age',
    'about.fact3': '17 years old',
    'about.factLabel4': 'Experience',
    'about.fact4': '2+ years of building websites',
    'about.storyTitle1': 'How it started',
    'about.storyBody1': 'I got into web technologies two years ago out of pure curiosity. The first HTML file was just a few lines, but the moment the page appeared in the browser for the first time — I was hooked. I have not stopped since.',
    'about.storyTitle2': 'Education',
    'about.storyBody2': 'I study at a high school focused on information technology in the Czech Republic. I work with topics like computer networking, programming and databases every day — the foundation I build on when working on real projects.',
    'about.storyTitle3': 'Work approach',
    'about.storyBody3': 'Every project starts with understanding what the client actually needs. Then I look for the simplest solution that works perfectly. I do not believe in unnecessary effects or complexity for its own sake. My inspiration is Apple\'s philosophy: less, but better.',
    'about.intEyebrow': 'Interests & inspiration',
    'about.interests': 'What drives me.',
    'about.int1': 'Apple & Technology',
    'about.int1.desc': 'I follow every keynote and read every review. The way Apple approaches both hardware and software inspires me to do better work every single day.',
    'about.int2': 'Design',
    'about.int2.desc': 'Colours, spacing, typography — I believe visual detail decides the overall impression of a website. Good design should not need explaining — it should be felt.',
    'about.int3': 'Creating',
    'about.int3.desc': 'I love the moment an idea turns into something real — whether it is a website, a graphic, or just a working script. The process of creating excites me as much as the result.',
    'about.int4': 'Minimalism',
    'about.int4.desc': 'Less is more. Every element on a page must have a reason to be there — otherwise, out it goes. This philosophy is what makes websites clear and the experience of using them enjoyable.',
    'about.stat1': 'years old',
    'about.stat2': 'years of experience',
    'about.stat3': 'commitment in every project',
    'skills.eyebrow': 'What I know',
    'skills.title': 'Skills.',
    'skills.sub': 'Technologies and tools I enjoy working with the most.',
    'skills.python': 'Scripts, automation and behind-the-scenes logic.',
    'skills.html': 'A semantic, modern foundation for every website.',
    'skills.php': 'Dynamic websites and server-side communication.',
    'skills.ps': 'Graphics, photo editing and design mockups.',
    'projects.eyebrow': 'My work',
    'projects.title': 'Projects.',
    'projects.sub': 'Selected websites I have worked on. Previews load straight from the live pages.',
    'projects.visit': 'Visit website',
    'pricing.eyebrow': 'Pricing',
    'pricing.title': 'Simple pricing.',
    'pricing.sub': 'Fair prices with no hidden fees.',
    'plan1.name': 'One-page website',
    'plan1.desc': 'The perfect start — everything that matters on one clear page.',
    'plan1.price': '2 990 CZK',
    'plan1.per': 'one-time',
    'plan1.f1': 'Modern custom design',
    'plan1.f2': 'Responsive (mobile & desktop)',
    'plan1.f3': 'Contact form or links',
    'plan1.f4': 'Basic SEO optimization',
    'plan1.f5': 'Delivery within 7 days',
    'plan1.f6': '1 round of revisions for free',
    'plan2.badge': 'Save 17%',
    'plan2.name': 'Custom website',
    'plan2.desc': 'Up to 5 pages tailored exactly to your needs.',
    'plan2.oldPrice': '5 990 CZK',
    'plan2.price': '4 990 CZK',
    'plan2.per': 'one-time',
    'plan2.f1': 'Everything from One-page website',
    'plan2.f2': 'Up to 5 separate pages',
    'plan2.f3': 'Animations & interactive elements',
    'plan2.f4': 'Advanced SEO optimization',
    'plan2.f5': 'Czech & English version',
    'plan2.f6': 'Delivery within 14 days',
    'plan2.f7': '3 rounds of revisions for free',
    'plan2.f8': '30 days of free support after launch',
    'pricing.cta': "I'm interested",
    'pricing.note': 'Need something different? Drop me a message and we will find a custom solution.',
    'contact.eyebrow': 'Get in touch',
    'contact.title': "Let's create.",
    'contact.sub': 'Got an idea for a website? I usually reply within 24 hours.',
    'contact.emailLabel': 'Email',
    'contact.emailBtn': 'Send an email',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied ✓',
    'footer.rights': 'All rights reserved.'
  }
};

/* ============================================================
   Stav / State
   ============================================================ */
let lang = 'cs';
try { lang = localStorage.getItem('lang') || 'cs'; } catch (e) { /* soukromý režim apod. */ }
if (!translations[lang]) lang = 'cs';

let booted = false;

const t = (key) => translations[lang][key] ?? key;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   Scroll reveal — IntersectionObserver
   ============================================================ */
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

function observeReveal(scope) {
  (scope || document).querySelectorAll('.reveal:not(.in-view)').forEach((el) => revealIO.observe(el));
}

/* ============================================================
   Projekty — vykreslení karet s náhledy webů
   ============================================================ */
const projectsGrid = document.getElementById('projectsGrid');

// Automatický screenshot webu (WordPress mShots, zdarma).
// Při úplně prvním načtení se náhled teprve generuje — stačí stránku obnovit.
function previewUrl(url) {
  return 'https://s.wordpress.com/mshots/v1/' + encodeURIComponent(url) + '?w=1000';
}

function renderProjects(instant) {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';

  projects.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'glass card project-card reveal' + (instant ? ' in-view' : '');
    card.style.setProperty('--d', (i * 0.08) + 's');

    let host = p.url;
    try { host = new URL(p.url).hostname.replace(/^www\./, ''); } catch (e) { /* ponech celou adresu */ }
    const letter = (host[0] || '•').toUpperCase();

    card.innerHTML =
      '<a class="project-preview" href="' + p.url + '" target="_blank" rel="noopener">' +
        '<img loading="lazy" alt="' + p.title[lang] + '" src="' + (p.image || previewUrl(p.url)) + '">' +
        '<span class="preview-fallback"><b>' + letter + '</b><i>' + host + '</i></span>' +
        '<span class="preview-host">' + host + '</span>' +
      '</a>' +
      '<div class="project-body">' +
        '<div class="project-tags">' + (p.tags || []).map((tag) => '<span class="tag">' + tag + '</span>').join('') + '</div>' +
        '<h3>' + p.title[lang] + '</h3>' +
        '<p>' + p.desc[lang] + '</p>' +
        '<a class="project-link" href="' + p.url + '" target="_blank" rel="noopener">' + t('projects.visit') +
          ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>' +
        '</a>' +
      '</div>';

    const img = card.querySelector('img');
    img.addEventListener('error', () => {
      card.querySelector('.project-preview').classList.add('no-img');
    });

    projectsGrid.appendChild(card);
  });

  if (!instant) observeReveal(projectsGrid);
}

/* ============================================================
   Psací efekt / Typing effect
   ============================================================ */
const typedEl = document.getElementById('typed');
let typeToken = 0;
let typeTimer = null;

function startTyping() {
  if (!typedEl) return;
  const full = t('hero.tagline');
  const token = ++typeToken;
  clearTimeout(typeTimer);

  if (reducedMotion) {
    typedEl.textContent = full;
    return;
  }

  let i = 0;
  let deleting = false;

  const step = () => {
    if (token !== typeToken) return; // jazyk se mezitím přepnul

    if (!deleting) {
      i++;
      typedEl.textContent = full.slice(0, i);
      if (i === full.length) {
        deleting = true;
        typeTimer = setTimeout(step, 4500); // pauza s celou větou
      } else {
        typeTimer = setTimeout(step, 34 + Math.random() * 46);
      }
    } else {
      i--;
      typedEl.textContent = full.slice(0, i);
      if (i === 0) {
        deleting = false;
        typeTimer = setTimeout(step, 700);
      } else {
        typeTimer = setTimeout(step, 16);
      }
    }
  };

  typedEl.textContent = '';
  typeTimer = setTimeout(step, 350);
}

/* ============================================================
   Přepínání jazyka / Language switching
   ============================================================ */
function setLang(next) {
  lang = translations[next] ? next : 'cs';
  try { localStorage.setItem('lang', lang); } catch (e) { /* ignoruj */ }

  document.documentElement.lang = lang;
  document.title = t('meta.title');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = translations[lang][el.getAttribute('data-i18n')];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  renderProjects(booted); // po přepnutí jazyka bez opětovné animace
  startTyping();
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.lang !== lang) setLang(btn.dataset.lang);
  });
});

/* ============================================================
   Scrollspy — zvýraznění aktivní sekce v ostrůvku
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
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

['home', 'about', 'projects', 'contact'].forEach((id) => {
  const section = document.getElementById(id);
  if (section) spyIO.observe(section);
});

/* ============================================================
   Efekty při scrollu — ostrůvek + jemná paralaxa hero
   ============================================================ */
const island = document.querySelector('.island');
const heroInner = document.querySelector('.hero-inner');
let scrollTicking = false;

window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;

  requestAnimationFrame(() => {
    const y = window.scrollY;
    if (island) island.classList.toggle('scrolled', y > 40);

    if (heroInner && !reducedMotion) {
      const vh = window.innerHeight || 1;
      if (y <= vh) {
        const progress = y / vh;
        heroInner.style.opacity = String(Math.max(0, 1 - progress * 1.15));
        heroInner.style.transform = 'translateY(' + (y * 0.3) + 'px) scale(' + (1 - progress * 0.06) + ')';
      }
    }

    scrollTicking = false;
  });
}, { passive: true });

/* ============================================================
   Počítadla ve statistikách / Stat counters
   ============================================================ */
function animateCount(el) {
  const target = Number(el.dataset.count) || 0;
  const suffix = el.dataset.suffix || '';

  if (reducedMotion) {
    el.textContent = target + suffix;
    return;
  }

  const duration = 1500;
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
    if (entry.isIntersecting) {
      animateCount(entry.target);
      countIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach((el) => countIO.observe(el));

/* ============================================================
   Kopírování kontaktů / Copy buttons
   ============================================================ */
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const value = btn.getAttribute('data-copy');

    try {
      await navigator.clipboard.writeText(value);
    } catch (e) {
      // fallback pro starší prohlížeče / otevření přes file://
      const ta = document.createElement('textarea');
      ta.value = value;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (err) { /* nepodařilo se */ }
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

setLang(lang);   // aplikuje texty + vykreslí projekty + spustí psaní
booted = true;
observeReveal(document);
