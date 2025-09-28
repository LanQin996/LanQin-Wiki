// @ts-nocheck
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "蓝钦的文档",
  description: "专业的 Minecraft 插件开发与使用指南",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: { src: '/logo.png', alt: 'Islands' },
    outline: [2, 3],
    outlineTitle: '本页目录',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LanQin996' }
    ],

    sidebar: {
      '/docs/Coopay/': [
        {
          text: 'CooPay 文档',
          items: [
            {
              text: '入门',
              collapsed: false,
              items: [
                { text: '快速开始', link: '/docs/Coopay/Quick_Start_Guide' }
              ]
            },
            {
              text: '参考',
              collapsed: true,
              items: [
                { text: '命令参考', link: '/docs/Coopay/Commands_Reference' },
                { text: '权限列表', link: '/docs/Coopay/Permissions' }
              ]
            },
            {
              text: 'XPay监控',
              collapsed: true,
              items: [
                { text: '支付宝通道', collapsed: true, items:[
                  { text: '支付宝-云端', link: '/docs/Coopay/XPay/支付宝云端' },
                  { text: '支付宝-自挂监控', link: '/docs/Coopay/XPay/个人监控端' },
                  { text: '支付宝-商家账单', link: '/docs/Coopay/XPay/支付宝商家账单' }
                ]},
                { text: '微信通道', collapsed: true, items:[
                  { text: '微信-自挂监控', link: '/docs/Coopay/XPay/微信个码监控' }
                ]} 
              ]
            },
            {
              text: '其他',
              collapsed: true,
              items: [
                { text: 'FAQ', link: '/docs/Coopay/FAQ' },
                { text: '关于', link: '/docs/Coopay/About' },
                { text: '更新日志', link: '/docs/Coopay/UpdateLog' }
              ]
            }
          ]
        }
      ],
      '/docs/Islands/': [
        {
          text: 'Islands 文档',
          items: [
            {
              text: '入门',
              collapsed: false,
              items: [
                { text: '快速开始', link: '/docs/Islands/Quick_Start_Guide' }
              ]
            },
            {
              text: '参考',
              collapsed: false,
              items: [
                { text: '命令参考', link: '/docs/Islands/Commands' },
                { text: 'PAPI 变量参考', link: '/docs/Islands/PAPI_Variables_Reference' },
                { text: '权限列表', link: '/docs/Islands/Permissions' }
              ]
            },
            {
              text: '其他',
              collapsed: true,
              items: [
                { text: 'FAQ', link: '/docs/Islands/FAQ' },
                { text: '关于', link: '/docs/Islands/About' },
                { text: '更新日志', link: '/docs/Islands/UpdateLog' }
              ]
            }
          ]
        }
      ]
    },

    footer: {
      // message: '基于 VitePress 构建',
      copyright: 'Copyright © 2025 蓝钦'
    }
  }
})
