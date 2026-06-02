# 常见问题（FAQ）

## Q: 如何创建多个空岛模板？
A: 在 `plugins/Islands/templates` 中放入完整世界存档，并在 `templates.yml` 添加同名配置。最后把模板名加入 `config.yml` 的 `Island.Templates.Available`。

## Q: `/islands create <模板名>` 提示模板不可用？
A: 检查三处名称是否一致：`plugins/Islands/templates/<模板名>`、`templates.yml` 顶层节点、`Island.Templates.Available`。模板文件夹里还需要有 `level.dat`。

## Q: 如何做海岛模板？
A: 在 `templates.yml` 的模板节点里加入 `generator: "OCEAN"`，并把出生点高度设置在海平面附近。海岛酸水只对这种海洋生成器模板生效。

## Q: 如何修改升级费用？
A: 编辑 `config.yml` 的 `Island.MoneyNeed` 与 `Island.PointsNeed` 数组。

## Q: 升级扣费不生效？
A: 金币扣费需要 `Vault` 和经济插件，点券扣费需要 `PlayerPoints`。如果没有安装对应前置，相关费用会无法正常扣除或变量显示为 0。

## Q: 如何禁用某个功能？
A: 在 `config.yml` 的 `Permission` 部分将对应权限设置为 `false`。

## Q: 如何备份岛屿数据？
A: 备份 `plugins/Islands/teams.yml`、`plugins/Islands/users.yml`，以及岛屿世界目录。默认岛屿世界目录为主世界目录下的 `IslandsWorlds`。

## Q: 岛屿世界目录能不能移动？
A: 可以改 `Island.Worlds.Directory`，但已有岛屿不要直接手动搬。需要迁移时先备份，再开启 `Island.Worlds.Migration.Enabled` 和 `StartupBatch`。

## Q: 如何设置岛屿世界默认难度？
A: 在 `config.yml` 中修改 `Island.WorldDifficulty`。

## Q: 某团队世界天数一直增加？
A: 通常是 `Island.WorldTime` 开启了时间同步，又在岛屿世界里反复调整时间。把 `config.yml` 中的 `Island.WorldTime` 改为 `null` 后，岛屿会恢复独立时间。

## Q: `/islands time` 或 `/islands timelock` 无法使用？
A: 先确认玩家在自己的岛屿世界内。其次检查 `Island.WorldTime`，只要这里填写了有效世界名，时间切换和时间锁定都会被禁用。

## Q: 公共地狱或末地进不去？
A: 检查 `SharedWorld.NetherEnabled`、`SharedWorld.EndEnabled` 是否开启。命令入口分别是 `/islands nether` 和 `/islands end`，传送门跳转还需要 `SharedWorld.PortalRedirect` 为 `true`。

## Q: 禁用团队世界传送门失效?
A: 大概率是Mods中的 `Mixin` 导致 纯插件环境并无问题

## Q: 耕地保护失效?
A: 有相关权限的人会无视耕地保护 `islands.bypass.farmland`

## Q: 岛屿经济变量显示为 `0`
A: 未安装`Vault`

## Q: 岛屿等级变量为 `0`
A: 玩家未加入团队

## Q: 生物群系修改没反应？
A: 玩家需要先拥有 `/islands setbiome` 功能权限，还需要目标群系权限，例如 `islands.biomes.plains`。命令需要在自己的岛屿世界内执行。

## Q: 方块 NBT 限制怎么调试？
A: 安装 `NBTAPI` 后，管理员执行 `/islands admin nbt`，再放置目标方块，聊天栏会显示可用于配置的 NBT 关键字。没有 NBTAPI 时，只能使用普通方块名限制。
