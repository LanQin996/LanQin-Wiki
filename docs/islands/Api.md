# Islands 开发者 API

## 概述

Islands 对外提供了一套可供其他插件调用的 API，统一入口为 `com.lanqin.islands.api.IslandsAPI`。

当前最常用的开发接口是 `TeamService`，主要负责：

- 团队创建与删除
- 团队成员管理
- 团队状态与边界设置
- Home 位置管理
- 访客权限管理
- 邀请系统

本文基于以下接口整理：

- `com.lanqin.islands.api.IslandsAPI`
- `com.lanqin.islands.api.TeamService`

::: tip 提示
下文中的 `teamId` 默认指 **岛主 UUID 的字符串形式**，也就是 `owner.toString()`。
:::

## 快速开始

### 获取 API 实例

```java
import com.lanqin.islands.api.IslandsAPI;
import com.lanqin.islands.api.TeamService;

IslandsAPI api = IslandsAPI.getInstance();
if (api == null) {
    getLogger().warning("Islands 尚未加载，无法获取 API");
    return;
}

TeamService teamService = api.getTeamService();
```

### 推荐的接入方式

- 编译时将 `Islands.jar` 作为 `compileOnly` 或 `provided` 依赖引入
- 运行时确保服务器已经安装并成功加载 Islands
- 不要在静态初始化阶段获取 `IslandsAPI.getInstance()`
- 涉及 `Player`、`World`、`Location` 的调用建议放在 Bukkit 主线程执行

## IslandsAPI 入口说明

| 方法 | 返回值 | 说明 |
|------|------|------|
| `IslandsAPI.getInstance()` | `IslandsAPI` | 获取 API 单例，插件未加载时返回 `null` |
| `getTeamService()` | `TeamService` | 获取团队服务，开发联动最常用 |
| `getUserService()` | `UserService` | 获取用户服务，负责用户数据与删除次数等能力 |

如果你的插件只需要读取团队、修改岛屿团队状态、处理访客或邀请，通常只需要 `getTeamService()` 即可。

## TeamService 使用约定

在正式使用 `TeamService` 之前，建议先了解下面几个约定：

- `teamId` 不是随机编号，而是岛主 UUID 的字符串形式
- 大多数查询方法不会抛出异常，而是返回 `Optional.empty()`、空列表、`false` 或默认值
- 部分写操作的 `boolean` 返回值更偏向“方法是否顺利执行”，不一定等于“目标状态已经发生变化”
- 对关键变更操作，建议在调用后立刻做一次二次校验

例如：

```java
boolean success = teamService.setLocked(teamId, true);
boolean locked = teamService.isLocked(teamId);

if (!success || !locked) {
    getLogger().warning("团队锁定状态校验失败");
}
```

::: warning 注意
像 `addMember`、`setMaxMembers`、`setLocked`、`setPvpEnabled` 这类方法，在当前实现中即使目标团队不存在、成员未真正加入，或者底层只是无操作，也有可能返回 `true`。  
如果你的业务依赖强一致结果，请务必在调用后再次查询确认。
:::

## TeamService 方法总览

### 团队基础管理

| 方法 | 返回值 | 说明 |
|------|------|------|
| `createTeam(UUID owner, String islandWorld)` | `boolean` | 创建新团队。要求 `islandWorld` 对应的世界已存在。当前实现中，若岛主在线，会同步触发岛屿创建；若岛主离线，主要完成团队数据初始化。 |
| `deleteTeam(String teamId)` | `boolean` | 删除团队数据。是否同步处理岛屿世界，应以底层实现为准，调用方不要假设一定会删除世界文件。 |

### 成员管理

| 方法 | 返回值 | 说明 |
|------|------|------|
| `addMember(String teamId, UUID member)` | `boolean` | 向团队添加成员。当前实现会检查团队人数上限，但即使未真正添加成功，也可能返回 `true`，建议随后调用 `isMember` 或 `getMembers` 校验。 |
| `removeMember(String teamId, UUID member)` | `boolean` | 从团队移除成员。成功后会同步更新玩家到团队的映射关系。 |
| `getMembers(String teamId)` | `List<UUID>` | 获取成员列表，不包含岛主。失败时返回空列表。 |
| `isMember(String teamId, UUID player)` | `boolean` | 检查玩家是否属于该团队。**按当前实现，若 `player` 就是该团队岛主，也会返回 `true`。** |
| `isOwner(UUID player)` | `boolean` | 检查玩家是否是任意团队的岛主。 |

### 团队查询

| 方法 | 返回值 | 说明 |
|------|------|------|
| `getTeamByPlayer(UUID player)` | `Optional<TeamManager.TeamData>` | 根据玩家查询其所属团队。岛主和成员都可以查到。 |
| `getTeamById(String teamId)` | `Optional<TeamManager.TeamData>` | 根据团队 ID 查询团队数据。 |
| `getTeamByWorld(String worldName)` | `Optional<TeamManager.TeamData>` | 根据岛屿世界名称查询团队。 |
| `getTeamIdByPlayer(UUID player)` | `Optional<String>` | 根据玩家查询 `teamId`。 |
| `getOwnerByMember(UUID member)` | `Optional<UUID>` | 根据成员 UUID 查询对应岛主 UUID。 |

### 团队设置

| 方法 | 返回值 | 说明 |
|------|------|------|
| `setLocked(String teamId, boolean locked)` | `boolean` | 设置团队是否锁岛。 |
| `isLocked(String teamId)` | `boolean` | 查询团队锁定状态。 |
| `setPvpEnabled(String teamId, boolean pvpEnabled)` | `boolean` | 设置团队 PVP 状态。 |
| `isPvpEnabled(String teamId)` | `boolean` | 查询团队 PVP 是否开启。 |
| `setMaxMembers(String teamId, int maxMembers)` | `boolean` | 设置团队最大人数，包含岛主；底层会强制保证至少为 `1`。 |
| `getMaxMembers(String teamId)` | `int` | 获取团队最大人数。失败时默认返回 `5`。 |

### 边界管理

| 方法 | 返回值 | 说明 |
|------|------|------|
| `setBorderRadius(String teamId, int radius)` | `boolean` | 设置团队边界半径，并尝试同步更新世界边界。若目标世界未加载，可能更新数据成功但联动边界失败。 |
| `getBorderRadius(String teamId)` | `int` | 获取边界半径。失败时默认返回 `64`。 |
| `setBorderVisible(String teamId, boolean visible)` | `boolean` | 设置边界是否可视。 |
| `isBorderVisible(String teamId)` | `boolean` | 查询边界是否可视。失败时默认返回 `true`。 |

### 拾取与丢弃设置

| 方法 | 返回值 | 说明 |
|------|------|------|
| `setPickupEnabled(String teamId, boolean pickupEnabled)` | `boolean` | 设置是否允许拾取。 |
| `isPickupEnabled(String teamId)` | `boolean` | 查询是否允许拾取。失败时默认返回 `true`。 |
| `setDropEnabled(String teamId, boolean dropEnabled)` | `boolean` | 设置是否允许丢弃。 |
| `isDropEnabled(String teamId)` | `boolean` | 查询是否允许丢弃。失败时默认返回 `false`。 |

### Home 位置管理

| 方法 | 返回值 | 说明 |
|------|------|------|
| `setHomeLocation(String teamId, Location location)` | `boolean` | 设置团队 Home 位置。 |
| `getHomeLocation(String teamId)` | `Location` | 获取团队 Home。若团队存在但未设置自定义 Home，当前实现会返回该世界出生点；若团队不存在或世界未加载，则可能返回 `null`。 |
| `clearHomeLocation(String teamId)` | `boolean` | 清除自定义 Home，之后通常会回退到世界出生点。 |

### 访客权限管理

| 方法 | 返回值 | 说明 |
|------|------|------|
| `addGuestPermission(String teamId, UUID guestId, TeamManager.GuestPermission permission)` | `boolean` | 添加或覆盖指定访客的权限配置。 |
| `removeGuestPermission(String teamId, UUID guestId)` | `boolean` | 移除指定访客的权限配置。 |
| `getGuestPermission(String teamId, UUID guestId)` | `Optional<TeamManager.GuestPermission>` | 获取访客权限。若权限已过期，当前实现会自动清理并返回空。 |
| `getGuests(String teamId)` | `List<UUID>` | 获取当前团队所有有效访客列表。失败时返回空列表。 |
| `isGuest(String teamId, UUID playerId)` | `boolean` | 检查玩家是否是该团队访客。团队成员与岛主不会被视为访客。 |

### 邀请系统

| 方法 | 返回值 | 说明 |
|------|------|------|
| `invitePlayer(UUID inviter, UUID invited)` | `boolean` | 发送团队邀请。建议调用方先自行检查邀请者是否为岛主、被邀请者是否已有团队。 |
| `acceptInvite(UUID invited)` | `boolean` | 接受邀请并尝试加入团队。对关键业务建议再调用 `isMember` 校验。 |
| `rejectInvite(UUID invited)` | `boolean` | 拒绝邀请。 |
| `cancelInvite(UUID inviter, UUID invited)` | `boolean` | 取消邀请，仅当待处理邀请确实来自该 `inviter` 时才会成功。 |
| `getPendingInvite(UUID player)` | `Optional<UUID>` | 获取玩家当前待处理邀请的邀请者 UUID。 |

## 返回数据结构

### TeamManager.TeamData

很多查询接口都会返回 `Optional<TeamManager.TeamData>`。这个结构中常用字段如下：

| 字段 | 类型 | 说明 |
|------|------|------|
| `owner` | `UUID` | 岛主 UUID |
| `members` | `List<UUID>` | 团队成员列表，不包含岛主 |
| `lock` | `boolean` | 是否锁岛 |
| `islandWorld` | `String` | 团队对应的岛屿世界名称 |
| `borderRadius` | `int` | 当前边界半径 |
| `borderVisible` | `boolean` | 边界是否显示 |
| `pvp` | `boolean` | 是否开启 PVP |
| `pickup` | `boolean` | 是否允许拾取 |
| `drop` | `boolean` | 是否允许丢弃 |
| `timeLocked` | `boolean` | 是否启用了时间锁定 |
| `lockedFullTime` | `long` | 时间锁定的完整世界时间值 |
| `maxMembers` | `int` | 团队最大人数，包含岛主 |
| `guestPermissions` | `Map<UUID, GuestPermission>` | 访客权限映射 |
| `homeLocation` | `TeamManager.HomeLocation` | 团队自定义 Home |
| `lastActiveTime` | `long` | 最近活跃时间戳 |

其中比较值得注意的默认值：

- 新建团队时默认 `lock = true`
- 新建团队时默认 `pvp = true`
- 新建团队时默认 `pickup = true`
- 新建团队时默认 `drop = false`
- 新建团队时 `borderVisible = true`
- `maxMembers` 默认读取 `Island.MaxTeamMembers`，最小不会低于 `1`

### TeamManager.GuestPermission

访客权限对象用于描述某个访客在岛屿上的可用操作：

| 字段 | 类型 | 说明 |
|------|------|------|
| `canVisit` | `boolean` | 是否允许访问 |
| `canBreak` | `boolean` | 是否允许破坏方块 |
| `canPlace` | `boolean` | 是否允许放置方块 |
| `canInteract` | `boolean` | 是否允许交互 |
| `canPickup` | `boolean` | 是否允许拾取物品 |
| `canDrop` | `boolean` | 是否允许丢弃物品 |
| `canPvp` | `boolean` | 是否允许 PVP |
| `expireTime` | `long` | 过期时间戳，`0` 表示不过期 |

默认构造出来的权限对象行为如下：

- `canVisit = true`
- 其他权限默认都是 `false`
- `expireTime = 0`

如果你需要判断访客权限是否过期，也可以使用其内置方法：

```java
TeamManager.GuestPermission permission = new TeamManager.GuestPermission();
if (permission.isExpired()) {
    // 权限已过期
}
```

## 常用示例

### 1. 安全获取玩家所属团队

```java
import com.lanqin.islands.api.IslandsAPI;
import com.lanqin.islands.api.TeamService;
import com.lanqin.islands.api.manager.TeamManager;

import java.util.Optional;
import java.util.UUID;

public Optional<TeamManager.TeamData> findTeam(UUID playerId) {
    IslandsAPI api = IslandsAPI.getInstance();
    if (api == null) {
        return Optional.empty();
    }

    TeamService teamService = api.getTeamService();
    return teamService.getTeamByPlayer(playerId);
}
```

### 2. 给访客授予访问 + 交互权限

```java
import com.lanqin.islands.api.IslandsAPI;
import com.lanqin.islands.api.TeamService;
import com.lanqin.islands.api.manager.TeamManager;

import java.util.UUID;

public boolean addGuest(String teamId, UUID guestId) {
    IslandsAPI api = IslandsAPI.getInstance();
    if (api == null) {
        return false;
    }

    TeamService teamService = api.getTeamService();

    TeamManager.GuestPermission permission = new TeamManager.GuestPermission();
    permission.canVisit = true;
    permission.canInteract = true;
    permission.canPickup = true;

    return teamService.addGuestPermission(teamId, guestId, permission);
}
```

### 3. 修改边界后做二次确认

```java
import com.lanqin.islands.api.IslandsAPI;
import com.lanqin.islands.api.TeamService;

public boolean updateBorder(String teamId, int radius) {
    IslandsAPI api = IslandsAPI.getInstance();
    if (api == null) {
        return false;
    }

    TeamService teamService = api.getTeamService();
    boolean result = teamService.setBorderRadius(teamId, radius);

    if (!result) {
        return false;
    }

    return teamService.getBorderRadius(teamId) == radius;
}
```

### 4. 查询并处理待处理邀请

```java
import com.lanqin.islands.api.IslandsAPI;
import com.lanqin.islands.api.TeamService;

import java.util.Optional;
import java.util.UUID;

public void handleInvite(UUID playerId) {
    IslandsAPI api = IslandsAPI.getInstance();
    if (api == null) {
        return;
    }

    TeamService teamService = api.getTeamService();
    Optional<UUID> inviter = teamService.getPendingInvite(playerId);

    inviter.ifPresent(uuid -> {
        boolean accepted = teamService.acceptInvite(playerId);
        if (!accepted || !teamService.isMember(uuid.toString(), playerId)) {
            // 这里可以写你自己的失败回滚或提示逻辑
        }
    });
}
```

## 失败返回与默认值

为了减少异常扩散，`TeamService` 当前实现会对很多错误做兜底。开发时请特别注意这些默认返回：

| 方法 | 失败或异常时的典型返回 |
|------|------|
| `getTeamByPlayer` / `getTeamById` / `getTeamByWorld` | `Optional.empty()` |
| `getTeamIdByPlayer` / `getOwnerByMember` | `Optional.empty()` |
| `getGuestPermission` / `getPendingInvite` | `Optional.empty()` |
| `getMembers` / `getGuests` | 空列表 |
| `getMaxMembers` | `5` |
| `getBorderRadius` | `64` |
| `isBorderVisible` | `true` |
| `isPickupEnabled` | `true` |
| `isDropEnabled` | `false` |
| `getHomeLocation` | `null` |

这意味着：

- 你不能只依赖返回值来区分“真的就是默认状态”还是“调用失败后回退成默认状态”
- 关键逻辑最好组合使用多个方法交叉验证
- 对 `Location` 一定要做空判断

## 开发建议

### 1. 先查后改，再查一次

推荐的调用顺序：

1. 先确认团队是否存在
2. 再执行修改
3. 再查询一次目标状态确认是否生效

### 2. 自行补充业务前置校验

`TeamService` 更像是一个“能力接口”，并不会替你完成所有业务限制判断。比如：

- 邀请前，最好先确认邀请者是否真的是岛主
- 添加成员前，最好先确认对方当前没有其他团队
- 删除团队前，最好先明确是否还需要额外处理岛屿世界、玩家传送和缓存同步

### 3. 不要把玩家名当作主键

团队和成员相关接口全部基于 `UUID` 与 `teamId` 工作，联动插件时也建议使用 `UUID` 存档，不要依赖玩家名。

### 4. 对访客权限做过期意识

访客权限支持 `expireTime`。当你调用 `getGuestPermission` 或相关查询时，过期记录可能被自动移除，因此：

- 不要长期缓存旧的 `GuestPermission`
- 每次执行关键权限判断时，重新从 API 获取一次更稳妥

## 小结

如果你只是想快速接入 Islands，通常只需要记住这几件事：

- 入口用 `IslandsAPI.getInstance()`
- 团队能力从 `getTeamService()` 获取
- `teamId` 就是岛主 UUID 字符串
- 写操作之后尽量做二次校验
- `Optional`、空列表、默认值和 `null` 都要认真处理

这样就能比较稳妥地把你自己的插件和 Islands 做联动了。
