# Identity System（身份系统）

Status: v0.2 Draft（架构方向，不代表已实现）

## Definition（定义）

> Identity System（身份系统）是保证实体唯一性与可追溯性的系统：名字绝对不能作为人物唯一标识。

## Purpose（目的）

- 让同名角色可以共存而不会互相污染
- 让 Canon Engine（正史引擎）能够发现可能的实体重复
- 保护实体引用的准确性

## Core Concepts（核心概念）

- **Entity ID（实体 ID）**：每个实体拥有唯一 ID（如 `char_84F2A7`）
- **Identity Collision Detection（身份碰撞检测）**：当多个实体高度相似时给出提示
- **不自动合并**：最终决定权属于 Human Review（人工审核）

## Example（示例）

以下两个可以是不同的人：

```text
char_84F2A7
name（姓名）：
张伟
```

和：

```text
char_91C0DD
name（姓名）：
张伟
```

但是如果两个角色：同名、同年龄、同职业、同城市、同配偶、同时间活动，Canon Engine（正史引擎）应输出：

```text
POSSIBLE ENTITY COLLISION
（可能的实体重复）

Confidence（相似度）：
94%
```

不能自动合并。最终决定权属于 Human Review（人工审核）。

## Relationship With Other Systems（与其他系统关系）

- 与 [claim-layer.md](claim-layer.md)：Claim 的 Subject / Object 使用实体 ID
- 与 [temporal-knowledge-graph.md](temporal-knowledge-graph.md)：实体节点带唯一 ID
- 与 [canon-engine.md](canon-engine.md)：Identity Collision Detector（身份碰撞检测器）是其组件之一
- 与 [../governance/creator-rights.md](../governance/creator-rights.md)：实体 ID 与 Creator Ownership（创作者所有权）绑定

## Current Status（当前状态）

v0.2 Draft。概念定义完成；身份数据库未实现。
