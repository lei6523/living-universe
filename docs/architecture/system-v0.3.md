# Living Universe Architecture v0.3（活宇宙架构 v0.3）

Status: v0.3 Draft（架构方向，不代表已实现）

> 目前所有 AI、Knowledge Graph（知识图谱）、Canon Engine（正史引擎）、Simulation（模拟）相关内容仍属于 Architecture Direction（架构方向），不代表已经完成实现。

---

## Definition（定义）

本文档定义 Living Universe（活宇宙）的 v0.3 总体架构。

它是在 v0.1 架构（见 [docs/SYSTEM_OVERVIEW.md](../SYSTEM_OVERVIEW.md) 历史版本）基础上的**增量升级**：保留 v0.1 的核心思想，同时引入新的分层与新的定义。旧架构不删除，旧定义迁移到新模型中。

## Purpose（目的）

- 让 Living Universe（活宇宙）从「共享正史」（Shared Canon）进一步发展为「持续叙事文明」（Persistent Narrative Civilization）
- 让 Story（故事）与 Truth（真相）分离：故事提出 Claim（事实主张），经过验证后才进入 Reality Canon（现实正史）
- 让 World Reality（世界现实）与 Historical Records（历史记录）分离：世界不仅保存真相，也保存人们对真相的记录、理解与误解

## Core Concepts（核心概念）

### 五个最高层核心概念

```text
Living Universe（活宇宙）

├── World Reality（世界现实）
├── World State（世界状态）
├── Historical Memory（历史记忆）
├── Creator Ecosystem（创作者生态）
└── Canon Engine（正史引擎）
```

1. **World Reality（世界现实）** — Living Universe 当前认定真正发生过的事情。不等于任何单一叙事或记录。详见 [world-reality.md](world-reality.md)。
2. **World State（世界状态）** — 某一个时间点，整个世界的可计算状态（人物、城市、政权、技术等实体的当前状态）。详见 [world-state.md](world-state.md)。
3. **Historical Memory（历史记忆）** — 历史记录层（Historical Record Layer）、认知层（Epistemic Layer）与溯源图谱（Provenance Graph）的集合：世界如何记录、解释与追溯自己的历史。
4. **Creator Ecosystem（创作者生态）** — 创作者、Creator Ownership（创作者所有权）、社区与治理。详见 [../governance/canon-levels.md](../governance/canon-levels.md)。
5. **Canon Engine（正史引擎）** — 负责验证 Claim（事实主张）与世界现实兼容性的引擎，包含多个检查器。详见 [canon-engine.md](canon-engine.md)。

### Story 的新定义

> **Story（故事） = Narrative Artifact（叙事作品） + Claims（事实主张） + Possible World-State Transactions（可能的世界状态变更）**

- **Narrative Artifact（叙事作品）**：故事本身永远是一件独立存在的作品，不因正史变化而消失。
- **Claims（事实主张）**：故事中的某些内容提出关于世界的断言。
- **Possible World-State Transactions（可能的世界状态变更）**：主张若通过验证并进入正史，可能引发的世界状态变化。

v0.1 的定义「Story = World-State Transaction」没有删除，而是被包含在「Possible World-State Transactions」中：故事不再是直接的交易，而是提出可能交易的载体。

### 核心思想演进

v0.1（旧架构）：

```text
Story
（故事）

↓

Canon Check
（正史检查）

↓

History Commit
（历史提交）

↓

World State
（世界状态）
```

v0.3（新架构）：

```text
Story
（故事）

↓

Narrative Artifact + Claims
（叙事作品 + 事实主张）

↓

Canon Engine
（正史引擎）

↓

Human Review
（人工审核）

↓

History Commit
（历史提交）

↓

World Reality
（世界现实）

+

World State
（世界状态）

+

Historical Records
（历史记录）

+

Provenance
（历史溯源）
```

## Example（示例）

完整的新创作流程：

```text
Creator（创作者）

↓

Select Time / Place / Scope
（选择时间 / 地点 / 范围）

↓

Canon Snapshot
（正史快照）

↓

Create Story
（创作故事）

↓

Claim Extraction
（事实主张提取）

↓

Canon Engine
（正史引擎）

↓

VALID / CONFLICT / UNKNOWN
（有效 / 冲突 / 未知）

↓

Human Review
（人工审核）

↓

History Commit
（历史提交）

↓

World State Update
（世界状态更新）

+

Historical Memory Update
（历史记忆更新）

+

Provenance Update
（溯源更新）

↓

Future Stories
（未来故事）
```

## Relationship With Other Systems（与其他系统关系）

| 系统 | 关系 |
| --- | --- |
| [docs/SYSTEM_OVERVIEW.md](../SYSTEM_OVERVIEW.md) | 项目总览入口；本文档是 v0.3 架构的总体说明 |
| [world-state.md](world-state.md)、[world-reality.md](world-reality.md) 等 | 本文档定义五个最高层概念，各子系统文档负责详细定义 |
| [../governance/canon-levels.md](../governance/canon-levels.md) | 治理：Canon Authority（正史权威等级）、Scope（作用范围）、Impact Level（影响等级） |
| [../GLOSSARY.md](../GLOSSARY.md) | 术语定义 |

## Current Status（当前状态）

v0.3 Draft（架构方向）。

所有 AI、知识图谱、Canon Engine、Simulation 相关内容均为方向性描述，不代表已经完成实现。当前阶段以 Documentation Architecture（文档架构）为主。
