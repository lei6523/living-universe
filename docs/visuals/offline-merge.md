# 08 · Offline Merge Flow（离线创作与合并流程图）

> 对应架构版本：仓库当前文档 v0.2 Draft。图中所有系统均为 **Architecture Direction（架构方向）**，不代表已经实现。

## 图用途（Purpose）

回答一个问题：

> **多个创作者离线创作、重新联网后，并发主张如何处理？**

这张图展示多人并发场景：离线冲突不是系统失败，而是正常的 **Merge Conflict（合并冲突）**，由关系约束（Relation Constraint）检测并交由人工处理。

## Mermaid Diagram

```mermaid
flowchart TD
    SNAP["Canon Snapshot<br/>（正史快照）"]

    SNAP --> OFF["Offline Creation<br/>（离线创作）"]

    OFF --> LC["Local Claims<br/>（本地主张）"]

    LC --> REC["Reconnect<br/>（重新联网）"]

    REC --> SYNC["Remote Canon Sync<br/>（远程正史同步）"]

    SYNC --> CHECK["Concurrent Claim Check<br/>（并发主张检查）"]

    CHECK --> CLEAN["Clean（无冲突）<br/>→ 进入正常提交流程"]
    CHECK --> CONF["Merge Conflict<br/>（合并冲突）"]

    subgraph EX["Example（示例）"]
        direction TB
        A["Author A（作者A）:<br/>3001 Mayor（市长）= Liu（刘某）"]
        B["Author B（作者B）:<br/>3001 Mayor（市长）= Li（李某）"]
        RC["Relation Constraint（关系约束）:<br/>MAYOR_OF（担任市长）<br/>max_concurrent（最大同时数量）= 1"]
        A --> RC
        B --> RC
    end

    EX --> CONF

    N["离线冲突不是系统失败<br/>是正常的 Merge Conflict（合并冲突）<br/>冲突检测基于 Entity ID（实体ID），不基于名字"]

    classDef ce fill:#E4F0E3,stroke:#2E7D46,color:#103F22;
    classDef en fill:#ECE4F6,stroke:#5B3A8A,color:#24103F;
    classDef hu fill:#F6E4E4,stroke:#8A2E2E,color:#3F1010;
    classDef n fill:#ECEFF1,stroke:#607D8B,color:#263238;
    classDef note fill:#FFF8E1,stroke:#A67C00,color:#3F2E00;

    class SNAP,OFF,LC,REC,SYNC,CLEAN ce;
    class CHECK,CONF en;
    class A,B,RC n;
    class N note;
```

## 简短解释（Short Explanation）

1. 创作者先获取 **Canon Snapshot（正史快照）**——按时间、地点、范围生成的正史摘要，也是离线创作的基线（baseline）。
2. **Offline Creation（离线创作）**：在本地创作，产出 **Local Claims（本地主张）**，不依赖网络。
3. **Reconnect（重新联网）** 后执行 **Remote Canon Sync（远程正史同步）**，把本地主张与远程正史对齐。
4. **Concurrent Claim Check（并发主张检查）**：检测多个创作者对同一 Subject（主体）/ Relation（关系）/ 时间区间提出不同主张的情况。
5. 结果分为两条路径：**Clean（无冲突）** → 进入正常提交流程；**Merge Conflict（合并冲突）** → 交由人工解决。
6. **示例**：作者 A 提出"3001 年市长 = 刘某"，作者 B 提出"3001 年市长 = 李某"。关系约束 `MAYOR_OF（担任市长）max_concurrent = 1` 被违反 → 系统输出 Merge Conflict（合并冲突），而不是两个故事同时进入正史。
7. **记住**：离线冲突不是系统失败，而是正常的合并冲突；冲突检测基于 Entity ID（实体ID），不基于名字。

## 对应架构文档（Related Architecture Docs）

- [docs/architecture/merge-protocol.md](../architecture/merge-protocol.md) — 离线同步流程、关系约束、示例
- [docs/architecture/canon-snapshot.md](../architecture/canon-snapshot.md) — 快照是离线创作的基线
- [docs/architecture/claim-layer.md](../architecture/claim-layer.md) — 冲突发生在 Claim（事实主张）层
- [docs/architecture/canon-engine.md](../architecture/canon-engine.md) — Concurrent Claim Detector 与 Relation Constraints
- [docs/architecture/identity-system.md](../architecture/identity-system.md) — 基于实体 ID 的冲突检测
