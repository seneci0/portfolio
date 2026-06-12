# Portfolio — Vojtěch Straka

Osobní web ve stylu Apple: tmavý design, liquid glass efekty, modré akcenty, Dynamic Island navigace, psací efekt, scroll animace a přepínač CZ/EN.

## Spuštění

Stačí otevřít `index.html` v prohlížeči (dvojklik). Žádný server není potřeba.

> Náhledy projektů a font Inter se načítají z internetu — bez připojení se zobrazí náhradní náhled a systémové písmo.

## Jak upravit obsah

| Co | Kde |
|---|---|
| **Projekty** | `script.js` → pole `projects` úplně nahoře. Zkopíruj blok `{ ... }`, vlož odkaz do `url` a náhled webu se vygeneruje sám. Vlastní obrázek: přidej `image: 'cesta/obrazek.png'`. |
| **Discord username** | `index.html` → najdi komentář `TODO` u kontaktní karty Discord (hodnota je i v tlačítku `data-copy`). |
| **Texty CZ/EN** | `script.js` → objekt `translations` (ceny, bio, popisky…). Výchozí české texty jsou i v `index.html`, aby web fungoval bez JavaScriptu. |
| **Úroveň dovedností** | `index.html` → sekce skills, u každé karty `--level:75%` a text `75 %`. |
| **Barvy a vzhled** | `style.css` → proměnné v `:root` (hlavní modrá je `--blue`). |

## Poznámky

- **Náhledy webů** generuje zdarma služba WordPress mShots. Při úplně první návštěvě se screenshot teprve vytváří — po pár sekundách obnov stránku a náhled už tam bude.
- **Jazyk** se ukládá do `localStorage`, takže si web pamatuje volbu návštěvníka. Výchozí je čeština.
- Web respektuje `prefers-reduced-motion` (omezené animace pro citlivé uživatele).

---

*EN: Apple-style portfolio. Edit projects in `script.js` (the `projects` array — previews are generated automatically from the URL), Discord username in `index.html` (see the TODO comment), all CZ/EN texts in the `translations` object in `script.js`.*
