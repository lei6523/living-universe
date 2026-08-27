# World State（世界状态）

Status: v0.1

## 定义

> World State 是世界中所有可变化实体状态的集合。

实体包括：

- 人物（存活、年龄、职位、关系）
- 地点（归属、控制方、状态）
- 国家 / 势力（和平 / 战争、领土、政权）
- 组织（活跃 / 解散、成员）
- 技术（实验 / 公开 / 普及）

## 状态变化示例

```text
Character A:   alive → dead
City B:        independent → occupied
Country C:     peace → war
Technology D:  experimental → public
Organization E: active → dissolved
```

## 与 Living Canon 的关系

Living Canon 是"历史记录"，World State 是"当前状态"。每一次 History Commit 同时修改两者：历史增加一条记录，世界状态发生一次迁移。

## 核心原则

> Story = World-State Transaction

故事不仅是世界的描述，也是改变世界的操作。详见 [docs/SYSTEM_OVERVIEW.md](../SYSTEM_OVERVIEW.md#3-core-principle-story-as-a-world-state-transaction)。
