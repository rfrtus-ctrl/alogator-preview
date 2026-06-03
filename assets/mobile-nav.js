/* ============ MOBILE NAV — Hamburger Menu JS ============ */
(function(){
  'use strict';

  // Detect nav structure: homepage uses .nav / .nav-mid / .nav-cta
  // Subpages use .nav-inner / .nav-links / .nav-actions
  var navContainer = document.querySelector('.nav-inner') || document.querySelector('.nav');
  if(!navContainer) return;

  var isHomepage = !document.querySelector('.nav-inner');
  var linksEl = isHomepage ? navContainer.querySelector('.nav-mid') : navContainer.querySelector('.nav-links');
  var actionsEl = isHomepage ? navContainer.querySelector('.nav-cta') : navContainer.querySelector('.nav-actions');

  // Create hamburger button
  var hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label','Menu');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  navContainer.appendChild(hamburger);

  // Create overlay
  var overlay = document.createElement('div');
  overlay.className = 'mobile-nav-overlay';
  document.body.appendChild(overlay);

  // Create mobile menu
  var menu = document.createElement('div');
  menu.className = 'mobile-nav-menu';

  // Clone links
  if(linksEl){
    var links = linksEl.querySelectorAll('a');
    links.forEach(function(a){
      var clone = a.cloneNode(true);
      menu.appendChild(clone);
    });
  }

  // Clone action buttons
  if(actionsEl){
    var actionsDiv = document.createElement('div');
    actionsDiv.className = 'mobile-nav-actions';
    var buttons = actionsEl.querySelectorAll('button, a');
    buttons.forEach(function(btn){
      var clone = btn.cloneNode(true);
      actionsDiv.appendChild(clone);
    });
    menu.appendChild(actionsDiv);
  }

  document.body.appendChild(menu);

  // Toggle
  function toggleMenu(){
    var isOpen = hamburger.classList.contains('active');
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeMenu(){
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // Close on link click
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeMenu);
  });

  // Close on resize above breakpoint
  window.addEventListener('resize', function(){
    if(window.innerWidth > 900) closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeMenu();
  });
})();
