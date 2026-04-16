'use strict';

/* Language toggle — navigates between ES and EN versions */
const languageButton = document.getElementById('lb');
if (languageButton) {
  const esMap = {
    '/': '/en',
    '/servicios': '/en/services',
    '/portafolio': '/en/portfolio',
    '/contacto': '/en/contact',
    '/privacidad': '/en',
    '/terminos': '/en'
  };
  const enMap = {
    '/en': '/',
    '/en/services': '/servicios',
    '/en/portfolio': '/portafolio',
    '/en/contact': '/contacto'
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

/* Contact form (Formspree) */
const contactForm = document.querySelector('form[name="contact"]');
if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const lang = document.documentElement.lang;
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
      contactForm.reset();
      window.location.href = nextInput ? nextInput.value : '/gracias';
    } catch {
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