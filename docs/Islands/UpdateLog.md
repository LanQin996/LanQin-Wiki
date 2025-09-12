# 更新日志

<div class="update-timeline">

## 🚀 最新版本

### v1.0.0 - 2025年8月
<div class="version-card">
  <div class="version-header">
    <span class="version-tag">稳定版</span>
    <span class="version-date">2025-08-24</span>
  </div>
  
  <div class="version-content">
    <div class="feature-category">
      <ul>
        <li>Islands 1.0.0版本发布</li>
      </ul>
    </div>
  </div>
</div>

## 📋 历史版本

<!-- ### v1.0.1 - 2025年8月
<div class="version-card">
  <div class="version-header">
    <span class="version-tag">新功能版</span>
    <span class="version-date">2025-08-23</span>
  </div>
  
  <div class="version-content">
    <div class="feature-category">
      <h4>🎨 多页GUI系统</h4>
      <ul>
        <li>完整的多页GUI功能实现</li>
        <li>支持真正的页面切换</li>
        <li>页面状态管理</li>
        <li>自动页面验证</li>
        <li>支持命令跳转</li>
        <li>分页按钮冷却时间支持</li>
        <li>分页按钮音效配置</li>
      </ul>
    </div>
    <div class="feature-category">
      <h4>🔧 技术改进</h4>
      <ul>
        <li>GuiManager增强 - 支持按页面获取布局和按钮配置</li>
        <li>MainGui重构 - 添加页面状态管理和切换逻辑</li>
        <li>Menu命令增强 - 支持页面参数跳转</li>
        <li>配置文件结构优化 - 支持多页配置</li>
      </ul>
    </div>
    <div class="feature-category">
      <h4>📝 配置更新</h4>
      <ul>
        <li>MainGui.yml支持多页配置结构</li>
        <li>分页按钮自动识别机制</li>
        <li>支持next、previous、first、last分页动作</li>
        <li>按钮命令系统完善</li>
      </ul>
    </div>
  </div>
</div>

### v1.0.0 - 2025年8月
<div class="version-card">
  <div class="version-header">
    <span class="version-tag">稳定版</span>
    <span class="version-date">2025-08-22</span>
  </div>
  
  <div class="version-content">
    <div class="feature-category">
      <h4>🎯 核心功能</h4>
      <ul>
        <li>基础空岛功能</li>
        <li>团队管理系统</li>
        <li>边界控制系统</li>
        <li>基础GUI系统</li>
      </ul>
    </div>
  </div>
</div>

### v0.9.0 - 2025年8月
<div class="version-card beta">
  <div class="version-header">
    <span class="version-tag beta">测试版</span>
    <span class="version-date">2025-08-21</span>
  </div>
  
  <div class="version-content">
    <div class="feature-category">
      <h4>🧪 测试功能</h4>
      <ul>
        <li>空岛生成器</li>
        <li>基础权限系统</li>
        <li>简单团队功能</li>
        <li>基础GUI框架</li>
      </ul>
    </div>
  </div>
</div>

### v0.8.0 - 2025年8月
<div class="version-card alpha">
  <div class="version-header">
    <span class="version-tag alpha">内测版</span>
    <span class="version-date">2025-08-15</span>
  </div>
  
  <div class="version-content">
    <div class="feature-category">
      <h4>🔬 实验功能</h4>
      <ul>
        <li>核心框架搭建</li>
        <li>基础API设计</li>
        <li>配置文件系统</li>
      </ul>
    </div>
  </div>
</div> -->

</div>

<style>
.update-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.version-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
  position: relative;
}

.version-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.version-card.beta {
  border-left-color: #ffc107;
}

.version-card.alpha {
  border-left-color: #dc3545;
}

.version-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.version-tag {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.version-tag.beta {
  background: linear-gradient(135deg, #ffc107, #ff8c00);
}

.version-tag.alpha {
  background: linear-gradient(135deg, #dc3545, #c82333);
}

.version-date {
  color: #6c757d;
  font-size: 14px;
  font-weight: 500;
}

.feature-category h4 {
  color: #2c3e50;
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.feature-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-category li {
  padding: 6px 0;
  color: #495057;
  position: relative;
  padding-left: 20px;
  line-height: 1.5;
}

.feature-category li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
  font-size: 14px;
}

@media (max-width: 768px) {
  .version-content {
    grid-template-columns: 1fr;
  }
  
  .version-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
