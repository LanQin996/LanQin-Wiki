# Islands 配置文件

**config.yml**:

::: details 点我查看
```bash
Debug: false
Version: 1.0.6
# 岛屿性能排行榜
Announcement:
  # 是否启用
  Enabled: true
  # 发送间隔（分钟）
  IntervalMinutes: 30
  # 最大展示的世界数量（在公告中显示的条目数）
  MaxEntries: 5
  # 是否在一行内显示一个世界（true=单行显示，false=多行显示详细信息）
  SingleLine: true
Mysql:
  enabled: false
  host: localhost
  port: 3306
  database: minecraft_islands
  username: root
  password: ""
  # 表前缀（可选，用于共享数据库）
  table-prefix: "islands_"
  # 连接池（可选）
  pool:
    maximum-pool-size: 10
    minimum-idle: 2
    connection-timeout: 30000
    idle-timeout: 600000
    max-lifetime: 1800000
  # 多区设置（仅在 enabled: true 时生效）
  multi-server:
    # 当前服务器标识（必须唯一，用于标识岛屿所在服务器）
    server-id: "main"
    # 是否允许在多个区服创建岛屿
    allow-multi-creation: false
    # 是否允许在当前区服创建岛屿
    allow-local-creation: true
Island:
  # 注意：岛屿的出生点高度由模板配置文件 templates.yml 中的 spawn.y 决定
  # 岛屿删除次数
  Remove: 3
  # 等待确认删除的秒数
  RemoveConfirmWait: 20
  # 邀请超时的秒数
  InviteTimeout: 60
  # 团队最大人数（包含岛主）
  MaxTeamMembers: 5

  # 岛屿模板配置
  # 模板为完整的世界文件夹，需要手动放置在 plugins/Islands/templates/ 目录下
  # 例如：plugins/Islands/templates/default/ 包含完整的世界文件（level.dat, region文件夹等）
  Templates:
    # 默认模板（当玩家不指定模板时使用）
    Default: "default"
    # 可用的模板列表（对应 templates 目录下的文件夹名）
    Available:
      - "default"
      - "skyblock"
      - "ocean"
      # 添加更多模板...

  # 世界边界设置
  WorldBoard: 64         # 边界半径（从中心到边缘的距离）
  WarningDistance: 5     # 距离边界多少格开始警告
  BorderDamage: true     # 是否对超出边界的玩家造成伤害
  DamageAmount: 2.0      # 每秒造成的伤害值
  DamageBuffer: 5.0      # 超出边界多少格开始受到伤害
  ExpandTime: 20         # 边界扩展时间（秒）
  # 创建家园前是否清空背包.
  CreateIslandsClearInv: false
  #是否开启玩家死亡后自动在岛屿世界复活
  EnableAutoReSpawnInHome: false
  # 最大家园可升级的等级
  MaxLevel: 10
  # 升级一次的半径大小
  UpdateRadius: 50
  # 岛屿升级所需金币 和 点券 并集
  # 目前一级所需5000金币和100点券
  MoneyNeed:
    - 5000
    - 10000
    - 15000
    - 20000
    - 20000
    - 20000
    - 0
    - 0
    - 0
  PointsNeed:
    - 100
    - 150
    - 200
    - 300
  # 岛屿世界困难度
  WorldDifficulty: HARD
  #是否禁用岛屿世界传送门的创建
  DisablePortalCreate: true
  # 所有规则地址: https://bukkit.windit.net/javadoc/org/bukkit/GameRule.html
  WorldSet:
    # 死亡不掉落
    keepInventory: true
    # 火焰蔓延
    doFireTick: false
  # 初始生物生成（创建岛屿完成后在出生点生成一个生物）
  InitialMob:
    Enabled: false         # 是否启用创建时生成初始生物
    Type: COW              # 生物类型，如 COW/ZOMBIE/VILLAGER/CHICKEN 等
    CustomName: '§a牛子'         # 自定义名称（留空则不设置）
    NameVisible: true      # 是否显示名称

  #世界时间同步
  #填写null为不开启同步
  #填写世界名字为同步这个世界的时间
  #注意要同步的世界名字必须比所有玩家时间都先加载，也就是开服即加载
  WorldTime: 'world'

  # 不活跃团队自动清理设置
  InactiveCleanup:
    # 是否启用不活跃团队自动清理功能
    Enabled: true
    # 检查间隔（分钟）
    CheckIntervalMinutes: 60
    # 不活跃时间阈值（天）- 超过此时间没上线将被清理
    InactiveDaysThreshold: 30
    # 是否同时删除团队的世界
    DeleteWorld: true

# 控制玩家默认拥有的权限,如果想单独给某位玩家相关权限 请打开 Debug 执行命令查看对应权限节点
# true为默认拥有
Permission:
  # 创建岛屿世界
  create: true
  # 踢出团队成员
  kick: true
  # 离开当前团队
  leave: true
  # <锁定/解锁> 岛屿
  lock: true
  # 邀请团队成员
  invite: true
  # 岛屿拥有者删除当前岛屿
  remove: true
  # 踢出当前岛屿世界的访客
  expel:  true
  # <开启/关闭> 边界(仅对当前团队成员生效)
  border: true
  # <开启/关闭> Pvp(仅对非当前团队成员生效)
  pvp: true
  # <开启/关闭> 物品丢弃(仅对非当前团队成员生效)
  drop: true
  # <开启/关闭> 物品拾取(仅对非当前团队成员生效)
  pick: true
  # 设置当前岛屿世界出生点
  sethome: true
  # 访问他人岛屿（配合访客权限canVisit）
  visit: true
  # 时间切换功能（仅在时间同步关闭时可用）
  time: true
  # 天气切换功能
  weather: true
  # 难度调整功能
  difficulty: true
  # 访客权限管理功能
  guest:
    # 是否启用访客权限功能
    enabled: true
    # 添加访客权限
    add: true
    # 移除访客权限
    remove: true
    # 查看访客列表
    list: true
    # 设置访客权限
    set: true
```
:::

**messages.yml**:
::: details 点我查看
```bash
# Islands - 消息文件
# 使用 & 颜色码；支持 PAPI 与 {变量} 替换

prefix: '&6[Islands]&r '

common:
  no-permission: '&c你没有权限执行该操作！'
  players-only: '&c该命令只能由玩家执行！'
  cooldown: '&c该操作冷却中，还需 &e{seconds} &c秒'
  usage: '&e用法: {usage}'
  player-not-found: '&c找不到该玩家！'
  player-not-online: '&c玩家不在线!'
  not-found: '&c未找到目标：{target}'
  world-not-loaded: '&c目标岛屿世界未加载，请稍后再试！'
  warn-help-missing: '&e警告: help.yml 缺少 help 节，已保持现有设置。'
  reloaded: '&a配置文件已重载！'
  unknown-command: '&c未知命令: /{label} {args}'
  invalid-number: '&c请输入有效的数字！'

create:
  success: '&a空岛创建成功！已为你建立团队并设置世界边界。'
  success-with-template: '&a使用模板 ''{template}'' 创建空岛成功！已为你建立团队并设置世界边界。'
  fail: '&c创建空岛时出错: {error}'

upgrade:
  already-max: '&c你的岛屿已达到最大等级！'
  invalid-cost: '&c升级费用配置错误，请联系管理员！'
  lack-balance: '&c余额不足！需要: &e金币 {money}&c 和 &e点券 {points}'
  success-title: '&a岛屿升级成功！'
  success-lines:
    - '&6- 新等级: &e{level}'
    - '&6- 新边界半径: &e{radius} &6格'
    - '&6- 消耗金币: &c{money}'
    - '&6- 消耗点券: &d{points}'
  info-title: '&e=== 岛屿升级信息 ==='
  info-lines:
    - '&6当前等级: &e{level}&6/&e{max}'
    - '&6当前边界半径: &e{radius} &6格'
    - '&6下一级半径: &e{next_radius} &6格'
    - '&6所需费用:'
    - '&6- 金币: &e{need_money}'
    - '&6- 点券: &d{need_points}'
    - '&7你的金币: &f{balance_money}'
    - '&7你的点券: &f{balance_points}'

remove:
  confirm-warn: '&e警告：你确定要删除你的岛屿世界吗？删除操作不可逆！\n&e请在60秒内执行 &c/islands remove confirm &e来确认删除。'
  confirm-timeout: '&c删除岛屿世界操作已超时，取消删除。'
  success: '&a岛屿世界已成功删除！你还可以删除 {left} 次。'
  no-pending: '&c你没有任何待确认的删除操作！'
  not-owner: '&c只有岛主才能删除岛屿世界！'
  reached-max: '&c你已达到最大删除岛屿次数（{max}次），无法再删除！'
  teamdata-missing: '&c未找到你的团队数据，删除失败！'
  cancelled: '&c删除被取消！'
  world-missing: '&c岛屿世界不存在或未加载！'
  folder-missing: '&c岛屿世界文件夹不存在！'
  world-has-players: '&c岛屿世界中还有玩家，无法删除！'
  player-teleported: '&c你所在的岛屿世界正在被删除，你已被传送到主世界'
  main-world-missing: '&c主世界不存在，无法传送玩家！'
  world-load-failed: '&c岛屿世界加载失败，无法删除！'
  world-still-loaded: '&c世界卸载后仍然存在，无法删除！'
  needs-player-teleport: '&e正在传送玩家到主世界...'
  async-error: '&c异步删除世界时发生错误，请稍后重试！'
  mv-not-loaded: '&cMultiverse-Core 未加载，无法卸载世界！'
  mv-not-managed: '&cMultiverse 未管理该世界，无法卸载！'
  unload-failed: '&c卸载岛屿世界失败，请稍后再试！'
  file-delete-failed: '&c删除岛屿文件失败！'
  file-delete-retry: '&e正在重试删除文件...'
  already-pending: '&c你已处于删除确认阶段，请执行 &c/islands remove confirm &c来确认删除，或者等待超时取消。'

team:
  kick-success: '&a成功将玩家 {target} 踢出团队！'
  leave-success: '&a你已成功退出团队！'
  not-in-team: '&c你没有加入任何团队！'
  owner-cannot-leave: '&c你是岛主，不能直接退出团队！如需解散请使用 &e/is remove'
  leave-fail-notfound: '&c未找到团队数据，退出失败！'
  only-owner: '&c只有岛主才能进行此操作！'
  cannot-kick-self: '&c你不能踢出自己！'
  not-your-member: '&c该玩家不是你的团队成员！'
  kicked-notify: '&c你已被岛主 {owner} 踢出团队！'
  island-not-found: '&c找不到你的岛屿世界！'
  not-in-own-world: '&c请先传送到你的岛屿再执行此操作！'
  target-not-owner: '&c目标玩家不是岛主！'
  team-not-found: '&c未找到团队数据！'
  max-members-too-small: '&c最大成员数不能小于1！'
  current-members-exceed-max: '&c当前成员数({current})已超过新的最大值({max})！'
  set-max-success-admin: '&a已成功设置 &e{owner} &a的团队最大成员数为 &e{max} &a人！'

admin:
  # 通用消息
  target-not-owner: '&c玩家 &e{player} &c不是岛主！'
  team-not-found: '&c未找到团队数据！'
  player-no-team: '&c玩家 &e{player} &c没有团队！'
  
  # 设置最大人数
  max-members-too-small: '&c最大成员数不能小于1！'
  current-members-exceed-max: '&c当前成员数(&e{current}&c)已超过新的最大值(&e{max}&c)！'
  set-max-success: '&a已成功设置 &e{owner} &a的团队最大成员数为 &e{max} &a人！'
  
  # 强制添加成员
  player-is-owner: '&c玩家 &e{player} &c已经是岛主，无法加入其他团队！'
  player-already-in-team: '&c玩家 &e{player} &c已经在其他团队中！'
  player-already-in-this-team: '&c玩家 &e{player} &c已经在 &e{owner} &c的团队中！'
  force-add-success: '&a已成功将 &e{player} &a强制加入 &e{owner} &a的团队！'
  force-add-notify-owner: '&e管理员将 &a{player} &e强制加入了你的团队！'
  force-add-notify-member: '&e管理员将你强制加入了 &a{owner} &e的团队！'
  
  # 强制踢出成员
  cannot-kick-owner: '&c不能踢出岛主本人！'
  player-not-in-team: '&c玩家 &e{player} &c不在 &e{owner} &c的团队中！'
  force-kick-success: '&a已成功将 &e{player} &a从 &e{owner} &a的团队中踢出！'
  force-kick-notify-owner: '&e管理员将 &c{player} &e从你的团队中踢出！'
  force-kick-notify-member: '&c管理员将你从 &e{owner} &c的团队中踢出！'
  
  # 强制删除团队
  force-delete-no-world: '&c玩家 &e{player} &c的团队没有关联的岛屿世界！'
  force-delete-success: '&a已成功删除 &e{player} &a的团队和岛屿世界 &e{world}&a！'
  force-delete-world-fail: '&c删除 &e{player} &c的团队成功，但删除岛屿世界 &e{world} &c失败: {error}'
  force-delete-teleported: '&c你所在的岛屿正在被管理员删除，你已被传送到主世界！'
  force-delete-notify-owner: '&c管理员已删除你的团队和岛屿世界！'
  force-delete-notify-member: '&c管理员已删除 &e{owner} &c的团队和岛屿世界！'

  cleanup:
    success: '&a不活跃团队清理完成！共清理 &e{count} &a个团队。'
    none-found: '&e当前没有发现需要清理的不活跃团队。'

invite:
  none: '&c你没有待处理的邀请！'
  inviter-offline: '&c邀请者已离线，邀请失效！'
  inviter-not-owner: '&c邀请者已失去岛主身份，邀请失效！'
  join-cancelled: '&c加入被取消！'
  accept-success: '&a你已成功加入 &e{owner} &a的岛屿团队！'
  target-joined: '&e{player} &a已加入你的岛屿团队！'
  reject-success: '&c你已拒绝岛屿团队邀请'
  target-rejected: '&e{player} &c拒绝了你的岛屿团队邀请'
  cannot-invite-self: '&c不能邀请自己!'
  target-has-team: '&c{target} 已有团队，无法邀请!'
  sent: '&a你已邀请 &e{target} &a加入你的岛屿团队!'
  receive: '&e{owner} &a邀请你加入他的岛屿！(有效期{seconds}s)'
  hint-accept: '&a使用 &e/is accept &a接受邀请'
  hint-reject: '&a使用 &e/is reject &a拒绝邀请'
  gui-title: '&e&l邀请玩家 &7({count} 位可邀请)'
  no-players-available: '&c当前没有可邀请的玩家！(所有在线玩家都已有团队)'


expel:
  not-owner: '&c你不是团队所有者，无法踢出访客'
  not-in-your-world: '&c该玩家不在你的岛屿世界'
  is-team-member: '&c该玩家是团队成员，无法踢出'
  target-kicked: '&c你已被岛主踢出该岛屿世界'
  success: '&a已成功将玩家 {target} 踢出岛屿世界'

templates:
  none: '&c没有可用的岛屿模板！'
  usage: '&7使用方法: &e/islands create [模板名称]'
  example: '&7示例: &e/islands create a &7或 &e/islands create &7(使用默认模板)'

sethome:
  not-owner: '&c只有岛主才能设置出生点！'
  only-own-world: '&c你只能在自己的岛屿世界设置出生点！'
  success: '&a已将你的空岛出生点设置为当前位置！'

pvp:
  state-fail: '&c获取PVP状态失败！'
  closed: '&a岛屿世界已关闭PVP！'
  opened: '&c岛屿世界已开启PVP！'

root:
  no-island: '&c你还没有空岛，请先创建！'
  world-missing: '&c空岛世界不存在，请联系管理员！'
  teleported: '&a已传送到你的空岛！'
  teleporting-cross-server: '&e正在传送到服务器 &a{server} &e，请稍候...'

drop:
  state-fail: '&c获取物品丢弃状态失败！'
  closed: '&a岛屿世界已关闭物品丢弃！'
  opened: '&c岛屿世界已开启物品丢弃！'

pickup:
  state-fail: '&c获取物品拾取状态失败！'
  closed: '&a岛屿世界已关闭物品拾取！'
  opened: '&c岛屿世界已开启物品拾取！'

lock:
  state-fail: '&c获取岛屿锁定状态失败！'
  locked: '&c岛屿已锁定！只有团队成员可以进入。'
  unlocked: '&a岛屿已解锁！所有玩家都可以进入。'

time:
  sync-enabled: '&c时间同步功能已开启，无法使用时间切换功能！'
  sync-disable-hint: '&7请在配置文件中将 Island.WorldTime 设置为 null 来关闭时间同步'
  switched-to-day: '&a已将岛屿时间切换为 &e白天&a！'
  switched-to-night: '&a已将岛屿时间切换为 &6黑夜&a！'

weather:
  switched-to-sunny: '&a已将岛屿天气切换为 &e晴天&a！'
  switched-to-rainy: '&a已将岛屿天气切换为 &9雨天&a！'

difficulty:
  usage: '&e用法: /islands difficulty <和平|简单|普通|困难>'
  invalid-difficulty: '&c无效的难度！可用难度: 和平, 简单, 普通, 困难'
  switched-to: '&a已将岛屿难度设置为 &e{difficulty}&a！'
  current-difficulty: '&e当前岛屿难度: &a{difficulty}'

guest:
  no-visit-permission: '&c你没有对该团队的访客访问权限！'
  visit:
    success: '&a访问成功！已进入目标岛屿。'
  feature-disabled: '&c访客权限功能已被管理员禁用！'
  add:
    usage: '&e用法: /islands guestadd <玩家名> [权限...]'
    cannot-add-self: '&c不能添加自己为访客！'
    already-member: '&c该玩家已经是团队成员！'
    already-guest: '&c该玩家已经是访客！'
    success: '&a已成功添加 &e{target} &a为访客！'
    notify: '&a你获得了 &e{owner} &a岛屿的访客权限！'
  remove:
    usage: '&e用法: /islands guestremove <玩家名>'
    not-guest: '&c该玩家不是访客！'
    success: '&a已成功移除 &e{target} &a的访客权限！'
    notify: '&c你的 &e{owner} &c岛屿访客权限已被移除！'
  list:
    empty: '&c当前没有访客！'
    header: '&e=== 访客列表 ==='
    item: '&6- &e{guest} &7权限: &f{permissions}'
  set:
    usage: '&e用法: /islands guestset <玩家名> <权限类型> <true/false>'
    not-guest: '&c该玩家不是访客！'
    invalid-permission: '&c无效的权限类型！可用权限: visit, break, place, interact, pickup, drop, pvp'
    success: '&a已成功设置 &e{target} &a的 &e{permission} &a权限为 &e{status}'
```
:::

**templates.yml**:
::: details 点我查看
```bash
# ===================================
# Islands 插件 - 模板配置文件
# ===================================
# 此文件用于配置每个岛屿模板的出生点和描述信息
# 模板文件夹需要放置在 plugins/Islands/templates/ 目录下
# 例如：plugins/Islands/templates/default/ 应包含完整的世界文件（level.dat, region文件夹等）

# 默认模板 - 经典空岛
default:
  description: "经典空岛模板 - 一个小型的浮空岛屿，适合新手玩家"
  spawn:
    # 出生点坐标（相对于岛屿中心）
    x: 0.5      # X坐标（.5 表示方块中心）
    y: 53.0    # Y坐标（高度）
    z: 0.5      # Z坐标（.5 表示方块中心）
    yaw: 0.0    # 视角水平方向（0=南, 90=西, 180=北, 270=东）
    pitch: 0.0  # 视角垂直方向（-90=向上, 0=水平, 90=向下）

# 空岛模板 - 更大的空岛
skyblock:
  description: "大型空岛模板 - 拥有更多资源和空间的浮空岛屿"
  spawn:
    x: 0.5
    y: 105.0    # 稍高的出生点
    z: 0.5
    yaw: 180.0  # 面向北方
    pitch: 0.0

# 海洋模板 - 海岛生存
ocean:
  description: "海洋岛屿模板 - 被海洋环绕的小岛，适合海洋生存"
  spawn:
    x: 0.5
    y: 65.0     # 海平面附近
    z: 0.5
    yaw: 90.0   # 面向西方
    pitch: 0.0

# ===================================
# 配置说明
# ===================================
# 1. 每个模板的名称（如 default, skyblock, ocean）必须与 templates 目录下的文件夹名称完全一致
# 2. 模板名称也必须在 config.yml 的 Island.Templates.Available 列表中定义
# 3. spawn 配置决定了玩家创建岛屿后的初始出生点位置
# 4. 坐标使用 .5 可以让玩家出生在方块的中心位置，避免卡在方块边缘
# 5. yaw 和 pitch 控制玩家出生时的视角方向
# 6. 如果某个模板没有配置 spawn，将使用世界的默认出生点

# ===================================
# 添加自定义模板示例
# ===================================
# 1. 在 plugins/Islands/templates/ 目录下创建新的世界文件夹（例如：desert）
# 2. 将完整的世界文件复制到该文件夹（必须包含 level.dat）
# 3. 在此文件中添加配置：
#
# desert:
#   description: "沙漠岛屿模板 - 炎热的沙漠环境"
#   spawn:
#     x: 0.5
#     y: 70.0
#     z: 0.5
#     yaw: 0.0
#     pitch: 0.0
#
# 4. 在 config.yml 的 Island.Templates.Available 列表中添加 "desert"
# 5. 重载插件或重启服务器
```
:::