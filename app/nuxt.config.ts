// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2025-07-15",
  modules: ["@pinia/nuxt", "@nuxt/image"],
  css: ["~/assets/main.css"],
  pages: true,
  app: {
    head: {
      title: "JermyVentos's Big Adventure"
    }
  },
  routeRules: {
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/sounds/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },
  nitro: {
    preset: 'netlify-static'
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
  }
}
)