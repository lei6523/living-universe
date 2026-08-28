# Canon Levels（正史层级）

Status: v0.3 Draft（v0.1 模型保留为历史）

## v0.3 更新：三维度模型

v0.1 把 Hard Canon（硬正史）、Local Canon（局部正史）、Personal Canon（个人正史）放在同一层级，混合了三个不同维度：

- Authority（权威程度）
- Scope（作用范围）
- Ownership（创作者所有权）

v0.3 将正史层级拆分为多个独立维度。

### 维度一：Canon Authority（正史权威等级）

建议定义：

- **Canon Constitution（正史宪法）** — 最高层规则：基础物理规则、技术边界、AI 基本定义、关键不可变原则；普通创作者不能随意修改
- **Reality Canon（现实正史）** — 已认定的世界事实（World Reality）
- **Canon Candidate（正史候选）** — 通过验证、等待人工审核的候选
- **Historical Record（历史记录）** — 记录层内容（官方记录、传记、宣传等），不再是正史事实本身
- **Sandbox（沙盒内容）** — 实验、候选、平行版本；自由创作，不影响正史

### 维度二：Scope（作用范围）

Scope（作用范围）不能再直接等于 Canon Level（正史等级）。独立定义：

- Personal（个人）
- Local（地方）
- Regional（区域）
- National（国家）
- Civilization（文明）
- Universal（宇宙级）

### 维度三：Creator Ownership（创作者所有权）

Creator Ownership（创作者所有权）也必须独立存在。例如：

```text
Character（人物）

Creator（创作者）：
Author A

Scope（作用范围）：
Local（地方）

Reality Status（现实状态）：
Canon（正史）

Historical Usage（历史引用）：
Public Reference Allowed（允许公共历史引用）
```

### Impact Level（影响等级）与治理强度

治理可以按照 Impact Level（影响等级）划分：

- S0 Background（背景级）
- S1 Local（地方级）
- S2 Regional（区域级）
- S3 National（国家级）
- S4 Civilization（文明级）
- S5 Constitutional（正史宪法级）

影响越高，审核越严格。Blast Radius（影响范围）越大，治理等级越高（见 [docs/architecture/blast-radius.md](../architecture/blast-radius.md)）。

---

## v0.1 旧模型（历史存档）

以下为 v0.1 的五层级模型，保留供历史参考；新创作与审核流程使用上面的三维度模型。

### Canon Constitution（正史宪法）

- **内容**：基础物理规则、技术边界、AI 基本定义、关键不可变原则
- **修改权限**：最高级别治理，普通创作者不能随意修改

### Hard Canon（硬正史）

- **内容**：已确认的重大历史事实（国家成立、战争发生、重大技术突破、政权更替）
- **修改权限**：重大历史事件流程（多提案 + Canon Validation + Editorial Review + Community Discussion + Final Canon Decision）

### Local Canon（局部正史）

- **内容**：地区、城市、组织或局部时间范围内的正史
- **修改权限**：AI + Editor + Community Feedback

### Personal Canon（个人正史）

- **内容**：创作者自己创建角色的核心人生历史
- **修改权限**：主要由原始创作者维护，受 Creator Ownership 保护

### Sandbox / Apocrypha（沙盒 / 外典）

- **内容**：实验作品、候选作品、平行版本
- **修改权限**：自由创作，不影响正史

---

## 治理强度（保留，适用于两个模型）

重要程度越高，治理强度越高。普通小人物故事采用 AI Check + Editor Review 即可。

注意：不采用"票数最高 = 正史"的简单规则，避免世界被流行趋势绑架。

框架定义见 [docs/SYSTEM_OVERVIEW.md](../SYSTEM_OVERVIEW.md#5-canon-hierarchy)。
