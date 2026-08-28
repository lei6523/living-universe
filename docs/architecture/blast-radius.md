# Blast Radius（正史修改影响范围）

Status: v0.3 Draft（架构方向，不代表已实现）

## Definition（定义）

> Blast Radius（正史修改影响范围）是评估一次正史修改（尤其是 Canon Reframing，正史重构）会影响到多少实体的指标。

## Purpose（目的）

- 让治理强度与影响范围挂钩：影响越大，Governance Level（治理等级）越高
- 让审核者在下决定前理解修改的代价

## Core Concepts（核心概念）

- 任何重要 Canon Reframing（正史重构）之前，Canon Engine（正史引擎）必须计算 Blast Radius（影响范围）
- 影响越大，Governance Level（治理等级）越高（参见 [../governance/canon-levels.md](../governance/canon-levels.md) 的 Impact Level（影响等级））

## Example（示例）

```text
Characters Affected（受影响人物）：
37

Stories Affected（受影响故事）：
84

Organizations Affected（受影响组织）：
6

Future Events Affected（受影响未来事件）：
19
```

## Relationship With Other Systems（与其他系统关系）

- 与 [canon-reframing.md](canon-reframing.md)：重大重构前必须计算
- 与 [canon-engine.md](canon-engine.md)：Blast Radius Analyzer（影响范围分析器）是其组件
- 与 [causal-graph.md](causal-graph.md)：因果路径是影响范围计算的基础
- 与 [../governance/canon-levels.md](../governance/canon-levels.md)：影响等级决定审核强度

## Current Status（当前状态）

v0.3 Draft。概念定义完成；未实现。
