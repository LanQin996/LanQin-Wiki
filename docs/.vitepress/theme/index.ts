/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { watch } from 'vue'
import './style/index.css'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
let homePageStyle: HTMLStyleElement | undefined
import MyLayout from './MyLayout.vue'
import update from "./update.vue"
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import ArticleMetadata from "./ArticleMetadata.vue"
export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    setup() {
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    },
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
        app.component('update', update)
        app.component('ArticleMetadata' , ArticleMetadata)
        if (inBrowser) {
            NProgress.configure({ showSpinner: false })
            router.onBeforeRouteChange = () => {
                NProgress.start() // 开始进度条
            }
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
                NProgress.done() // 停止进度条
            }
        }
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