/* ==========================================================================
   Alogator — Cookie consent + analytics loader
   --------------------------------------------------------------------------
   GDPR-friendly: nič sa nenačíta kým užívateľ nedá súhlas.
   Analytika sa spustí LEN ak:
     1) sú vyplnené reálne ID nižšie (GA4_ID / META_PIXEL_ID), a
     2) užívateľ klikol "Prijať".
   Kým sú ID prázdne (''), banner sa zobrazí ale žiadny tracking sa nenačíta
   — bezpečné pre preview / pred launchom.
   ========================================================================== */
(function () {
  'use strict';

  // === KONFIGURÁCIA — sem vlož reálne ID pri launchi ===
  var GA4_ID = '';          // napr. 'G-XXXXXXXXXX'
  var META_PIXEL_ID = '';   // napr. '1234567890'
  // ======================================================

  var STORAGE_KEY = 'alogator_consent_v1';
  var CONSENT = (function () {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  })();

  // --- Načítanie analytiky (len po súhlase + ak sú ID) ---
  function loadAnalytics() {
    if (GA4_ID) {
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', GA4_ID, { anonymize_ip: true });
    }
    if (META_PIXEL_ID) {
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
        s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', META_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }

  function setConsent(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
    CONSENT = value;
    removeBanner();
    if (value === 'accepted') loadAnalytics();
  }

  function removeBanner() {
    var el = document.getElementById('alg-cookie-banner');
    if (el) el.parentNode.removeChild(el);
  }

  // --- Banner UI (brand štýl) ---
  function renderBanner() {
    if (document.getElementById('alg-cookie-banner')) return;
    var wrap = document.createElement('div');
    wrap.id = 'alg-cookie-banner';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-label', 'Súhlas s cookies');
    wrap.innerHTML = [
      '<div class="alg-cc-inner">',
      '  <div class="alg-cc-text">',
      '    <strong>Používame cookies</strong>',
      '    Nevyhnutné cookies sú vždy aktívne. Analytické cookies (Google Analytics, Meta) ',
      '    nám pomáhajú zlepšovať web — spustíme ich len s vaším súhlasom. ',
      '    <a href="/sk/cookies">Viac o cookies</a>.',
      '  </div>',
      '  <div class="alg-cc-actions">',
      '    <button type="button" class="alg-cc-btn alg-cc-decline" id="alg-cc-decline">Len nevyhnutné</button>',
      '    <button type="button" class="alg-cc-btn alg-cc-accept" id="alg-cc-accept">Prijať všetky</button>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(wrap);
    document.getElementById('alg-cc-accept').addEventListener('click', function () { setConsent('accepted'); });
    document.getElementById('alg-cc-decline').addEventListener('click', function () { setConsent('declined'); });
  }

  // --- Štýly bannera (inline, aby nezávisel od page CSS) ---
  function injectStyles() {
    if (document.getElementById('alg-cc-styles')) return;
    var css = [
      '#alg-cookie-banner{position:fixed;left:0;right:0;bottom:0;z-index:9999;',
      'background:#1A1D1E;color:#F9F3ED;font-family:Inter,system-ui,sans-serif;',
      'box-shadow:0 -4px 24px rgba(0,0,0,.25);animation:algccUp .35s ease}',
      '@keyframes algccUp{from{transform:translateY(100%)}to{transform:translateY(0)}}',
      '.alg-cc-inner{max-width:1280px;margin:0 auto;padding:18px 24px;display:flex;',
      'gap:24px;align-items:center;justify-content:space-between;flex-wrap:wrap}',
      '.alg-cc-text{font-size:13px;line-height:1.55;color:rgba(249,243,237,.75);max-width:760px}',
      '.alg-cc-text strong{display:block;color:#F9F3ED;font-family:Geist,sans-serif;',
      'font-weight:500;font-size:15px;margin-bottom:4px;letter-spacing:-.01em}',
      '.alg-cc-text a{color:#E66748;text-decoration:underline}',
      '.alg-cc-actions{display:flex;gap:10px;flex-shrink:0}',
      '.alg-cc-btn{border:0;border-radius:999px;padding:11px 22px;font-family:Geist,sans-serif;',
      'font-weight:500;font-size:13.5px;cursor:pointer;transition:all .15s;white-space:nowrap}',
      '.alg-cc-decline{background:transparent;color:#F9F3ED;border:1px solid rgba(249,243,237,.25)}',
      '.alg-cc-decline:hover{background:rgba(249,243,237,.1)}',
      '.alg-cc-accept{background:#E66748;color:#F9F3ED}',
      '.alg-cc-accept:hover{background:#D4573A}',
      '@media(max-width:640px){.alg-cc-inner{flex-direction:column;align-items:stretch;gap:14px}',
      '.alg-cc-actions{justify-content:stretch}.alg-cc-btn{flex:1}}'
    ].join('');
    var st = document.createElement('style');
    st.id = 'alg-cc-styles';
    st.textContent = css;
    document.head.appendChild(st);
  }

  // --- Init ---
  function init() {
    if (CONSENT === 'accepted') { loadAnalytics(); return; }
    if (CONSENT === 'declined') { return; }
    injectStyles();
    renderBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
