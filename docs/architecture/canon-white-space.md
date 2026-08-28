# Canon White Space（正史空白区）

Status: v0.2 Draft（架构方向，不代表已实现）

## Definition（定义）

> Canon White Space（正史空白区）是世界中尚未被定义、只被部分定义或保持开放的区域。

## Purpose（目的）

- 防止世界观数据库提前写满整个世界
- 为未来创作者保留扩展空间
- 明确 UNKNOWN（未知）与 FALSE（错误）的区别

Living Universe（活宇宙）不能试图提前填满整个世界。世界应该保留大量：

- Unknown（未知）
- Partially Defined（部分定义）
- Open（开放）

区域。

## Core Concepts（核心概念）

- **Unknown（未知）**：没有定义过的区域
- **Partially Defined（部分定义）**：只定义了部分的区域
- **Open（开放）**：允许未来创作者继续扩展的区域

强调：

> 一个伟大的共享世界，不应该被世界观数据库提前写完。

## Example（示例）

```text
UNKNOWN（未知） ≠ FALSE（错误）
```

当 Canon Engine（正史引擎）对某个主张输出 UNKNOWN（未知）时，表示「世界尚未定义」，而不是「这个主张是错的」。创作者仍然可以在空白区提出新主张。

## Relationship With Other Systems（与其他系统关系）

- 与 [canon-engine.md](canon-engine.md)：UNKNOWN 验证结果指向空白区
- 与 [canon-snapshot.md](canon-snapshot.md)：快照应标出空白区
- 与 Curator AI（策展 AI）：负责 Canon White Space Discovery（正史空白发现）
- 与 [system-v0.2.md](system-v0.2.md)：是 v0.2 架构的组成部分

## Current Status（当前状态）

v0.2 Draft。概念定义完成。
