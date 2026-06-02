# SaveTools 快速开始

SaveTools 主要提供两类功能：保存物品和礼包管理。保存物品适合做命令奖励、商城物品、活动补偿；礼包适合做新手礼包、周期礼包、活动礼包。

::: tip 提示
`/savekits` 可简写为 `/sk`，`/saveitem` 可简写为 `/si`，`/savetools` 可简写为 `/st`。
:::

::: warning 注意
插件默认使用 YAML 存储。多服共用数据时再考虑 MySQL，并建议开启自动刷新缓存。
:::

## 安装

1. 将 `SaveTools.jar` 放入服务器 `plugins` 文件夹
2. 重启服务器
3. 确认生成 `plugins/SaveTools/config.yml`
4. 按需要安装 PlaceholderAPI

## 基础文件

| 文件 | 作用 |
|----------|------|
| `config.yml` | 数据库、语言、缓存刷新配置 |
| `savekits.yml` | YAML 模式下保存礼包数据 |
| `saveitem.yml` | YAML 模式下保存物品数据 |
| `lang/zh_CN.yml` | 中文语言文件 |
| `lang/en_US.yml` | 英文语言文件 |
| `gui/sk-list.yml` | `/sk list` 礼包列表 GUI |

## 保存第一个物品

1. 手持要保存的物品
2. 执行 `/si save 新手剑`
3. 给自己发放：`/si give 新手剑`
4. 给玩家发放：`/si giveplayer 新手剑 玩家名`

如果玩家没有 `saveitem.give.新手剑` 权限，将无法通过 `/si give 新手剑` 自己领取。

## 创建第一个礼包

1. 执行 `/sk create 新手礼包`
2. 在打开的编辑 GUI 中放入礼包物品
3. 关闭 GUI，插件会自动保存礼包
4. 预览礼包：`/sk look 新手礼包`
5. 领取礼包：`/sk give 新手礼包`

空礼包不会保存。创建或编辑礼包后，关闭编辑界面才会写入数据。

## 常用设置

```bash
/sk setmaxclaims 新手礼包 1
/sk setinterval 新手礼包 1d
```

`setmaxclaims` 控制每个玩家最多领取几次，`-1` 表示不限制。  
`setinterval` 控制领取间隔，支持 `60`、`30s`、`5m`、`1h30m`、`1d`、`-1`。

## 重载

```bash
/st reload
```

重载会重新读取配置、语言文件、GUI 配置，并刷新保存物品和礼包缓存。
