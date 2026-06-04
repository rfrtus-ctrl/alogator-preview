// content-apply.js — aplikuje texty z content.js na stránku
(function () {
  if (typeof window.ALG === 'undefined') return;
  const C = window.ALG;

  // Nahradí innerHTML elementov s atribútom data-c="sekcia.kluc"
  document.querySelectorAll('[data-c]').forEach(el => {
    const path = el.dataset.c.split('.');
    let val = C;
    for (const k of path) val = val?.[k];
    if (val !== undefined && val !== null) el.innerHTML = val;
  });

  // Nahradí placeholder elementov s atribútom data-c-placeholder="sekcia.kluc"
  document.querySelectorAll('[data-c-placeholder]').forEach(el => {
    const path = el.dataset.cPlaceholder.split('.');
    let val = C;
    for (const k of path) val = val?.[k];
    if (val !== undefined && val !== null) el.placeholder = val;
  });

})();
