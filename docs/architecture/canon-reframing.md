# Canon Reframing（正史重构 / 正史再语境化）

Status: v0.2 Draft（架构方向，不代表已实现）

## Definition（定义）

> Canon Reframing（正史重构）是当旧正史内容过时、剧情老套或新作品提供更好解释时，对既有正史进行重新语境化的机制。

它不是 Canon Deprecation（正史弃用）。禁止把「正史弃用」作为主要更新机制。

## Purpose（目的）

- 让世界可以吸收更好的解释而不破坏历史
- 保持「旧故事继续存在，但它们在历史中的意义可以发生变化」

核心原则：

> **Canon facts may change. Canon artifacts remain.**

> **正史事实可以被重新认识，但历史作品本身不会消失。**

> **错误的历史记录，本身也是历史。**

> **Old Story（旧故事） → Still Exists（继续存在） → Meaning Changes（意义改变）**

而不是：

> **Old Story（旧故事） → Never Happened（从未发生）**

## Core Concepts（核心概念）

### Reframing 的触发条件

新作品必须满足：

- Timeline Compatibility（时间线兼容）
- Causal Compatibility（因果兼容）
- Downstream Compatibility（后续历史兼容）
- Narrative Gain（明显叙事价值提升）
- Human Review（人工审核通过）

### Reclassification（重新分类）

旧内容不删除。旧故事从 Hard Reality Canon（硬现实正史）重新分类为：

- Official Record（官方记录）
- Biography（传记）
- Local History（地方历史）
- Propaganda（政治宣传）
- Historical Interpretation（历史解释）

新故事成为新的 Reality Canon（现实正史）。

## Example（示例）

旧故事：

```text
2217
Dawn（曙光号）爆炸

Cause（原因）：
Reactor Failure（反应堆故障）

Status（状态）：
Hard Canon（硬正史）
```

后来新作品提出：

```text
Actual Cause（真实原因）：
Political Assassination（政治暗杀）
```

如果新作品满足全部触发条件并通过 Human Review（人工审核），则旧内容不删除：旧故事重新分类为 Official Record（官方记录）等 Historical Record（历史记录）；新故事成为新的 Reality Canon（现实正史）。

## Relationship With Other Systems（与其他系统关系）

- 与 [historical-record-layer.md](historical-record-layer.md)：旧正史内容重新分类为历史记录
- 与 [blast-radius.md](blast-radius.md)：Reframing 前必须计算影响范围
- 与 [provenance-graph.md](provenance-graph.md)：Reframing 全程记录溯源
- 与 [world-reality.md](world-reality.md)：World Reality 随之更新

## Current Status（当前状态）

v0.2 Draft。概念定义完成；具体审核规则待定（见 Remaining Questions）。
