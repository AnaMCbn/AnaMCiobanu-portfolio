/* =====================================================================
   site.js  -  small helpers loaded on every page

   1. SLIDE-OUT MENU. Opens and closes the menu. It only adds / removes the class
      "menu-open" on the page (<body>); the CSS in _includes/css/main.css (section 4)
      does the rest. The markup is in _includes/nav.html.
      The menu closes when you: click the X, click the dark area, press Escape,
      or click one of the links.

   2. NO STUCK HIGHLIGHT AFTER "BACK". When you click a card and then come back with the
      browser's Back button, the card could still look highlighted: the page is restored
      exactly as you left it (the link still has focus and the mouse has not moved).
      So when a page is shown, this script clears the focus and adds the class "hover-off"
      to <html>; the card hover effect (main.css, section 8) stays off until the mouse moves.
   ===================================================================== */
(function () {
  var body = document.body;
  var root = document.documentElement;
  var toggle = document.getElementById('menu-toggle');   // the three-line button
  var closeBtn = document.getElementById('menu-close');  // the X inside the menu
  var overlay = document.getElementById('menu-overlay'); // the dark layer
  var menu = document.getElementById('side-menu');       // the panel

  // ---- 1. slide-out menu ------------------------------------------------
  if (toggle && menu) {
    var setOpen = function (open) {
      body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');   // for screen readers
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (open && closeBtn) closeBtn.focus();
    };

    toggle.addEventListener('click', function () {
      setOpen(!body.classList.contains('menu-open'));
    });
    if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });
    if (overlay) overlay.addEventListener('click', function () { setOpen(false); });
    menu.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // ---- 2. no stuck highlight after Back -----------------------------------
  function hoverOff() { root.classList.add('hover-off'); }
  function hoverOn() { root.classList.remove('hover-off'); }

  window.addEventListener('pageshow', function () {      // page opened OR restored with Back
    var a = document.activeElement;
    if (a && a !== document.body && a.blur && !(menu && menu.contains(a))) a.blur();
    hoverOff();
  });
  window.addEventListener('pagehide', hoverOff);         // leaving the page
  window.addEventListener('mousemove', hoverOn, { passive: true });
})();
