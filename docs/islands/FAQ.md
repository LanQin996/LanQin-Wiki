# 常见问题（FAQ）

## Q: 如何创建多个空岛模板？
A: 在 `plugins/Islands/templates` 中放入自己的世界存档,并在`templates.yml`编辑对应存档名称的配置

## Q: 如何修改升级费用？
A: 编辑 `config.yml` 的 `Island.MoneyNeed` 与 `Island.PointsNeed` 数组。

## Q: 如何禁用某个功能？
A: 在 `config.yml` 的 `Permission` 部分将对应权限设置为 `false`。

## Q: 如何备份岛屿数据？
A: 备份 `world` 目录下以 `_islands` 结尾的存档。

## Q: 如何设置岛屿世界默认难度？
A: 在 `config.yml` 中修改 `Island.WorldDifficulty`。

## Q: 某团队世界天数一直增加？
A: 因开启  `时间同步` 功能后在此世界调整时间会导致天数无限快速增长 前往 `config` 中找到 `WorldTime` 改为 `null`

## Q: 禁用团队世界传送门失效?
A: 大概率是Mods中的 `Mixin` 导致 纯插件环境并无问题

## Q: 耕地保护失效?
A: 有相关权限的人会无视耕地保护 `islands.bypass.farmland`

## Q: 岛屿经济变量显示为 `0`
A: 未安装`Vault`

## Q: 岛屿等级变量为 `0`
A: 玩家未加入团队