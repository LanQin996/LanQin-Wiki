
# Islands 插件快速入门指南



## 5分钟快速上手

::: tip 提示
**推荐**: 安装 `PlaceholderAPI` `LuckPerms`插件
`islands`可简写为`is`
:::
::: warning 警告
**注意**: Islands 插件不强依赖任何插件，可以独立运行。<br><br>
`islands`可简写为`is`
:::

### 第一步：安装Islands插件
1. 下载 `Islands.jar` 文件
2. 放入 `plugins` 文件夹
3. 重启服务器
4. 检查控制台是否有错误信息

### 第二步：基础配置
1. 编辑 `plugins/Islands/config.yml`
2. 根据需要调整基础设置
3. 将世界存档目录命名为`default`并放在`plugins/Islands/templates`目录下

### 第三步：编辑世界存档模板
```bash
# templates.yml

# ===================================
# Islands 插件 - 模板配置文件
# ===================================
# 此文件用于配置每个岛屿模板的出生点和描述信息
# 模板文件夹需要放置在 plugins/Islands/templates/ 目录下
# 例如：plugins/Islands/templates/default/ 应包含完整的世界文件（level.dat, region文件夹等）
default:
  description: "经典空岛模板 - 一个小型的浮空岛屿，适合新手玩家"
  spawn:
    # 出生点坐标（相对于岛屿中心）
    x: 0.5      # X坐标（.5 表示方块中心）
    y: 100.0    # Y坐标（高度）
    z: 0.5      # Z坐标（.5 表示方块中心）
    yaw: 0.0    # 视角水平方向（0=南, 90=西, 180=北, 270=东）
    pitch: 0.0  # 视角垂直方向（-90=向上, 0=水平, 90=向下）
```
### 第四步：输入命令重载配置
`/islands admin reload`

### 第五步：创建第一个世界
1. 玩家执行 `/islands create`
2. 系统将自动生成世界
