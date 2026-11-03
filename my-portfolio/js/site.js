/* =====================================================================
   site.js  -  opens and closes the slide-out menu (loaded on every page)

   WHAT IT AFFECTS
   It only adds / removes the class "menu-open" on the page (<body>).
   The CSS in _includes/css/main.css (section 4) does the rest: it reacts to that
   class by sliding the menu in and showing the dark layer behind it.
   The markup it controls is in _includes/nav.html.

   THE MENU CLOSES WHEN YOU: click the X, click the dark area, press Escape,
   or click one of the links.
   ===================================================================== */
(function () {
  var body = document.body;
  var toggle = document.getElementById('menu-toggle');   // the three-bar button
  var closeBtn = document.getElementById('menu-close');  // the X inside the menu
  var overlay = document.getElementById('menu-overlay'); // the dark layer
  var menu = document.getElementById('side-menu');       // the panel
  if (!toggle || !menu) return;

  function setOpen(open) {
    body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');   // for screen readers
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open && closeBtn) closeBtn.focus();
  }

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
})();
