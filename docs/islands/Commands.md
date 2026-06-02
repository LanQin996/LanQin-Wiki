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
| `/islands create [模板名]` | 创建岛屿，不写模板名时使用默认模板 |
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
| `/islands difficulty [难度]` | 查看或设置岛屿世界难度，支持 `peaceful/easy/normal/hard`、中文或 `0-3` |
| `/islands time` | 在白天和黑夜之间切换岛屿时间，开启全局时间同步时不可用 |
| `/islands weather` | 在晴天和雨天之间切换岛屿天气 |
| `/islands visit <玩家名>` | 访问指定玩家所在团队的岛屿(需要访客访问权限) |
| `/islands transfer <团队成员>` | 将团队主转让给当前团队成员 |
| `/islands timelock [toggle|on|off]` | 锁定或解除当前岛屿的时间 |
| `/islands templates` | 查看所有可用岛屿模板 |
| `/islands setbiome <生物群系>` | 将当前岛屿世界改为指定生物群系 |
| `/islands nether` | 传送到公共地狱世界 |
| `/islands end` | 传送到公共末地世界 |

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

## 使用补充

### 创建和模板

`/islands create` 会读取 `Island.Templates.Default` 指定的默认模板。  
`/islands create ocean` 这类写法会尝试读取 `templates.yml` 里的 `ocean` 配置，并要求 `ocean` 同时存在于 `Island.Templates.Available`。

如果玩家没有岛屿，直接执行 `/islands` 会打开模板选择 GUI；如果已经有岛屿，则会传送回自己的岛屿出生点。

### 时间相关

`/islands time` 和 `/islands timelock` 都要求玩家在自己的岛屿世界内执行。  
当 `config.yml` 中的 `Island.WorldTime` 填写了世界名时，岛屿时间会同步该世界，此时这两个命令会被拦截。要使用岛屿独立时间，请把 `Island.WorldTime` 改为 `null`。

### 访客访问

`/islands visit <玩家名>` 访问的是目标玩家所在团队的岛屿。目标团队如果锁岛，普通玩家需要拥有该团队给予的 `visit` 访客权限；拥有 `islands.bypass.visit` 的管理员不受此限制。

### 公共地狱和末地

公共地狱、公共末地由 `SharedWorld` 配置控制。  
`/islands nether` 和 `/islands end` 使用的是全服共享世界，不会给每个团队单独生成地狱或末地。

