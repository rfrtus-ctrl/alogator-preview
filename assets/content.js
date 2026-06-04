// =====================================================
//  ALOGATOR · CONTENT.JS
//  Všetky texty webu na jednom mieste.
//  Editujte tu — zmeny sa prejavia automaticky po uložení.
// =====================================================

window.ALG = {

  // ─────────────────────────────────────────────────
  //  NAVIGÁCIA (zdieľaná na všetkých stránkach)
  // ─────────────────────────────────────────────────
  nav: {
    demo:  "Naplánovať demo",
    login: "Prihlásenie",
  },

  // ─────────────────────────────────────────────────
  //  FOOTER (zdieľaný)
  // ─────────────────────────────────────────────────
  footer: {
    tagline:   "Marketplace prepájajúci pracovníkov a firmy v stavebníctve a priemysle. SK · CZ · DE · AT · NL · BE.",
    copyright: "© 2026 Alogator · Profi Steel Holding · Všetky práva vyhradené",
    made_in:   "Made in Slovakia · alogator.com",
  },

  // ─────────────────────────────────────────────────
  //  DATABÁZA PRACOVNÍKOV  (/sk/databaza-pracovnikov)
  // ─────────────────────────────────────────────────
  databaza: {
    eyebrow: "Databáza pracovníkov",
    h1:      "3 047 pracovníkov<br>po <em>celej EÚ</em>",
    sub:     "Stavbárske remeslá overené v reálnom čase. Filtrujte podľa profesie, lokality, praxe, jazyka alebo certifikátu.",

    // Stats pod nadpisom
    stat1_num:   "3 047",
    stat1_label: "PRACOVNÍKOV",
    stat2_num:   "380",
    stat2_label: "AGENTÚR",
    stat3_num:   "284",
    stat3_label: "DOSTUPNÝCH IHNEĎ",

    // AI vyhľadávanie
    search_label:       "AI vyhľadávanie · opíšte koho hľadáte",
    search_placeholder: "Napríklad: Hľadám zvárača MIG/MAG do Bavorska, dostupný od júna, hovorí nemecky, vlastné auto...",

    // Filter meta
    filter_count: "284",
    filter_total: "3 047",

    // Upsell karta (tmavá)
    upsell_eyebrow: "Alogator tier",
    upsell_h3:      "Vidíte len 3 z 3 047",
    upsell_p:       "Databáza je dostupná od plánu Premium+. Získajte prístup ku všetkým profilom vrátane kalendára dostupnosti.",
    upsell_cta:     "Pozrieť plány →",

    // Načítať viac
    load_btn: "Načítať ďalších 24 pracovníkov →",
    load_sub: "Zobrazené 5 z 284 dostupných",

    // ─── KARTIČKY PRACOVNÍKOV ─────────────────────
    //  Pridajte, odstraňte alebo upravte kľúčové hodnoty.
    //  avail_type: "green" = dostupný ihneď, "soon" = čoskoro
    //  locked: true = meno/foto rozmazané, false = viditeľné
    workers: [
      {
        locked:     false,
        bg:         "#2A6496",
        initial:    "M",
        flag:       "🇸🇰",
        pro:        true,
        name:       "Marek N.",
        profession: "Elektrikár · úroveň ●●●●○",
        avail:      "Dostupný od 23.5.",
        avail_type: "green",
        rate:       "30",
        langs:      "Nemčina · Angličtina",
        firma:      "Bilfinger · DE",
        cert:       "3 cert.",
        kal:        "od 23.5.2026",
        skills:     ["MNS", "NN/VN", "Revízie"],
        rating:     "★ 5.0",
        ratings:    "12 hodnotení",
        link:       "/sk/pracovnik/marek-n",
      },
      {
        locked:     false,
        bg:         "#1A1D1E",
        initial:    "D",
        flag:       "🇨🇿",
        pro:        true,
        name:       "Daniel R.",
        profession: "Zvárač MIG/MAG · úroveň ●●●●●",
        avail:      "Od 15.6.",
        avail_type: "soon",
        rate:       "28",
        langs:      "Čeština · Nemčina · +1",
        firma:      "Siemens · DE",
        cert:       "5 cert.",
        kal:        "od 15.6.2026",
        skills:     ["MIG/MAG", "TIG 141", "WPS certif."],
        rating:     "★ 4.9",
        ratings:    "18 hodnotení",
        link:       "/sk/pracovnik/marek-n",
      },
      {
        locked:     false,
        bg:         "#E66748",
        initial:    "J",
        flag:       "🇨🇿",
        pro:        false,
        name:       "Jakub H.",
        profession: "Bagrista · Montér · úroveň ●●●○○",
        avail:      "Dostupný ihneď",
        avail_type: "green",
        rate:       "26",
        langs:      "Poľština · Angličtina · +2",
        firma:      "Strabag · AT",
        cert:       "1 cert.",
        kal:        null, // null = kalendár zamknutý
        skills:     ["Excavator", "IPAF"],
        rating:     "★ 4.7",
        ratings:    "8 hodnotení",
        link:       "/sk/pracovnik/marek-n",
      },
      {
        locked:     true, // ← zamknutá karta
        bg:         "#6B7174",
        initial:    "F",
        flag:       "🇸🇰",
        pro:        false,
        name:       "Filip P.",
        profession: "Elektrikár · meranie · 6 rokov",
        avail:      "Dostupný ihneď",
        avail_type: "green",
        rate:       "32",
        langs:      "CZ · DE",
        firma:      null,
        cert:       null,
        kal:        null,
        skills:     [],
        rating:     null,
        ratings:    null,
        link:       "/sk/cennik",
      },
      {
        locked:     true,
        bg:         "#3F4445",
        initial:    "R",
        flag:       "🇨🇿",
        pro:        false,
        name:       "Roman S.",
        profession: "Zámočník · Zvárač · 7 rokov",
        avail:      "Od 1.7.",
        avail_type: "soon",
        rate:       "25",
        langs:      "CZ · DE",
        firma:      null,
        cert:       null,
        kal:        null,
        skills:     [],
        rating:     null,
        ratings:    null,
        link:       "/sk/cennik",
      },
    ],
  },

  // ─────────────────────────────────────────────────
  //  PRACOVNÉ PONUKY  (/sk/ponuka-prace)
  // ─────────────────────────────────────────────────
  jobs: {
    eyebrow: "Pracovné ponuky",
    h1:      "Nájdi prácu<br><em>v zahraničí</em>",
    sub:     "Overené ponuky od firiem v DE, AT, NL a BE. Jasný plat, reálne podmienky — žiadne prekvapenia.",

    // Stats pod nadpisom
    stat1_num:   "247",
    stat1_label: "PONÚK",
    stat2_num:   "12",
    stat2_label: "KRAJÍN",
    stat3_num:   "89",
    stat3_label: "NOVÝCH TENTO TÝŽDEŇ",

    // AI vyhľadávanie
    search_label:       "AI vyhľadávanie · opíšte akú prácu hľadáte",
    search_placeholder: "Napríklad: Zvárač MIG/MAG, Nemecko, min. 25 €/h, nástup ihneď, hovorím nemecky...",

    // Filter meta
    filter_count: "247",

    // Upsell karta (tmavá)
    upsell_eyebrow: "Zadarmo",
    upsell_h3:      "Vidíš kontakty<br>bez poplatkov",
    upsell_p:       "Registrácia pre pracovníkov je bezplatná. Prihláste sa a uvidíte plné detaily všetkých ponúk — názov firmy, kontakt, presné podmienky.",
    upsell_cta:     "Registrovať sa zadarmo →",

    // Načítať viac
    load_btn: "Načítať ďalších 24 ponúk →",
    load_sub: "Zobrazené 5 z 247 ponúk",

    // App CTA banner (tmavý)
    app_eyebrow: "Pre pracovníkov · zadarmo",
    app_h2:      "Stiahni aplikáciu<br>a nájdi prácu za 48h",
    app_p:       "Vyplň profil raz. Firmy z DE, AT, NL a BE ťa samy kontaktujú — ty vyberieš komu odpisuješ. Žiadne poplatky, žiadne prekvapenia.",
    app_ios:     "Stiahnuť iOS →",
    app_android: "Stiahnuť Android",

    // ─── KARTIČKY PRACOVNÝCH PONÚK ────────────────
    //  badge_type: "hot" | "new" | "featured"
    //  extras: pole (napr. ["🏠 Ubytovanie"])
    cards: [
      {
        country_code:  "DE",
        country_bg:    "#1A1D1E",
        country_flag:  "🇩🇪",
        badge:         "🔥 HOT",
        badge_type:    "hot",
        profession:    "Zvárač",
        title:         "Zvárač MIG/MAG – Emsland, DE",
        location:      "Emsland, Nemecko",
        start:         "Nástup ihneď",
        extras:        ["🏠 Ubytovanie"],
        rate:          "28",
        age:           "2 dni",
        featured:      false,
        link:          "/sk/ponuka-prace/zvarac",
      },
      {
        country_code:  "NL",
        country_bg:    "#1E40AF",
        country_flag:  "🇳🇱",
        badge:         "✦ NEW",
        badge_type:    "new",
        profession:    "Elektrikár",
        title:         "Elektrikár NVQ3 – Rotterdam, NL",
        location:      "Rotterdam, Holandsko",
        start:         "1.7.2026",
        extras:        [],
        rate:          "26",
        age:           "dnes",
        featured:      false,
        link:          "/sk/ponuka-prace/elektrikar",
      },
      {
        country_code:  "AT",
        country_bg:    "#E66748",
        country_flag:  "🇦🇹",
        badge:         "⭐ Odporúčané",
        badge_type:    "featured",
        profession:    "Montér",
        title:         "Montér oceľových konštrukcií – Linz, AT",
        location:      "Linz, Rakúsko",
        start:         "Flexibilne",
        extras:        ["🏠 Ubytovanie"],
        rate:          "24",
        age:           "3 dni",
        featured:      true,
        link:          "/sk/ponuka-prace/zvarac",
      },
      {
        country_code:  "DE",
        country_bg:    "#3F4445",
        country_flag:  "🇩🇪",
        badge:         "✦ NEW",
        badge_type:    "new",
        profession:    "Tesár",
        title:         "Tesár – bytová výstavba – München, DE",
        location:      "München, Nemecko",
        start:         "Nástup ihneď",
        extras:        [],
        rate:          "25",
        age:           "dnes",
        featured:      false,
        link:          "/sk/ponuka-prace/tesar",
      },
      {
        country_code:  "BE",
        country_bg:    "#1A1D1E",
        country_flag:  "🇧🇪",
        badge:         "🔥 HOT",
        badge_type:    "hot",
        profession:    "Zvárač",
        title:         "Zvárač TIG 141 – Gent, BE",
        location:      "Gent, Belgicko",
        start:         "15.6.2026",
        extras:        [],
        rate:          "30",
        age:           "1 deň",
        featured:      false,
        link:          "/sk/ponuka-prace/zvarac",
      },
    ],
  },

};
