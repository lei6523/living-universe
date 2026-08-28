# Canon Compiler（正史编译器）

Status: v0.3 Draft（v0.1 内容保留为历史）

## v0.3 更新（增量升级）

> **Canon Compiler（正史编译器）只是 Canon Engine（正史引擎）的一部分，而不是全部。**

v0.1 中 Canon Compiler 被描述为"核心工具方向"；v0.3 将其明确定位为 Canon Engine 的一个组成部分。Canon Engine 还包含实体解析、身份碰撞检测、并发主张检测、影响范围分析、认知状态分析等检查器。详见 [canon-engine.md](canon-engine.md)。

---

## 目标（v0.1 原文，保留）

> 像程序编译器检查代码一样检查故事与世界是否兼容。

Canon Compiler 不替作者写故事，只负责一致性检查，并在发现矛盾时输出冲突报告。

## 冲突输出示例（v0.1 原文，保留）

```text
CANON CONFLICT

Type:
Technology / Timeline

Story:
Warp spacecraft used in 3127.

Canon:
First operational warp engine: 3159.

Suggested resolution:
Use an existing propulsion technology
or modify the event date.
```

## 未来检查范围（v0.1 原文，保留）

- 时间线
- 科技
- 地理
- 人物年龄
- 人物关系
- 组织状态
- 国家状态
- 历史因果
- 资源约束
- 世界基本规则

## 与 Canon AI 的关系（v0.1 原文，保留）

Canon Compiler 是工具方向；Canon AI 是负责执行一致性检查的 AI 角色。二者的具体实现方式将在后续阶段确定。

v0.3 补充：Canon AI 的定位是 Semantic Validator（语义验证器），不创造真相，只验证主张与已有世界现实的兼容性；硬规则由 Rule Engine（规则引擎）、Graph Query（图查询）、Database Constraint（数据库约束）处理。

框架定义见 [docs/SYSTEM_OVERVIEW.md](../SYSTEM_OVERVIEW.md#8-canon-compiler)。
