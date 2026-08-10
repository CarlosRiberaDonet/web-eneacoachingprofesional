# EneaCoaching Profesional — Web

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React 19"/>
  <img src="https://img.shields.io/badge/React_Router-v7-CA4245?logo=reactrouter&logoColor=white" alt="React Router v7"/>
  <img src="https://img.shields.io/badge/Font_Awesome-6-528DD7?logo=fontawesome&logoColor=white" alt="Font Awesome"/>
  <img src="https://img.shields.io/badge/deploy-Hostinger-673DE6" alt="Hostinger"/>
  <img src="https://img.shields.io/badge/cliente_real-en_producción-brightgreen" alt="En producción"/>
</p>

Sitio web profesional para [EneaCoaching Profesional](https://eneacoachingprofesional.es/), desarrollado como encargo real. Presenta los servicios de eneagrama, coaching y eneacoaching de Vicente Montolío, con navegación por secciones, formulario de contacto y accesos directos a WhatsApp, email y RRSS.

**Demo en producción:** [eneacoachingprofesional.es](https://eneacoachingprofesional.es/)

---

## Índice

- [Descripción](#descripción)
- [Estructura de navegación](#estructura-de-navegación)
- [Características](#características)
- [Stack técnico](#stack-técnico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Puesta en marcha](#puesta-en-marcha)
- [Despliegue](#despliegue)
- [Autor](#autor)

---

## Descripción

Web de una página con enrutado cliente-side (SPA) que expone los servicios de coaching y eneagrama de un profesional certificado. La navegación principal enlaza a páginas con secciones internas accesibles mediante hash links con scroll suave. Incluye barra de redes sociales, header sticky con menú desplegable adaptado a móvil y formulario de contacto.

---

## Estructura de navegación

```mermaid
flowchart TD
    A([Inicio /]) --> B[/eneagrama]
    A --> C[/coaching]
    A --> D[/eneacoaching]
    A --> E[/vicente]
    A --> F[/contacto]

    B --> B1[#que-es-eneagrama]
    B --> B2[#para-que-eneagrama]
    B --> B3[#tipos-eneagrama]
    B --> B4[#curso-basico]
    B --> B5[#eneagrama-empresas]
    B --> B6[#otras-aplicaciones]

    C --> C1[#que-es-coaching]
    C --> C2[#para-que-coaching]
    C --> C3[#sesiones-individuales]
    C --> C4[#coaching-empresas]

    D --> D1[#que-es-eneacoaching]
    D --> D2[#para-que-eneacoaching]
    D --> D3[#eneacoaching-profesional]
    D --> D4[#eneacoaching-esencial]
    D --> D5[#eneacoaching-parejas]
```

---

## Características

**Navegación:**
- Header sticky que cambia de estilo al hacer scroll
- Menú hamburguesa en móvil con apertura/cierre por clic fuera
- Dropdowns con subsecciones por página, con scroll suave a la sección exacta via `react-router-hash-link`
- `ScrollToHash` y `ScrollToTopButton` para navegación fluida entre rutas y anclas

**Contenido:**
- Página de inicio con secciones: barra social, formaciones, información profesional, metodología EneaCoaching, animación de texto (Typing), perfil personal y formulario de contacto
- Páginas dedicadas a Eneagrama, Coaching y EneaCoaching, cada una con varias subsecciones
- Página Sobre mí (Vicente)
- Página de Contacto independiente

**Contacto:**
- Formulario con campos nombre, email, teléfono y mensaje — envío mediante `action="mailto:..."` que abre el cliente de correo del usuario
- Datos de contacto directo: email y WhatsApp visibles en la sección de contacto
- Barra de redes sociales fija con enlaces a WhatsApp, Instagram y LinkedIn
- Enlace `tel:` para llamada directa desde móvil

**SEO y despliegue:**
- `sitemap.xml` incluido en el repositorio con todas las rutas y prioridades
- `build/` commiteada directamente en el repo para despliegue estático en Hostinger

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black) |
| Enrutado | ![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=reactrouter&logoColor=white) |
| Hash links | react-router-hash-link 2.4.3 |
| Scroll suave | react-scroll 1.9.3 |
| Iconos | react-icons v5 · @fortawesome/react-fontawesome 6.7.2 |
| Estilos | CSS modular por componente + estilos globales |
| Despliegue | Hostinger (estático, `build/` en repo) |

---

## Estructura del proyecto

```
src/
├── App.js                        # Router principal — define las 5 rutas
├── components/
│   ├── Header.js                 # Navbar sticky con dropdowns y hamburguesa
│   ├── Footer.js                 # Pie de página
│   ├── Home.js                   # Página de inicio — orquesta las secciones
│   ├── SocialBar.js              # Barra de RRSS y teléfono (WhatsApp, Instagram, LinkedIn)
│   ├── Formaciones.js            # Sección de formaciones y servicios
│   ├── SobreMi.js                # Información profesional de Vicente
│   ├── EneaCoaching.js           # Sección EneaCoaching en home
│   ├── Typing.js                 # Animación de texto
│   ├── Claudio.js                # Sección personal del coach
│   ├── Contacto.js               # Formulario de contacto (mailto:)
│   ├── ScrollToHash.js           # Scroll suave a anclas al cambiar ruta
│   └── ScrollToTopButton.js      # Botón flotante de vuelta arriba
├── pages/
│   ├── Eneagrama.js              # Página /eneagrama con 6 subsecciones
│   ├── Coaching.js               # Página /coaching con 4 subsecciones
│   ├── EneaCoaching.js           # Página /eneacoaching con 5 subsecciones
│   ├── Vicente.js                # Página /vicente — perfil del coach
│   └── ContactoPage.js           # Página /contacto
├── styles/
│   ├── global/
│   │   └── ButtonStyles.css      # Estilos de botones compartidos
│   └── *.css                     # CSS individual por componente y página
└── assets/                       # Imágenes y recursos estáticos
public/
└── images/
    └── logo.png                  # Logo del sitio
sitemap.xml                       # Sitemap para SEO
```

---

## Puesta en marcha

### Requisitos

- Node.js 18+ (requerido por React 19)
- npm

### Pasos

```bash
git clone https://github.com/CarlosRiberaDonet/web-eneacoachingprofesional
cd web-eneacoachingprofesional
npm install
npm start
```

La web estará disponible en `http://localhost:3000`.

### Build de producción

```bash
npm run build
```

Genera la carpeta `build/` lista para desplegar en cualquier servidor estático.

---

## Despliegue

Desplegada en **Hostinger** con dominio propio: [eneacoachingprofesional.es](https://eneacoachingprofesional.es/)

La carpeta `build/` está commiteada directamente en el repositorio y se sube al servidor vía FTP o panel de Hostinger. El `sitemap.xml` en la raíz del repo facilita la indexación por buscadores.

---

## Autor

**Carlos Ribera Donet**

[![GitHub](https://img.shields.io/badge/GitHub-CarlosRiberaDonet-181717?logo=github)](https://github.com/CarlosRiberaDonet)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Carlos_Ribera-0A66C2?logo=linkedin)](https://www.linkedin.com/in/carlos-r-335390276/)
[![Portfolio](https://img.shields.io/badge/Portfolio-carlosriberadonet.github.io-black)](https://carlosriberadonet.github.io/Carlos-Ribera/)
