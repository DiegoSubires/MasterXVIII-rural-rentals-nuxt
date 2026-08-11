# Portal de Alquiler de Casas Rurales — Nuxt 3

Este proyecto es una migración y optimización en **Nuxt 3** de la aplicación web de alquileres rurales originalmente desarrollada en Next.js. Implementa arquitectura basada en Vue 3 (Composition API / `<script setup>`), Tailwind CSS y TypeScript.

---

## 📁 Estructura del Proyecto

El código fuente principal está organizado dentro del directorio `app/`:

## 🚀 Características y Tecnologías

Framework: Nuxt 3 (Vue 3 + Composition API).

Estilos: Tailwind CSS con diseño totalmente responsive (Grid & Flexbox).

TypeScript: Tipado estricto de componentes e interfaces de datos.

Rutas y Parámetros: Reactividad mediante useRoute(), useRouter() y sincronización de query params en la URL para filtros de búsqueda.

Formulario Interactivo: Cálculo automático de noches, desglose de precios y confirmación de reserva.

## 🚀 Ejecución en Local

El proyecto cuenta con sus propios **Server Routes** integrados mediante el motor Nitro de Nuxt 3 para simular los endpoints requeridos (`/api/houses`), actuando como una aplicación Full-Stack autónoma.

1. **Copiar variables de entorno:**

   ```bash
   cp .env.example .env.local
   ```

2. **Instalar e iniciar:**
   ```Bash
   npm install
   npm run dev
   ```
