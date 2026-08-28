# Epistemic Layer（认知层）

Status: v0.2 Draft（架构方向，不代表已实现）

## Definition（定义）

> Epistemic Layer（认知层）是世界知识中「认知状态」的层次：区分一个断言在认知上处于什么状态。

## Purpose（目的）

- 让世界支持「被认为真实」与「实际真实」的差异
- 让宣传、谣言、传说等可以与事实并存且被标记
- 为阅读体验中的 Historical Exploration（历史探索）提供基础

## Core Concepts（核心概念）

世界中的知识必须支持：

- TRUE（真实）
- FALSE（错误）
- UNKNOWN（未知）
- DISPUTED（存在争议）
- PARTIALLY TRUE（部分真实）
- BELIEVED TRUE（被认为真实）
- PROPAGANDA（宣传性内容）
- UNVERIFIED（未经验证）

未来所有 Historical Record（历史记录）都可以带有：

- truth_status（真实性状态）
- source（来源）
- author（作者）
- date_created（创建时间）
- known_bias（已知立场）
- confidence（可信度）

## Example（示例）

```text
Record（记录）：政府报告称 Dawn（曙光号）爆炸原因是反应堆故障

truth_status（真实性状态）：PROPAGANDA（宣传性内容）或 FALSE（错误）
source（来源）：Mars Federation Official Report（火星联邦官方报告）
known_bias（已知立场）：政府立场
confidence（可信度）：低
```

## Relationship With Other Systems（与其他系统关系）

- 与 [historical-record-layer.md](historical-record-layer.md)：认知状态是记录的元数据
- 与 [canon-engine.md](canon-engine.md)：Epistemic Analyzer（认知状态分析器）是其组件
- 与 [world-reality.md](world-reality.md)：认知状态不改变世界现实本身
- 与 [canon-reframing.md](canon-reframing.md)：重构会改变记录的认知状态

## Current Status（当前状态）

v0.2 Draft。概念定义完成；未实现。
