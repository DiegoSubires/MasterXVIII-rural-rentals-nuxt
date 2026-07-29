export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  // Registrar módulos
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  // Configuración del módulo de imágenes
  image: {
    // Formatos modernos de conversión automática para imágenes locales
    format: ["avif", "webp"],
  },
});
