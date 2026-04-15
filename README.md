# We Code Studio

Sitio web corporativo bilingüe (ES/EN) de **We Code Studio**.  
HTML/CSS/JS estático — deploy directo en Cloudflare Pages.

🌐 **Producción:** [wecodestudio.com](https://wecodestudio.com)

## Tecnologías

| Capa | Detalle |
|------|---------|
| Markup | HTML5 semántico |
| Estilos | CSS custom properties, dark theme |
| JS | Vanilla ES6 — language toggle, scroll-reveal, Formspree |
| Hosting | Cloudflare Pages (auto-deploy desde `main`) |
| Fuentes | Syne + DM Sans (Google Fonts) |
| Formulario | [Formspree](https://formspree.io) |

## Estructura del proyecto

```
weCode-studio/
├── assets/
│   ├── css/
│   │   └── styles.css             # Estilos globales
│   ├── favicons/
│   │   ├── apple-touch-icon.png   # iOS icon
│   │   ├── favicon-96x96.png      # PNG favicon
│   │   └── favicon.svg            # SVG favicon
│   ├── images/
│   │   ├── logo.png               # Logo principal
│   │   ├── logo-dark.png          # Logo para OG/Twitter cards
│   │   ├── logo-light.png         # Logo variante clara
│   │   ├── web-app-manifest-192x192.png
│   │   └── web-app-manifest-512x512.png
│   └── js/
│       └── main.js                # Language toggle, scroll-reveal, form handler
│
├── servicios/index.html           # ES — Servicios
├── portafolio/index.html          # ES — Portafolio
├── contacto/index.html            # ES — Contacto
│
├── en/                            # English (i18n prefix)
│   ├── index.html                 # EN — Home
│   ├── services/index.html        # EN — Services
│   ├── portfolio/index.html       # EN — Portfolio
│   └── contact/index.html         # EN — Contact
│
├── privacidad/index.html          # Legal — Privacidad
├── terminos/index.html            # Legal — Términos
├── gracias/index.html             # Post-form — Gracias
│
├── index.html                     # ES — Home (página principal)
├── 404.html                       # Error page
├── favicon.ico                    # Browser auto-discovery favicon
├── site.webmanifest               # PWA manifest
├── robots.txt                     # SEO: crawlers
├── sitemap.xml                    # SEO: sitemap
├── _headers                       # Cloudflare: security headers + cache
├── _redirects                     # Cloudflare: domain + legacy redirects
└── README.md
```

## Deploy en Cloudflare Pages

1. Conectá el repo en [Cloudflare Pages](https://pages.cloudflare.com)
2. Build settings:
   - **Framework preset:** None
   - **Build command:** *(vacío)*
   - **Build output directory:** `/`
3. Custom domains: `wecodestudio.com`
4. Redirects de `www` y `wecode.studio` configurados en `_redirects`

## Rutas

| Ruta | Descripción |
|------|------------|
| `/` | Home ES |
| `/servicios` | Servicios ES |
| `/portafolio` | Portafolio ES |
| `/contacto` | Contacto ES |
| `/en` | Home EN |
| `/en/services` | Services EN |
| `/en/portfolio` | Portfolio EN |
| `/en/contact` | Contact EN |
| `/privacidad` | Política de privacidad |
| `/terminos` | Términos de uso |
