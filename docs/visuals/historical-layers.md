# 03 · Historical Layers（历史分层图）

> 对应架构版本：仓库当前文档 v0.2 Draft。图中所有系统均为 **Architecture Direction（架构方向）**，不代表已经实现。

## 图用途（Purpose）

回答一个问题：

> **世界真实发生的事情，与世界里的人如何记录这些事情，有什么区别？**

这是 Living Universe（活宇宙）最有特色的一张图：World Reality（世界现实）与 Historical Record Layer（历史记录层）严格分离——同一个事件可以同时存在一条"真实原因"和一条"官方说法"，两者都属于这个世界。

## Mermaid Diagram

```mermaid
flowchart TD
    WR["World Reality（世界现实）<br/>2217 · Dawn Explosion（曙光号爆炸）<br/>Actual Cause（真实原因）:<br/>Political Assassination（政治暗杀）"]

    N1["World Truth（世界真相）<br/>≠<br/>Historical Record（历史记录）"]

    WR --> N1

    subgraph HR["Historical Record Layer（历史记录层）<br/>世界内部产生的记录"]
        direction LR
        R1["Official Record<br/>官方记录"] ~~~ R2["Biography<br/>传记"] ~~~ R3["Memoir<br/>回忆录"] ~~~ R4["Local History<br/>地方历史"] ~~~ R5["Journalism<br/>新闻报道"] ~~~ R6["Academic History<br/>历史研究"] ~~~ R7["Propaganda<br/>政治宣传"] ~~~ R8["Rumor<br/>谣言"] ~~~ R9["Legend<br/>传说"] ~~~ R10["Fiction-in-Universe<br/>世界内文学"]
    end

    N1 --> HR

    N2["每条记录带 truth_status（真实性状态）:<br/>TRUE / FALSE / UNKNOWN / DISPUTED<br/>PARTIALLY TRUE / BELIEVED TRUE<br/>PROPAGANDA / UNVERIFIED"]

    HR --> N2

    NB["错误的历史记录，本身也是历史。<br/>政府报告的「反应堆故障」与真实原因「政治暗杀」同时存在"]

    N2 --> NB

    OLD["Canon Reframing（正史重构）<br/>Old Hard Canon（旧硬正史）"] --> NEW["New Evidence / Better Story<br/>新证据 / 更优秀的新故事"] --> COMP["Compatibility Check<br/>兼容性检查"] --> BR["Blast Radius Analysis<br/>影响范围分析"] --> HRV["Human Review<br/>人工审核"] --> UPD["Reality Canon Updated<br/>现实正史更新"] --> RECL["Old Story Reclassified<br/>旧故事重新分类"] --> CATS["Biography · Official Record<br/>Local History · Propaganda<br/>传记 · 官方记录 · 地方史 · 宣传"]

    RECL --> KEY["Canon facts may change. Canon artifacts remain.<br/>正史事实可以被重新认识，但历史作品本身继续存在。"]

    classDef wr fill:#DCE9F7,stroke:#2E5A88,color:#10293F;
    classDef hm fill:#F6ECDE,stroke:#8A5A2E,color:#3F2A10;
    classDef ce fill:#E4F0E3,stroke:#2E7D46,color:#103F22;
    classDef en fill:#ECE4F6,stroke:#5B3A8A,color:#24103F;
    classDef hu fill:#F6E4E4,stroke:#8A2E2E,color:#3F1010;
    classDef note fill:#FFF8E1,stroke:#A67C00,color:#3F2E00;

    class WR wr;
    class R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,N2,NB hm;
    class NEW,COMP,BR ce;
    class OLD,UPD,RECL,CATS en;
    class HRV hu;
    class N1,KEY note;
```

## 简短解释（Short Explanation）

- **上部：两个层次。** World Reality（世界现实）保存"当前认定真正发生过的事情"；Historical Record Layer（历史记录层）保存"世界内部产生的记录"——官方记录、传记、回忆录、地方历史、新闻报道、学术历史研究、政治宣传、谣言、传说、世界内文学。
- **中间的「≠」是核心。** World Truth（世界真相）不等于 Historical Record（历史记录）。示例：2217 年 Dawn（曙光号）爆炸的真实原因是 Political Assassination（政治暗杀），而政府报告宣称 Reactor Failure（反应堆故障）——两者同时存在，互不冲突。
- **Epistemic Layer（认知层）** 为每条记录标记 truth_status（真实性状态）：真实、错误、未知、争议、部分真实、被认为真实、宣传性内容、未验证。认知状态不改变 World Reality 本身。
- **下部：Canon Reframing（正史重构）**。当新证据或更好的新故事出现时：旧硬正史 → 新证据 → 兼容性检查 → 影响范围分析 → 人工审核 → 现实正史更新 → 旧故事重新分类（成为传记 / 官方记录 / 地方史 / 宣传等）。
- **重要：旧故事不会被删除。** 它只是从 Reality Canon（现实正史）移入 Historical Record Layer（历史记录层），意义发生改变。

## 对应架构文档（Related Architecture Docs）

- [docs/architecture/world-reality.md](../architecture/world-reality.md) — 2217 Dawn（曙光号）示例
- [docs/architecture/historical-record-layer.md](../architecture/historical-record-layer.md)
- [docs/architecture/epistemic-layer.md](../architecture/epistemic-layer.md)
- [docs/architecture/canon-reframing.md](../architecture/canon-reframing.md)
- [docs/architecture/blast-radius.md](../architecture/blast-radius.md)
- [docs/architecture/provenance-graph.md](../architecture/provenance-graph.md)
