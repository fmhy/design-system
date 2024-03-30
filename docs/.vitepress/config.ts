import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { colors } from '@fmhy/colors'
import { presetUno, presetWind } from 'unocss'

const safelist = Object.entries(colors).flatMap(([group, shades]) =>
  Object.keys(shades).flatMap((shade) => [
    `text-${group}-${shade}`,
    `bg-${group}-${shade}`
  ])
)

export default defineConfig({
  title: 'Design System',
  description: '🎋',
  cleanUrls: true,
  vite: {
    plugins: [
      // @ts-expect-error
      UnoCSS({
        theme: { colors: colors },
        safelist,
        presets: [presetUno(), presetWind()]
      })
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
