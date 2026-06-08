# Boxed Section Guide — Alogator Web

Každá obsahová sekcia na webe je zabalená v "karte" s border-radius 24px. Toto je pravidlo pre VŠETKY stránky (SK aj CZ).

---

## Princíp

Stránka má svetlé pozadie (`--porcelain: #F9F3ED`). Každá sekcia má padding 16px 32px — to vytvára medzeru medzi kartami. Samotný obsah je v `.container` s border-radius 24px.

```
┌─────────────────────────── section (porcelain bg, padding: 16px 32px) ─┐
│  ┌──────────────────────── .container (white/graphite, radius: 24px) ─┐ │
│  │                                                                     │ │
│  │   obsah sekcie                                                      │ │
│  │                                                                     │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3 varianty

### 1. Svetlá karta (väčšina sekcií)

```css
.nazov-sec { padding: 16px 32px; background: var(--porcelain); }
.nazov-sec .container {
  background: #fff;
  border: 1.5px solid var(--porcelain-300);   /* #E8DFD1 */
  border-radius: 24px;
  padding: 48px 32px;
  max-width: 1280px;
  margin: 0 auto;
}
```

Použitie: features, FAQ, pricing, porovnanie, SEO linky, expect-sec...

### 2. Tmavá karta (stats, ROI, "pre pracovníkov zadarmo")

```css
.nazov-sec { padding: 16px 32px; background: var(--porcelain); }
.nazov-sec .container {
  background: var(--graphite);   /* #1A1D1E */
  border-radius: 24px;
  padding: 48px 40px;
  max-width: 1280px;
  margin: 0 auto;
}
```

Text vnútri: `color: var(--porcelain)`. Bez border (graphite nepotrebuje).

### 3. CTA banner (kontakt, enterprise)

```css
.cta-sec { padding: 16px 32px; background: var(--porcelain); }
/* vnútorný banner má vlastný border-radius */
.cta-banner {
  background: var(--graphite);
  border-radius: 32px;
  padding: 56px;
}
```

Tu je radius 32px (nie 24px) — je to väčší vizuálny element.

### 4. Footer

```css
.footer { background: var(--porcelain); padding: 16px 32px 32px; }
.footer .container {
  background: var(--graphite);
  border-radius: 24px;
  padding: 48px 40px 28px;
  max-width: 1280px;
  color: var(--porcelain);
}
```

---

## Čo sa NEBOXUJE

- **Hero sekcie** (tmavé, full-width) — ostávajú bez boxu
- **Navbar** — ostáva bez boxu

---

## HTML vzor

```html
<section class="moja-sec">
  <div class="container">
    <!-- obsah -->
  </div>
</section>
```

Alebo s triedou `boxed` (ak je definovaná v CSS danej stránky):

```html
<section class="moja-sec boxed">
  <div class="container">
    <!-- obsah -->
  </div>
</section>
```

Ak stránka má `section.boxed` CSS pravidlo, stačí pridať class `boxed`. Ak nie, treba CSS dopísať ručne pre danú sekciu (viď varianty vyššie).

---

## Checklist pre novú stránku

1. Každá `<section>` okrem hero má `padding: 16px 32px`
2. Každý `.container` má `border-radius: 24px` + `max-width: 1280px` + `margin: 0 auto`
3. Svetlé sekcie: `background: #fff` + `border: 1.5px solid #E8DFD1`
4. Tmavé sekcie: `background: #1A1D1E` (bez border)
5. Footer: graphite container + `padding: 48px 40px 28px`
6. Medzi kartami je vždy viditeľná medzera (porcelain pozadie cez section padding)

---

## Farby (rýchla referencia)

| Token | Hex | Kde |
|-------|-----|-----|
| `--porcelain` | `#F9F3ED` | pozadie stránky + sekcií |
| `--porcelain-300` | `#E8DFD1` | border svetlých kariet |
| `--graphite` | `#1A1D1E` | tmavé karty, footer |
| `#fff` | biela | pozadie svetlých kariet |

---

*Posledná aktualizácia: 8.6.2026*
