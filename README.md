# Alogator — Preview Web (v15)

Statický HTML preview alogator.sk pre demo, sales meetings, a Framer agentúru.

## URL štruktúra

| URL | Stránka |
|---|---|
| `/` | Homepage (B2B + B2C toggle) |
| `/cennik` | Modulárny cenník (Free → CRM → Kapacity → Alogator → Enterprise) |
| `/ponuka-prace/zvarac` | SEO landing page — Zvárač |
| `/pracovnik/marek-n` | Worker Profile Detail |
| `/ponuka/zvarac-mig-mag-emsland` | Job Posting Detail |

## Štruktúra súborov

```
alogator-deploy/
├── index.html                                  Homepage v15
├── vercel.json                                 Clean URLs + security headers
├── robots.txt                                  Block indexing (preview)
├── 404.html                                    Custom brand 404
├── cennik/
│   └── index.html                              Cenník v2 (modulárny)
├── ponuka-prace/zvarac/
│   └── index.html                              SEO LP Zvárač
├── pracovnik/marek-n/
│   └── index.html                              Worker Profile
└── ponuka/zvarac-mig-mag-emsland/
    └── index.html                              Job Detail
```

## Deploy na Vercel

### Cez GitHub (odporúčané — auto-deploy pri každom commite)

1. Push obsah repa do `github.com/rfrtus-ctrl/alogator-preview`
2. Vercel automaticky rebuilduje (~30 s)
3. Live na `alogator-preview.vercel.app`

### Cez Vercel CLI

```bash
cd alogator-deploy
npx vercel
```

## Brand systém

- **Farby:** Signal `#E66748`, Graphite `#1A1D1E`, Porcelain `#F9F3ED`, Yellow `#F5D547`
- **Fonty:** Geist (headlines), Inter (body), JetBrains Mono (čísla/eyebrows)
- **Eyebrow:** `• ` symbol + Mono uppercase
- **Border radius:** 12 / 20 / 32 / 44 / 999px

## Limity preview

- Statický HTML — formuláre nefungujú
- Žiadne reálne dáta (placeholdery)
- Žiadny CMS — úpravy obsahu cez kód
- Pre full produkčný build → Framer agentúra

## Kontakt

Rado Frtus · `r.frtus@gmail.com`

§ Alogator · 2026
