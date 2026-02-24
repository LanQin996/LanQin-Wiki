# 权限概览


下表为 Islands 插件主要权限节点及默认值。

## 基础命令权限

| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| `islands.create` | 创建空岛 | `true` |
| `islands.remove` | 删除空岛 | `true` |
| `islands.invite` | 邀请成员 | `true` |
| `islands.kick` | 踢出成员 | `true` |
| `islands.leave` | 离开团队 | `true` |
| `islands.lock` | 锁定/解锁岛屿 | `true` |
| `islands.sethome` | 设置出生点 | `true` |
| `islands.border` | 边界显示 | `true` |
| `islands.pvp` | PVP控制 | `true` |
| `islands.pickup` | 物品拾取控制 | `true` |
| `islands.drop` | 物品丢弃控制 | `true` |
| `islands.expel` | 踢出访客 | `true` |
| `islands.upgrade` | 升级当前岛屿的边界范围 | `true` |
| `islands.visit` | 访问指定团队的岛屿(需要访客访问权限) | `true` |
| `islands.time` | 切换岛屿世界的时间(白天/黑夜) | `false` |
| `islands.weather` | 切换岛屿世界的天气(晴天/雨天) | `false` |
| `islands.templates` | 查看所有可用的岛屿模板 | `false` |
| `islands.difficulty` | 设置岛屿世界的难度（和平/简单/普通/困难） | `false` |
| `islands.guest.add` | 添加访客权限 | `true` |
| `islands.guest.list` | 查看访客列表 | `true` |
| `islands.guest.remove` | 移除访客权限 | `true` |

## 管理权限

| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| `islands.admin.reload` | 重载配置 | `op` |
| `islands.admin.nbt` | 切换管理员方块 NBT 调试模式，放置方块时显示 NBT 并可点击复制 | `op` |
| `islands.admin.team.delete` | 管理员强制删除团队及其世界 | `op` |
| `islands.admin.team.add` | 管理员强制拉人进团队 | `op` |
| `islands.admin.team.info` | 查询玩家的团队信息 | `op` |
| `islands.admin.team.kick` | 强制踢出团队成员 | `op` |
| `islands.admin.team.setmax` | 设置团队最大成员数 | `op` |

## 生物群系权限

::: tip 提示
`{生物群系名称}`为**BiomesGui.yml**内的biome的值
:::

|权限节点|描述|默认值|
|----------|------|--------|
| `islands.biomes.{生物群系名称}` | 给予更改对应名称生物群系权限 | `false` | 

## 详细权限
| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| `islands.bypass.visit` | 无视团队锁定,访问团队世界 | `false` |
| `islands.bypass.border` | 绕过世界边界检测,不显示到达边界的提示 | `false` |
| `islands.bypass.itemuse` | 无视团队世界物品使用限制 | `false` |
| `islands.bypass.farmland` | 无视耕地保护限制,可踩坏/破坏耕地 | `false` |
| `islands.bypass.blockplace` | 无视团队世界方块放置限制 | `false` |
| `islands.bypass.break` | 无视团队世界方块破坏限制 | `false` |
| `islands.bypass.place` | 无视团队世界方块放置限制 | `false` |
| `islands.bypass.interact` | 无视团队世界交互限制 | `false` |
| `islands.bypass.pvp` | 无视团队世界 PVP 限制 | `false` |
| `islands.bypass.pickup` | 无视团队世界物品拾取限制 | `false` |
| `islands.bypass.drop` | 无视团队世界物品丢弃限制 | `false` |

---

提示: 可通过权限插件（LuckPerms 等）为不同组分配权限。


