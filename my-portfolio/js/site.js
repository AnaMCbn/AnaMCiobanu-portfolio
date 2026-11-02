// Slide-out menu: open with the button, close with X, the dark overlay,
// the Escape key, or by choosing a link.
(function () {
  var body = document.body;
  var toggle = document.getElementById('menu-toggle');
  var closeBtn = document.getElementById('menu-close');
  var overlay = document.getElementById('menu-overlay');
  var menu = document.getElementById('side-menu');
  if (!toggle || !menu) return;

  function setOpen(open) {
    body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
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
