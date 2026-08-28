# Provenance Graph（来源图谱 / 溯源图谱）

Status: v0.2 Draft（架构方向，不代表已实现）

## Definition（定义）

> Provenance Graph（来源图谱）是追踪所有重要事实来源与变化历史的图结构。

## Purpose（目的）

- 落实 Principle 6：Canon must remain traceable（正史必须可追溯）
- 让每个事实都能回答：谁提出、何时进入、被谁修改、为什么修改

## Core Concepts（核心概念）

所有重要事实必须可追踪：

- 谁提出
- 来自哪篇 Story（故事）
- 什么时候进入 Canon（正史）
- 哪次 History Commit（历史提交）进入
- 后来是否被 Reframed（重新语境化）
- 谁修改
- 为什么修改
- 哪个新故事推动修改
- 影响哪些人物
- 影响哪些事件

## Example（示例）

```text
Fact ID（事实ID）：
FACT_482

Created By（提出来源）：
Story A（故事A）

Accepted（正式接受）：
2028

Original Status（原始状态）：
Hard Canon（硬正史）

Reframed（重新语境化）：
2034

Current Role（当前角色）：
Government Narrative（政府叙事）

Current Reality Claim（当前现实事实）：
Story B（故事B）
```

## Relationship With Other Systems（与其他系统关系）

- 与 [canon-reframing.md](canon-reframing.md)：每次重构都会在溯源图中留下记录
- 与 [historical-record-layer.md](historical-record-layer.md)：记录的来源可追溯
- 与 History Commit（历史提交）：每次 History Commit 更新溯源图
- 与 [identity-system.md](identity-system.md)：溯源基于实体 ID

## Current Status（当前状态）

v0.2 Draft。概念定义完成；未实现。
