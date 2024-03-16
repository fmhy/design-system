import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { presetUno, presetWind, presetTypography } from 'unocss'

export default defineConfig({
  title: 'Design System',
  description: '🎋',
  cleanUrls: true,
  vite: {
    plugins: [
      UnoCSS({ presets: [presetUno(), presetWind(), presetTypography()] })
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Colors', link: '/colors' }
    ],

    sidebar: [{ text: 'Colors', link: '/colors' }],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fmhy/design-system' }
    ]
  }
})
