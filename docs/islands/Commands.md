# Islands 插件命令参考


## 命令总览

### 主命令
```
/islands [子命令]
/is [子命令]
```

| 命令 | 描述 |
|----------|------|
| `/islands create` | 创建岛屿 |
| `/islands sethome` | 设置出生点 |
| `/islands kick <玩家名>` | 踢出成员 |
| `/islands expel <玩家名>` | 踢出空岛访客 |
| `/islands leave` | 离开团队 |
| `/islands lock` | 锁定/解锁岛屿 |
| `/islands border` | 切换团队边界显示 |
| `/islands pvp` | 切换PVP状态 |
| `/islands pickup` | 切换物品拾取状态 |
| `/islands drop` | 切换物品丢弃状态 |
| `/islands difficulty` | 设置岛屿世界的难度 |
| `/islands time` | 切换岛屿世界的时间 |
| `/islands weather` | 切换岛屿世界的天气 |
| `/islands visit` | 访问指定团队的岛屿(需要访客访问权限) |

### 邀请玩家
| 命令 | 描述 |
|----------|------|
| `/islands invite <玩家名>` | 邀请成员 |
| `/islands accept` | 接收邀请 |
| `/islands reject` | 拒绝邀请 |

### 删除岛屿
| 命令 | 描述 |
|----------|------|
| `/islands remove` | 删除岛屿 |
| `/islands remove confirm` | 确认删除岛屿 |

### 菜单
| 命令 | 描述 |
|----------|------|
| `/islands menu` | 菜单 |
| `/islands menu biome` | 生物群系菜单 |
| `/islands menu difficulty` | 难度选择菜单 |

### 访客
::: tip 提示
**权限**分别有以下节点<br><br>
**visit** -> 访问权限<br>
**break** -> 破坏权限<br>
**place** -> 放置权限<br>
**interact** -> 交互权限<br>
**pickup** -> 拾取权限<br>
**drop** -> 丢弃权限<br>
**pvp** -> PVP权限<br>
**all** -> 全部
:::

| 命令 | 描述 |
|----------|------|
| `/islands guestlist` | 查看访客列表 |
| `/islands guestadd <玩家名> [权限...]` | 添加访客权限 |
| `/islands guestremove <玩家名>` | 移除访客权限 |
| `/islands guestset <玩家名> <权限类型> <true/false>` | 设置访客权限 |

### 管理员
| 命令 | 描述 |
|----------|------|
| `/islands admin reload` | 重载配置 |
| `/islands admin getitemid` | 获取手中物品的材质ID，用于配置方块放置限制 |
| `/islands admin team add <岛主> <玩家>` | 强制将玩家添加进团队(无视人数上限) |
| `/islands admin team kick <岛主> <玩家>` | 强制踢出团队成员 |
| `/islands admin team setmax <岛主> <最大成员数>` | 设置团队最大成员数 |
| `/islands admin team info <玩家>` | 查询玩家的团队信息 |
| `/islands admin team delete <岛主>` | 强制删除团队及其对应世界 |

