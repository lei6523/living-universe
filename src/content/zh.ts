import type { Dict } from "./types";

export const zh: Dict = {
  boot: {
    lines: [
      { t: "LIVUNIS 内核 0.2 —— 冷启动", ok: false, dim: true },
      { t: "链接正史档案 .................... ", ok: true, dim: false },
      { t: "载入世界记忆 .................... ", ok: true, dim: false },
      { t: "校验连续性 ...................... ", ok: true, dim: false },
      { t: "索引历史分层 .................... ", ok: true, dim: false },
      { t: "档案界面就绪 —— 正在初始化", ok: false, dim: true },
    ],
    skip: "▮ 点击任意处跳过",
  },
  nav: {
    links: [
      { href: "#concept", label: "01 概念" },
      { href: "#structure", label: "02 结构" },
      { href: "#memory", label: "03 记忆" },
      { href: "#manifesto", label: "04 宣言" },
    ],
    status: "系统在线",
    switchEn: "EN",
    switchZh: "中文",
  },
  hero: {
    kicker: "活宇宙框架 · LIVING UNIVERSE",
    h1a: "一个会记住",
    h1b: "一切的宇宙。",
    sub: "LIVUNIS 是一种持续叙事文明的框架——世界不会随着任何一个故事的结束而停止：故事经过验证成为历史，历史重新塑造此后的一切。",
    ctaPrimary: "进入档案库 ↓",
    ctaSecondary: "阅读宣言",
    scrollHint: "// 滚动以初始化档案",
    readouts: [
      { k: "世界状态", v: "演化中" },
      { k: "记忆层", v: "运行中" },
      { k: "正史引擎", v: "待命" },
      { k: "连续性", v: "已验证" },
    ],
    corner: "V0.2 · 框架草案\n高度 0000 · 档案 01",
  },
  concept: {
    kicker: "01 · 概念",
    h2a: "故事会结束。",
    h2b: "世界不该。",
    p1: "小说有最后一页，电影有最后一帧。活宇宙没有。LIVUNIS 是一套让世界在故事结束之后仍然持续运转的框架——它拥有共同的历史记录、不断延续的现在，以及未来每一个故事都必须认真对待的过去。",
    p2: "宇宙即产品，故事即历史发生的方式。任何写入正史的内容都不再只是叙事——它成为世界记忆的一部分，而记忆是有后果的。",
    motto: "// 宇宙即产品。故事即历史发生的方式。",
    items: [
      {
        code: "REC-001",
        title: "持久性",
        body: "世界不会随故事结束而重置，它持续累积。",
      },
      {
        code: "REC-002",
        title: "记忆",
        body: "被接受的成为记录，被否定的成为另一种历史。",
      },
      {
        code: "REC-003",
        title: "连续性",
        body: "每个新故事都继承此前的一切，并必须与它共存。",
      },
    ],
  },
  structure: {
    kicker: "02 · 系统结构",
    h2a: "六个系统。",
    h2b: "一个活着的世界。",
    nodes: [
      {
        code: "SYS-01",
        name: "世界",
        desc: "地点、人物与权力的持续状态——在最后一页之后仍然变化。",
      },
      {
        code: "SYS-02",
        name: "正史",
        desc: "世界公认事实的共享记录。由多人书写，最终权威属于人类。",
      },
      {
        code: "SYS-03",
        name: "历史",
        desc: "通过验证的虚构成为历史——而历史对其后诞生的每个故事都有后果。",
      },
      {
        code: "SYS-04",
        name: "创作者",
        desc: "人类署名权受到保护。没有任何单一作者拥有宇宙。",
      },
      {
        code: "SYS-05",
        name: "智能体",
        desc: "AI 治理一致性而非创作。它询问「它能否成立」——从不决定什么成为历史。",
      },
      {
        code: "SYS-06",
        name: "演化",
        desc: "更好的解释可以重构过去。正史事实可以被重新认识，历史作品继续存在。",
      },
    ],
    coreLabel: "核心",
    panelHint: "// 移过节点以查看系统详情",
    aria: "LIVUNIS 系统结构网络",
  },
  archive: {
    kicker: "03 · 宇宙记得",
    h2a: "没有什么是丢失的。",
    h2b: "一切都被记住。",
    p: "宇宙不仅保存发生过什么，也保存人们相信过什么、记录过什么、后来又如何重新解释。错误的记录也仍会归档——因为错误一旦被写下，它本身就是历史。",
    quote: "正史事实可以被重新认识，\n正史作品继续存在。",
    quoteSource: "// 历史记录层 · 认知层",
    records: [
      {
        id: "REC-0001",
        tag: "故事",
        title: "故事被提出",
        body: "创作者在选定的时间、地点与范围内写作。世界把此前发生的一切，作为正史快照交到他手中。",
      },
      {
        id: "REC-0002",
        tag: "主张",
        title: "主张被提取",
        body: "每一个关于世界的断言都成为一条事实主张——主体、关系、对象、有效时间、来源、状态。故事还不是历史。",
      },
      {
        id: "REC-0003",
        tag: "引擎",
        title: "正史引擎验证",
        body: "时间线、因果、科技、身份、影响范围。引擎只问一个问题：它能否存在于我们所知的世界？",
      },
      {
        id: "REC-0004",
        tag: "裁决",
        title: "人类的决定",
        body: "AI 判断它能否成立；人类决定它是否值得成为历史。没有任何单一作者拥有记录——但作者拥有自己的作品。",
      },
      {
        id: "REC-0005",
        tag: "提交",
        title: "历史被提交",
        body: "现实正史、世界状态、历史记忆与溯源同时更新。事件留下永久而可追溯的痕迹。",
      },
      {
        id: "REC-0006",
        tag: "记忆",
        title: "世界开始记住",
        body: "记录即使被重新解释也依然存在。旧故事被重新分类——被重构，而非删除。错误同样成为历史。",
      },
    ],
  },
  manifesto: {
    kicker: "04 · 宣言",
    seal: "◆ 正史印记 · 原则 03",
    q1: "AI 询问：它能否成立？",
    q2: "人类决定：它是否值得成为历史？",
    sub: "一致性由机器治理。权威属于人类。",
    p: "LIVUNIS 是开放的框架，而非成品。它是新型叙事文明的基础设施——由众多创作者共建，由正史引擎守望，由一个从不停止的世界所铭记。",
    cta1: "阅读宣言",
    cta2: "探索框架",
    cta3: "进入文档",
    motto: "// 宇宙即产品。故事即历史发生的方式。",
  },
  footer: {
    tagline: "活宇宙（Living Universe）——持续叙事文明。比故事活得更久的世界。",
    status: "系统在线",
    columns: [
      {
        title: "框架",
        links: [
          { label: "概念", href: "#concept" },
          { label: "系统结构", href: "#structure" },
          { label: "宇宙记得", href: "#memory" },
          { label: "宣言", href: "#manifesto" },
        ],
      },
      {
        title: "文档",
        links: [
          {
            label: "宣言",
            href: "https://github.com/lei6523/LIVUNIS/blob/main/MANIFESTO.md",
          },
          {
            label: "系统说明",
            href: "https://github.com/lei6523/LIVUNIS/blob/main/docs/SYSTEM_OVERVIEW.md",
          },
          {
            label: "术语表",
            href: "https://github.com/lei6523/LIVUNIS/blob/main/GLOSSARY.md",
          },
          {
            label: "架构图谱",
            href: "https://github.com/lei6523/LIVUNIS/blob/main/docs/visuals/README.md",
          },
        ],
      },
      {
        title: "系统",
        links: [
          {
            label: "网站仓库",
            href: "https://github.com/lei6523/livunis-web",
          },
          {
            label: "状态——文档阶段",
            href: "https://github.com/lei6523/LIVUNIS",
          },
          { label: "联系——公开渠道", href: "mailto:contact@livunis.space" },
        ],
      },
    ],
    copyright: "© 2026 LIVUNIS · 活宇宙项目",
    meta: "V0.2 · 框架草案 · 地球链路：稳定",
  },
};
