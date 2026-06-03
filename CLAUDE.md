# CLAUDE.md — Alogator Web Project

## Čo je tento projekt

Statický HTML prototyp marketing webu pre **Alogator** — B2B/B2C marketplace pre stavebných pracovníkov (zváračov, elektrikárov, montérov...) zo SK/CZ pre firmy v DE/AT/NL/BE.

**Tri typy entít:**
- Workers (SZČO, registrácia zadarmo)
- Agentúry/Dodávatelia (B2B zákazníci — NIE konkurenti!)
- End clients (DE/AT/NL/BE firmy)

**Dôležité positioning pravidlo:** Alogator je infraštruktúra (Stripe/Booking analógia), NIE konkurent agentúr. Agentúry sú zákazníci. NIKDY nepoužiť "bez sprostredkovateľov" / "žiadne provízie" / "žiadne agentúry". Slovo "sprostredkovateľ" → "agentúra" / "dodávateľ".

---

## Deploy infra

- **Lokálny priečinok:** `~/Desktop/alogator-deploy-v2 2/`
- **Vercel projekt:** `alogator-preview-lwcq`
- **Live URL:** https://alogator-preview-lwcq.vercel.app
- **GitHub repo:** github.com/rfrtus-ctrl/alogator-preview
- **Deploy príkaz:**
  ```bash
  cd ~/Desktop/alogator-deploy-v2\ 2 && /opt/homebrew/bin/npx vercel --prod
  ```

**macOS limitácie:**
- Downloads priečinok má EPERM blok — súbory kopírovať cez Finder Cmd+C/V na Plochu
- Homebrew Node v26.0.0 na `/opt/homebrew/bin/npx`

---

## URL štruktúra a súbory

Vercel používa `cleanUrls: true`. Stránky sú buď `nazov.html` v roote (pre hlavné stránky) alebo `podpriecinok/index.html` (pre detail stránky).

### ✅ LIVE na webe
| URL | Súbor |
|-----|-------|
| `/` | `index.html` |
| `/cennik` | `cennik.html` |
| `/ako-to-funguje` | `ako-to-funguje.html` |
| `/pre-firmy` | `pre-firmy.html` |
| `/pre-pracovnikov` | `pre-pracovnikov.html` |
| `/o-nas` | `o-nas.html` |
| `/kontakt` | `kontakt.html` |
| `/vop` | `vop.html` |
| `/gdpr` | `gdpr.html` |
| `/cookies` | `cookies.html` |
| `/ponuka-prace/zvarac` | `ponuka-prace/zvarac/index.html` |
| `/ponuka/zvarac-mig-mag-emsland` | `ponuka/zvarac-mig-mag-emsland/index.html` |
| `/pracovnik/marek-n` | `pracovnik/marek-n/index.html` |
| `/databaza-pracovnikov` | `databaza-pracovnikov/index.html` |

### ⏳ TODO
- `/ponuka-prace` — Browse Jobs (fragment k dispozícii ako `alogator_browse_jobs_layout_proposal.html`)
- `/stiahnut-aplikaciu` — od nuly
- SEO Tier A LP: `/ponuka-prace/elektrikar`, `/ponuka-prace/tesar`, `/ponuka-prace/murar`, `/praca-v-zahranici`, `/praca-v-zahranici/nemecko`, `/praca-v-zahranici/rakusko`

---

## Brand systém

```css
:root {
  --signal: #E66748;        /* Signal Orange — primárna */
  --signal-dark: #D4573A;
  --signal-soft: #FDE8E0;
  --graphite: #1A1D1E;      /* Tmavá — text, pozadie nav */
  --graphite-700: #3F4445;
  --graphite-500: #6B7174;
  --graphite-200: #D9D9D6;
  --porcelain: #F9F3ED;     /* Svetlá — page background */
  --porcelain-200: #F0E8DD;
  --porcelain-300: #E8DFD1;
  --yellow: #F5D547;        /* Badges, highlights */
  --r-sm: 12px; --r-md: 20px; --r-lg: 32px; --r-xl: 44px; --r-pill: 999px;
}
```

**Fonty:**
- Gellix (corporate) — v prototypoch fallback: **Geist** (Google Fonts)
- Body: **Inter**
- Čísla/eyebrow: **JetBrains Mono**

**Eyebrow pattern:** `• UPPERCASE TEXT` — prefix je bodka `•` (nie §)

**Heading style:** Geist/Gellix, `font-weight: 500`, `letter-spacing: -0.025em`

**Em tag:** `<em>` = italic + `color: var(--signal)` — na zvýraznenie v headingoch

---

## B2B Pricing (5-tier modulárny)

| Tier | Cena | Čo obsahuje |
|------|------|-------------|
| Free | 0€ | Post-trial parking, inzeráty, kontakty zmiznú |
| CRM | 99€ | Vlastné kontakty |
| Kapacity | 199€ | Kalendár vlastných ľudí + featured listing |
| **Alogator** | **499€** | **Kalendár CELEJ databázy = game-changer** |
| Enterprise | custom | Hot leads, API, SSO |

**Worker:** vždy zadarmo.

**Trial pri registrácii firmy:** 30 dní + 500 kreditov použiteľných na VŠETKY platené funkcie (1 kontakt reveal = 20 kreditov → ~25 reveals, alebo mixovať s boost/push/AI nudge). Po triali → auto-downgrade na Free, discovered kontakty zmiznú bez Premium+ upgradu.

**Path C odporúčanie:** unlimited contact reveals v platených tieroch, kredity len pre premium akcie.

---

## B2C Locked/Unlocked logika — Ponuky práce

Pracovník **VŽDY vidí:** profesia, lokalita práce (mesto + krajina KDE sa pracuje), plat, podmienky, pôvod firmy (vlajka krajiny sídla, napr. 🇸🇰).

**ZAMKNUTÉ 🔒:** konkrétny NÁZOV firmy — odomyká sa po registrácii.

Dôvod: zabrániť priamemu kontaktu mimo platformy (anti-disintermediation). Krajina sídla je viditeľná lebo je informatívna pre pracovníka.

---

## B2B Locked/Unlocked logika — Databáza pracovníkov

Schodisko hodnoty pre firmy:
- **Anonymný browse** → "Marek N.", blur foto
- **Trial / platené tiery** → plný profil + databáza
- **Alogator 499€** → kalendár dostupnosti CELEJ databázy (to čo nikto iný nemá)

---

## Worker karty — 4 piktogramy (v tomto poradí)

1. 🌐 **Jazyky** (globe SVG) — napr. "DE · EN"
2. 💼 **Referencia/firma** (briefcase SVG) — napr. "Bilfinger"
3. 🎓 **Prax** (graduation SVG) — napr. "8 r."
4. 📅 **Kalendár / PRO badge** (calendar SVG) — "PRO" alebo "Kal. 🔒"

**Worker dáta (mockup):**
- Marek N. 🇸🇰 Elektrikár 8r. 30€/h PRO (Bilfinger)
- Daniel R. 🇨🇿 Zvárač MIG/MAG TIG 12r. 28€/h PRO (Siemens)
- Jakub H. 🇨🇿 Bagrista/Montér 5r. 26€/h Free (Strabag)

---

## Navigácia (aktuálna štruktúra)

**Navbar (tmavý background na homepage, svetlý na ostatných):**
- Logo: `<a href="/index.html">` alebo `<a href="/">`
- Linky: Databáza pracovníkov, Pracovné ponuky, Ako to funguje, Cenník, O nás
- Akcie: "Naplánovať demo" → `/kontakt.html`, "Prihlásenie" → `#`

**Footer (4 stĺpce, tmavý graphite background):**
- Stĺpec 1: Logo + tagline "Marketplace prepájajúci pracovníkov a firmy..."
- Stĺpec 2 Pre firmy: Naplánovať demo, Databáza pracovníkov, Cenník, Ako to funguje
- Stĺpec 3 Pre pracovníkov: Pracovné ponuky, Stiahnuť aplikáciu, Ako to funguje, Pre pracovníkov
- Stĺpec 4 Spoločnosť: O nás, Kontakt, VOP, GDPR, Cookies
- Eyebrow pred h4: `content: '•  '`

---

## Dôležité: href pravidlá

Na roote (hlavné stránky) používaj `.html` v odkazoch:
- `/cennik.html`, `/o-nas.html`, `/kontakt.html`, `/ako-to-funguje.html`, `/pre-firmy.html`, `/pre-pracovnikov.html`, `/gdpr.html`, `/cookies.html`, `/vop.html`

Na detail stránkach (v podpriečinkoch) používaj `/index.html` suffix:
- `/databaza-pracovnikov/index.html`, `/ponuka-prace/index.html`, `/pracovnik/marek-n/index.html`

---

## SEO Stratégia (SK)

- 1 315 kw, 219 690 vyhľadaní/mes
- **Tier A (7 LP — priorita):** `/praca-v-zahranici` (7 650/m), `/ponuka-prace/zvarac` (5 210/m), `/praca-v-zahranici/rakusko` (2 620/m), `/ponuka-prace/elektrikar` (2 090/m), `/ponuka-prace/tesar` (1 810/m), `/praca-v-zahranici/nemecko` (1 650/m), `/ponuka-prace/murar` (1 620/m)
- **Tier B:** 23 mestských LP (Prešov, Bratislava, Žilina, Košice...)
- AI search NIE na SEO stránkach — len listing + filter + obsah

---

## Team

- **Rado Frtus** — founder/CEO, vlastník projektu
- **Tibor / Wisdom Factory** — Laravel API + mobile app backend
- **Michal Močko** — CMO/CRO, robí marketing LP vo Framer
- **Profi Steel Holding** — investor/backer

**Architektonický split:**
- `alogator.com/sk` = marketing web (tento HTML projekt)
- `alogator.com/app` = WF Laravel aplikácia

---

## Čo WF musí implementovať

- Cookie consent banner
- CORS na api.alogator.com pre alogator.com doménu
- Public API endpointy: `/api/public/workers`, `/api/public/jobs`, `/api/public/professions`, `/api/public/stats`
- Schema.org JobPosting (pre Google Jobs), GA4, Meta Pixel

---

## Vercel.json (aktuálny)

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

---

*Posledná aktualizácia: 1.6.2026 · Rado Frtus*
