import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
  {
    title: '旗下网站',
    items: [
      {
        icon: 'https://cdn.jsdu.cn/opdav/20251106/80fc1e3cb1e7244af801a12d9129fd66.png',
        title: 'CooPay',
        badge: {
          text: '强烈推荐',
          type: 'tip',
        },
        desc: '专业的Minecraft服主收款插件',
        link: 'https://coopay.top/'
      },
      {
        icon: 'https://img.wwoyun.cn/uploads/20250825/ebff21a7163c8577c45142e1b32e25f4.png',
        title: 'WwoImg图床',
        badge: {
          text: '免费公益',
          type: 'tip',
        },
        desc: '在线图片链接,自带md格式,URL等 支持多图片格式上传',
        link: 'https://img.wwoyun.cn/'
      },
      {
        icon: 'https://cdn.jsdu.cn/opdav/20251107/076793d54a13c9dc04cfa7b3fb6580ad.webp',
        title: '网易云音乐API',
        badge: {
          text: '免费公益',
          type: 'tip',
        },
        desc: '网易云的API 可用于ZMusic插件或其他',
        link: 'https://zm.wwoyun.cn/'
      },
    ]
  },
]