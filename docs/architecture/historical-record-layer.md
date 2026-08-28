# Historical Record Layer（历史记录层）

Status: v0.3 Draft（架构方向，不代表已实现）

## Definition（定义）

> Historical Record Layer（历史记录层）是保存世界内部产生的所有历史记录的层次，与 World Reality（世界现实）严格区分。

## Purpose（目的）

- 区分 World Truth（世界真相）与 Historical Record（历史记录）
- 让「记录」成为世界的一等公民：错误的历史记录，本身也是历史
- 为 Historiography（历史解释演化）提供素材

## Core Concepts（核心概念）

Historical Record（历史记录）至少包括：

- Official Record（官方记录）
- Biography（传记）
- Memoir（回忆录）
- Local History（地方历史）
- Journalism（新闻报道）
- Academic History（学术历史研究）
- Propaganda（政治宣传）
- Rumor（谣言）
- Legend（传说）
- Fiction-in-Universe（世界内虚构作品）

## Example（示例）

```text
World Reality（世界现实）：
2217 年 Dawn（曙光号）爆炸
Actual Cause（真实原因）：Political Assassination（政治暗杀）

Historical Record（历史记录）：
Government Report（政府报告）宣称原因是 Reactor Failure（反应堆故障）
```

两者同时存在，互不冲突：前者属于 World Reality，后者属于 Historical Record Layer。

## Relationship With Other Systems（与其他系统关系）

- 与 [world-reality.md](world-reality.md)：二者严格分离
- 与 [epistemic-layer.md](epistemic-layer.md)：每条记录带有 truth_status（真实性状态）
- 与 [canon-reframing.md](canon-reframing.md)：Reframing（重构）把旧正史内容重新分类为记录
- 与 [provenance-graph.md](provenance-graph.md)：记录需要来源追踪

## Current Status（当前状态）

v0.3 Draft。概念定义完成；记录存储未实现。
