// ── Back to top button ──
(function () {
  var btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '&#8593;';
  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 320) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ── Page transitions ──
(function () {
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    // Only intercept internal same-site .html links
    var isInternal = !href.startsWith('http') &&
                     !href.startsWith('mailto') &&
                     !href.startsWith('#') &&
                     !link.hasAttribute('target');

    if (!isInternal) return;

    e.preventDefault();
    document.body.classList.add('fade-out');

    setTimeout(function () {
      window.location.href = href;
    }, 260);
  });
})();
