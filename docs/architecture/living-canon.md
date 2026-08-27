# Living Canon（活正史）

Status: v0.1

## 定义

> Living Canon 是一个持续增长和变化的共享正史。

Living Canon 与传统正史的关键区别：

| | 传统正史 | Living Canon |
| --- | --- | --- |
| 变化 | 一旦确定基本固定 | 通过 History Commit 持续演进 |
| 来源 | 少数作者 / 中心化控制 | 多创作者 + AI 检查 + 人工审核 |
| 状态 | 不直接关联世界状态 | 每次变化都更新 World State |
| 追溯 | 通常缺少记录 | 每次提交要求可追溯 |

## 演进流程

```text
World State v1
→ New Story
→ Canon Check
→ History Commit
→ World State v2
→ ...
```

## 层级

见 [docs/governance/canon-levels.md](../governance/canon-levels.md)：

- Canon Constitution（正史宪法）
- Hard Canon（硬正史）
- Local Canon（局部正史）
- Personal Canon（个人正史）
- Sandbox / Apocrypha（沙盒 / 外典）

框架定义见 [docs/SYSTEM_OVERVIEW.md](../SYSTEM_OVERVIEW.md#4-living-canon)。
