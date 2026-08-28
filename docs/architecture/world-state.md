# World State（世界状态）

Status: v0.2 Draft（v0.1 内容保留为历史）

## v0.2 更新（增量升级）

> **World State（世界状态）表示：某一个时间点，整个世界的可计算状态。**

World State 是 World Reality（世界现实）的可计算投影：它把「认定的事实」转换为「可以查询的状态」。v0.1 的定义没有删除，而是被包含在 v0.2 的模型中。

### World Snapshot（世界快照）

某一时间点的完整状态称为 World Snapshot（世界快照）。示例：

```text
Time（时间）：
3001-06-17

Location（地点）：
X City（XX市）

Mayor（市长）：
Liu（刘某）

Population（人口）：
2.31 million

Government（政府）：
Mars Federation（火星联邦）

Technology Level（科技水平）：
...

Current Events（当前事件）：
...
```

### 核心原则升级

v0.1：Story = World-State Transaction（故事 = 世界状态事务）

v0.2：

> **Story = Narrative Artifact + Claims + Possible World-State Transactions**

故事本身是独立的 Narrative Artifact（叙事作品）；其中的 Claims（事实主张）经过验证后，才可能成为改变世界状态的交易。详见 [system-v0.2.md](system-v0.2.md)。

---

## 定义（v0.1 原文，保留）

> World State 是世界中所有可变化实体状态的集合。

实体包括：

- 人物（存活、年龄、职位、关系）
- 地点（归属、控制方、状态）
- 国家 / 势力（和平 / 战争、领土、政权）
- 组织（活跃 / 解散、成员）
- 技术（实验 / 公开 / 普及）

## 状态变化示例（v0.1 原文，保留）

```text
Character A:   alive → dead
City B:        independent → occupied
Country C:     peace → war
Technology D:  experimental → public
Organization E: active → dissolved
```

## 与 Living Canon 的关系（v0.1 原文，保留）

Living Canon 是"历史记录"，World State 是"当前状态"。每一次 History Commit 同时修改两者：历史增加一条记录，世界状态发生一次迁移。

v0.2 补充：每一次 History Commit 还同时更新 Reality Canon（现实正史）、Historical Record Layer（历史记录层）、Provenance Graph（溯源图谱）、Causal Graph（因果图谱）、Claim Status（主张状态）与 Blast Radius Index（影响范围索引）。详见 [system-v0.2.md](system-v0.2.md)。

## 核心原则（v0.1 原文，保留）

> Story = World-State Transaction

故事不仅是世界的描述，也是改变世界的操作。详见 [docs/SYSTEM_OVERVIEW.md](../SYSTEM_OVERVIEW.md#3-core-principle-story-as-a-world-state-transaction)。
