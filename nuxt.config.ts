export default defineNuxtConfig({
  compatibilityDate: "2026-04-28",
  srcDir: "app/",
  components: [{ path: "~/components/", pathPrefix: false }],
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    "~/assets/css/main.css",
    "~/assets/css/font.css",
    "~/assets/css/common.css",
    "~/assets/css/portfolio.css",
    "~/assets/css/animation.css",
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: "",
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ko",
      },
      title: "정재준 | 웹개발자 포트폴리오",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "msapplication-TileColor", content: "#ffffff"},
        { name: "msapplication-TileImage", content: "/icon/ms-icon-144x144.png"},
        { name: "theme-color", content: "#ffffff"},
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "57x57", href :'/icon/apple-icon-57x57.png'},
        { rel: "apple-touch-icon", sizes: "60x60", href :'/icon/apple-icon-60x60.png'},
        { rel: "apple-touch-icon", sizes: "72x72", href :'/icon/apple-icon-72x72.png'},
        { rel: "apple-touch-icon", sizes: "76x76", href :'/icon/apple-icon-76x76.png'},
        { rel: "apple-touch-icon", sizes: "114x114", href :'/icon/apple-icon-114x114.png'},
        { rel: "apple-touch-icon", sizes: "120x120", href :'/icon/apple-icon-120x120.png'},
        { rel: "apple-touch-icon", sizes: "144x144", href :'/icon/apple-icon-144x144.png'},
        { rel: "apple-touch-icon", sizes: "152x152", href :'/icon/apple-icon-152x152.png'},
        { rel: "apple-touch-icon", sizes: "180x180", href :'/icon/apple-icon-180x180.png'},
        { rel: "shortcut icon", type: "image/png", href :'/icon/favicon.png'},
        { rel: "icon", type: "image/png", sizes: "192x192", href :'/icon/android-icon-192x192.png'},
        { rel: "icon", type: "image/png", sizes: "32x32", href : "/icon/favicon-32x32.png"},
        { rel: "icon", type: "image/png", sizes: "96x96", href : "/icon/favicon-96x96.png"},
        { rel: "icon", type: "image/png", sizes: "16x16", href : "/icon/favicon-16x16.png"},
        { rel: "manifest", href : "/icon/manifest.json"},

        { rel: "preconnect", href: "https://cdn.jsdelivr.net", crossorigin: "" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/pretendard-std@1.3.9/dist/web/static/pretendard-std.min.css" },

      ],
    },
  },
});
