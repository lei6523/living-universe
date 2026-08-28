# Causal Graph（因果图谱）

Status: v0.2 Draft（架构方向，不代表已实现）

## Definition（定义）

> Causal Graph（因果图谱）是记录事件之间 Cause（原因）与 Effect（结果）关系的图结构：事件不能只有 Date（日期），还需要因果连接。

## Purpose（目的）

- 让世界的历史不仅是时间序列，而是有因果结构的网络
- 支持 Causality Conflict（因果冲突）检测
- 为「历史为什么发生」提供可查询的答案

## Core Concepts（核心概念）

```text
EVENT（事件）

-[CAUSES（导致）]->

EVENT（事件）
```

系统未来应该能够：

- 查询事件的直接原因与直接结果
- 发现 Causality Conflict（因果冲突），例如：两个事件声称互为因果，或原因晚于结果

## Example（示例）

```text
Helium Embargo（氦禁运）

↓

Energy Crisis（能源危机）

↓

Mars Riots（火星暴动）

↓

Mars Revolution（火星革命）
```

## Relationship With Other Systems（与其他系统关系）

- 与 [historical-record-layer.md](historical-record-layer.md)：因果记录可来自不同来源，可能互相矛盾
- 与 [canon-engine.md](canon-engine.md)：Causality Checker（因果检查器）是其组件
- 与 [blast-radius.md](blast-radius.md)：因果路径是影响范围计算的基础
- 与 [temporal-knowledge-graph.md](temporal-knowledge-graph.md)：因果图谱是 TKG 的扩展维度

## Current Status（当前状态）

v0.2 Draft。概念定义完成；未实现。
