import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";
import { presetUno, presetWind, presetTypography } from "unocss";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Design System",
  description: "🎋",
  vite: {
    plugins: [
      UnoCSS({ presets: [presetUno(), presetWind(), presetTypography()] }),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
