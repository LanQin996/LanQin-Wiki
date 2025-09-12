# CooPay 权限概览

下表为 CooPay 插件主要权限节点及默认值。

## 基础权限

| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| 无 | 发起支付 | `true` |
| 无 | 查询订单 | `true` |
| 无 | 取消订单 | `true` |
| 无 | 查看帮助 | `true` |

## 管理权限

| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| `CooPay.admin` | 一键补偿 | `op` |
| `CooPay.admin.reload` | 重载配置 | `op` |

## 平台配置

CooPay 支持多平台支付配置，包括：

### 单一平台模式
- 所有支付方式使用同一个平台
- 在 `config.yml` 中配置 `platform.type`

### 混合平台模式
- 不同支付方式使用不同平台
- 在 `config.yml` 中配置 `platform.payment_methods`
- 支持微信支付使用 CPAY，支付宝使用 XPAY

---

## 权限组建议

### 普通玩家组
```yaml
permissions:
  # 默认所有玩家都可以使用支付功能，无需额外权限
```

### 管理员组
```yaml
permissions:
  - CooPay.admin          # 一键补偿权限
  - CooPay.admin.reload   # 重载配置权限
```

### 服务器管理员组
```yaml
permissions:
  - CooPay.*  # 所有权限
```

---

## 权限配置示例

### LuckPerms 配置
```yaml
groups:
  default:
    permissions:
      # 默认所有玩家都可以使用支付功能
  
  admin:
    permissions:
      - CooPay.admin
      - CooPay.admin.reload
```

### PermissionsEx 配置
```yaml
groups:
  default:
    permissions:
      # 默认所有玩家都可以使用支付功能
  
  admin:
    permissions:
      - CooPay.admin
      - CooPay.admin.reload
```

### GroupManager 配置
```yaml
groups:
  default:
    permissions:
      # 默认所有玩家都可以使用支付功能
  
  admin:
    permissions:
      - CooPay.admin
      - CooPay.admin.reload
```

---

## 权限继承

### 继承规则
- 子组继承父组的所有权限
- 子组可以覆盖父组的权限设置
- 权限继承是递归的

### 继承示例
```yaml
groups:
  default:
    permissions:
      - coopay.pay
      - coopay.balance
  
  vip:
    inheritance:
      - default
    permissions:
      - coopay.pay.discount
  
  admin:
    inheritance:
      - vip
    permissions:
      - coopay.*
```

---

## 权限检查

### 命令检查
所有命令执行前都会检查对应权限：
```java
if (!player.hasPermission("coopay.pay")) {
    player.sendMessage("§c你没有权限执行该操作！");
    return;
}
```

### 权限节点格式
- 使用点号分隔层级
- 全小写字母
- 使用下划线连接单词
- 遵循 `coopay.功能.子功能` 格式

---

## 动态权限

### 基于条件的权限
某些权限可以基于条件动态授予：
- `coopay.pay.discount` - 基于VIP等级
- `coopay.pay.limit` - 基于支付历史
- `coopay.reward.bonus` - 基于活跃度

### 临时权限
支持临时权限授予：
```bash
/lp user <player> permission set coopay.pay.discount true 1h
```

---

## 权限调试

### 调试命令
```bash
/coopay debug permissions  # 开启权限调试
/coopay debug off         # 关闭调试
```

### 权限检查
```bash
/lp user <player> permission check coopay.pay
/papi parse me %luckperms_context_permission_coopay_pay%
```

---

## 安全建议

### 权限最小化原则
- 只授予必要的权限
- 定期审查权限分配
- 使用权限组而非个人权限

### 敏感权限保护
- 管理权限仅授予可信管理员
- 定期更换管理员密码
- 启用操作日志记录

### 权限审计
- 定期检查权限分配
- 监控权限使用情况
- 记录权限变更历史

---

## 常见问题

### Q: 如何给玩家支付权限？
A: 使用权限管理插件添加 `coopay.pay` 权限

### Q: 如何限制支付金额？
A: 在配置文件中设置 `min_amount` 和 `max_amount`

### Q: 如何给VIP玩家折扣？
A: 添加 `coopay.pay.discount` 权限并配置折扣率

### Q: 如何禁止某个玩家支付？
A: 移除 `coopay.pay` 权限或添加到黑名单

### Q: 如何查看玩家权限？
A: 使用 `/lp user <player> permission check <permission>`
