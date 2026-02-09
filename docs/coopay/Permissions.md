# CooPay 权限概览


下表为 CooPay 插件主要权限节点及默认值。

## 基础权限

| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| `coopay.trade.<wx&zfb>` | 发起支付 | `true` |
| `coopay.buy` | 购买礼包 | `true` |
| `coopay.info` | 查询订单 | `true` |
| `coopay.list` | 查询订单列表 | `true` |
| `coopay.cancel` | 取消订单 | `true` |
| `coopay.help` | 查看帮助 | `true` |

## 管理权限

| 权限节点 | 描述 | 默认值 |
|----------|------|--------|
| `CooPay.admin` | 一键补偿 | `op` |
| `CooPay.admin.reload` | 重载配置 | `op` |
| `CooPay.admin.performance` | 性能统计 | `op` |

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