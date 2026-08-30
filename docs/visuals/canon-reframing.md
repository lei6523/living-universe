# 07 · Canon Reframing Flow（正史重构流程图）

> 对应架构版本：仓库当前文档 v0.2 Draft。图中所有系统均为 **Architecture Direction（架构方向）**，不代表已经实现。

## 图用途（Purpose）

回答一个问题：

> **当更好的解释出现时，旧故事如何被重新解释，而不是被删除？**

Canon Reframing（正史重构 / 再语境化）是 Living Universe（活宇宙）最重要的机制之一：旧正史内容过时、剧情老套、或新作品提供更好的解释时，世界吸收新解释，但旧作品继续存在。

## Mermaid Diagram

```mermaid
flowchart TD
    OLD["Old Reality Canon<br/>（旧现实正史）"]

    OLD --> NEW["New Story / New Evidence<br/>（新故事 / 新证据）"]

    NEW --> COMP["Compatibility Check<br/>（兼容性检查）<br/>Timeline · Causal · Downstream"]

    COMP --> BR["Blast Radius Analysis<br/>（影响范围分析）"]

    BR --> HR["Human Review<br/>（人工审核）"]

    HR --> UPD["Reality Canon Updated<br/>（现实正史更新）"]

    UPD --> RECL["Old Story Reclassified<br/>（旧故事重新分类）<br/>不删除，只改分类"]

    RECL --> CATS["Official Record · Biography<br/>Local History · Propaganda · Legend<br/>官方记录 · 传记 · 地方史 · 宣传 · 传说"]

    N1["错误的历史记录，本身也是历史。"]
    N2["Canon Reframing（正史重构）≠ Delete（删除）<br/>Old Story（旧故事）→ 继续存在 → 意义改变"]

    classDef en fill:#ECE4F6,stroke:#5B3A8A,color:#24103F;
    classDef ce fill:#E4F0E3,stroke:#2E7D46,color:#103F22;
    classDef hu fill:#F6E4E4,stroke:#8A2E2E,color:#3F1010;
    classDef hm fill:#F6ECDE,stroke:#8A5A2E,color:#3F2A10;
    classDef note fill:#FFF8E1,stroke:#A67C00,color:#3F2E00;

    class OLD,UPD,RECL en;
    class NEW,COMP,BR ce;
    class HR hu;
    class CATS hm;
    class N1,N2 note;
```

## 简短解释（Short Explanation）

1. **Old Reality Canon（旧现实正史）**：原先认定的事实，例如"2217 年 Dawn（曙光号）爆炸原因是反应堆故障"。
2. **New Story / New Evidence（新故事 / 新证据）**：新作品提出更合理的解释，例如真实原因是政治暗杀。
3. **Compatibility Check（兼容性检查）**：新主张必须满足 Timeline Compatibility（时间线兼容）、Causal Compatibility（因果兼容）、Downstream Compatibility（后续历史兼容），并有明显的 Narrative Gain（叙事价值提升）。
4. **Blast Radius Analysis（影响范围分析）**：计算这次重构会影响多少实体、故事、组织与未来事件。
5. **Human Review（人工审核）**：通过后才执行。
6. **Reality Canon Updated（现实正史更新）**：新解释成为新的 Reality Canon（现实正史）。
7. **Old Story Reclassified（旧故事重新分类）**：旧作品不删除，重新分类为 Official Record（官方记录）/ Biography（传记）/ Local History（地方历史）/ Propaganda（政治宣传）/ Historical Interpretation（历史解释）等。
8. **记住核心原则**：`Canon facts may change. Canon artifacts remain.`（正史事实可以被重新认识，但历史作品本身继续存在。）**错误的历史记录，本身也是历史。**

## 对应架构文档（Related Architecture Docs）

- [docs/architecture/canon-reframing.md](../architecture/canon-reframing.md) — 触发条件、重新分类、示例
- [docs/architecture/blast-radius.md](../architecture/blast-radius.md) — 重构前的影响范围分析
- [docs/architecture/historical-record-layer.md](../architecture/historical-record-layer.md) — 旧正史重新分类为记录
- [docs/architecture/provenance-graph.md](../architecture/provenance-graph.md) — 每次重构在溯源图中留痕
- [docs/architecture/world-reality.md](../architecture/world-reality.md) — Reality Canon（现实正史）
