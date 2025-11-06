/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { watch } from 'vue'
import './style/index.css'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
let homePageStyle: HTMLStyleElement | undefined
import MyLayout from './MyLayout.vue'
import update from "./update.vue"

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app, router }) {
        // 彩虹背景动画样式
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomePageStyle(location.pathname === '/'),
                { immediate: true },
            )
        }
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
              busuanzi.fetch()
            }
        }
        app.component('update' , update)
    },
}
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return

        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
      :root {
        animation: rainbow 12s linear infinite;
      }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return

        homePageStyle.remove()
        homePageStyle = undefined
    }
}