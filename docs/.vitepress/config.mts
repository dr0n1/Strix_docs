
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Strix Docs',
  description: 'Strix Docs - 技术文档',
  lang: 'zh-CN',
  base: '/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],


    sidebar: [
      {
        text: '文档导航',
        items: [
          { text: '首页', link: '/' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/dr0n1/Strix_docs'
      }
    ],

    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © Strix Docs'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    editLink: {
      pattern:
        'https://github.com/dr0n1/Strix_docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    }
  },

  lastUpdated: true
})
