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