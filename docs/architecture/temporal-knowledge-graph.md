# Temporal Knowledge Graph（时间知识图谱）

Status: v0.2 Draft（架构方向，不代表已实现）

## Definition（定义）

> Temporal Knowledge Graph（时间知识图谱）是一种将 Entity（实体）、Relation（关系）、Time（时间）与 State（状态）结合的未来世界数据结构。

未来世界数据结构不能只是 Wiki（百科）。所有核心实体必须逐渐支持：

```text
Entity（实体）
×
Relation（关系）
×
Time（时间）
×
State（状态）
```

## Purpose（目的）

让世界数据可以回答「谁、在什么时间、与什么、处于什么关系」这类问题，为 Canon Engine（正史引擎）、时间线检查与状态查询提供基础。

## Core Concepts（核心概念）

- **Entity（实体）**：人物、地点、组织、技术、事件等
- **Relation（关系）**：实体之间的有类型连接，如 MAYOR_OF（担任市长）
- **Time（时间）**：关系的生效时间（valid_from）与结束时间（valid_until）
- **State（状态）**：实体在时间区间内的状态

## Example（示例）

不要只记录：

```text
Liu（刘某）
Mayor of X City（XX市市长）
```

而应该记录：

```text
Liu（刘某）

-[MAYOR_OF（担任市长）]->

X City（XX市）

valid_from（生效时间）：
3000

valid_until（结束时间）：
3004
```

## Relationship With Other Systems（与其他系统关系）

- 与 [claim-layer.md](claim-layer.md)：Claim（事实主张）是 TKG 的候选三元组
- 与 [canon-engine.md](canon-engine.md)：TKG 为 Graph Query（图查询）提供基础
- 与 [world-state.md](world-state.md)：World Snapshot（世界快照）是 TKG 在某一时间点的投影
- 与 [causal-graph.md](causal-graph.md)：Causal Graph（因果图谱）是 TKG 在因果维度上的扩展
- 与 [identity-system.md](identity-system.md)：实体节点使用唯一 Entity ID（实体 ID）

## Current Status（当前状态）

v0.2 Draft。当前仓库仍以 Markdown 文档为主；TKG 是未来数据结构的演进方向，不代表已经实现。
