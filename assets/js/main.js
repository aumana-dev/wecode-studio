'use strict';

const htmlTranslationKeys = new Set(['cta.h']);

const translations = {
  es: {
    'nav.srv': 'Servicios', 'nav.proj': 'Proyectos', 'nav.proc': 'Proceso', 'nav.test': 'Clientes', 'nav.cta': 'Hablemos →',
    'h.badge': 'Innovación Tecnológica a tu Alcance', 'h.l1': 'Transformamos ideas', 'h.l2': 'software real',
    'h.sub': 'Diseñamos y desarrollamos plataformas digitales que hacen crecer tu negocio — desde sitios web hasta CRMs empresariales completamente a medida.',
    'h.c1': 'Empezar mi proyecto', 'h.c2': 'Ver portafolio',
    'h.s1': 'Proyectos entregados', 'h.s2': 'Clientes satisfechos', 'h.s3': 'Años de experiencia', 'h.s4': 'Costa Rica & LATAM',
    'cl.lbl': 'Empresas que han confiado en nosotros',
    'srv.tag': 'Lo que hacemos', 'srv.h': 'Soluciones digitales que generan resultados', 'srv.sub': 'Cada proyecto es construido desde cero, a medida de tu negocio. Sin plantillas. Sin atajos.',
    's1.h': 'Diseño & Desarrollo Web', 's1.p': 'Sitios web modernos, rápidos y optimizados para SEO. Diseño a medida que refleja tu marca y convierte visitantes en clientes reales.',
    's2.h': 'CRM & Software Empresarial', 's2.p': 'Sistemas de gestión personalizados: seguimiento de clientes, pipelines de ventas, reportes en tiempo real y automatización de procesos para tu equipo.',
    's3.h': 'E-commerce', 's3.p': 'Tiendas en línea completas con gestión de inventario, pasarelas de pago integradas y panel de administración intuitivo.',
    's4.h': 'Apps Móviles', 's4.p': 'Aplicaciones nativas y multiplataforma para iOS y Android. Conecta con tus clientes donde sea que estén.',
    's5.h': 'SEO & Posicionamiento', 's5.p': 'Estrategias de optimización para motores de búsqueda que llevan tu negocio a la primera página de Google.',
    's6.h': 'Automatización & APIs', 's6.p': 'Integraciones entre sistemas, automatización de flujos de trabajo y APIs REST para conectar y potenciar todas tus herramientas.',
    'pr.tag': 'Portafolio', 'pr.h': 'Casos de éxito que hablan por sí solos', 'pr.sub': 'Trabajo real, para clientes reales, con resultados medibles.',
    'p1.h': 'Agrícola KC — Presencia Digital', 'p1.p': 'Sitio web completo para empresa agrícola costarricense. Catálogo de productos, información institucional y formulario de contacto.',
    'p2.h': 'NexoCorp — CRM de Ventas', 'p2.p': 'CRM completo para equipo de 40+ vendedores: pipeline visual de deals, gestión de leads, alertas automáticas y reportes en tiempo real.',
    'p3.h': 'GymFlow — Gestión de Gimnasios', 'p3.p': 'Plataforma para gestión de membresías, asistencia, programación de clases y analíticas de ocupación en tiempo real.',
    'p4.h': 'PeopleHub — Recursos Humanos', 'p4.p': 'Plataforma de RRHH con directorio de empleados, gestión de permisos, organización departamental y flujos de aprobación.',
    'p5.h': 'Farmasi — Inventario Inteligente', 'p5.p': 'Dashboard de inventario para distribuidores de productos de belleza. Stock en tiempo real, alertas automáticas, bilingüe ES/EN.',
    'p6.h': 'SwiftBuild — Crecimiento Orgánico', 'p6.p': 'Rediseño web + estrategia SEO. Resultado: +320% tráfico orgánico y posición #1 en búsquedas clave en 4 meses.',
    'demo': 'Ver Demo →',
    'pc.tag': 'Cómo trabajamos', 'pc.h': 'Un proceso claro, resultados predecibles', 'pc.sub': 'Sin sorpresas. Sabés exactamente qué pasa en cada etapa de tu proyecto.',
    'st1.h': 'Descubrimiento', 'st1.p': 'Entendemos tu negocio, tus metas y tu audiencia antes de escribir una línea de código.',
    'st2.h': 'Diseño & Prototipo', 'st2.p': 'Creamos mockups y flujos de usuario para validar la experiencia antes de desarrollar.',
    'st3.h': 'Desarrollo', 'st3.p': 'Construimos con tecnología moderna, código limpio y actualizaciones semanales de progreso.',
    'st4.h': 'Lanzamiento & Soporte', 'st4.p': 'Deploy, capacitación del equipo y soporte continuo post-lanzamiento incluido.',
    'ts.tag': 'Testimonios', 'ts.h': 'Lo que dicen nuestros clientes',
    't1': '"WeCode entendió exactamente lo que necesitábamos. El CRM transformó la forma en que gestionamos nuestro equipo de ventas. Recuperamos la inversión en el primer mes."',
    't1r': 'Director Comercial — NexoCorp',
    't2': '"El sistema que desarrollaron es exactamente lo que necesitábamos: intuitivo, rápido y nuestro equipo lo adoptó desde el primer día."',
    't2r': 'CEO — GymFlow Costa Rica',
    't3': '"Profesionalismo de primer nivel con atención personalizada. El dashboard de inventario ahorra horas de trabajo manual cada semana."',
    't3r': 'Operations Manager — Farmasi CR',
    'cta.h': '¿Listo para construir<br>algo extraordinario?', 'cta.sub': 'Contanos tu idea. En 24 horas tenés una propuesta concreta, sin compromiso.',
    'cta.b1': 'Escribinos ahora', 'cta.b2': 'WhatsApp →',
    'ft.c': '© 2026 WeCode Studio. Costa Rica.'
  },
  en: {
    'nav.srv': 'Services', 'nav.proj': 'Projects', 'nav.proc': 'Process', 'nav.test': 'Clients', 'nav.cta': 'Let\'s Talk →',
    'h.badge': 'Technology Innovation Within Reach', 'h.l1': 'We turn ideas into', 'h.l2': 'real software',
    'h.sub': 'We design and develop digital platforms that grow your business — from websites to fully custom enterprise CRMs.',
    'h.c1': 'Start my project', 'h.c2': 'View portfolio',
    'h.s1': 'Projects delivered', 'h.s2': 'Happy clients', 'h.s3': 'Years of experience', 'h.s4': 'Costa Rica & LATAM',
    'cl.lbl': 'Companies that have trusted us',
    'srv.tag': 'What we do', 'srv.h': 'Digital solutions that drive results', 'srv.sub': 'Every project is built from scratch, tailored to your business. No templates. No shortcuts.',
    's1.h': 'Web Design & Development', 's1.p': 'Modern, fast, SEO-optimized websites. Custom design that reflects your brand and converts visitors into real customers.',
    's2.h': 'CRM & Business Software', 's2.p': 'Custom management systems: client tracking, sales pipelines, real-time reports and process automation for your team.',
    's3.h': 'E-commerce', 's3.p': 'Full online stores with inventory management, integrated payment gateways and intuitive admin panel.',
    's4.h': 'Mobile Apps', 's4.p': 'Native and cross-platform apps for iOS and Android. Connect with your clients wherever they are.',
    's5.h': 'SEO & Search Positioning', 's5.p': 'Search engine optimization strategies that put your business on Google\'s first page.',
    's6.h': 'Automation & APIs', 's6.p': 'System integrations, workflow automation and REST APIs to connect and power all your tools.',
    'pr.tag': 'Portfolio', 'pr.h': 'Success stories that speak for themselves', 'pr.sub': 'Real work, for real clients, with measurable results.',
    'p1.h': 'Agrícola KC — Digital Presence', 'p1.p': 'Full website for a Costa Rican agricultural company. Product catalogue, institutional info and contact form.',
    'p2.h': 'NexoCorp — Sales CRM', 'p2.p': 'Full CRM for 40+ sales team: visual deal pipeline, lead management, automated alerts and real-time reports.',
    'p3.h': 'GymFlow — Gym Management', 'p3.p': 'Platform for membership management, attendance, class scheduling and real-time occupancy analytics.',
    'p4.h': 'PeopleHub — HR Management', 'p4.p': 'HR platform with employee directory, leave management, department organization and approval workflows.',
    'p5.h': 'Farmasi — Smart Inventory', 'p5.p': 'Inventory dashboard for beauty product distributor network. Real-time stock, automatic alerts, bilingual ES/EN.',
    'p6.h': 'SwiftBuild — Organic Growth', 'p6.p': 'Web redesign + SEO strategy. Result: +320% organic traffic and #1 ranking for key searches in 4 months.',
    'demo': 'View Demo →',
    'pc.tag': 'How we work', 'pc.h': 'A clear process, predictable results', 'pc.sub': 'No surprises. You know exactly what happens at every stage of your project.',
    'st1.h': 'Discovery', 'st1.p': 'We understand your business, goals and audience before writing a single line of code.',
    'st2.h': 'Design & Prototype', 'st2.p': 'We create mockups and user flows to validate the experience before development.',
    'st3.h': 'Development', 'st3.p': 'We build with modern tech, clean code and weekly progress updates.',
    'st4.h': 'Launch & Support', 'st4.p': 'Deploy, team training and ongoing post-launch support included.',
    'ts.tag': 'Testimonials', 'ts.h': 'What our clients say',
    't1': '"WeCode understood exactly what we needed. The CRM transformed how we manage our sales team. We recovered the investment in the first month."',
    't1r': 'Commercial Director — NexoCorp',
    't2': '"The system they built is exactly what we needed: intuitive, fast, and our team adopted it from day one."',
    't2r': 'CEO — GymFlow Costa Rica',
    't3': '"Enterprise-level professionalism with personalized attention. The inventory dashboard saves hours of manual work every week."',
    't3r': 'Operations Manager — Farmasi CR',
    'cta.h': 'Ready to build<br>something extraordinary?', 'cta.sub': 'Tell us your idea. In 24 hours you\'ll have a concrete proposal, no commitment.',
    'cta.b1': 'Write us now', 'cta.b2': 'WhatsApp →',
    'ft.c': '© 2026 WeCode Studio. Costa Rica.'
  }
};

let currentLanguage = document.documentElement.lang === 'en' ? 'en' : 'es';

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  const languageButton = document.getElementById('lb');
  if (languageButton) {
    languageButton.textContent = language === 'es' ? 'EN' : 'ES';
  }

  document.querySelectorAll('[data-k]').forEach((element) => {
    const translationKey = element.getAttribute('data-k');
    const value = translations[language][translationKey];

    if (value !== undefined) {
      if (htmlTranslationKeys.has(translationKey)) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    }
  });

  document.title = language === 'es'
    ? 'We Code Studio — Innovación Tecnológica a tu Alcance'
    : 'We Code Studio — Technology Innovation Within Reach';
}

const languageButton = document.getElementById('lb');
if (languageButton) {
  languageButton.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'es' ? 'en' : 'es');
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.rv').forEach((element) => {
  revealObserver.observe(element);
});

const contactForm = document.querySelector('form[name="contact"]');
if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = currentLanguage === 'es' ? 'Enviando...' : 'Sending...';
    }

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      const nextInput = contactForm.querySelector('input[name="_next"]');
      const nextUrl = nextInput ? nextInput.value : '/gracias';
      contactForm.reset();
      window.location.href = nextUrl;
    } catch (error) {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = currentLanguage === 'es' ? 'Enviar mensaje →' : 'Send message →';
      }

      alert(currentLanguage === 'es'
        ? 'No se pudo enviar el formulario. Intentá de nuevo en unos minutos.'
        : 'The form could not be sent. Please try again in a few minutes.');
    }
  });
}

applyLanguage(currentLanguage);