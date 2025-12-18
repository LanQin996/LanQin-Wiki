# CooPay PlaceholderAPI 变量参考

## 概述

CooPay 插件提供了丰富的 PlaceholderAPI 变量，所有变量均以 `%coopay_` 为前缀。这些变量可以用于计分板、聊天格式、GUI界面等各种场景。

### 使用前提
- 安装 PlaceholderAPI 插件

---

## 信息变量

### 玩家自身相关

#### `%CooPay_player_pay%`
- **描述**: 当前玩家的 总充值金额。

#### `%CooPay_refresh_time_<礼包ID>%`
- **描述**: 礼包刷新时间。

#### `%CooPay_top_name_<n>%（1 ≤ n ≤ 10）`
- **描述**: 全服第 n 名赞助玩家的名字。

#### `%CooPay_top_pay_<n>%（1 ≤ n ≤ 10）`
- **描述**: 全服第 n 名赞助玩家的总充值金额。