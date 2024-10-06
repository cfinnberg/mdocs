import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Manjaro Docs",
  description: "Manjaro docs built with VitePress",
  base: '/mdocs',
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    es: {
      label: 'Spanish / Español',
      lang: 'es',
      link: 'es/guide.md'
    },
    fi: {
      label: 'Finnish / Suomi',
      lang: 'fi',
      link: 'fi/guide.md'
    }
  },
  head: [['link', {rel: 'icon', href: '/mdocs/favicon.png'}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
