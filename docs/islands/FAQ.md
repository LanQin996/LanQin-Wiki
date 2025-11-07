# 常见问题（FAQ）



## Q: 如何创建多个空岛模板？
A: 在 `plugins/Islands/templates` 中放入自己的世界存档,并在`templates.yml`编辑对应存档名称的配置

## Q: 如何修改升级费用？
A: 编辑 `config.yml` 的 `Island.MoneyNeed` 与 `Island.PointsNeed` 数组。

## Q: 如何禁用某个功能？
A: 在 `config.yml` 的 `Permission` 部分将对应权限设置为 `false`。

## Q: 如何备份岛屿数据？
A: 备份 `/World` 目录下以 `_islands` 结尾的存档。

## Q: 如何设置岛屿世界默认难度？
A: 在 `config.yml` 中修改 `Island.WorldDifficulty`。

## Q: 变量显示为 Invalid Param？
A: 检查变量名拼写，并用 `/papi list islands` 查看可用变量。

## Q: 岛屿经济变量显示为 `0`
A: 未安装`Vault`

## Q: 岛屿等级变量为 `0`
A: 玩家未加入团队