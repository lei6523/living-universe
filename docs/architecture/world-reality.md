# World Reality（世界现实）

Status: v0.3 Draft（架构方向，不代表已实现）

## Definition（定义）

> World Reality（世界现实）表示 Living Universe（活宇宙）当前认定真正发生过的事情。

World Reality 不等于：

- Story（故事）
- Official Record（官方记录）
- Biography（传记）
- Memoir（回忆录）
- Propaganda（政治宣传）
- Rumor（谣言）

## Purpose（目的）

把「世界认定的事实」与「世界内部产生的记录」分开，是 v0.3 最重要的区分之一。它让世界可以同时存在相互矛盾的叙事，而不破坏正史的确定性。

## Core Concepts（核心概念）

- **Reality Canon（现实正史）**：构成 World Reality 的已确认事实集合。
- **Actual Cause（真实原因）**：世界现实层面的原因，可能与官方说法不同。
- **Historical Record（历史记录）**：世界内部产生的记录（报告、传记、新闻等），属于 [historical-record-layer.md](historical-record-layer.md)（历史记录层）。

## Example（示例）

```text
Reality Canon（现实正史）：

2217 年
Dawn（曙光号）发生爆炸

Actual Cause（真实原因）：
Political Assassination（政治暗杀）
```

世界内部同时存在：

```text
Government Report（政府报告）：
Reactor Failure（反应堆故障）
```

两者可以同时存在：前者表示 World Reality（世界现实），后者表示 Historical Record（历史记录）。

## Relationship With Other Systems（与其他系统关系）

- 与 [historical-record-layer.md](historical-record-layer.md)：World Reality 与 Historical Record Layer（历史记录层）严格分离
- 与 [epistemic-layer.md](epistemic-layer.md)：每条记录带有 truth_status（真实性状态）
- 与 [canon-reframing.md](canon-reframing.md)：Reframing（重构）改变的是 Reality Canon 的分类，不删除旧作品
- 与 [world-state.md](world-state.md)：World Reality 是「事实」，World State 是「当前可计算状态」
- 与 [provenance-graph.md](provenance-graph.md)：World Reality 中的每个事实必须可溯源

## Current Status（当前状态）

v0.3 Draft。概念定义完成；数据格式未实现。
