// content-apply.js — aplikuje ALG_CONTENT na stránku
(function () {
  if (typeof window.ALG === 'undefined') return;
  const C = window.ALG;

  // ── 1. Jednoduché text-elementy (data-c="sekcia.kluc") ──
  document.querySelectorAll('[data-c]').forEach(el => {
    const path = el.dataset.c.split('.');
    let val = C;
    for (const k of path) val = val?.[k];
    if (val !== undefined && val !== null) el.innerHTML = val;
  });

  // ── 1b. Placeholder atribúty (data-c-placeholder="sekcia.kluc") ──
  document.querySelectorAll('[data-c-placeholder]').forEach(el => {
    const path = el.dataset.cPlaceholder.split('.');
    let val = C;
    for (const k of path) val = val?.[k];
    if (val !== undefined && val !== null) el.placeholder = val;
  });

  // ── 2. Renderovanie kariet pracovných ponúk ──
  const jobGrid = document.getElementById('job-grid-dynamic');
  if (jobGrid && C.jobs?.cards) {
    const badgeClass = { hot: 'hot', new: 'new-badge', featured: 'featured-badge' };
    const cards = C.jobs.cards.map(j => `
      <a href="${j.link}" class="job-card${j.featured ? ' featured' : ''}">
        <div class="job-card-top">
          <div class="job-logo" style="background:${j.country_bg};">${j.country_code}</div>
          <span class="job-badge ${badgeClass[j.badge_type] || ''}">${j.badge}</span>
        </div>
        <div class="job-profession">${j.profession}</div>
        <div class="job-title">${j.title}</div>
        <div class="job-company">
          <span class="job-company-lock">🔒 Prihláste sa pre názov firmy</span>
          <span>${j.country_flag}</span>
        </div>
        <div class="job-meta">
          <span class="job-meta-item">📍 ${j.location}</span>
          <span class="job-meta-item">🗓 ${j.start}</span>
          ${j.extras.map(e => `<span class="job-meta-item">${e}</span>`).join('')}
        </div>
        <div class="job-footer">
          <div class="job-rate">${j.rate} €<span> / hod</span></div>
          <div class="job-footer-right">
            <button class="job-bookmark" onclick="return false">🔖</button>
            <span class="job-ago">${j.age}</span>
            <span class="job-cta">Zobraziť →</span>
          </div>
        </div>
      </a>`).join('');

    // Upsell karta
    const upsell = `
      <div class="upsell-card">
        <div class="eyebrow">${C.jobs.upsell_eyebrow}</div>
        <h3>${C.jobs.upsell_h3}</h3>
        <p>${C.jobs.upsell_p}</p>
        <a href="/app" class="btn-primary">${C.jobs.upsell_cta}</a>
      </div>`;

    jobGrid.innerHTML = cards + upsell;
  }

  // ── 3. Renderovanie kariet pracovníkov ──
  const workerGrid = document.getElementById('worker-grid-dynamic');
  if (workerGrid && C.databaza?.workers) {
    const alogatorIcon = `<span class="card-alogator-icon"><svg width="8" height="8" viewBox="0 0 10 10" fill="white"><polygon points="5,0 9.33,2.5 9.33,7.5 5,10 0.67,7.5 0.67,2.5"/></svg></span>`;
    const globeSVG  = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
    const briefSVG  = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`;
    const certSVG   = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;
    const calSVG    = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;

    const cards = C.databaza.workers.map(w => {
      if (w.locked) {
        return `
        <div class="worker-card locked-card">
          <div class="card-top">
            <div class="card-avatar-wrap">
              <div class="card-avatar blur-avatar" style="background:${w.bg};">
                ${w.initial}<span class="card-avatar-flag">${w.flag}</span>
              </div>
              <div>
                <div class="card-name blurred">${w.name}</div>
                <div class="card-profession">${w.profession}</div>
              </div>
            </div>
            <div class="card-badges">
              <span class="badge-avail${w.avail_type === 'soon' ? ' soon' : ''}">${w.avail}</span>
            </div>
          </div>
          <div class="card-rate">
            <span class="card-rate-prefix">od:</span>
            <span class="card-rate-num">${w.rate} €</span>
            <span class="card-rate-unit">/ hod</span>
          </div>
          <div class="card-picts">
            ${w.langs ? `<span class="card-pict">${globeSVG} ${w.langs}</span>` : ''}
          </div>
          <div class="card-lock-row">
            <div class="lock-info"><span class="lock-icon">🔒</span><span>Prístup od Premium+</span></div>
            <a href="/sk/cennik" class="card-cta locked">Odomknúť →</a>
          </div>
        </div>`;
      }
      return `
      <a href="${w.link}" class="worker-card">
        <div class="card-top">
          <div class="card-avatar-wrap">
            <div class="card-avatar" style="background:${w.bg};">
              ${w.initial}
              <span class="card-avatar-flag">${w.flag}</span>
              ${w.pro ? alogatorIcon : ''}
            </div>
            <div>
              <div class="card-name">${w.name}</div>
              <div class="card-profession">${w.profession}</div>
            </div>
          </div>
          <div class="card-badges">
            <span class="badge-avail${w.avail_type === 'soon' ? ' soon' : ''}">${w.avail}</span>
          </div>
        </div>
        <div class="card-rate">
          <span class="card-rate-prefix">od:</span>
          <span class="card-rate-num">${w.rate} €</span>
          <span class="card-rate-unit">/ hod</span>
        </div>
        <div class="card-picts">
          ${w.langs ? `<span class="card-pict">${globeSVG} ${w.langs}</span>` : ''}
          ${w.firma ? `<span class="card-pict">${briefSVG} ${w.firma}</span>` : ''}
          ${w.cert  ? `<span class="card-pict">${certSVG} ${w.cert}</span>` : ''}
          ${w.kal   ? `<span class="card-pict">${calSVG} ${w.kal}</span>` : `<span class="card-pict" style="opacity:0.45">${calSVG} Kal. 🔒</span>`}
        </div>
        ${w.skills.length ? `<div class="card-skill-tags">${w.skills.map(s => `<span class="card-skill-tag">${s}</span>`).join('')}</div>` : ''}
        <div class="card-lock-row">
          <div class="lock-info">
            ${w.rating ? `<span>${w.rating}</span><span style="color:var(--graphite-200)">·</span><span>${w.ratings}</span>` : ''}
          </div>
          <span class="card-cta">Zobraziť profil</span>
        </div>
      </a>`;
    }).join('');

    const upsell = `
      <div class="upsell-card">
        <div class="eyebrow">${C.databaza.upsell_eyebrow}</div>
        <h3>${C.databaza.upsell_h3}</h3>
        <p>${C.databaza.upsell_p}</p>
        <a href="/sk/cennik" class="btn-primary">${C.databaza.upsell_cta}</a>
      </div>`;

    workerGrid.innerHTML = cards + upsell;
  }

})();
