import { defineConfig } from 'vitepress'

const base = '/mdocs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Manjaro Docs",
  description: "Manjaro docs built with VitePress",
  base: `${base}/`,
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    es: {
      label: 'Spanish / Español',
      lang: 'es',
      link: '/es/'
    },
    fi: {
      label: 'Finnish / Suomi',
      lang: 'fi',
      link: '/fi/'
    }
  },
  head: [['link', {rel: 'icon', href: `${base}/manjarodocs_logo.svg`}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/manjarodocs_logo.svg',
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
    ],

    editLink: {
      // The following URL needs to be changed to the correct one!!!
      pattern: 'https://github.com/cfinnberg/mdocs/edit/main/docs/:path'
    },
  },
})
