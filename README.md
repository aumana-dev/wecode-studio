# WeCode Studio — Landing Page

Sitio web de WeCode Studio. HTML/CSS/JS estático, listo para deploy en Cloudflare Pages.

## Deploy en Cloudflare Pages

1. Sube el repo a GitHub
2. Conecta en [Cloudflare Pages](https://pages.cloudflare.com)
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(vacío)*
   - **Build output directory:** `/` *(raíz del proyecto)*
4. Conecta tu dominio custom en Settings → Custom Domains

## Estructura

```
weCode-studio/
├── index.html      # Sitio completo (HTML + CSS + JS inline)
├── logo.png        # Logo del estudio
├── robots.txt      # SEO: instrucciones para crawlers
├── _headers        # Cloudflare: security headers
└── _redirects      # Cloudflare: www → apex redirect
```
