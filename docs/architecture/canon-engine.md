# Canon Engine（正史引擎）

Status: v0.3 Draft（架构方向，不代表已实现）

## Definition（定义）

> Canon Engine（正史引擎）是 Living Universe（活宇宙）中负责验证 Claim（事实主张）与世界现实兼容性的整体系统。

注意：Canon Compiler（正史编译器）只是 Canon Engine 的一部分，而不是全部。

## Purpose（目的）

- 检查新主张与既有 World Reality（世界现实）是否兼容
- 输出结构化验证结果，供 Human Review（人工审核）决策
- 让硬规则由确定性的引擎处理，而非依赖 AI 自由判断

## Core Concepts（核心概念）

### 组成（至少包含）

- Entity Resolver（实体解析器）
- Timeline Checker（时间线检查器）
- Technology Checker（科技检查器）
- Location Checker（地点检查器）
- Character Checker（人物检查器）
- Relationship Checker（关系检查器）
- Political State Checker（政治状态检查器）
- Identity Collision Detector（身份碰撞检测器）
- Concurrent Claim Detector（并发主张检测器）
- Causality Checker（因果检查器）
- Historical Compatibility Checker（历史兼容性检查器）
- Blast Radius Analyzer（影响范围分析器）
- Epistemic Analyzer（认知状态分析器）

### Relation Constraints（关系约束）

未来应该让 Relation（关系）本身带有规则。例如：

```text
PRESIDENT_OF（担任总统）
max_concurrent（最大同时数量）：1

MAYOR_OF（担任市长）
max_concurrent（最大同时数量）：1

MEMBER_OF（属于组织）
max_concurrent（最大同时数量）：unlimited（无限制）

LIVES_IN（居住于）
max_concurrent（最大同时数量）：multiple（多个）
```

### Canon AI（正史 AI）的定位

Canon AI 不是：

- Creative Brain（创作主脑）
- Universe God（宇宙上帝）
- Final Authority（最终裁决者）

它主要是：

- **Semantic Validator（语义验证器）**：负责理解复杂自然语言

核心原则：

> **Canon AI（正史 AI） does not create truth. It validates claims against established world reality.**

> **Canon AI（正史 AI）不创造真相，它只负责检查新的事实主张是否与已有世界现实兼容。**

Hard Rules（硬规则）尽量由：

- Rule Engine（规则引擎）
- Graph Query（图查询）
- Database Constraint（数据库约束）

处理。

### Canon Validation Result（正史验证结果）

验证结果至少支持：

- VALID（有效）
- CONFLICT（冲突）
- UNKNOWN（未知）
- AMBIGUOUS（模糊）
- UNVERIFIED（未验证）

特别强调：

> **UNKNOWN（未知） ≠ FALSE（错误）**

没有定义过的区域属于 [canon-white-space.md](canon-white-space.md)（正史空白区）。

## Example（示例）

见 [canon-compiler.md](canon-compiler.md) 的冲突输出示例（CANON CONFLICT 报告）。该报告是 Canon Engine 输出的一种形式。

## Relationship With Other Systems（与其他系统关系）

- 与 [canon-compiler.md](canon-compiler.md)：Canon Compiler 是 Canon Engine 的组成部分
- 与 [claim-layer.md](claim-layer.md)：Canon Engine 的输入是 Claim
- 与 [merge-protocol.md](merge-protocol.md)：并发主张检测与关系约束在此执行
- 与 [identity-system.md](identity-system.md)：身份碰撞检测是其组件
- 与 [blast-radius.md](blast-radius.md)：影响范围分析是其组件
- 与 [epistemic-layer.md](epistemic-layer.md)：认知状态分析是其组件

## Current Status（当前状态）

v0.3 Draft。整体架构方向；任何组件均未实现。
