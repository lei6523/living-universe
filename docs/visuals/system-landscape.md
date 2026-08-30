# 01 · System Landscape（系统全景图）

> 对应架构版本：仓库当前文档 v0.2 Draft。图中所有系统均为 **Architecture Direction（架构方向）**，不代表已经实现。

## 图用途（Purpose）

回答一个问题：

> **Living Universe（活宇宙）到底由哪些系统构成？**

这张图是进入仓库的第一张图：世界侧（World Reality 世界现实、World State 世界状态、Historical Memory 历史记忆）、创作者侧（Creator Ecosystem 创作者生态）、验证引擎（Canon Engine 正史引擎）、提交与演化闭环（History Commit 历史提交 → World Evolves 世界继续演化）。

新人 30 秒读懂主链路：

> **创作者写故事 → 系统提取事实 → 正史引擎检查 → 人类决定 → 历史进入世界。**

## Mermaid Diagram

```mermaid
flowchart TD
    LU["Living Universe<br/>（活宇宙）"]

    subgraph WSIDE["World Side（世界侧）"]
        direction TB
        WR["World Reality<br/>（世界现实）"]
        WR --> WR1["Entity<br/>实体"]
        WR --> WR2["Time<br/>时间"]
        WR --> WR3["State<br/>状态"]
        WR --> WR4["Relation<br/>关系"]

        WS["World State<br/>（世界状态）"]
        WS --> WS1["World Snapshot<br/>世界快照"]
        WS --> WS2["State Migration<br/>状态迁移"]

        HM["Historical Memory<br/>（历史记忆）"]
        HM --> HM1["Historical Record<br/>历史记录"]
        HM --> HM2["Epistemic Layer<br/>认知层"]
        HM --> HM3["Provenance Graph<br/>溯源图谱"]
    end

    subgraph CSIDE["Creator Side（创作者侧）"]
        direction TB
        CE["Creator Ecosystem<br/>（创作者生态）"]
        CE --> CE1["Story<br/>故事"]
        CE --> CE2["Claim<br/>事实主张"]
        CE --> CE3["Creator Ownership<br/>创作者所有权"]
        CE --> CE4["Community<br/>社区"]
    end

    LU --> WSIDE
    LU --> CSIDE

    WSIDE --> EN["Canon Engine<br/>（正史引擎）"]
    CSIDE --> EN

    EN --> EN1["Rule Engine<br/>规则引擎"]
    EN --> EN2["Canon AI<br/>正史AI"]
    EN --> EN3["Graph Engine<br/>图谱引擎"]
    EN --> EN4["Conflict Detection<br/>冲突检测"]

    EN --> HC["History Commit<br/>（历史提交）"]

    HC --> EV["World Evolves<br/>（世界继续演化）"]

    N1["Story（故事） ≠ Truth（真相）<br/>故事提出主张，主张经验证后才可能成为历史"]
    N2["History Commit（历史提交）更新<br/>World Reality / World State / Historical Memory<br/>世界继续演化，新故事继续进入循环"]

    N1 ~~~ EV
    N2 ~~~ EV

    classDef root fill:#263238,stroke:#263238,color:#ECEFF1;
    classDef wr fill:#DCE9F7,stroke:#2E5A88,color:#10293F;
    classDef hm fill:#F6ECDE,stroke:#8A5A2E,color:#3F2A10;
    classDef ce fill:#E4F0E3,stroke:#2E7D46,color:#103F22;
    classDef en fill:#ECE4F6,stroke:#5B3A8A,color:#24103F;
    classDef note fill:#FFF8E1,stroke:#A67C00,color:#3F2E00;

    class LU root;
    class WR,WR1,WR2,WR3,WR4,WS,WS1,WS2 wr;
    class HM,HM1,HM2,HM3 hm;
    class CE,CE1,CE2,CE3,CE4 ce;
    class EN,EN1,EN2,EN3,EN4,HC en;
    class EV hm;
    class N1,N2 note;
```

## 简短解释（Short Explanation）

- **Living Universe（活宇宙）** 的五个最高层核心概念是：World Reality（世界现实）、World State（世界状态）、Historical Memory（历史记忆）、Creator Ecosystem（创作者生态）、Canon Engine（正史引擎）。
- **World Reality（世界现实）** 是当前认定真正发生过的事情；**World State（世界状态）** 是某一时间点世界的可计算状态（快照与迁移）。两者都是「世界侧」，但不是同一个概念。
- **Historical Memory（历史记忆）** 是 Historical Record Layer（历史记录层）、Epistemic Layer（认知层）与 Provenance Graph（溯源图谱）的集合：世界不仅保存事实，也保存关于事实的记录、理解与误解。
- **Creator Ecosystem（创作者生态）** 提供 Story（故事）与 Claim（事实主张）；创作者所有权（Creator Ownership）与社区（Community）在此层。
- **Canon Engine（正史引擎）** 验证事实主张与世界现实的兼容性，包含 Rule Engine（规则引擎）、Canon AI（正史AI）、Graph Engine（图谱引擎）与冲突检测（Conflict Detection）。
- **History Commit（历史提交）** 是故事正式成为历史的操作；它更新 World Reality、World State 与 Historical Memory，世界因此继续演化（循环）。
- 图中蓝色 = World Reality / World State（世界侧），暖色 = Historical Memory（记忆侧），绿色 = Creator Ecosystem（创作者侧），紫色 = Canon Engine（引擎侧）。颜色只用于分类，不做装饰。

## 对应架构文档（Related Architecture Docs）

- [docs/architecture/system-v0.2.md](../architecture/system-v0.2.md) — 五个最高层核心概念的定义
- [docs/architecture/world-reality.md](../architecture/world-reality.md)
- [docs/architecture/world-state.md](../architecture/world-state.md)
- [docs/architecture/historical-record-layer.md](../architecture/historical-record-layer.md)
- [docs/architecture/canon-engine.md](../architecture/canon-engine.md)
- [docs/governance/canon-levels.md](../governance/canon-levels.md)
- [docs/SYSTEM_OVERVIEW.md](../SYSTEM_OVERVIEW.md)
