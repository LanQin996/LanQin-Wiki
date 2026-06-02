
# Islands 插件快速入门指南

## 5分钟快速上手

::: tip 提示
推荐安装 `PlaceholderAPI`、`LuckPerms`、`NBTAPI`。如果需要升级扣费，还需要安装 `Vault` 和经济插件；如果需要点券扣费，需要安装 `PlayerPoints`。
<br>`/islands` 可简写为 `/is`。
:::
::: warning 警告
Islands 可以独立运行，但部分功能会跟随前置插件启用。例如变量需要 PlaceholderAPI，经济扣费需要 Vault，NBT 方块限制需要 NBTAPI。
:::

### 第一步：安装Islands插件
1. 下载 `Islands.jar` 文件
2. 放入 `plugins` 文件夹
3. 重启服务器
4. 检查控制台是否有错误信息

### 第二步：基础配置
1. 编辑 `plugins/Islands/config.yml`
2. 填写 `License.LicenseKey`
3. 按需要调整团队人数、岛屿边界、升级费用、世界目录等设置
4. 将默认模板世界放到 `plugins/Islands/templates/default`

默认情况下，岛屿世界会创建在主世界目录下的 `IslandsWorlds` 文件夹中。要改目录时，请优先使用 `Island.Worlds.Directory`，不要手动移动已经创建好的岛屿世界。

### 第三步：配置岛屿模板

模板必须是完整的世界文件夹，至少需要包含 `level.dat`。模板目录名要同时出现在 `config.yml` 和 `templates.yml` 里。

```bash
# plugins/Islands/templates.yml

default:
  name: "§e§l经典空岛"
  description: "经典空岛模板 - 一个小型的浮空岛屿，适合新手玩家"
  material: "GRASS"
  spawn:
    x: 0.5
    y: 53.0
    z: 0.5
    yaw: 0.0
    pitch: 0.0
```

如果要做海岛模板，可以在模板配置中加入 `generator: "OCEAN"`。这类世界会使用海洋生成器，并可配合酸水机制使用。

### 第四步：重载配置
`/islands admin reload`

### 第五步：创建第一个世界
1. 玩家执行 `/islands create`
2. 指定模板时执行 `/islands create <模板名>`，例如 `/islands create ocean`
3. 已有岛屿的玩家执行 `/islands` 会回到自己的岛屿；没有岛屿时会打开模板选择 GUI

### 常用开服调整

| 配置项 | 作用 |
|----------|------|
| `Island.MaxTeamMembers` | 团队最大人数，包含岛主 |
| `Island.WorldBoard` | 初始边界半径 |
| `Island.MaxLevel` | 岛屿最大等级 |
| `Island.UpdateRadius` | 每次升级增加的半径 |
| `Island.MoneyNeed` | 每级升级需要的金币 |
| `Island.PointsNeed` | 每级升级需要的点券 |
| `Island.WorldTime` | 岛屿时间同步来源，填 `null` 可关闭同步 |
| `Island.WorldLimits` | 掉落物、实体、方块放置等限制 |
| `SharedWorld` | 公共地狱和公共末地 |
