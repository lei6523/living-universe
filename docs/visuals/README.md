# Living Universe Architecture Atlas（活宇宙架构图谱）

> **一个系统，多种视角（One System, Multiple Views）。**
> 同一个 Living Universe（活宇宙），用多张不同目的的架构图分别表达，而不是一张"大而全"的蜘蛛网。

| 状态 | 说明 |
| --- | --- |
| 对应架构版本 | 仓库当前架构文档 v0.2 Draft（[docs/architecture/system-v0.2.md](../architecture/system-v0.2.md)） |
| 实现状态 | 图中所有 AI、Knowledge Graph（知识图谱）、Canon Engine（正史引擎）、Simulation（模拟）相关内容均为 **Architecture Direction（架构方向）**，不代表已经实现 |
| 图格式 | Mermaid（GitHub 原生渲染），源文件即文档，可长期维护 |

---

## 图索引（Index）

| # | 图 | 名称 | 一句话用途 | 文件 |
| --- | --- | --- | --- | --- |
| 01 | System Landscape | 系统全景 | 看整个活宇宙由哪些核心系统构成 | [system-landscape.md](system-landscape.md) |
| 02 | Creation Pipeline | 创作流水线 | 看一篇故事如何成为历史 | [creation-pipeline.md](creation-pipeline.md) |
| 03 | Historical Layers | 历史分层 | 看真相、记录、宣传和传说如何并存 | [historical-layers.md](historical-layers.md) |
| 04 | World Data Graph | 世界数据图 | 看人物、地点、科技、事件如何连接 | [world-data-graph.md](world-data-graph.md) |
| 05 | Canon Engine | 正史引擎 | 看规则、图谱和 AI 如何一起工作 | [canon-engine.md](canon-engine.md) |
| 06 | Governance & AI | 治理与 AI | 看机器与人类各自负责什么 | [governance-ai.md](governance-ai.md) |
| 07 | Canon Reframing Flow | 正史重构流程 | 看旧故事如何被重新解释而不是删除 | [canon-reframing.md](canon-reframing.md) |
| 08 | Offline Merge Flow | 离线合并流程 | 看多人离线创作与冲突如何合并 | [offline-merge.md](offline-merge.md) |

### 快速阅读顺序

**给第一次接触这个仓库的人**（3 分钟）：

1. **01 System Landscape（系统全景）** —— 整体由哪些系统构成
2. **02 Creation Pipeline（创作流水线）** —— 一篇故事如何变成历史
3. **03 Historical Layers（历史分层）** —— 真相与记录的区别
4. **06 Governance & AI（治理与 AI）** —— 机器与人类各自负责什么

**给参与开发的人**（按需要深入）：

- 世界数据怎么组织 → **04 World Data Graph** → [temporal-knowledge-graph.md](../architecture/temporal-knowledge-graph.md)
- 正史引擎内部 → **05 Canon Engine** → [canon-engine.md](../architecture/canon-engine.md)
- 旧故事如何被重新解释 → **07 Canon Reframing Flow** → [canon-reframing.md](../architecture/canon-reframing.md)
- 多人并发与离线创作 → **08 Offline Merge Flow** → [merge-protocol.md](../architecture/merge-protocol.md)

---

## 视觉约定（Visual Conventions）

所有图共用同一套视觉语言：

- **方向习惯**：系统全景与流程图使用 `flowchart TD`（top-down）；数据图使用 `flowchart LR`（left-to-right）；治理图使用左右结构。
- **双语规则**：每个重要英文术语都带中文。图内空间有限时采用两行：第一行 English，第二行 中文。
- **配色只用于分类，不做装饰**（见下方色卡）。图在 GitHub Light / Dark Mode 下均保持可读（浅色填充 + 深色文字）。

### 色卡（Color Legend）

| 颜色 | 类别 | 含义 |
| --- | --- | --- |
| 蓝 | World Reality / World State（世界现实 / 世界状态） | 当前认定的事实与可计算状态 |
| 暖橙 | Historical Memory（历史记忆） | 历史记录、认知层、溯源 |
| 绿 | Creator Ecosystem（创作者生态） | 故事、主张、所有权、社区 |
| 紫 | Canon Engine（正史引擎） | 规则、图谱、AI 与检查器 |
| 红 | Human Governance（人类治理） | 人工审核、人类决策 |
| 黄 | 关键句子 / 提示 | 核心原则与注意事项 |

---

## 每张图都坚持的核心句子（Core Sentences）

> **Story（故事） ≠ Truth（真相）**

> **UNKNOWN（未知） ≠ FALSE（错误）**

> **AI asks: Can it exist?**
> **Humans decide: Should it become history?**
>
> **AI 判断：它能不能成立？**
> **人类决定：它值不值得成为历史？**

> **Canon facts may change. Canon artifacts remain.**
>
> **正史事实可以被重新认识，但历史作品本身继续存在。**

> **错误的历史记录，本身也是历史。**

---

## 容易混淆的概念（Avoid Confusion）

可视化与文档中始终避免以下混淆：

1. Story（故事） ≠ Canon（正史）
2. Historical Record（历史记录） ≠ Truth（真相）
3. Canon AI（正史AI） ≠ Canon Engine（正史引擎）
4. Local（地方）是 Scope（作用范围），不是 Truth Level（真实性等级）
5. Creator Ownership（创作者所有权） ≠ Canon Authority（正史权威）
6. UNKNOWN（未知） ≠ ERROR（错误）
7. Canon Reframing（正史重构） ≠ Delete（删除）

---

## 架构文档导航（Architecture Docs）

- 总览：[docs/SYSTEM_OVERVIEW.md](../SYSTEM_OVERVIEW.md)
- v0.2 总体架构：[docs/architecture/system-v0.2.md](../architecture/system-v0.2.md)
- 术语表：[GLOSSARY.md](../../GLOSSARY.md)
- 治理：[docs/governance/canon-levels.md](../governance/canon-levels.md)、[docs/governance/creator-rights.md](../governance/creator-rights.md)
