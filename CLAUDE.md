# CLAUDE.md — Gorobel Kirol Gunea Web

Sitio web oficial de Gorobel Kirol Gunea, club deportivo en Llodio y Amurrio (País Vasco).
Marketing site + chatbot IA + panel de administración para el cliente.

## 🔴 Antes de tocar nada — cliente, marca y estado

- **Cliente**: Gorobel (cuenta Badgie `e2c2df9b-6ace-4b67-884b-a1d7acf36a5a`). El interlocutor es **Joseba**.
  Web ya facturada. Tarjeta de trabajo: tablero Development ref 1518. Notas y transcript de la última
  llamada: repo `badgie`, `tasks/clientes/gorobel/reunion-2026-09-17-*`.
- **Nunca «CrossFit»** en copy, metadatos, schema, alt ni slugs. Gorobel dejó la licencia y CrossFit LLC
  ya requirió a Badgie por uso de la marca. El club se presenta como **centro de entrenamiento integral**:
  entrenamiento funcional, deportes de contacto, programa para mayores de 55, barré y musculación en el
  nuevo centro de Llodio. «La palabra fuerza es la clave» (Joseba): lo que la gente busca es ganar fuerza.
  «Hyrox» también es marca registrada: revisar su uso con el mismo criterio.
- **Dos centros con objetivos distintos**: en uno hay mucha competencia (que se sepa todo lo que ofrece),
  en el otro ninguna (afianzarse antes de que llegue).
- **Preproducción**: https://gorobel-web.vercel.app (Vercel, equipo `teasers`, proyecto `gorobel-web`;
  cada push a `main` despliega ahí). Es indexable; el canonical apunta a gorobelgara.com.
- **El proyecto de Vercel no tiene variables de entorno**: chatbot, Vercel KV (leads y ajustes) y panel
  admin no funcionan en la preproducción. El formulario de contacto guarda solo en KV y no avisa a nadie:
  antes de lanzar hay que decidir a dónde llega un lead.
- **Migración de hosting**: la web actual (www.gorobelgara.com) es WordPress + WPML, con páginas en
  castellano y euskera, alojada en AFX Solutions. Su formulario sigue recibiendo contactos. Las imágenes de
  esta web se sirven desde `gorobelgara.com/wp-content/uploads`: hay que traerlas antes de cambiar el DNS o
  se rompen al dar de baja el WordPress. El cambio va por DNS con la web antigua en paralelo 1-4 semanas,
  con redirecciones 301 de sus URLs.
- **Paleta confirmada por Joseba** (aplicada en `app/globals.css`): #111111 · #4D4D4D · #2E4D34 ·
  #8E9B64 · #CFC5A3.
- **Blog**: Joseba quiere un gestor de contenidos para dar dinamismo y posicionar (Google e IAs),
  alimentado con lo que cuente por notas de voz.

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
├── admin/                    # Panel de administración (protegido por proxy.ts)
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

proxy.ts                      # Protege /admin/* y /api/admin/* (Next 16: sustituye a middleware.ts)
```

## Sistema de diseño

Todos los colores están como CSS variables en `app/globals.css`. **Nunca usar hex directamente en componentes.**

```css
/* Verdes (marca principal) */
--color-forest:      #2E4D34   /* botones, acentos principales */
--color-forest-dark: #1F3826
--color-moss:        #4A6B50
--color-sage:        #8E9B64
--color-sage-light:  #ABB58C

/* Grises oscuros (fondos dark, texto) */
--color-charcoal:    #111111   /* fondo secciones dark */
--color-iron:        #1C1C1C   /* tarjetas sobre charcoal */
--color-steel:       #4D4D4D   /* texto secundario */
--color-stone:       #737373
--color-mist:        #A3A3A3

/* Tierra (acentos secundarios) */
--color-clay:        #CFC5A3   /* botones CTA secundarios */
--color-clay-light:  #DDD5B8
--color-sand:        #E0D9C3
--color-sand-light:  #EBE5D4

/* Bases */
--color-cream:       #F0EBE0
--color-surface:     #F8F6F1
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
- `proxy.ts` verifica la cookie usando Web Crypto API
- `lib/auth.ts` usa Node.js `crypto` — solo para API routes, **nunca importar desde proxy.ts**

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
