# 常见问题（FAQ）

## Q: 如何创建多个空岛模板？
A: 在 `config.yml` 中配置 `Island.Templates.Mappings`，并准备对应的 `.schematic` 文件。

## Q: 如何修改升级费用？
A: 编辑 `config.yml` 的 `Island.MoneyNeed` 与 `Island.PointsNeed` 数组。

## Q: 如何禁用某个功能？
A: 在 `config.yml` 的 `Permission` 部分将对应权限设置为 `false`。

## Q: 如何备份岛屿数据？
A: 备份 `plugins/Islands/data/` 目录下的所有文件。

## Q: 如何设置岛屿世界难度？
A: 在 `config.yml` 中修改 `Island.WorldDifficulty`。

## Q: 变量显示为 Invalid Param？
A: 检查变量名拼写，并用 `/papi list islands` 查看可用变量。

| 问题 | 可能原因 | 解决方案 |
|------|----------|----------|
| 变量显示为 `Invalid Param` | 变量名拼写错误 | 检查变量名是否正确 |
| 经济变量显示为 `0` | 未安装Vault | 安装Vault和经济插件 |
| 团队变量为空 | 玩家不在团队中 | 确认玩家已加入团队 |
| 等级变量为 `0` | 玩家未创建空岛 | 先创建空岛 |