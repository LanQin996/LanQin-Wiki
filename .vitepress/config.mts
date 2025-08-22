// @ts-nocheck
import { defineConfig } from 'vitepress'
import path from 'path'
import { buildIslandsSidebar } from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "蓝钦的文档",
  // description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: { src: '/logo.png', alt: 'Islands' },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Markdown 示例', link: '/markdown-examples' },
      // { text: 'API 示例', link: '/api-examples' },
      // { text: 'Islands 插件', link: '/Islands_Wiki' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Islands 插件',
          collapsed: false,
          // keep always expanded so child groups (如“开始”)显示缩进
          // @ts-ignore
          collapsible: false,
          items: buildIslandsSidebar(path.resolve('.'))
        }
      ]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LanQin996' }
    ],

    footer: {
      // message: '基于 VitePress 构建',
      copyright: 'Copyright © 2025 蓝钦'
    },
    outline: {
      level: [2, 3],
      label: '本页大纲'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
