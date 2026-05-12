'use strict';

/* Analytics bootstrap (Plausible + custom fallback event) */
const ANALYTICS_DOMAIN = 'wecodestudio.com';

function loadAnalytics() {
  if (window.plausible) return;
  const script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = ANALYTICS_DOMAIN;
  script.src = 'https://plausible.io/js/script.tagged-events.js';
  document.head.appendChild(script);
}

function trackEvent(name, props = {}) {
  if (typeof window.plausible === 'function') {
    window.plausible(name, { props });
  }
  window.dispatchEvent(new CustomEvent('wcs:track', { detail: { name, props } }));
}

loadAnalytics();

/* Language toggle — navigates between ES and EN versions */
const languageButton = document.getElementById('lb');
if (languageButton) {
  const esMap = {
    '/': '/en',
    '/servicios': '/en/services',
    '/portafolio': '/en/portfolio',
    '/contacto': '/en/contact',
    '/privacidad': '/en/privacy',
    '/terminos': '/en/terms'
  };
  const enMap = {
    '/en': '/',
    '/en/services': '/servicios',
    '/en/portfolio': '/portafolio',
    '/en/contact': '/contacto',
    '/en/privacy': '/privacidad',
    '/en/terms': '/terminos'
  };
  languageButton.addEventListener('click', () => {
    const path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/+$/, '') || '/';
    const isSpanish = document.documentElement.lang === 'es';
    const map = isSpanish ? esMap : enMap;
    window.location.href = map[path] || (isSpanish ? '/en' : '/');
  });
}

/* Scroll-reveal observer */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.rv').forEach((el) => revealObserver.observe(el));

/* Generic click tracking for core conversion actions */
document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('click', () => {
    const explicitEvent = el.dataset.track;
    const href = el.getAttribute('href') || '';
    const label = (el.textContent || '').trim().slice(0, 80);

    if (explicitEvent) {
      trackEvent(explicitEvent, { href, label });
      return;
    }

    if (href.includes('wa.me')) {
      trackEvent('click_whatsapp', { href, label });
      return;
    }

    if (href.startsWith('mailto:')) {
      trackEvent('click_email', { href, label });
      return;
    }

    if (href.includes('netlify.app') || href.includes('onrender.com') || href.includes('github.io')) {
      trackEvent('click_portfolio_demo', { href, label });
      return;
    }

    if (el.classList.contains('btn-cta')) {
      trackEvent('click_nav_cta', { href, label });
      return;
    }

    if (el.classList.contains('btn-p')) {
      trackEvent('click_primary_cta', { href, label });
      return;
    }

    if (el.classList.contains('btn-g')) {
      trackEvent('click_secondary_cta', { href, label });
    }
  });
});

/* Contact form (Formspree) */
const contactForm = document.querySelector('form[name="contact"]');
if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const lang = document.documentElement.lang;
    trackEvent('submit_contact_attempt', { path: window.location.pathname, lang });

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = lang === 'es' ? 'Enviando...' : 'Sending...';
    }

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error('Form submission failed');

      const nextInput = contactForm.querySelector('input[name="_next"]');
      trackEvent('submit_contact_success', { path: window.location.pathname, lang });
      contactForm.reset();
      window.location.href = nextInput ? nextInput.value : '/gracias';
    } catch {
      trackEvent('submit_contact_error', { path: window.location.pathname, lang });
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = lang === 'es' ? 'Enviar mensaje →' : 'Send message →';
      }
      alert(lang === 'es'
        ? 'No se pudo enviar el formulario. Intentá de nuevo en unos minutos.'
        : 'The form could not be sent. Please try again in a few minutes.');
    }
  });
}

/* Phone field — strip non-numeric characters (allow +, digits, spaces, dashes, parens) */
const phoneInput = document.getElementById('cf-tel');
if (phoneInput) {
  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/[^+0-9\s\-()]/g, '');
  });
}