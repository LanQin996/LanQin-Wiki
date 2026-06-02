# SaveTools 权限列表

## 主命令权限

| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| `savekits.use` | 允许使用 `/savekits` 主命令 | `true` |
| `saveitem.use` | 允许使用 `/saveitem` 主命令 | `true` |
| `savetools.use` | 允许使用 `/savetools` 主命令 | 未在 `plugin.yml` 声明，建议自行分配 |

## 礼包权限

| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| `savekits.create` | 创建礼包 | 未在 `plugin.yml` 声明，建议 `op` |
| `savekits.edit` | 编辑礼包，也会让 `/sk list` 打开管理员 GUI | 未在 `plugin.yml` 声明，建议 `op` |
| `savekits.give.<礼包名>` | 自己领取指定礼包 | 动态权限 |
| `savekits.giveplayer` | 给玩家发放礼包，支持目标为 `*` | 未在 `plugin.yml` 声明，建议 `op` |
| `savekits.delete` | 删除礼包 | 未在 `plugin.yml` 声明，建议 `op` |
| `savekits.setmaxclaims` | 设置礼包最大领取次数 | `op` |
| `savekits.setinterval` | 设置礼包领取间隔 | 未在 `plugin.yml` 声明，建议 `op` |

示例：

```bash
lp group default permission set savekits.give.新手礼包 true
lp group vip permission set savekits.give.VIP礼包 true
lp group admin permission set savekits.giveplayer true
```

如果想允许领取全部礼包，可以使用权限插件的通配符能力：

```bash
lp group vip permission set savekits.give.* true
```

## 保存物品权限

| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| `saveitem.save` | 保存手持物品 | 未在 `plugin.yml` 声明，建议 `op` |
| `saveitem.give.<物品名>` | 自己领取指定保存物品 | 动态权限 |
| `saveitem.giveplayer` | 给指定玩家发放保存物品 | 未在 `plugin.yml` 声明，建议 `op` |
| `saveitem.delete` | 删除保存物品 | 未在 `plugin.yml` 声明，建议 `op` |
| `saveitem.list` | 查看保存物品列表 | 未在 `plugin.yml` 声明，按需要分配 |

示例：

```bash
lp group default permission set saveitem.give.新手剑 true
lp group admin permission set saveitem.save true
lp group admin permission set saveitem.giveplayer true
```

## 插件管理权限

| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| `savetools.reload` | 重载 SaveTools 配置和缓存 | 未在 `plugin.yml` 声明，建议 `op` |

## 注意

动态权限里的名称需要和礼包名、物品名一致。  
保存物品领取权限在代码中会把物品名转为小写检查，例如 `/si give Sword` 会检查 `saveitem.give.sword`。
