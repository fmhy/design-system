import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { colors } from '@fmhy/colors'
import {
  presetIcons,
  presetUno,
  presetWind,
  transformerDirectives
} from 'unocss'

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
      UnoCSS({
        transformers: [transformerDirectives()],
        theme: { colors: colors },
        safelist,
        shortcuts: {
          'bg-main': 'bg-white dark:bg-[#111]'
        },
        presets: [presetUno(), presetWind(), presetIcons()]
      })
    ]
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Colors', link: '/colors' }
    ],
    sidebar: [
      { text: 'Colors', link: '/colors' },
      { text: 'Components', link: '/components' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fmhy/design-system' }
    ]
  }
})
