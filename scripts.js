(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primaryNav');
  if (!toggle || !nav) return;

  function close() {
    toggle.classList.remove('is-open');
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function open() {
    toggle.classList.add('is-open');
    nav.classList.add('is-open');
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    if (toggle.classList.contains('is-open')) close(); else open();
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) close();
  });
})();
