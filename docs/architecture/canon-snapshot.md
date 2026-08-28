# Canon Snapshot（正史快照）

Status: v0.3 Draft（架构方向，不代表已实现）

## Definition（定义）

> Canon Snapshot（正史快照）是创作者在开始创作前，按时间、地点与范围获取的世界正史摘要。

## Purpose（目的）

- 让创作者不需要掌握整个宇宙就能开始创作
- 支持 Offline Creation（离线创作）
- 让创作建立在明确的正史基线（baseline）之上

## Core Concepts（核心概念）

- **Time（时间）**：创作者计划创作的时间段
- **Location（地点）**：创作者计划创作的地点
- **Scope（范围）**：创作者关心的内容领域，如 Politics（政治）、Technology（科技）、Society（社会）、Characters（人物）

## Example（示例）

创作者指定：

```text
Time（时间）：
3001

Location（地点）：
X City（XX市）

Scope（范围）：
Politics（政治）
Technology（科技）
Society（社会）
Characters（人物）
```

系统输出：Canon Snapshot（正史快照）。

## Relationship With Other Systems（与其他系统关系）

- 与 [merge-protocol.md](merge-protocol.md)：快照是离线创作与远程同步的基线
- 与 [world-state.md](world-state.md)：快照基于某时间点的 World State（世界状态）生成
- 与 [canon-white-space.md](canon-white-space.md)：快照应明确标出 Unknown（未知）与开放区域
- 与 [system-v0.3.md](system-v0.3.md)：是完整创作流程的第二步

## Current Status（当前状态）

v0.3 Draft。为创作者使用的目标系统；尚未实现。
