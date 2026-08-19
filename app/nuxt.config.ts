// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2025-07-15",
  modules: ["@pinia/nuxt"],
  css: ["~/assets/main.css"],
  pages: true,
  app: {
    head: {
      title: "JermyVentos's Big Adventure"
    }
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'reicon-vue',
      ]
    }
  },
  vue: {
    compilerOptions: {
      comments: true
    }
  },
  experimental: {
    // no direct toggle needed; the verbose logging is automatic in dev mode
  }
}
)
