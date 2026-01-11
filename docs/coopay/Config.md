# CooPay 配置文件

**config.yml**:

::: details 点我查看
```bash
# 开发者选项
# 用于调试插件
debug: false
# 发起订单的时候是否允许移动
can_move: false
# 平台显示的货币名称
currency_name: "点券"
# 秘钥
key: "1145141919810"
# 在玩家创建订单的时候
# 玩家允许执行的指令(头匹配)
command_whitelist:
  - cp
  - coopay
  - coo
  - pay
# 创建订单冷却时间（秒）
# 设置为 0 或负数表示不启用冷却时间
# 用于防止玩家频繁请求创建订单
trade_cooldown: 0
# 未支付订单自动过期时间（分钟），默认 10
trade_timeout_minutes: 10
# 玩家充值数据
sql:
  # 是否使用mysql保存玩家充值数据
  # 设置为false则默认使用sqlite
  open: false
  address: "localhost:3306"
  ssl: false
  database: "minecraft"
  username: "root"
  password: "root"
  # 表前缀 创建表时会是 coopay_表名
  prefix: "coopay"
  # 如果你使用的是mysql 8
  # 则需要修改这个内容为 com.mysql.cj.jdbc.Driver
  driver: "com.mysql.jdbc.Driver"
  # Hikari 连接池配置（仅 MySQL 生效）
  pool:
    # 最大连接数
    max: 10
    # 最小空闲连接数
    minIdle: 2
    # 连接超时时间（毫秒）
    connectionTimeoutMs: 15000
    # 连接最大存活时长（毫秒）
    maxLifetimeMs: 600000
```
:::

**message.yml**:
::: details 点我查看
```bash
message_prefix: "&7[&aCooPay&7]"
trade:
  unknown_usage: "&c指令格式错误 正确使用方式/cp trade 支付方式 金额"
  illegal_number: "&c输入了非法的数字！"
  integer_only_required: "&c仅支持整数金额，请输入整数！"
  cooldown: "&c创建订单过于频繁，请等待 {time} 秒后再试！"
 
  failed: "&c订单由于未知原因创建失败！请联系服务器管理员！原因:{cause}"
  failed_code: "&c订单支付二维码由于未知原因生成失败! 请联系服务器管理员！ 原因:{cause}"
  wait: "&a正在创建一个新的订单 &f订单号:&e{trade}"
  create_token: "&a正在创建订单Token"
  create_token_failed: "&c创建订单Token失败！ 原因:{cause}"
  pay_type: "&a支持的支付方式有: 微信 | 支付宝 | &e对应的支付方式输入应为 &bwx|zfb"
  illegal_type: "&c不存在的支付方式"
  complete: "&a订单完成！ 支付了 &e{money} &a元"
  cancel: "&a订单已经取消！"
  cancel_null: "&c您没有创建任何订单或者创建的订单已经取消!"
  illegal_trade_command: "&c不允许在拥有订单时执行该命令 &e输入/cp cancel 或按 &cQ &e取消订单!"
  success: "&a创建订单成功！"
  success_code:
    - "&a订单支付二维码生成成功！ "
    - "订单号:&e{trade}"
    - "&a金额:&e{money} &a支付方式:&b{type}"
    - "&a若需取消请输入 &c/cp cancel &a或按 &cQ &a键取消"
recovery:
  unknown_usage: "&c指令格式错误 正确使用方式/cp recovery 玩家名字"
  success: "&a成功为玩家{player}补偿充值"
  unknown_player: "&c玩家不在线或不存在"
trade_tittle:
  trade_create_success:
    tittle: "&bCoo&ePay"
    sub_tittle: "&a您当前需要支付 &e{money} &a元"
  trade_complete:
    tittle: "&bCoo&ePay"
    sub_tittle: "&a支付完成！&b感谢您对服务器的支持！"
info_list:
  page_format_server:
    - "&7========&b服务器订单查询-&a当前{page}/&b{max_page}&7========"
    - "&7 |&a{index_1}"
    - "&7 |&a{index_2}"
    - "&7 |&a{index_3}"
    - "&7 |&a{index_4}"
    - "&7 |&a{index_5}"
    - "&7 |&a{index_6}"
    - "&7 |&a{index_7}"
    - "&7 |&a{index_8}"
    - "&7 |&a{index_9}"
    - "&7 |&a{index_10}"
    - "&7========&a输入/cp infolist {next}查询下一页&7========"
  page_format_player:
    - "&7========&b创建订单查询-&a当前{page}/&b{max_page}&7========"
    - "&7 |&a{index_1}"
    - "&7 |&a{index_2}"
    - "&7 |&a{index_3}"
    - "&7 |&a{index_4}"
    - "&7 |&a{index_5}"
    - "&7 |&a{index_6}"
    - "&7 |&a{index_7}"
    - "&7 |&a{index_8}"
    - "&7 |&a{index_9}"
    - "&7 |&a{index_10}"
    - "&7========&a输入/cp infolist {next}查询下一页&7========"
buy:
  command:
    unknown_usage: "&c指令格式错误 正确使用方式/cp buy 礼包ID 支付方式"
    create_success: "&a成功发起礼包购买请求!"
    unknown_kits: "&c不存在该礼包"
info:
  command:
    unknown_usage: "&a指令格式错误 正确使用方式/cp info 订单号"
    not_completed: "&c上一个订单查询请求并未处理完成 请等待上一个订单查询请求结束!"
    error: "&c在查询的过程中发生了异常！"
    success: "&a发送查询请求成功！ 请等待返回结果！"
  unknown_trade: "&c查询的订单不存在"
  format:
    - "&7========&b订单查询&7========"
    - "&7 |&a当前订单号: %trade_id%"
    - "&7 |&a平台订单号: %trade_no%"
    - "&7 |&a商品名字: %trade_name%"
    - "&7 |&a金额: &e%money%"
    - "&7 |&a支付方式: &b%type%"
    - "&7 |&a支付状态: %status%"
    - "&7 |&a完成时间: %complete_date%"
help:
  - "&b--------{prefix}&b--------"
  - "&e/cp trade &a支付方式 支付金额 向服务器充值一定的金额"
  - "&e/cp buy &a礼包id 支付方式 购买一个服务器充值礼包"
  - "&e/cp info 订单号 &a查询这个订单号的订单状态"
  - "&e/cp infolist 页码 &a查询所有创建过的订单号"
  - "&e/cp cancel &a取消当前订单"
  - "&e按 &cQ &a键也可快速取消当前订单"
  - "&e/cp reload &a重载插件"
  - "&e/cp performance &a查看插件性能统计信息"
  - "&e/cp recovery player &a一键恢复这个玩家所有充值 方便切换周目时一键补偿 此操作会清空玩家总充值数据"
  - "&b"
  - "&e 当前服务器支持的支付方式有 微信支付 支付宝支付"
  - "&e 对应的支付方式输入应为 &b WX ZFB"
  - "&e 创建订单时 支付方式需要填上对应的内容 例如微信支付 则在支付方式中输入wx"
  - "&b-------------------------"
```
:::

**rewards.yml**:
::: details 点我查看
```bash
kits:
  default:
    # 是否为默认
    # 设置为默认则 在 /cp trade xxx xxx 时就会执行这一段
    default: true
    # 倍率
    # 只在default 可以正常生效
    scaled: 10.0
    # 是否仅允许整数金额（不允许小数点）
    # 设置为 true 时，创建订单时金额必须是整数，否则会拒绝创建
    integer_only: true
    commands:
      # 指令执行
      # 提供变量
      # {player_name} 玩家名字
      # {money} 充值的金额
      # {money_int} 充值的金额取整数
      # {money_scaled} 充值的金额乘上倍率
      # {money_scaled_int} 充值的金额乘上倍率然后取整
      # 提供papi 支持
      # 支持如下写法 %xxx_index_{money_int}%
      # 假设充值1元
      # 会自动被替换成 %xxx_index_1% 然后被 papi替换成对应值
      console:
        - "give {player_name} diamond 64"
      # 以玩家 + 临时OP身份执行的指令
      op:
        - "say 默认礼包 赞助金额 {money} 取整 {money_int} 倍率 {money_scaled} {money_scaled_int}"
  # 购买礼包指令如下
  # /cp buy 礼包id
  # 如果设置default 则不支持price设定
  example_1:
    # 定价 (单位: 元)
    price: 10.0
    # 个人限购次数 -1 为不限制
    limit: 1
    # 全服限购次数 -1 或 null 为不限制
    global_limit: 10
    # 购买该礼包所需权限 不填写则不限制
    permission: "coopay.kits.example_1"
    # 礼包刷新时间，格式为 XdXhXm 例如: 1d5h10m，0d0h0m 或 0 表示不刷新
    refresh_time: "1d0h0m"
    commands:
      # 变量提供除了不支持倍率相关 其他不变
      console:
        - "give {player_name} diamond 64"
        - "say B站关注 空栈是你的谎言 顺便赞助了{money}"
        - "say 充值礼包 example——1"
      # 以玩家 + 临时OP身份执行的指令
      op:
        - "say B站关注 空栈是你的谎言,插件定制DD"
        - "say 充值礼包 example——1 as op"
```
:::