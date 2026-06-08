# Alogator Web — Stratégia a logika webu

## Čo je Alogator

Marketplace, ktorý prepája kvalifikovaných remeselníkov (zvárači, elektrikári, tesári, murári, montéri...) zo Slovenska a Česka s firmami v Nemecku, Rakúsku, Holandsku a Belgicku.

**3 typy používateľov:**
- **Pracovníci** (SZČO) — registrácia zadarmo, hľadajú prácu v zahraničí
- **Agentúry / Dodávatelia** — B2B zákazníci, hľadajú ľudí pre svoje zákazky
- **End klienti** — nemecké/rakúske firmy, hľadajú kapacity priamo

Dôležité: Alogator je **infraštruktúra** (ako Stripe alebo Booking), nie konkurent agentúr. Agentúry sú naši zákazníci.

---

## Prečo vlastný web (nie len appka)

Aplikácia je jadro produktu, ale web rieši 3 veci, ktoré appka nevie:

### 1. Objaviteľnosť (SEO)
Google neindexuje obsah appky. Keď niekto hľadá "zvárač Nemecko" alebo "práca v zahraničí", musí nájsť NÁS, nie konkurenciu. Každá landing page je vstupná brána z Google do Alogator ekosystému.

### 2. Dôvera pred registráciou
Firma ani pracovník sa nezaregistruje bez toho, aby vedel kto sme, koľko to stojí, ako to funguje. Web je "obchodný zástupca" — zodpovedá všetky otázky a námietky ešte pred kliknutím na "Registrovať".

### 3. Živé dáta z API
Web ukazuje reálne počty (koľko pracovníkov, koľko firiem, koľko krajín). To nie je statická brožúra — návštevník vidí, že platforma žije.

---

## Prečo takáto štruktúra stránok

### Homepage — dva módy (B2B / B2C)

Homepage má prepínač "Pre firmy" / "Pre pracovníkov". Dôvod: máme 2 úplne odlišné cieľovky s rôznymi potrebami.

**Pre firmy (B2B) ukazuje:**
- Profession chipy s počtami (297 zváračov, 142 elektrikárov...) → "máme ľudí"
- Worker karty z databázy → "pozrite akých ľudí máme"
- Kalendár dostupnosti → "viete kto je voľný TERAZ" (to je náš USP)
- Video → dôvera
- Cenník → transparentnosť

**Pre pracovníkov (B2C) ukazuje:**
- Profesie grid → "nájdi svoju profesiu"
- Ponuky práce → "sú tu reálne ponuky"
- Výhody (plat, ubytovanie, flexibilita)
- CTA na stiahnutie appky

### Hlavné stránky (rozhodovací cesta)

Každá hlavná stránka odpovedá na konkrétnu otázku v hlave návštevníka:

| Stránka | Otázka, na ktorú odpovedá |
|---------|---------------------------|
| **Pre firmy** | "Čo mi to dá? Prečo by som mal platiť?" |
| **Pre pracovníkov** | "Je to bezpečné? Aké ponuky tam sú?" |
| **Cenník** | "Koľko to stojí? Čo dostanem za free?" |
| **Ako to funguje** | "Aké sú kroky? Je to komplikované?" |
| **O nás** | "Kto za tým stojí? Dá sa im veriť?" |
| **Kontakt** | "Chcem sa ozvať. Čo sa stane potom?" |
| **Stiahnuť aplikáciu** | "Kde si to stiahnem?" |
| **Databáza pracovníkov** | "Ukáž mi konkrétnych ľudí" (browse s filtrami) |
| **Ponuka práce (browse)** | "Ukáž mi konkrétne ponuky" (browse s filtrami) |

Firma typicky prejde: Homepage → Pre firmy → Cenník → Ako to funguje → Kontakt/Demo.
Pracovník typicky prejde: Homepage → Pre pracovníkov → Ponuky práce → Stiahnutie appky.

### SEO Landing Pages (vstupné dvere z Google)

Toto je kľúčová časť stratégie. Každá LP cieli na konkrétny vyhľadávací dopyt:

**Podľa profesie** (`/ponuka-prace/zvarac`, `/ponuka-prace/elektrikar`...):
- Cieľ: "zvárač zahraničie", "práca zvárač Nemecko"
- Obsah: popis profesie, platy, ponuky pre danú profesiu, podmienky
- Konverzia: registrácia / stiahnutie appky

**Podľa krajiny** (`/praca-v-zahranici/nemecko`, `/praca-v-zahranici/rakusko`...):
- Cieľ: "práca v Nemecku", "práca v zahraničí Rakúsko"
- Obsah: špecifiká krajiny (priemerné platy, pracovné podmienky, čo potrebuješ)
- Konverzia: konkrétne ponuky v danej krajine → appka

**Podľa mesta** (`/ponuka-prace/presov`...):
- Cieľ: "práca v zahraničí Prešov", "agentúra Prešov"
- Obsah: lokálne zameranie
- Konverzia: ponuky / appka

**Detail ponuky** (`/ponuka/zvarac-mig-mag-emsland`):
- Cieľ: long-tail, konkrétna pozícia
- Obsah: plný detail ponuky (firma zamknutá — odomkni registráciou)

**Detail pracovníka** (`/pracovnik/marek-n`):
- Cieľ: interný (nie SEO), firma si prezerá profil
- Obsah: skúsenosti, certifikáty, dostupnosť

### Právne stránky
VOP, GDPR, Cookies — povinné pre prevádzku platformy.

---

## Prečo statické HTML (nie Framer / Webflow / React)

1. **SEO kontrola** — plná kontrola nad meta tagmi, canonical URL, Schema.org, Open Graph
2. **API napojenie** — JavaScript volá Alogator API a zobrazuje živé dáta (počty, ponuky, pracovníkov)
3. **Rýchlosť** — žiadny framework overhead, stránka sa načíta okamžite
4. **Vercel deploy** — push na GitHub = automaticky live
5. **Claude Code** — AI vie priamo editovať HTML, netreba vedieť programovať

---

## Dizajnový systém v skratke

**Boxed layout:** Každá obsahová sekcia je zabalená v karte s border-radius 24px. Svetlé sekcie = biela karta s border, tmavé sekcie = graphite karta. Medzi kartami je viditeľné porcelain pozadie. Detaily v BOXED-GUIDE.md.

**Farby:**
- Signal Orange (#E66748) — CTA, zvýraznenia, em tagy
- Graphite (#1A1D1E) — text, tmavé sekcie, footer
- Porcelain (#F9F3ED) — pozadie stránky
- Yellow (#F5D547) — badges, highlights

**Fonty:**
- Geist (heading) — v produkcii nahradiť za Gellix
- Inter (body text)
- JetBrains Mono (eyebrow, čísla, stats)

**Eyebrow pattern:** `• UPPERCASE TEXT` — mono font, malé písmo, pred každým heading

---

## Monetizačná logika (prečo cenník vyzerá ako vyzerá)

**5-tier model:**
| Tier | Cena/mes | Hodnota |
|------|----------|---------|
| Free | 0 € | Inzeráty, vidíš kandidátov, ale kontakty zmiznú po triale |
| CRM | 99 € | Spravuj vlastné kontakty |
| Kapacity | 199 € | Kalendár vlastných ľudí + featured listing |
| **Alogator** | **499 €** | **Kalendár CELEJ databázy — kto je voľný TERAZ** |
| Enterprise | custom | Hot leads, API, SSO |

**Prečo je Alogator tier za 499 € game-changer:**
Žiadna agentúra v EU nemá real-time kalendár dostupnosti tisícov remeselníkov. Firma otvorí Alogator, vidí kto je voľný o 2 týždne, a kontaktuje ho priamo. Toto je hlavný USP celej platformy.

**Trial:** 30 dní + 500 kreditov na všetky funkcie. Po triale auto-downgrade na Free.

---

## Locked/Unlocked logika (prečo niektoré veci skrývame)

**Pracovník vidí ponuky, ale firma je zamknutá** — po registrácii sa odomkne. Dôvod: zabrániť kontaktovaniu mimo platformy.

**Firma vidí pracovníkov v browse, ale profil je rozmazaný** — "Marek N.", blur foto. Po registrácii (trial/platené) sa odomkne. Dôvod: motivovať registráciu.

**Kalendár dostupnosti je len pre Alogator tier (499 €)** — toto je najhodnotnejšia funkcia, preto je za najvyšší tier.

---

## 2 jazyky: SK + CZ

Celý web existuje v dvoch jazykových verziách so zrkadlovou štruktúrou:
- `/sk/...` — slovenčina
- `/cz/...` — čeština

Každá zmena sa musí spraviť v oboch jazykoch. Obsah je preložený, nie len skopírovaný.

---

## SEO čísla (SK trh)

- 1 315 kľúčových slov, 219 690 vyhľadaní/mesiac
- Top 7 LP (Tier A) pokrýva najväčšie objemy:
  - "práca v zahraničí" — 7 650/mes
  - "zvárač zahraničie" — 5 210/mes
  - "práca v Rakúsku" — 2 620/mes
  - "elektrikár zahraničie" — 2 090/mes
  - "tesár zahraničie" — 1 810/mes
  - "práca v Nemecku" — 1 650/mes
  - "murár zahraničie" — 1 620/mes

---

## Workflow pre tím

1. Edituj súbory v Dropbox priečinku `Web/alogator-deploy-v2 2/`
2. Claude Code (Desktop app) edituje kód za teba — stačí popísať čo chceš
3. `git add . && git commit -m "popis" && git push` → Vercel automaticky deployne
4. Live na https://alogator-preview.vercel.app

**Rozcestník** (prehľad všetkých URL): `/sk/rozcestnik`

---

*Posledná aktualizácia: 8.6.2026*
