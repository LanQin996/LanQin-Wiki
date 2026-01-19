---
sidebar: false
layout: page
---

<div class="plugin-list-wrapper">
  <h1 class="list-title">原创开发</h1>
  <div class="plugin-card-grid">
    <a class="plugin-card" href="/coopay/">
      <img src="https://cdn.jsdu.cn/opdav/20251106/80fc1e3cb1e7244af801a12d9129fd66.png" alt="CooPay Logo" class="plugin-logo">
      <div class="plugin-text-content">
        <h3>CooPay</h3>
        <p>专业的Minecraft收款插件</p>
      </div>
    </a>
    <a class="plugin-card" href="/savetools/">
      <img src="https://cdn.jsdu.cn/opdav/20251106/485452070449f106fcb9d21e58a3c95d.png" alt="SaveTools Logo" class="plugin-logo">
      <div class="plugin-text-content">
        <h3>SaveTools</h3>
        <p>轻量级数据保存插件</p>
      </div>
    </a>
    <a class="plugin-card" href="/islands/">
      <img src="https://cdn.jsdu.cn/opdav/20251106/9623d587f1abb9c433abd8100b6d6a32.png" alt="Islands Logo" class="plugin-logo">
      <div class="plugin-text-content">
        <h3>Islands</h3>
        <p>一个功能强大的空岛插件</p>
      </div>
    </a>
    <a class="plugin-card" href="/invbackup/">
      <img src="https://cdn.jsdu.cn/opdav/20260120/e7c53ed97808aced1a2fc8438c1222f9.png" alt="Islands Logo" class="plugin-logo">
      <div class="plugin-text-content">
        <h3>InvBackup</h3>
        <p>玩家背包备份支持Folia核心以及模组物品</p>
      </div>
    </a>
  </div>
</div>

<style>
.plugin-list-wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 24px;
}

.list-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.plugin-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (max-width: 768px) {
  .plugin-card-grid {
    grid-template-columns: 1fr;
  }
}

.plugin-card {
  display: flex;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
  text-decoration: none !important;
}

.plugin-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.plugin-logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
}

.plugin-text-content h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 Bpx 0;
}

.plugin-text-content p {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}
</style>