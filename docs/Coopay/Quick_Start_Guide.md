# CooPay 插件快速入门指南

## 5 分钟完成基础接入

### 步骤一：注册 CooPay 平台账户

1. 打开 [CooPay 官网](https://coopay.top/)
2. 完成实名认证  
   ![image](https://cdn.jsdu.cn/opdav/20251218/46a83a8ddf97f6b08ed2c8a3214a5f6e.png)  
   ![image](https://cdn.jsdu.cn/opdav/20251218/3fd87cea7427bd27404d37636432ec46.png)
3. 在平台中申请并创建服务器  
   ![image](https://cdn.jsdu.cn/opdav/20251218/c82d91565785b20ebd7edfd85b593a9c.png)

### 步骤二：安装依赖插件

1. **必须**：安装 `ProtocolLib` 插件（新版本采用地图虚拟发包形式）
2. **可选**：安装 `PlaceholderAPI` 插件（用于 PAPI 变量支持）
3. 重启服务器，确认依赖插件均正常加载

> ⚠️ **说明**：CooPay 插件**不依赖** Vault 经济系统，可以独立运行。

### 步骤三：安装 CooPay 插件

1. 下载 `CooPay.jar` 文件
2. 将 `CooPay.jar` 放入服务器 `plugins` 文件夹
3. 重启服务器
4. 在控制台中检查是否有报错信息

### 步骤四：完成基础配置

1. 打开并编辑 `plugins/CooPay/config.yml`
2. 填写/检查支付平台相关参数（如 Key 等）
3. 配置玩家支付后的奖励内容
4. 在游戏内执行 `/cp reload`（或 `/coopay reload`）重载配置

### 步骤五：创建你的第一个支付订单

1. 玩家在游戏内执行 `/cp trade <支付方式> <金额>`
2. 系统生成支付二维码或支付链接
3. 玩家扫码或点击链接完成支付
4. 支付成功后，系统自动发放奖励

**命令示例：**

```bash
/cp trade wx 100    # 使用微信支付 100 元
/cp trade zfb 50    # 使用支付宝支付 50 元
```
