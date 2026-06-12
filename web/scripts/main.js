// ═══════════════════════════════════════════════════════
// VINCLE CADAQUÉS — Main Script
// GSAP + ScrollTrigger animations
// ═══════════════════════════════════════════════════════

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────
// NAV — scroll state & mobile toggle
// ─────────────────────────────────────────
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// ─────────────────────────────────────────
// HERO — entrance animation on page load
// Use fromTo() to explicitly define start+end states
// (avoids ambiguity when CSS also sets opacity:0)
// ─────────────────────────────────────────
const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTL
  .fromTo('.hero-eyebrow',
    { opacity: 0, y: 18 },
    { opacity: 1, y: 0, duration: 0.9, delay: 0.2 })
  .fromTo('.hero-word',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.1, stagger: 0.18 }, '-=0.5')
  .fromTo('.hero-sub',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.8 }, '-=0.55')
  .fromTo('.hero-actions',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7 }, '-=0.45')
  .fromTo('.hero-scroll',
    { opacity: 0 },
    { opacity: 1, duration: 0.6 }, '-=0.25')
  .fromTo('.hero-marquee',
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');

// ─────────────────────────────────────────
// PARALLAX — image sections
// ─────────────────────────────────────────
function parallaxImg(imgSelector, triggerSelector) {
  gsap.to(imgSelector, {
    y: '-16%',
    ease: 'none',
    scrollTrigger: {
      trigger: triggerSelector,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
}

parallaxImg('.restaurante .parallax-img', '.restaurante');
parallaxImg('.equipo .parallax-img',      '.equipo');
parallaxImg('.espacio-bg',                '.espacio');

// ─────────────────────────────────────────
// HELPER — simple fade+slide reveal
// ─────────────────────────────────────────
function reveal(selector, trigger, options = {}) {
  const {
    y         = 30,
    duration  = 0.85,
    stagger   = 0,
    delay     = 0,
    start     = 'top 82%',
  } = options;

  gsap.from(selector, {
    opacity: 0,
    y,
    duration,
    stagger,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: trigger || selector,
      start,
      toggleActions: 'play none none none',
    },
  });
}

// ─────────────────────────────────────────
// EL RESTAURANTE — scroll animations
// ─────────────────────────────────────────
reveal('.restaurante-media .parallax-wrap', '.restaurante-media', { y: 40 });

reveal('.restaurante-body .section-index', '.restaurante-body', { y: 20 });
reveal('.restaurante-body .section-title', '.restaurante-body', { y: 40, delay: 0.1 });
reveal('.restaurante-body .body-text',     '.restaurante-body', { y: 24, stagger: 0.15, delay: 0.2 });
reveal('.restaurante-quote',               '.restaurante-body', { y: 20, delay: 0.3 });
reveal('.stat',                            '.stats',            { y: 20, stagger: 0.1 });

// ─────────────────────────────────────────
// LA COCINA — scroll animations
// ─────────────────────────────────────────
reveal('.cocina-header .section-index','.cocina-header', { y: 20 });
reveal('.cocina-header .section-title','.cocina-header', { y: 35, delay: 0.1 });
reveal('.cocina-sub',                  '.cocina-header', { y: 20, delay: 0.2 });

reveal('.dish', '.dishes', { y: 45, stagger: 0.1 });

reveal('.cocina-footer', '.cocina-footer', { y: 24, start: 'top 90%' });

// VINOS — scroll animations
reveal('.vinos-header .section-index', '.vinos-header', { y: 20 });
reveal('.vinos-header .section-title', '.vinos-header', { y: 35, delay: 0.1 });
reveal('.vinos-sub',                   '.vinos-header', { y: 20, delay: 0.2 });

// ─────────────────────────────────────────
// EL EQUIPO — scroll animations
// ─────────────────────────────────────────
reveal('.equipo-content .section-index', '.equipo-content', { y: 20 });
reveal('.equipo-content .section-title', '.equipo-content', { y: 35, delay: 0.1 });

reveal('.equipo-persona', '.equipo-grid', {
  y: 30,
  stagger: 0.2,
  delay: 0.15,
});

reveal('.equipo-media .parallax-wrap', '.equipo-media', { y: 40 });

// ─────────────────────────────────────────
// EL ESPACIO — scroll animations
// ─────────────────────────────────────────
reveal('.espacio-content .section-index', '.espacio-content', { y: 20, start: 'top 90%' });
reveal('.espacio-content .section-title', '.espacio-content', { y: 40, delay: 0.1, start: 'top 90%' });
reveal('.espacio-text',                   '.espacio-content', { y: 24, delay: 0.2, start: 'top 90%' });

gsap.from('.espacio-tags li', {
  opacity: 0,
  x: -20,
  duration: 0.5,
  stagger: 0.1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.espacio-tags',
    start: 'top 92%',
    toggleActions: 'play none none none',
  },
});

// ─────────────────────────────────────────
// LA MURALLA — scroll animations
// ─────────────────────────────────────────
reveal('.historia-body .section-index', '.historia-body', { y: 20 });
reveal('.historia-body .section-title', '.historia-body', { y: 35, delay: 0.1 });
reveal('.historia-body .body-text',     '.historia-body', { y: 24, stagger: 0.15, delay: 0.2 });
reveal('.mapa-frame',                   '.historia-media', { y: 40 });

// ─────────────────────────────────────────
// LA MURALLA — pin fijado (left: 44.3% / top: 53.3% en el HTML)
// Limpieza del ajuste temporal guardado en localStorage
// ─────────────────────────────────────────
localStorage.removeItem('vincle-pin');

// ─────────────────────────────────────────
// CONTACTO — tabs + envío de formularios (FormSubmit AJAX)
// ─────────────────────────────────────────
reveal('.contacto-header .section-index', '.contacto-header', { y: 20 });
reveal('.contacto-header .section-title', '.contacto-header', { y: 35, delay: 0.1 });
reveal('.contacto-tabs',                  '.contacto-tabs',   { y: 20, start: 'top 90%' });

const FORM_EMAIL = 'adriavallma@gmail.com'; // ← cambiar por el email del restaurante

const tabs = [
  { tab: document.getElementById('tabEventos'), panel: document.getElementById('formEventosPanel') },
  { tab: document.getElementById('tabTrabajo'), panel: document.getElementById('formTrabajoPanel') },
];

tabs.forEach(({ tab, panel }) => {
  tab?.addEventListener('click', () => {
    tabs.forEach(({ tab: t, panel: p }) => {
      const active = t === tab;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
      p.hidden = !active;
    });
  });
});

function bindForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  const status = form.querySelector('.form-status');
  const submitBtn = form.querySelector('.form-submit');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    submitBtn.setAttribute('disabled', '');
    status.textContent = 'Enviando…';
    status.className = 'form-status';

    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Respuesta no válida');
      form.reset();
      status.textContent = '¡Recibido! Te responderemos muy pronto. Gracias.';
      status.className = 'form-status ok';
    } catch (err) {
      status.textContent = 'No se pudo enviar. Llámanos al +34 623 21 31 55 o escríbenos por Instagram.';
      status.className = 'form-status error';
    } finally {
      submitBtn.removeAttribute('disabled');
    }
  });
}

bindForm('formEventos');
bindForm('formTrabajo');

// ─────────────────────────────────────────
// RESERVAR — scroll animations
// ─────────────────────────────────────────
reveal('.reservar-content .section-index', '.reservar-content', { y: 20 });
reveal('.reservar-content .section-title', '.reservar-content', { y: 35, delay: 0.1 });
reveal('.reservar-content .body-text',     '.reservar-content', { y: 20, delay: 0.2 });
reveal('.reservar-btns',                   '.reservar-btns',    { y: 20, start: 'top 88%' });

reveal('.horarios-title', '.horarios', { y: 20 });

gsap.from('.horario-row', {
  opacity: 0,
  x: 25,
  duration: 0.55,
  stagger: 0.1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.horarios-list',
    start: 'top 85%',
    toggleActions: 'play none none none',
  },
});

reveal('.reservar-address', '.reservar-address', { y: 16, start: 'top 92%' });

// ─────────────────────────────────────────
// FOOTER — scroll animations
// ─────────────────────────────────────────
gsap.from('.footer-bigword', {
  opacity: 0,
  y: 60,
  duration: 1.1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.footer',
    start: 'top 88%',
    toggleActions: 'play none none none',
  },
});

gsap.from('.footer-top > *', {
  opacity: 0,
  y: 25,
  duration: 0.7,
  stagger: 0.12,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.footer',
    start: 'top 92%',
    toggleActions: 'play none none none',
  },
});


// ─────────────────────────────────────────
// GOOGLE MAPS — mapa oscuro + horario en vivo
// Callback que invoca el script de Maps API
// ─────────────────────────────────────────
function initVincleMap() {
  const position = { lat: 42.2886832, lng: 3.2769862 };

  const mapStyles = [
    { elementType: 'geometry',                      stylers: [{ color: '#1c1c1a' }] },
    { elementType: 'labels.text.stroke',            stylers: [{ color: '#1c1c1a' }] },
    { elementType: 'labels.text.fill',              stylers: [{ color: '#9c8e7c' }] },
    { featureType: 'water',                         stylers: [{ color: '#1e2e3e' }] },
    { featureType: 'landscape',                     stylers: [{ color: '#1c1c1a' }] },
    { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2a2a28' }] },
    { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: '#7a6e60' }] },
    { featureType: 'road.arterial', elementType: 'labels.text.fill', stylers: [{ color: '#8a7e6e' }] },
    { featureType: 'poi',                           elementType: 'geometry', stylers: [{ color: '#181816' }] },
    { featureType: 'poi',                           elementType: 'labels',   stylers: [{ visibility: 'off' }] },
    { featureType: 'poi.park',                      stylers: [{ color: '#1a2018' }] },
    { featureType: 'transit',                       stylers: [{ visibility: 'off' }] },
    { featureType: 'administrative.locality',       elementType: 'labels.text.fill', stylers: [{ color: '#c8b09a' }] },
    { featureType: 'administrative.neighborhood',   elementType: 'labels.text.fill', stylers: [{ color: '#8c7c68' }] },
  ];

  const map = new google.maps.Map(document.getElementById('vincle-map'), {
    zoom: 16,
    center: position,
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_BOTTOM },
    gestureHandling: 'cooperative',
  });

  const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="116" height="44" viewBox="0 0 116 44">
    <rect x="0.5" y="0.5" width="115" height="34" rx="17" fill="#5c1422" stroke="rgba(243,238,227,0.35)" stroke-width="1"/>
    <text x="58" y="22" text-anchor="middle"
      font-family="Georgia, 'Times New Roman', serif"
      font-size="12" font-style="italic" font-weight="400"
      fill="#f3eee3" letter-spacing="0.04em">Vincle Cadaqués</text>
    <polygon points="50,34 58,43 66,34" fill="#5c1422"/>
  </svg>`;

  new google.maps.Marker({
    position,
    map,
    title: 'Restaurant Vincle Cadaqués',
    icon: {
      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(pinSvg),
      scaledSize: new google.maps.Size(116, 44),
      anchor:     new google.maps.Point(58, 43),
    },
  });

  // Busca el Place ID dinámicamente y carga los horarios en vivo
  const service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery({
    query: 'Restaurant Vincle Cadaqués Carrer Vigilant 8 Cadaqués',
    fields: ['place_id'],
    locationBias: position,
  }, (results, status) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK || !results?.[0]) return;
    service.getDetails({
      placeId: results[0].place_id,
      fields: ['opening_hours', 'reviews'],
    }, (place, s) => {
      if (s !== google.maps.places.PlacesServiceStatus.OK) return;
      if (place?.opening_hours) updateHorarios(place.opening_hours);
      if (place?.reviews)       renderTestimonios(place.reviews);
    });
  });

}


function renderTestimonios(reviews) {
  const container = document.getElementById('testimonios');
  if (!container) return;

  const cinco = reviews
    .filter(r => r.rating === 5 && r.text?.trim().length > 20)
    .slice(0, 3);

  if (!cinco.length) return;

  container.innerHTML = cinco.map(r => {
    const text = r.text.length > 200 ? r.text.slice(0, 200).trimEnd() + '…' : r.text;
    return `<figure class="testimonio">
      <div class="testimonio-stars" aria-label="5 estrellas">★★★★★</div>
      <blockquote class="testimonio-text">"${text}"</blockquote>
      <figcaption class="testimonio-autor">— ${r.author_name}</figcaption>
    </figure>`;
  }).join('');
}

function updateHorarios(openingHours) {
  const list = document.getElementById('horarios-list');
  if (!list || !openingHours?.weekday_text?.length) return;

  list.innerHTML = openingHours.weekday_text.map(dayText => {
    const colonIdx = dayText.indexOf(':');
    const day   = dayText.slice(0, colonIdx);
    const hours = dayText.slice(colonIdx + 2);
    const closed = /cerrado/i.test(hours);
    const dayLabel = day.charAt(0).toUpperCase() + day.slice(1);
    return `<div class="horario-row${closed ? ' horario-cerrado' : ''}">
      <dt>${dayLabel}</dt>
      <span class="horario-sep" aria-hidden="true"></span>
      <dd>${hours}</dd>
    </div>`;
  }).join('');

  const badge = document.getElementById('horario-live-badge');
  if (badge) badge.removeAttribute('hidden');
}

// ─────────────────────────────────────────
// SMOOTH scroll for anchor links
// ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = nav.offsetHeight;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
