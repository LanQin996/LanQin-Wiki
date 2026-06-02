# SaveTools 配置文件

## config.yml

### 数据库

默认使用 YAML 存储，数据会写入 `savekits.yml` 和 `saveitem.yml`。如果多个服务器需要共享同一份礼包和保存物品数据，可以启用 MySQL。

```yaml
mysql:
  enable: false
  drive: "com.mysql.jdbc.Driver"
  useSSL: false
  host: "localhost"
  port: 3306
  database: "minecraft"
  username: "root"
  password: "123456"
  tablePrefix: "saveutils_"
```

| 配置项 | 说明 |
|----------|------|
| `mysql.enable` | 是否启用 MySQL，`false` 为 YAML |
| `mysql.drive` | 数据库驱动，MySQL 8 可使用 `com.mysql.cj.jdbc.Driver` |
| `mysql.useSSL` | 是否使用 SSL 连接 |
| `mysql.host` | 数据库地址 |
| `mysql.port` | 数据库端口 |
| `mysql.database` | 数据库名 |
| `mysql.username` | 用户名 |
| `mysql.password` | 密码 |
| `mysql.tablePrefix` | 表名前缀 |

MySQL 表会由插件自动创建。切换存储方式前请先备份原数据。

### 连接池

```yaml
mysql:
  pool:
    maximumPoolSize: 10
    minimumIdle: 2
    connectionTimeout: 30000
    idleTimeout: 600000
    maxLifetime: 1800000
```

一般不需要改。除非数据库连接数紧张，或服务器数量较多。

### 语言

```yaml
language: "zh_CN"
```

可选值：

| 值 | 语言 |
|----------|------|
| `zh_CN` | 简体中文 |
| `en_US` | 英文 |

语言文件位于 `plugins/SaveTools/lang/`。

### 自动刷新缓存

```yaml
Auto-Refresh:
  Enabled: false
  item: 5
  kits: 5
  claims: 5
```

| 配置项 | 说明 |
|----------|------|
| `Auto-Refresh.Enabled` | 是否启用自动刷新 |
| `Auto-Refresh.item` | 保存物品缓存刷新间隔，单位秒 |
| `Auto-Refresh.kits` | 礼包缓存刷新间隔，单位秒 |
| `Auto-Refresh.claims` | 礼包领取记录刷新间隔，单位秒 |

单服 YAML 模式一般不需要开启。  
多个服务器共用同一个 MySQL 时建议开启，避免某个服修改数据后其他服缓存不同步。

## gui/sk-list.yml

`gui/sk-list.yml` 控制 `/sk list` 的管理员礼包列表 GUI。

### 布局

```yaml
symbols:
  kit: 'K'
  filler: 'F'
  previous-page: 'P'
  next-page: 'N'
  page-info: 'I'

layout:
  - 'KKKKKKKKK'
  - 'KKKKKKKKK'
  - 'KKKKKKKKK'
  - 'KKKKKKKKK'
  - 'KKKKKKKKK'
  - 'PFFFIFFFN'
```

每行必须是 9 个字符，行数为 1 到 6 行。  
`K` 是礼包槽位，`P` 和 `N` 是翻页按钮，`I` 是页面信息，`F` 是填充物。

### 礼包图标

```yaml
items:
  kit:
    material: 'FIRST_ITEM'
    fallback-material: 'CHEST'
```

`FIRST_ITEM` 表示使用礼包内第一个非空气物品作为图标。礼包为空或没有可用物品时，会使用 `fallback-material`。

### 自定义装饰

可以在 `layout` 中加入自定义符号，然后在 `custom-items` 里配置。

```yaml
custom-items:
  B:
    material: 'STAINED_GLASS_PANE'
    data: 15
    name: '&8 '
```

## 数据文件

| 文件 | 说明 |
|----------|------|
| `savekits.yml` | YAML 模式下保存礼包、领取次数、上次领取时间 |
| `saveitem.yml` | YAML 模式下保存物品序列化数据 |

这些文件建议定期备份，尤其是在升级插件或切换 MySQL 前。
