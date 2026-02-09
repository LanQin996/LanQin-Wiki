# CooPay 常见问题（FAQ）

## 故障排除

### Q: 插件无法启动？
A: 检查依赖插件、Java版本、配置文件语法，查看错误日志。

### Q: 需要哪些依赖插件？
A: 必须安装 `ProtocolLib` 插件, 推荐安装 `PlaceholderAPI` 插件（用于PAPI变量支持）

### Q: 服务器校验失败
![image](https://cdn.jsdu.cn/opdav/20251218/8b0065cd3733af2da6d986ff7ffd44ee.png)
A: `config.yml` 中的 `key` 密钥错误

### Q: 奖励执行错误？
A: 检查命令语法、权限设置、玩家状态、变量替换。

### Q: 如何设置奖励内容？
A: 在 `rewards.yml` 中配置，支持控制台和OP身份执行奖励命令。

### Q: PlayerPoints点券怎么给?
A: 更改 `rewards.yml` 文件中的 `default` 下的 任意 `commands` 命令为 `points give {player_name} {money_scaled_int}` 

### Q: 如何启用补偿功能？
A: 使用 `/cp recovery <玩家名>` 命令为指定玩家执行补偿。

### Q: 如何实现多语言？
A: 修改 `messages.yml` 文件，支持多语言切换。

### Q: 支付成功但没有奖励？
A: 检查奖励配置、Vault连接、权限设置，查看奖励执行日志。

### Q: 支持哪些支付方式？
A: 支持微信支付 (wx) 和支付宝 (zfb) 两种支付方式。