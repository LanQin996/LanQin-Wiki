# CooPay 插件快速入门指南

## 5分钟快速上手
::: tip 提示
**推荐**: 安装 `PlaceholderAPI` `LuckPerms`插件
:::
::: warning 警告
**注意**: CooPay 插件不强依赖任何插件，可以独立运行。
:::

### 第一步：安装CooPay插件
1. 下载 `CooPay.jar` 文件
2. 放入 `plugins` 文件夹
3. 重启服务器
4. 检查控制台是否有错误信息

### 第二步：基础配置
1. 编辑 `plugins/CooPay/config.yml`
2. 配置支付平台参数
3. 设置奖励内容
4. 执行 `/coopay reload` 重载配置

### 第三步：创建第一个支付订单
1. 玩家执行 `/cp trade <支付方式> <金额>`
2. 系统生成支付二维码
3. 玩家扫码完成支付
4. 自动发放奖励

**示例**:
```bash
/cp trade wxpay 100    # 使用微信支付100元
/cp trade alipay 50    # 使用支付宝支付50元
```

## 常用命令速查

### 基础操作
| 命令 | 功能 | 权限 |
|------|------|------|
| `/cp trade <支付方式> <金额>` | 发起支付 | 无 |
| `/cp info <订单号>` | 查询订单 | 无 |
| `/cp cancel` | 取消订单 | 无 |
| `/cp help` | 查看帮助 | 无 |

### 管理命令
| 命令 | 功能 | 权限 |
|------|------|------|
| `/cp reload` | 重载配置 | `CooPay.admin.reload` |
| `/cp recovery <玩家名>` | 一键补偿 | `CooPay.admin` |

### 支付方式
| 支付方式 | 说明 |
|----------|------|
| `wxpay` | 微信支付 |
| `alipay` | 支付宝 |

---

## 使用流程

### 玩家支付流程

##### 1. 发起支付
```bash
/cp trade wxpay 100
```
- 系统生成支付二维码
- 显示支付说明
- 提供扫码支付

##### 2. 完成支付
- 使用手机扫描二维码
- 或点击支付链接
- 选择支付方式完成支付

##### 3. 获得奖励
- 支付成功后自动发放奖励
- 系统发送确认消息
- 奖励内容根据配置执行

## 配置要点
#### 支付平台配置
##### CPay地址：<https://cpay.jsdu.cn/>
##### XPay地址：<https://x.jsdu.cn/>

```yaml
platform:
  # 平台选择: cpay 或 xpay
  type: "cpay"
  # 混合平台模式配置
  payment_methods:
    wxpay: "cpay"    # 微信支付使用 CPAY
    alipay: "xpay"   # 支付宝使用 XPAY
  # CPAY 平台配置
  cpay:
    pid: 1001
    key: "your_cpay_key"
  # XPAY 平台配置
  xpay:
    pid: 1001
    key: "your_xpay_key"
```

#### 奖励配置
```yaml
price:
  # 是否将金额乘以倍率后强制转为整数
  money_toInt: false
  # 倍率
  magnification: 10.0
  # 控制台执行的奖励命令
  commands_console:
    - "give {player_name} DIAMOND 64"
    - "say 玩家 {player_name} 充值了 {money} 元"
  # OP身份执行的奖励命令
  commands_admin:
    - "say 感谢 {player_name} 的支持！"
```

## 管理员指南
1. 检查插件是否正常加载
2. 测试支付功能
3. 测试奖励发放
