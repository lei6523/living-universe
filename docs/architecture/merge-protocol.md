# Merge Protocol（合并协议）

Status: v0.2 Draft（架构方向，不代表已实现）

## Definition（定义）

> Merge Protocol（合并协议）是处理多人同时创作时产生的 Concurrent Claim Conflict（并发事实主张冲突）的规则集合。

## Purpose（目的）

- 解决「多个作者在同一时间、同一地点提出互相矛盾主张」的问题
- 保证不会有两个互相冲突的故事同时进入正史
- 把离线创作的同步冲突定义为正常流程，而不是系统失败

## Core Concepts（核心概念）

- **Concurrent Claim（并发主张）**：多个创作者对同一 Subject（主体）、Relation（关系）、时间区间提出不同主张
- **Relation Constraint（关系约束）**：关系自身携带的规则，如 max_concurrent（最大同时数量）
- **Merge Conflict（合并冲突）**：当新主张违反关系约束时产生的冲突状态

## Example（示例）

作者 A：

```text
3001
XX市市长
刘某
```

作者 B：

```text
3001
XX市市长
李某
```

如果 Relation Constraint（关系约束）规定：

```text
MAYOR_OF（担任市长）

max_concurrent（最大同时数量）：
1
```

则系统产生 Merge Conflict（合并冲突），而不是两个故事同时进入正史。

### Offline Creation（离线创作）同步流程

```text
Canon Snapshot（正史快照）

↓

Offline Creation（离线创作）

↓

Local Claims（本地主张）

↓

Reconnect（重新联网）

↓

Remote Canon Sync（远程正史同步）

↓

Concurrent Claim Check（并发主张检查）

↓

Clean（无冲突）
或
Merge Conflict（合并冲突）
```

强调：

> 离线冲突不是系统失败，而是正常的 Merge Conflict（合并冲突）。

## Relationship With Other Systems（与其他系统关系）

- 与 [claim-layer.md](claim-layer.md)：冲突发生在 Claim 层
- 与 [canon-snapshot.md](canon-snapshot.md)：快照是离线创作的基线
- 与 [canon-engine.md](canon-engine.md)：关系约束由 Canon Engine 执行
- 与 [identity-system.md](identity-system.md)：冲突检测基于实体 ID

## Current Status（当前状态）

v0.2 Draft。规则定义完成；同步与冲突检测未实现。
