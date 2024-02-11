// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      script: [
        {
          type: "module",
          src: "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs",
        },
      ],
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-USA",
        dir: "ltr",
      },
      {
        code: "ar",
        name: "العربية",
        iso: "ar-SA",
        dir: "rtl",
      },
    ],
    strategy: "no_prefix",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
