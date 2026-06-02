# SaveTools PlaceholderAPI 变量

## 使用前提

需要安装 PlaceholderAPI。插件启动时检测到 PlaceholderAPI 后，会自动注册 `savetools` 扩展。

## 礼包冷却

| 变量 | 描述 |
|----------|------|
| `%savetools_kitcooldown_<礼包名>%` | 显示指定礼包对当前玩家的剩余冷却时间 |

示例：

```bash
%savetools_kitcooldown_新手礼包%
%savetools_kitcooldown_VIP礼包%
```

返回值：

| 情况 | 返回 |
|----------|------|
| 可以领取 | `可以领取` |
| 冷却中 | 例如 `1小时 30分钟` |
| 礼包不存在 | `礼包不存在` |

冷却时间来自 `/sk setinterval <礼包名> <间隔>`。如果礼包没有设置领取间隔，变量会显示可以领取。

## 保存物品显示

| 变量 | 描述 |
|----------|------|
| `%savetools_saveitem_<物品名>%` | 显示保存物品的名称或描述 |

示例：

```bash
%savetools_saveitem_新手剑%
```

返回值：

| 情况 | 返回 |
|----------|------|
| 物品存在 | 物品描述文本 |
| 物品不存在 | `物品不存在` |
| 读取失败 | `物品读取失败` |

## 测试变量

```bash
/papi parse me %savetools_kitcooldown_新手礼包%
/papi parse me %savetools_saveitem_新手剑%
```

变量里的礼包名和物品名需要与保存时的名称一致。
