# Islands 插件命令参考


## 命令总览

### 主命令

#### 基础与帮助

| 命令 | 描述 |
|----------|------|
| `/islands` | 无参数：回到自己的岛屿或打开模板选择 GUI |
| `/islands help [页码]` | 查看 Islands 命令帮助(按权限过滤，支持分页与点击翻页)|

#### 岛屿管理
| 命令 | 描述 |
|----------|------|
| `/islands create` | 创建岛屿 |
| `/islands upgrade` | 升级当前岛屿边界/等级(消耗经济/点券，按配置检查)|
| `/islands sethome` | 设置出生点 |
| `/islands kick <玩家名>` | 踢出成员 |
| `/islands expel <玩家名>` | 踢出空岛访客 |
| `/islands leave` | 离开团队 |
| `/islands lock` | 锁定/解锁岛屿 |
| `/islands border` | 切换团队边界显示 |
| `/islands pvp` | 切换PVP状态 |
| `/islands pickup` | 切换物品拾取状态 |
| `/islands drop` | 切换物品丢弃状态 |
| `/islands difficulty  [难度]` | 设置岛屿世界的难度 |
| `/islands time` | 切换岛屿世界的时间 |
| `/islands weather` | 切换岛屿世界的天气 |
| `/islands visit` | 访问指定团队的岛屿(需要访客访问权限) |

#### 团队与邀请
| 命令 | 描述 |
|----------|------|
| `/islands invite` | 打开邀请 GUI，从在线玩家中选择要邀请的成员 |
| `/islands invite <玩家名>	` | 邀请指定玩家加入团队 |
| `/islands accept` | 接受当前待处理的团队邀请 |
| `/islands reject` | 拒绝当前待处理的团队邀请 |
| `/islands kick <玩家名>` | 踢出团队成员(仅岛主，可踢离线成员) |
| `/islands leave` | 离开当前团队(仅成员，岛主无法使用) |

#### 删除岛屿
| 命令 | 描述 |
|----------|------|
| `/islands remove` | 发起删除当前岛屿的申请，进入`待确认`状态并有时限 |
| `/islands remove confirm` | 确认删除岛屿 |

#### 菜单
| 命令 | 描述 |
|----------|------|
| `/islands menu` | 打开 Islands 主菜单 GUI |
| `/islands menu page <页码>` | 以指定页码打开主菜单 |
| `/islands menu biome` | 打开生物群系选择菜单 |
| `/islands menu biome page <页码>` | 以指定页码打开生物群系菜单 |
| `/islands menu guest` | 访客管理菜单 |
| `/islands menu difficulty` | 难度选择菜单 |

#### 访客
![42f484c50e6ba36ac2986b191202c999](https://cdn.jsdu.cn/opdav/20260121/42f484c50e6ba36ac2986b191202c999.gif)
::: tip 提示
**权限**分别有以下节点 (用于 guestadd / guestremove 参数)<br><br>
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
| `/islands guestlist` | 查看当前岛屿的访客列表及其权限情况 |
| `/islands guestadd <玩家名> [权限...]` | 为指定玩家添加访客权限<br>(不写权限则只赋予访问权限，可用 all 一键全部授权) |
| `/islands guestremove <玩家名>` | 移除该玩家的所有访客权限 |
| `/islands guestremove <玩家名> [权限...]` | 仅移除指定的几项访客权限 |

#### 管理员
| 命令 | 描述 |
|----------|------|
| `/islands admin reload` | 重载配置 |
| `/islands admin nbt` | 切换`方块 NBT 调试模式`<br>放置方块时显示 NBT 并提供可点击复制。 |
| `/islands admin team add <岛主> <玩家>` | 强制将玩家添加进团队(无视人数上限) |
| `/islands admin team kick <岛主> <玩家>` | 强制将指定玩家从岛主团队中移除 |
| `/islands admin team setmax <岛主> <最大成员数>` | 设置某个岛主团队的最大成员数(含岛主) |
| `/islands admin team info <玩家>` | 查询该玩家所在团队的详细信息 |
| `/islands admin team delete <岛主>` | 强制删除指定岛主的团队及其对应岛屿世界 |

