/* ═══════════════════════════════════════════════════════
   VINCLE CADAQUÉS — Cookies + Google Analytics 4
   GA solo se carga si el usuario acepta las cookies.
   ═══════════════════════════════════════════════════════ */

(function () {
  // ⚠️ Reemplazar por el ID real de Google Analytics 4 (Admin → Flujos de datos)
  var GA_ID = 'G-XXXXXXXXXX';

  var STORAGE_KEY = 'vincle-cookies';
  var banner = document.getElementById('cookieBanner');
  var btnAccept = document.getElementById('ckAccept');
  var btnReject = document.getElementById('ckReject');

  function loadGA() {
    if (GA_ID === 'G-XXXXXXXXXX') return; // aún sin configurar
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function getChoice() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function setChoice(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* modo privado */ }
  }

  function hideBanner() {
    banner.classList.remove('visible');
    setTimeout(function () { banner.hidden = true; }, 400);
  }

  var choice = getChoice();

  if (choice === 'accepted') {
    loadGA();
  } else if (choice !== 'rejected' && banner) {
    banner.hidden = false;
    requestAnimationFrame(function () { banner.classList.add('visible'); });
  }

  if (btnAccept) btnAccept.addEventListener('click', function () {
    setChoice('accepted');
    hideBanner();
    loadGA();
  });

  if (btnReject) btnReject.addEventListener('click', function () {
    setChoice('rejected');
    hideBanner();
  });

  // Permite reabrir el banner desde la política de cookies (#configurar-cookies)
  window.vincleResetCookies = function () {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    location.reload();
  };
})();
