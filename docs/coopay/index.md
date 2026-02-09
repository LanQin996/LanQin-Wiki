# CooPay 插件快速入门指南

::: tip 提示
**本插件支持1.7 - 1.21.X**<br>
支持 `Folia` `Paper` `Spigot` 等主流核心遇到无法使用问题请进群联系管理<br>
**CooPay专属交流群: [760681627](https://qm.qq.com/q/FdUKx54JvU)**
:::
## 5分钟快速上手
### 第一步：注册 CooPay 平台账户

1. 打开 [CooPay 官网](https://coopay.top/)
2. 完成实名认证  
   ![image](https://cdn.jsdu.cn/opdav/20251218/46a83a8ddf97f6b08ed2c8a3214a5f6e.png)  
   ![image](https://cdn.jsdu.cn/opdav/20251218/3fd87cea7427bd27404d37636432ec46.png)
3. 在平台中申请并创建服务器  
   ![image](https://cdn.jsdu.cn/opdav/20251218/c82d91565785b20ebd7edfd85b593a9c.png)

::: warning 警告
**必须**: 安装 `ProtocolLib` 插件
:::
::: tip 提示
**推荐**: 安装 `PlaceholderAPI` 插件
:::

### 第二步：安装CooPay插件
1. 下载 `CooPay.jar` 文件
2. 放入 `plugins` 文件夹
3. 重启服务器
4. 检查控制台是否有错误信息

### 第三步：基础配置
1. 编辑 `plugins/CooPay/config.yml`
2. 填写/检查相关参数（如 Key 等）
3. 执行 `/coopay reload` 重载配置

### 第四步：创建你的第一个支付订单

1. 玩家在游戏内执行 `/cp trade <支付方式> <金额>`
2. 系统生成支付二维码或支付链接
3. 玩家扫码或点击链接完成支付
4. 支付成功后，系统自动发放奖励

**示例**:
```bash
/cp trade wx 100    # 使用微信支付100元
/cp trade zfb 50    # 使用支付宝支付50元
```