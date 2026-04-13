# WeCode Studio — Landing Page

Sitio web de WeCode Studio. HTML/CSS/JS estático, listo para deploy en Cloudflare Pages.

## Deploy en Cloudflare Pages

1. Sube el repo a GitHub
2. Conecta el repo en [Cloudflare Pages](https://pages.cloudflare.com)
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(vacío)*
   - **Build output directory:** `/` *(raíz del proyecto)*
4. En **Custom Domains**, configura `wecodestudio.com` como dominio principal
5. Redirige `www.wecodestudio.com`, `wecode.studio` y `www.wecode.studio` hacia `wecodestudio.com`

## Archivos listos para producción

- `index.html`: estructura HTML del sitio y referencias a assets externos
- `assets/css/styles.css`: estilos del sitio
- `assets/js/main.js`: interacciones, reveal animations y cambio de idioma
- `logo.png`: logo y favicon del sitio
- `robots.txt`: instrucciones para crawlers
- `sitemap.xml`: sitemap estático del dominio principal
- `_headers`: headers de seguridad y cache para Cloudflare Pages
- `_redirects`: redirecciones de dominios secundarios hacia el dominio canónico

## Estructura

```
weCode-studio/
├── assets/
│   ├── css/
│   │   └── styles.css   # Estilos del sitio
│   └── js/
│       └── main.js      # Interacciones y cambio de idioma
├── index.html      # HTML principal del sitio
├── logo.png        # Logo del estudio
├── robots.txt      # SEO: instrucciones para crawlers
├── sitemap.xml     # SEO: sitemap del sitio
├── _headers        # Cloudflare: security headers
└── _redirects      # Cloudflare: www → apex redirect
```
