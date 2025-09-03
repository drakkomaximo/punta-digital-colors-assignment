# 🎨 Explorador de Colores | Punta Digital

Una aplicación web interactiva desarrollada con **Next.js 15** y **Tailwind CSS** que permite explorar, buscar y copiar códigos de colores perfectos para proyectos de diseño y desarrollo.

## ✨ Características Principales

### 🎯 **Funcionalidades Core**
- **60 Tonalidades**: Paleta completa con 12 familias de colores organizadas por categorías
- **Búsqueda Inteligente**: Filtrado en tiempo real por nombre de color en inglés
- **Copiar Códigos**: Un clic para copiar valores HEX, RGB y nombres de colores
- **Detalles Interactivos**: Modal elegante con información completa de cada color
- **Scroll to Top**: Botón flotante para navegación rápida

### 📱 **Experiencia de Usuario**
- **Diseño Responsive**: Optimizado para dispositivos móviles y pantallas grandes (máx. 1440px)
- **Interfaz Moderna**: Glassmorphism, gradientes y animaciones CSS nativas
- **Accesibilidad Web**: HTML semántico, ARIA labels, navegación por teclado
- **Notificaciones Sutiles**: Toast notifications no intrusivas para feedback
- **Tarjetas Informativas**: Header con características explicativas del proyecto

### 🚀 **Rendimiento y Técnica**
- **Next.js App Router**: Arquitectura moderna con renderizado del lado del servidor
- **Componentes Modulares**: Arquitectura escalable y mantenible
- **TypeScript**: Tipado estricto para mejor desarrollo y menos errores
- **Tailwind CSS**: Sistema de colores centralizado y clases utility-first
- **Custom Hooks**: Lógica de estado encapsulada en hooks reutilizables

## 🛠️ Tecnologías Utilizadas

```json
{
  "framework": "Next.js 15.0.3",
  "lenguaje": "TypeScript 5.6.2",
  "estilos": "Tailwind CSS 3.4.1",
  "react": "React 19.0.0-rc",
  "fuentes": "Geist Sans & Geist Mono",
  "runtime": "Node.js 18+",
  "build": "Turbopack (desarrollo)"
}
```

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con metadatos SEO
│   ├── page.tsx           # Página principal (componente contenedor)
│   ├── globals.css        # Estilos globales y scrollbar personalizado
│   └── fonts/             # Fuentes Geist (Sans & Mono)
├── components/            # Componentes React reutilizables
│   ├── Header.tsx         # Encabezado con tarjetas informativas
│   ├── SearchBar.tsx      # Barra de búsqueda con glassmorphism
│   ├── ColorGrid.tsx      # Cuadrícula responsive de colores
│   ├── ColorCard.tsx      # Tarjeta individual con efectos hover
│   ├── ColorModal.tsx     # Modal de detalles con copia de códigos
│   ├── ScrollToTop.tsx    # Botón flotante de navegación
│   ├── ResultsInfo.tsx    # Información de resultados de búsqueda
│   └── index.ts           # Exportaciones centralizadas
├── hooks/                 # Custom React Hooks
│   └── useColors.ts       # Estado y lógica de colores (useState, useMemo, useCallback)
├── types/                 # Definiciones TypeScript
│   └── color.ts           # Interface ColorShade
└── data/                  # Datos estáticos
    └── colors.ts          # Array de 60 colores organizados por familias
```

## 🎨 Sistema de Colores

### **Configuración Centralizada**
Todos los colores están definidos en `tailwind.config.ts` con 60 tonalidades organizadas en:

```typescript
// Colores primarios (neutros)
primary: {
  black: '#1C1C1C', 'dark-gray': '#363636', 'dim-gray': '#696969',
  gray: '#808080', 'dark-gray-alt': '#A9A9A9', silver: '#C0C0C0',
  'light-gray': '#D3D3D3', gainsboro: '#DCDCDC', 'white-smoke': '#F5F5F5',
  white: '#FFFFFF',
}

// Colores de la paleta (vibrantes)
palette: {
  blue: '#0000FF', 'dodger-blue': '#1E90FF', 'steel-blue': '#4682B4',
  'dark-green': '#008000', 'lime-green': '#32CD32', purple: '#800080',
  'dark-violet': '#9400D3', red: '#FF0000', 'crimson': '#DC143C',
  'dark-orange': '#FF8C00', orange: '#FFA500', yellow: '#FFFF00',
  'hot-pink': '#FF69B4', cyan: '#00FFFF', // ... y más
}
```

### **Familias de Colores Implementadas**
- **🟢 Verdes**: 5 tonalidades desde verde oscuro hasta lima
- **🟠 Naranjas**: 5 tonos cálidos desde naranja oscuro hasta melocotón
- **🟣 Morados**: 5 tonos desde púrpura hasta orquídea
- **🔴 Rojos**: 5 tonos vibrantes desde rojo oscuro hasta carmesí
- **🟡 Amarillos**: 5 tonos brillantes desde amarillo puro hasta dorado
- **🔵 Azules**: 5 tonos desde azul puro hasta azul cielo
- **🩷 Rosas**: 5 tonos desde rosa claro hasta fucsia
- **🟤 Marrones**: 5 tonos desde marrón oscuro hasta arena
- **⚫ Grises**: 5 tonos desde gris medio hasta plateado
- **⚪ Negros**: 5 tonos desde negro puro hasta gris oscuro
- **⬜ Blancos**: 5 tonos desde blanco puro hasta crema
- **🔷 Cianes**: 5 tonos desde cian puro hasta turquesa

## 🌟 Características de Accesibilidad

### **HTML Semántico**
- `<header>`, `<main>`, `<section>`, `<article>` apropiados
- Roles ARIA: `banner`, `search`, `dialog`, `grid`, `list`, `gridcell`
- Labels descriptivos para todos los elementos interactivos

### **Navegación por Teclado**
- Todos los elementos son accesibles con Tab
- Enter y Espacio activan las tarjetas de colores
- Escape cierra el modal
- Focus indicators visibles con `focus:ring-2`

### **Lectores de Pantalla**
- `aria-label` descriptivos en todos los botones
- `aria-describedby` para instrucciones de ayuda
- `aria-live="polite"` para anuncios dinámicos
- `aria-modal="true"` para el modal
- Textos alternativos para iconos decorativos

## 📱 Responsive Design

### **Breakpoints Principales**
```css
Mobile:    < 640px   (sm:)
Tablet:    640px+    (md:)
Desktop:   1024px+   (lg:)
Large:     1440px    (xl:)
Max Width: 1440px    (centrado con max-w-7xl)
```

### **Adaptaciones por Dispositivo**
- **Mobile (<375px)**: Icono de paleta oculto, 2 columnas de colores, modal optimizado
- **Mobile (375px+)**: 2-3 columnas, elementos medianos
- **Tablet**: 3-4 columnas, elementos medianos
- **Desktop**: 6-10 columnas, hover effects completos
- **Large**: Máximo 1440px centrado para mejor legibilidad

## 🔧 Mejoras Implementadas

### **Performance**
- ⚡ Componentes memoizados con `useCallback` y `useMemo`
- 🎭 Animaciones CSS nativas (fade-in, slide-in, zoom-in, hover effects)
- 📦 Bundle optimizado con Next.js 15 y Turbopack
- 🖼️ SVG inlineados para iconos y favicon personalizado
- 🎯 Lazy loading de componentes y optimización de re-renders

### **SEO & Metadatos**
- 📄 Metadatos completos con Open Graph y Twitter Cards
- 🔍 Keywords relevantes para diseñadores y desarrolladores
- 🌐 Configuración multiidioma (español)
- 🎯 Favicon personalizado con paleta de colores
- 📱 Viewport optimizado para dispositivos móviles

### **UX/UI**
- ✨ Animaciones de entrada escalonadas para componentes
- 🔄 Estados de loading y feedback visual
- 📋 Notificaciones toast no intrusivas para copia de códigos
- 🎨 Sistema de colores cohesivo y profesional
- 🌊 Efectos glassmorphism en elementos clave
- 🎭 Transiciones suaves en hover y focus

### **Arquitectura y Código**
- 🏗️ Componentes modulares y reutilizables
- 🎣 Custom hooks para lógica de estado
- 📁 Estructura de archivos organizada por funcionalidad
- 🔒 TypeScript estricto para mejor desarrollo
- 📦 Sistema de exportaciones centralizado

## 🚀 Instalación y Desarrollo

### **Prerrequisitos**
- **Node.js**: 18.17.0 o superior
- **Gestor de paquetes**: npm (incluido con Node.js), yarn, pnpm o bun
- **Sistema operativo**: Windows, macOS, o Linux

### **Instalación Paso a Paso**

#### **1. Verificar Prerrequisitos**
```bash
# Verificar versión de Node.js
node --version
# Debe mostrar v18.17.0 o superior

# Verificar npm
npm --version
```

#### **2. Clonar el Repositorio**
```bash
# Con HTTPS
git clone https://github.com/datosdeviaje/punta-digital-colors-assignment

# O con SSH (si tienes configurado)
git clone git@github.com:datosdeviaje/punta-digital-colors-assignment

# Navegar al directorio
cd punta-digital-colors-assignment
```

#### **3. Instalar Dependencias**
```bash
# Con npm (recomendado)
npm install

# O con yarn
yarn install

# O con pnpm
pnpm install

# O with bun
bun install
```

#### **4. Iniciar el Servidor de Desarrollo**
```bash
# Con npm
npm run dev

# O con tu gestor preferido
yarn dev
pnpm dev
bun dev
```

#### **5. Acceder a la Aplicación**
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### **Scripts Disponibles**

```bash
npm run dev          # Servidor de desarrollo con Turbopack (http://localhost:3000)
npm run build        # Build optimizado para producción
npm run start        # Servidor de producción (requiere build previo)
npm run lint         # Análisis de código con ESLint
```

### **Variables de Entorno** *(Opcional)*
Para configuraciones avanzadas, crear un archivo `.env.local`:

```bash
# .env.local
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### **Estructura de Comandos por Entorno**

#### **Desarrollo Local**
```bash
npm install && npm run dev
```

#### **Build de Producción**
```bash
npm run build
npm run start
```

## 🚀 Posibles Mejoras Futuras

### **🎯 Funcionalidades Avanzadas**
- **Generador de Paletas**: Crear paletas personalizadas basadas en teoría del color
- **Exportar Formatos**: Descargar paletas en CSS, SCSS, JSON, ASE (Adobe)
- **Favoritos**: Sistema de guardado local de colores favoritos
- **Modo Oscuro**: Toggle para cambiar entre temas claro y oscuro
- **Comparador**: Herramienta para comparar colores lado a lado
- **Historial**: Registro de colores recientemente visualizados

### **🛠️ Mejoras Técnicas**
- **API REST**: Backend para gestión de paletas y usuarios
- **Base de Datos**: Almacenamiento persistente de paletas personalizadas
- **PWA**: Conversión a Progressive Web App con cache offline
- **Tests**: Suite de testing con Jest y Testing Library
- **Storybook**: Documentación interactiva de componentes
- **Performance**: Implementación de React.memo y optimizaciones avanzadas

### **🎨 Experiencia de Usuario**
- **Búsqueda Avanzada**: Filtros por saturación, brillo, temperatura de color
- **Vista de Lista**: Modo alternativo para visualizar colores en lista
- **Shortcuts**: Atajos de teclado para acciones rápidas
- **Integración**: Plugin para Figma, Sketch, Adobe XD
- **Temas**: Múltiples temas visuales predefinidos

### **📊 Analytics y Optimización**
- **Métricas de Uso**: Tracking de colores más populares
- **A/B Testing**: Experimentación con diferentes layouts
- **Performance Monitoring**: Seguimiento de Core Web Vitals
- **Error Reporting**: Sistema de reporte automático de errores
- **Internacionalización**: Soporte para múltiples idiomas

### **🔧 Infraestructura**
- **CI/CD**: Pipeline automatizado con GitHub Actions
- **Docker**: Containerización para despliegue consistente
- **CDN**: Distribución global de assets estáticos
- **Monitoring**: Alertas y dashboards de salud del sistema
- **Security**: Auditorías de seguridad y headers CSP

---

**Desarrollado por [Punta Digital](https://puntadigital.com)** | Prueba Técnica 2024