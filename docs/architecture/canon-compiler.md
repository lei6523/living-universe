# Canon Compiler（正史编译器）

Status: v0.1（概念定义；尚未实现）

## 目标

> 像程序编译器检查代码一样检查故事与世界是否兼容。

Canon Compiler 不替作者写故事，只负责一致性检查，并在发现矛盾时输出冲突报告。

## 冲突输出示例

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

## 未来检查范围

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

## 与 Canon AI 的关系

Canon Compiler 是工具方向；Canon AI 是负责执行一致性检查的 AI 角色。二者的具体实现方式将在后续阶段确定。

框架定义见 [docs/SYSTEM_OVERVIEW.md](../SYSTEM_OVERVIEW.md#8-canon-compiler)。
