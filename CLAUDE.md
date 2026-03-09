# CLAUDE.md — Gorobel Kirol Gunea Web

Sitio web oficial de Gorobel Kirol Gunea, club deportivo en Llodio y Amurrio (País Vasco).
Marketing site + chatbot IA + panel de administración para el cliente.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Lenguaje**: TypeScript strict
- **Estilos**: Tailwind CSS v4 con CSS variables (sin `tailwind.config.js`)
- **Fuentes**: Montserrat (display) + Inter (body) — Google Fonts via `next/font`
- **Iconos**: Lucide React
- **Formularios**: React Hook Form
- **Animaciones**: Framer Motion
- **IA**: Anthropic SDK (`@anthropic-ai/sdk`) — modelo `claude-haiku-4-5-20251001`
- **Base de datos**: Vercel KV (`@vercel/kv`) — Redis gestionado via Upstash
- **Auth admin**: Cookie HMAC firmada con `crypto` (Node.js nativo)

## Comandos

```bash
npm run dev      # Servidor de desarrollo (Turbopack)
npm run build    # Build de producción — ejecutar siempre antes de commit
npm run lint     # ESLint
```

## Estructura de directorios

```
app/
├── page.tsx                  # Home: Hero, Philosophy, History, Activities, Centers, FAQ, CTA
├── layout.tsx                # Root layout: Header + Footer + ChatWidget + Schema.org
├── globals.css               # Design tokens (CSS variables) + utilidades globales
├── sobre-nosotros/           # Historia del club, valores, timeline, Instagram
├── que-hacemos/              # Las 5 disciplinas
├── centros/                  # Los 4 centros actuales + nuevo gimnasio
├── contacto/                 # Formulario de contacto
├── nuevo-gimnasio/           # Página Founding Member con countdown
├── blog/                     # Blog (placeholder)
├── admin/                    # Panel de administración (protegido por middleware)
│   ├── login/                # Login con contraseña
│   ├── dashboard/            # Resumen estadístico
│   ├── knowledge/            # CRUD base de conocimiento del chatbot
│   ├── leads/                # Leads de contacto y miembros fundadores
│   └── settings/             # Configuración: teléfono, horarios, precios, anuncio
└── api/
    ├── chat/                 # POST → respuesta del chatbot IA
    ├── contact/              # POST → guarda lead de contacto en KV
    ├── nuevo-gimnasio/       # POST → guarda founding member en KV
    └── admin/
        ├── login/            # POST → autenticación admin
        ├── logout/           # POST → borrar cookie
        ├── knowledge/        # GET/POST/PUT/DELETE entradas KB
        ├── leads/            # GET leads (query: ?type=contact|founders)
        └── settings/         # GET/PUT configuración del sitio

components/
├── layout/
│   ├── Header.tsx            # Navegación sticky con menú móvil
│   └── Footer.tsx
├── home/
│   ├── HeroSection.tsx
│   ├── PhilosophySection.tsx
│   ├── HistorySection.tsx    # Narrativa pioneros CrossFit (2010) + Hyrox (2019) — SEO
│   ├── ActivitiesPreview.tsx
│   ├── CentersPreview.tsx
│   ├── NewGymTeaser.tsx
│   └── CTASection.tsx
├── shared/
│   ├── ContactForm.tsx       # React Hook Form → POST /api/contact
│   ├── FoundingMemberForm.tsx # React Hook Form → POST /api/nuevo-gimnasio
│   ├── FaqSection.tsx        # Acordeón reutilizable con schema FAQ
│   └── CountdownClient.tsx   # Cuenta atrás para la apertura del nuevo gym
├── chat/
│   └── ChatWidget.tsx        # Widget flotante del chatbot (client component)
└── admin/
    └── AdminNav.tsx          # Sidebar de navegación del panel admin

lib/
├── kv.ts                     # Toda la lógica de Vercel KV (KB, leads, settings)
├── auth.ts                   # Sign/verify HMAC, verifyPassword, cookies (Node.js)
├── claude.ts                 # Cliente Anthropic, buildSystemPrompt, getChatReply
├── schema.ts                 # JSON-LD: Organization, LocalBusiness, FAQ, Breadcrumb
├── utils.ts                  # cn() classname helper
└── data/
    ├── activities.ts         # Datos de las 5 disciplinas
    └── centers.ts            # Datos de los centros (4 actuales + 1 nuevo)

middleware.ts                 # Edge Runtime: protege /admin/* y /api/admin/*
```

## Sistema de diseño

Todos los colores están como CSS variables en `app/globals.css`. **Nunca usar hex directamente en componentes.**

```css
/* Verdes (marca principal) */
--color-forest:      #2A5741   /* botones, acentos principales */
--color-forest-dark: #1E3F2F
--color-moss:        #4A7C59
--color-sage:        #8BB19E
--color-sage-light:  #C2D8CE

/* Grises oscuros (fondos dark, texto) */
--color-charcoal:    #1C2428   /* fondo secciones dark */
--color-iron:        #2E3C42   /* tarjetas sobre charcoal */
--color-steel:       #455A64   /* texto secundario */
--color-stone:       #78909C
--color-mist:        #B0BEC5

/* Tierra / arcilla (acentos secundarios) */
--color-clay:        #B5714A   /* botones CTA secundarios */
--color-clay-light:  #D4956E
--color-sand:        #D4B08C
--color-sand-light:  #EDD9BF

/* Bases */
--color-cream:       #F5F1EB
--color-surface:     #FAFAF8
```

Clases de utilidad principales (en `globals.css`):
- `.section-padding` — padding vertical responsive
- `.container-wide` / `.container-narrow` — max-width + padding lateral
- `.btn-primary` / `.btn-secondary` / `.btn-outline-dark`
- `.section-label` — etiqueta pequeña encima de los títulos
- `.text-display` / `.text-headline` / `.text-title` — tipografía fluida
- `.form-input` — estilos unificados para inputs, selects y textareas

## Imágenes

Todas las imágenes vienen del CDN de WordPress de Gorobel:
```
https://gorobelgara.com/wp-content/uploads/...
```
Este dominio está permitido en `next.config.ts`. No añadir otras fuentes sin actualizar esa config.

## Base de datos (Vercel KV)

Schema de claves Redis:

| Clave | Tipo | Contenido |
|-------|------|-----------|
| `kb:index` | `string[]` | IDs de entradas de la KB |
| `kb:{uuid}` | `KbEntry` | Entrada de conocimiento |
| `lead:contact:index` | `string[]` | IDs de leads de contacto |
| `lead:contact:{uuid}` | `ContactLead` | Lead del formulario de contacto |
| `lead:founder:index` | `string[]` | IDs de founding members |
| `lead:founder:{uuid}` | `FounderLead` | Founding member |
| `site:settings` | `SiteSettings` | Config: teléfono, horarios, precios, anuncio |

Todos los helpers están en `lib/kv.ts`. **Nunca llamar a `kv` directamente desde componentes o páginas — usar siempre los helpers.**

## Autenticación del panel admin

- Contraseña única configurada en `ADMIN_PASSWORD` (env var)
- Al hacer login: `POST /api/admin/login` → valida password → set cookie `gorobel_admin` (httpOnly, 7 días)
- Cookie firmada con HMAC-SHA256 usando `ADMIN_SECRET`
- `middleware.ts` corre en Edge Runtime y verifica la cookie usando Web Crypto API
- `lib/auth.ts` usa Node.js `crypto` — solo para API routes, **nunca importar desde middleware**

## Chatbot IA

- Modelo: `claude-haiku-4-5-20251001` (rápido, económico)
- `POST /api/chat` recibe `{ messages: [{role, content}] }`
- El system prompt se construye en `lib/claude.ts → buildSystemPrompt()` con:
  - Entradas activas de la KB (`active: true`)
  - Horarios y precios de `site:settings`
  - Instrucciones de tono y limitaciones
- El cliente (ChatWidget) mantiene el historial en estado local (se pierde al refrescar)
- El widget es `"use client"` y se monta en el root layout para aparecer en todas las páginas públicas

## SEO

- Schema.org JSON-LD en todas las páginas (Organization, LocalBusiness, FAQ, Breadcrumb)
- Helpers en `lib/schema.ts`
- Keywords principales configuradas en metadata de cada página
- `HistorySection` en la home posiciona para "CrossFit País Vasco" e "Hyrox Euskadi"
- `app/robots.ts` y `app/sitemap.ts` generados automáticamente
- Panel admin excluido de indexación (`robots: noindex,nofollow` en su layout)

## Variables de entorno

Ver `.env.local.example` para la lista completa. Variables requeridas:

```
ANTHROPIC_API_KEY        API key de Anthropic
ADMIN_PASSWORD           Contraseña del panel admin
ADMIN_SECRET             Secreto HMAC para firmar cookies (≥32 chars, aleatorio)
KV_REST_API_URL          URL del KV store de Vercel/Upstash
KV_REST_API_TOKEN        Token del KV store
```

Generar `ADMIN_SECRET`: `openssl rand -hex 32`

## Convenciones

- **Server Components por defecto** — usar `"use client"` solo cuando hay interactividad (forms, hooks, estado)
- **Imports con `@/`** — nunca rutas relativas largas
- **Datos hardcodeados** → `lib/data/` — no en los componentes directamente
- **No consultar KV desde Client Components** — solo desde Server Components o API routes
- **No añadir deps innecesarias** — el proyecto intencionalmente no usa shadcn/ui, Radix, ni Supabase
