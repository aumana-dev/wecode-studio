'use strict';

/* Language toggle — navigates between index.html (ES) and en.html (EN) */
const languageButton = document.getElementById('lb');
if (languageButton) {
  languageButton.addEventListener('click', () => {
    const isSpanish = document.documentElement.lang === 'es';
    window.location.href = isSpanish ? '/en.html' : '/';
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