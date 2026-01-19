import { defineConfig } from 'vitepress'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(markdownItTaskCheckbox) //todo
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
        return htmlResult;
    }
    }
  },
  lastUpdated: true,
  // 纯净模式不显示.html后缀
  cleanUrls: true,
  // 语言
  lang: 'zh-CN',
  // 标题
  title: "蓝钦的文档",
  // 描述
  description: "专业的 Minecraft 插件开发与使用指南",
  // 头部
  head: [
    // favicon
    ['link',{ rel: 'icon', href: '/logo.png'}],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ],
    ['script', { async: '', src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }]
  ],
  appearance:'dark',
  themeConfig: {
    //导航栏logo
    logo: '/logo.png',
    
    //自定义导航栏标题文本 false为不显示 也可以自定义
    //siteTitle: 'LanQin_ - Wiki',
    //siteTitle: 'false',

    //编辑本页
    editLink: { 
      pattern: 'https://github.com/LanQin996/LanQin-Wiki/edit/master/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },

    //本地搜索
    // search: { 
    //   provider: 'local'
    // }, 

    //Algolia搜索
    search: {
      provider: 'algolia',
      options: {
        appId: '2VMWAI8PWW',
        apiKey: 'a5e143ce40817c91e0a612386cfae044',
        indexName: 'doc',
      },
    },

    //页脚
    footer: {
      message: '本站总访问量 <span id="busuanzi_value_site_pv"></span> 次  |  本站访客数 <span id="busuanzi_value_site_uv"></span> 人次',
      copyright: `Copyright © 2025-${new Date().getFullYear()} 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2024132039号</a>`,
    },
    //导航栏
    nav: [
      { text: '首页', link: '/' }, 
      { text: '目录', link: '/plugins/' },
      { text: 'TODO', link: '/todo/' },
      { text: '友情链接', link: '/nav/' },
    ], 
    socialLinks: [ 
      { icon: 'github', link: 'https://github.com/LanQin996' }, 
      // { icon: 'twitter', link: 'https://twitter.com/' }, 
      // { icon: 'discord', link: 'https://chat.vitejs.dev/' },  
    ], 
     //侧边栏
    sidebar: {
      '/plugins/': [
        {
          text: '插件列表',
          items: [
            { text: '简介', link: '/plugins/' }
          ]
        }
      ],
      // 目录1
      '/coopay/': [
        { text: '⬅️ 返回插件列表', link: '/plugins/' },
        {
          text: 'CooPay',
          items: [
            { text: '快速开始', link: '/coopay/' },
            { text: '权限列表', link: '/coopay/Permissions' },
            { text: '命令列表', link: '/coopay/Commands' },
            { text: '配置文件', link: '/coopay/Config' },
            { text: 'Placeholder', link: '/coopay/Placeholder' },
            { text: '常见问题', link: '/coopay/FAQ' },
            { text: '关于', link: '/coopay/About' }
          ],
        },
      ],

      // 目录2
      '/islands/': [
        { text: '⬅️ 返回插件列表', link: '/plugins/' },
        {
          text: 'Islands',
          items: [
            { text: '快速开始', link: '/islands/' },
            { text: '权限列表', link: '/islands/Permissions' },
            { text: '命令列表', link: '/islands/Commands' },
            { text: '配置文件', link: '/islands/Config' },
            { text: 'Placeholder', link: '/islands/Placeholder' },
            { text: '常见问题', link: '/islands/FAQ' },
            { text: '关于', link: '/islands/About' }
          ],
        },
      ],
      '/savetools/': [
        { text: '⬅️ 返回插件列表', link: '/plugins/' },
        {
          text: 'SaveTools',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ],
        },
      ],
      '/invbackup/': [
        { text: '⬅️ 返回插件列表', link: '/plugins/' },
        {
          text: 'InvBackup',
          items: [
            { text: '快速开始', link: '/invbackup/' },
            { text: '权限列表', link: '/invbackup/Permissions' },
            { text: '命令列表', link: '/invbackup/Commands' },
            { text: '常见问题', link: '/islands/FAQ' },
            { text: '关于', link: '/islands/About' }
          ],
        },
      ],
    },
    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    returnToTopLabel:'返回顶部', 
  }
})
