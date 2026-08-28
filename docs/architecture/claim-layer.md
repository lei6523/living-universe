# Claim Layer（事实主张层）

Status: v0.2 Draft（架构方向，不代表已实现）

## Definition（定义）

> Claim Layer（事实主张层）是 Story（故事）与世界事实之间的中间层：作者创作的内容不能直接等于 Truth（真相），作者首先提出 Claim（事实主张）。

## Purpose（目的）

- 让 Story（故事）与 Truth（真相）分离
- 让「提出主张」与「认定事实」两个动作有明确的系统边界
- 为 Canon Engine（正史引擎）提供可检查的结构化输入

## Core Concepts（核心概念）

Claim（事实主张）至少包含：

```text
Subject（主体）
Relation（关系）
Object（对象）
Valid Time（有效时间）
Source（来源）
Status（状态）
```

### Claim Lifecycle（事实主张生命周期）

```text
FREE（空白）

↓

PROPOSED（已提出）

↓

CLAIMED（已占用 / 正在开发）

↓

VALIDATING（验证中）

↓

CANON CANDIDATE（正史候选）

↓

HUMAN REVIEW（人工审核）

↓

HISTORY COMMIT（历史提交）

↓

REALITY CANON（现实正史）
```

如果出现问题：

```text
CONFLICTED（冲突状态）
```

## Example（示例）

作者 A 写：

```text
3001 年
XX市市长是刘某
```

内部转换为：

```text
Claim（事实主张）

Subject（主体）：
X City（XX市）

Relation（关系）：
MAYOR（市长）

Object（对象）：
Liu（刘某）

Valid Time（有效时间）：
3001

Source（来源）：
Story A（故事A）

Status（状态）：
PROPOSED（已提出）
```

## Relationship With Other Systems（与其他系统关系）

- 与 [canon-engine.md](canon-engine.md)：Canon Engine 检查 Claim 与世界现实的兼容性
- 与 [merge-protocol.md](merge-protocol.md)：并发 Claim 冲突由此层产生
- 与 [identity-system.md](identity-system.md)：Subject / Object 使用实体 ID 而非名字
- 与 [temporal-knowledge-graph.md](temporal-knowledge-graph.md)：Claim 是 TKG 的候选边
- 与 [canon-reframing.md](canon-reframing.md)：Reframing（重构）也会产生新的 Claim

## Current Status（当前状态）

v0.2 Draft。概念定义完成；Claim 提取与存储未实现。
