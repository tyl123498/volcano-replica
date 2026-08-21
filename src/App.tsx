import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Gift,
  HelpCircle,
  MessageSquare,
  ScanLine,
  Sparkles,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MiniQR } from "@/components/MiniQR"
import { Seo } from "@/components/Seo"
import { ProductCard, type Product } from "@/components/ProductCard"

const NAV_SECTIONS = [
  { id: "seckill", label: "秒杀专区", sub: "19元抢800万Tokens，限量抢购" },
  { id: "new-user", label: "新客专享", sub: "新用户全量特惠活动，低至5折" },
  { id: "all-user", label: "新老同享", sub: "最新豆包大模型，98折福利" },
  { id: "guide", label: "商品使用指引", sub: "如何开通使用此商品" },
  {
    id: "coverage",
    label: "可抵扣模型覆盖表",
    sub: "递减包可自动抵扣模型范围",
  },
  { id: "faq", label: "常见问题", sub: "你需要知道的常见问题" },
]

const SECKILL_PRODUCTS: Product[] = [
  {
    badge: "限时秒杀5折",
    title: "豆包大模型2.0",
    desc: "多模态Agent智驭复杂任务",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "约800万Tokens"],
    ],
    price: "¥19.00",
    original: "¥200",
  },
  {
    badge: "限时秒杀5折",
    title: "图像创作模型5.0（含Lite/Pro版）",
    desc: "智力跃升，自主思考",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "最高约170张图片"],
    ],
    price: "¥19.00",
    original: "¥200",
  },
  {
    badge: "限时秒杀5折",
    title: "DeepSeek-V4-flash",
    desc: "思考融入工具调用，推理能力领先",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "约3300万Tokens"],
    ],
    price: "¥19.00",
    original: "¥200",
  },
]

const NEW_USER_PRODUCTS: Product[] = [
  {
    badge: "特惠5折",
    title: "豆包大模型2.0",
    desc: "多模态Agent智驭复杂任务",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "约4千万Tokens"],
    ],
    price: "¥100.00",
    original: "¥200",
    tags: ["新客专享", "仅一次购买机会"],
  },
  {
    badge: "特惠5折",
    title: "图像创作模型5.0（含Lite/Pro版）",
    desc: "智力跃升，自主思考",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "最高约900张图片"],
    ],
    price: "¥100.00",
    original: "¥200",
  },
  {
    badge: "特惠5折",
    title: "DeepSeek-V4-flash",
    desc: "思考融入工具调用，推理能力领先",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "约175百万Tokens"],
    ],
    price: "¥100.00",
    original: "¥200",
  },
  {
    badge: "特惠5折",
    title: "豆包大模型2.0",
    desc: "多模态Agent智驭复杂任务",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "约6千万Tokens"],
    ],
    price: "¥100.00",
    original: "¥200",
  },
  {
    badge: "特惠5折",
    title: "图像创作模型5.0（含Lite/Pro版）",
    desc: "智力跃升，自主思考",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "最高约1260张图片"],
    ],
    price: "¥100.00",
    original: "¥200",
  },
  {
    badge: "特惠5折",
    title: "DeepSeek-V4-flash",
    desc: "思考融入工具调用，推理能力领先",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "约275百万Tokens"],
    ],
    price: "¥100.00",
    original: "¥200",
  },
]

const ALL_USER_PRODUCTS: Product[] = [
  {
    badge: "特惠98折",
    title: "节省计划月度钱包",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "无内置折扣系数"],
    ],
    price: "¥49.00",
    original: "¥50",
    tags: ["新老同享", "限购3次"],
  },
  {
    badge: "特惠98折",
    title: "节省计划月度钱包",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "无内置折扣系数"],
    ],
    price: "¥196.00",
    original: "¥200",
    tags: ["新老同享", "限购3次"],
  },
  {
    badge: "特惠98折",
    title: "节省计划月度钱包",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "无内置折扣系数"],
    ],
    price: "¥294.00",
    original: "¥300",
    tags: ["新老同享", "限购3次"],
  },
  {
    badge: "特惠98折",
    title: "节省计划月度钱包",
    meta: [
      ["形态", "递减包"],
      ["有效期", "1个月"],
      ["规格", "无内置折扣系数"],
    ],
    price: "¥490.00",
    original: "¥500",
    tags: ["新老同享", "限购3次"],
  },
]

type GuideStep = {
  step: string
  title: string
  desc: string
  cta: string
}

type GuideTab = {
  value: string
  label: string
  steps: GuideStep[]
}

const GUIDE_TABS: GuideTab[] = [
  {
    value: "prep",
    label: "01 资源准备",
    steps: [
      {
        step: "Step 1",
        title: "开通节省计划",
        desc: "根据业务所需，购买以上活动商品",
        cta: "优惠购买",
      },
      {
        step: "Step 2",
        title: "开通大模型",
        desc: "根据业务所需，开通相关大模型服务",
        cta: "前往开通",
      },
    ],
  },
  {
    value: "deploy",
    label: "02 部署服务",
    steps: [
      {
        step: "Step 1",
        title: "创建推理接入点",
        desc: "在火山方舟控制台创建推理接入点，配置模型与服务信息",
        cta: "前往创建",
      },
      {
        step: "Step 2",
        title: "部署服务实例",
        desc: "选择模型版本并部署服务实例，等待状态变为运行中",
        cta: "前往部署",
      },
    ],
  },
  {
    value: "balance",
    label: "03 余额查询",
    steps: [
      {
        step: "Step 1",
        title: "查看节省计划余额",
        desc: "进入费用中心-节省计划管理，查看剩余额度与有效期",
        cta: "前往查询",
      },
      {
        step: "Step 2",
        title: "查看抵扣明细",
        desc: "在抵扣明细页按模型、时间筛选每次调用的抵扣记录",
        cta: "查看明细",
      },
    ],
  },
]

type CoverageGroup = {
  label: string
  items: string[]
}

type CoverageItem = {
  key: string
  title: string
  desc: string
  groups: CoverageGroup[]
  className?: string
}

const COVERAGE_ITEMS: CoverageItem[] = [
  {
    key: "A",
    title: "A类产品",
    desc: "核心模型全场景覆盖",
    className: "border-blue-100 bg-blue-50/70",
    groups: [
      {
        label: "LLM",
        items: [
          "Doubao-Seed-2.1",
          "Doubao-Seed-2.0",
          "Doubao-Seed-evolving",
          "Doubao-smart-router",
          "Doubao-embedding",
          "Doubao-Seed-Translation",
        ],
      },
      {
        label: "视频图片",
        items: [
          "Doubao-Seedream-5.0-lite",
          "Doubao-Seedream-4.5",
          "Doubao-Seedance-1.0-pro",
        ],
      },
      {
        label: "音频生成",
        items: ["Doubao-音频生成-1.0"],
      },
      {
        label: "开发工具",
        items: ["Trae CN"],
      },
      {
        label: "知识管理",
        items: ["火山方舟大模型服务平台-知识库"],
      },
    ],
  },
  {
    key: "B",
    title: "B类产品",
    desc: "多模态与语音能力扩展",
    className: "border-indigo-100 bg-indigo-50/50",
    groups: [
      {
        label: "LLM",
        items: ["Doubao-Seed-Character"],
      },
      {
        label: "图片生成",
        items: [
          "Doubao-Seedream-5.0-pro",
          "Doubao-Seedream-4.0",
          "即梦AI-图片生成",
        ],
      },
      {
        label: "视频生成",
        items: [
          "Doubao-Seedance-pro-fast",
          "即梦AI-视频生成",
          "OmniHuman1.5",
        ],
      },
      {
        label: "语音模型",
        items: ["语音识别", "语音合成", "声音复刻", "实时语音", "语音播客"],
      },
    ],
  },
  {
    key: "C",
    title: "C类产品",
    desc: "生态模型与特惠资源",
    className: "border-cyan-100 bg-cyan-50/50",
    groups: [
      {
        label: "LLM",
        items: [
          "Doubao-Seed-特惠区",
          "Doubao-Seed-2.0/2.1-batch",
          "Doubao-Seed-2.0/2.1-KVcache",
          "DeepSeek",
          "Kimi",
          "GLM",
          "Lama3",
          "Mistral",
        ],
      },
      {
        label: "视频生成",
        items: ["Wan2.1"],
      },
    ],
  },
]

const FAQ_ITEMS = [
  {
    q: "节省计划递减包是什么？",
    a: "节省计划递减包是火山引擎推出的按量抵扣类优惠商品。购买后获得对应额度的模型调用资源包，在有效期内调用支持的大模型时，系统会自动按调用量从余额中抵扣，无需额外支付现金。",
  },
  {
    q: "可以抵扣的范围有哪些？",
    a: "支持抵扣 A、B、C 三类产品中列明的模型服务，覆盖 LLM、图片生成、视频生成、语音、音频、开发工具与知识管理等场景。Seedance 2.0 暂不支持抵扣。",
  },
  {
    q: "节省计划递减包与节省计划周期型的区别是什么？是否也有月保底承诺消费？",
    a: "递减包按额度使用，到期后未使用余额自动失效，没有月保底承诺消费；周期型按月承诺消费获得对应折扣。递减包更灵活，适合调用量不稳定或首次体验的用户。",
  },
  {
    q: "开通后怎么使用？",
    a: "在火山引擎控制台开通对应大模型服务并获取 API Key 后，正常发起 API 调用即可。系统会在费用中心-节省计划管理-递减包页面展示余额与抵扣明细。",
  },
  {
    q: "既然是所有模型都可以抵扣，为什么售卖卡片有单模型资源规格预估？",
    a: "预估规格按该模型常见输入输出 Token 长度换算而来，方便不同模型间直观比较额度。实际可调用次数取决于单次请求的 Token 消耗。",
  },
  {
    q: "如何查询我的节省计划递减包余额及抵扣明细？",
    a: "登录火山引擎控制台，进入费用中心-节省计划管理，选择递减包即可查看余额、有效期、调用明细与抵扣记录，也支持导出。",
  },
  {
    q: "如何查询节省计划月度钱包A、B、C三类产品的范围与抵扣系数？",
    a: "在控制台费用中心-节省计划管理页面查看商品详情，或参考本页可抵扣模型覆盖表。A、B、C 三类产品的范围与抵扣系数会随产品更新动态调整。",
  },
]

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible")
          observer.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function HeroScene() {
  const cubeFaces = [
    "rotateY(0deg) translateZ(72px)",
    "rotateY(180deg) translateZ(72px)",
    "rotateY(90deg) translateZ(72px)",
    "rotateY(-90deg) translateZ(72px)",
    "rotateX(90deg) translateZ(72px)",
    "rotateX(-90deg) translateZ(72px)",
  ]

  return (
    <div
      className="relative hidden h-[300px] w-[340px] shrink-0 sm:block lg:w-[420px]"
      aria-hidden
    >
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-200/70 via-sky-100/60 to-transparent blur-2xl" />

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 [perspective:900px]">
        <div className="relative mx-auto h-36 w-36 animate-cube-spin [transform-style:preserve-3d]">
          {cubeFaces.map((transform) => (
            <div
              key={transform}
              className="absolute inset-0 rounded-xl border border-white/70 bg-gradient-to-br from-blue-500/80 to-blue-400/70 shadow-float backdrop-blur-sm"
              style={{ transform }}
            />
          ))}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-xl border border-white/80 bg-blue-500/90 shadow-float backdrop-blur-sm"
            style={{ transform: "translateZ(72px)" }}
          >
            <Sparkles className="h-9 w-9 text-white" />
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-4 w-32 animate-float rounded-xl bg-white p-3 shadow-float [transform:rotate(4deg)]">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded bg-tag px-1.5 py-0.5 text-[10px] font-bold text-white">
            SALE
          </span>
          <Gift className="h-4 w-4 text-blue-600" />
        </div>
        <p className="text-sm font-bold text-ink">大模型特惠</p>
        <p className="mt-0.5 text-xs text-gray-500">低至 5 折</p>
      </div>

      <div
        className="absolute bottom-9 left-1 flex animate-float items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-gray-700 shadow-card backdrop-blur [transform:rotate(-2deg)]"
        style={{ animationDelay: "0.8s" }}
      >
        <Zap className="h-4 w-4 text-tag" />
        约800万 Tokens
      </div>

      <div
        className="absolute bottom-28 -left-1 flex animate-float items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-gray-700 shadow-card backdrop-blur"
        style={{ animationDelay: "1.6s" }}
      >
        <Clock className="h-4 w-4 text-blue-600" />
        每日限量秒杀
      </div>

      <Sparkles className="absolute right-16 top-6 h-5 w-5 animate-pulse text-blue-300" />
      <Sparkles className="absolute bottom-6 right-8 h-4 w-4 animate-pulse text-blue-200" />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-divider bg-gradient-to-br from-white via-blue-50/50 to-white">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-blue-100" />
      <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-52 rounded-full border border-blue-100/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-12 sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:py-14">
        <div className="max-w-xl text-center lg:text-left">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-blue-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-price" />
              新客专享 · 每日限量 · 低至5折
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              大模型特惠活动
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-3 text-lg text-gray-600">
              19元抢800万Tokens，低至5折
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("seckill")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                立即抢购
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("guide")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                查看使用指引
              </Button>
            </div>
          </Reveal>
        </div>
        <HeroScene />
      </div>
    </section>
  )
}

function SectionTabs({
  active,
  onSelect,
}: {
  active: string
  onSelect: (id: string) => void
}) {
  return (
    <div className="sticky top-16 z-40 border-b border-divider bg-white/95 shadow-[0_1px_0_rgba(255,255,255,0.8)] backdrop-blur">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 no-scrollbar">
        <div className="flex min-w-max gap-3 lg:grid lg:min-w-0 lg:grid-cols-6">
          {NAV_SECTIONS.map((section) => {
            const selected = active === section.id
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelect(section.id)}
                className={cn(
                  "w-44 rounded-lg border px-3.5 py-3 text-left transition-all duration-200 lg:w-auto",
                  selected
                    ? "border-blue-600 bg-blue-600 text-white shadow-md"
                    : "border-gray-200 bg-gray-50 text-ink hover:border-blue-200 hover:bg-blue-50/70",
                )}
              >
                <span
                  className={cn(
                    "block text-sm font-semibold leading-5",
                    selected ? "text-white" : "text-gray-900",
                  )}
                >
                  {section.label}
                </span>
                <span
                  className={cn(
                    "mt-0.5 block truncate text-xs leading-4",
                    selected ? "text-blue-100" : "text-gray-500",
                  )}
                >
                  {section.sub}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="mb-9 text-center">
      <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-500">
          {subtitle}
        </p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}

function GuideInfoCard() {
  const leftItems = [
    {
      label: "适用人群",
      text: "适用有大模型调用需求的客户群体，本商品不支持豆包APP使用",
    },
    {
      label: "特殊说明",
      text: "本商品只有首购优惠，无内置折扣",
    },
    {
      label: "特殊说明",
      text: "大模型调用需使用API或在火山引擎控制台使用，请谨慎购买",
    },
  ]
  const rightItems = [
    {
      label: "方案优势",
      text: "购买商品成功后，开通相关模型，自动跨模型抵扣",
    },
    {
      label: "抵扣查询",
      text: "成功调用大模型后，可在控制台费用中心节省计划管理处进行抵扣查询",
    },
  ]

  return (
    <div className="grid gap-x-10 gap-y-6 rounded-xl border border-divider bg-white p-6 shadow-card lg:grid-cols-2 lg:p-8">
      <div className="space-y-5">
        {leftItems.map((item) => (
          <div key={item.label + item.text} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {item.label}
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-5 lg:border-l lg:border-divider lg:pl-10">
        {rightItems.map((item) => (
          <div key={item.label + item.text} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {item.label}
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StepCard({ step }: { step: GuideStep }) {
  return (
    <Card className="relative h-full overflow-hidden p-6">
      <span className="absolute right-0 top-0 rounded-bl-lg bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">
        必选
      </span>
      <div className="mb-5 flex items-center justify-between gap-3 pr-12">
        <span className="text-sm font-bold text-blue-600">{step.step}</span>
      </div>
      <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
      <p className="mt-2 text-sm leading-6 text-gray-500">{step.desc}</p>
      <Button size="full" className="mt-6 py-3">
        {step.cta}
      </Button>
    </Card>
  )
}

function CoverageCard({ item }: { item: CoverageItem }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl border p-6",
        item.className,
      )}
    >
      <div className="mb-5">
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
      </div>
      <div className="space-y-5">
        {item.groups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-sm font-semibold text-gray-900">
              {group.label}
            </p>
            <ul className="space-y-1.5">
              {group.items.map((name) => (
                <li key={name} className="text-sm leading-5 text-gray-600">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function Community() {
  return (
    <section className="border-t border-divider bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="大模型技术交流"
            subtitle="飞书扫码加入火山引擎官方大模型交流群，与大模型技术爱好者交流互动，了解最新产品信息"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            {["大模型交流群", "养虾交流群"].map((label) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-divider bg-page p-6 text-center"
              >
                <div className="relative">
                  <MiniQR />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                    <ScanLine className="h-3.5 w-3.5" />
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  {label}
                </div>
                <p className="mt-1.5 text-xs text-gray-500">
                  飞书扫码加入，与官方技术人员在线交流
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function App() {
  const [active, setActive] = useState(NAV_SECTIONS[0].id)

  useEffect(() => {
    const ids = NAV_SECTIONS.map((section) => section.id)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleTabSelect = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <>
      <Seo
        title="火山引擎大模型特惠活动 - 高保真复刻"
        description="19元抢800万Tokens，大模型特惠活动低至5折，覆盖秒杀专区、新客专享、新老同享与可抵扣模型覆盖表。"
      />
      <Hero />
      <SectionTabs active={active} onSelect={handleTabSelect} />
        <section id="seckill" className="scroll-mt-36">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <Reveal>
              <SectionHeader
                title="秒杀专区"
                subtitle={
                  <>
                    新客独享优惠，每日限量5折秒杀，个企同享，售完为止。购买成功后需开通相关大模型服务，自动抵扣递减包金额
                    <a
                      href="#"
                      className="ml-1 font-semibold text-blue-600 hover:text-blue-700"
                    >
                      活动规则 &gt;&gt;
                    </a>
                  </>
                }
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SECKILL_PRODUCTS.map((product, index) => (
                <Reveal key={product.title} delay={index * 100}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="new-user" className="scroll-mt-36 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <Reveal>
              <SectionHeader
                title="新客专享"
                subtitle={
                  <>
                    新用户享5折资源特惠。购买成功后需开通相关大模型服务，自动抵扣递减包金额
                    <a
                      href="#"
                      className="ml-1 font-semibold text-blue-600 hover:text-blue-700"
                    >
                      活动规则 &gt;&gt;
                    </a>
                  </>
                }
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {NEW_USER_PRODUCTS.map((product, index) => (
                <Reveal key={product.title + product.meta[2][1]} delay={(index % 3) * 100}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="all-user" className="scroll-mt-36">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <Reveal>
              <SectionHeader
                title="新老同享"
                subtitle={
                  <>
                    新老同享最新大模型优惠。购买成功后需开通相关大模型服务，自动抵扣递减包金额
                    <a
                      href="#"
                      className="ml-1 font-semibold text-blue-600 hover:text-blue-700"
                    >
                      活动规则 &gt;&gt;
                    </a>
                  </>
                }
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ALL_USER_PRODUCTS.map((product, index) => (
                <Reveal key={product.price} delay={index * 100}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="guide" className="scroll-mt-36 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <Reveal>
              <SectionHeader
                title="商品使用指引"
                action={
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    查看完整教程 &gt;
                  </a>
                }
              />
            </Reveal>
            <Reveal delay={100}>
              <GuideInfoCard />
            </Reveal>
            <Reveal delay={180}>
              <Tabs defaultValue="prep" className="mt-10">
                <TabsList className="w-full justify-start sm:w-auto">
                  {GUIDE_TABS.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {GUIDE_TABS.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value}>
                    <div className="grid gap-6 md:grid-cols-2">
                      {tab.steps.map((step, index) => (
                        <Reveal key={step.step} delay={index * 100}>
                          <StepCard step={step} />
                        </Reveal>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Reveal>
          </div>
        </section>

        <section id="coverage" className="scroll-mt-36">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <Reveal>
              <SectionHeader
                title="可抵扣模型覆盖表"
                subtitle="递减包不支持抵扣Seedance2.0，除首购折扣权益外，商品按照原价抵扣递减包金额"
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              {COVERAGE_ITEMS.map((item, index) => (
                <Reveal key={item.key} delay={index * 100}>
                  <CoverageCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-36 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <Reveal>
              <SectionHeader
                title="常见问题"
                action={
                  <div className="inline-flex items-center gap-1 border-b-2 border-blue-600 pb-1 text-sm font-semibold text-blue-600">
                    <HelpCircle className="h-4 w-4" />
                    常见问题答疑
                  </div>
                }
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mx-auto max-w-4xl rounded-xl border border-divider bg-white px-5 py-2 shadow-card sm:px-8">
                <Accordion type="single" collapsible>
                  {FAQ_ITEMS.map((item, index) => (
                    <AccordionItem
                      key={item.q}
                      value={`faq-${index + 1}`}
                      className="last:border-b-0"
                    >
                      <AccordionTrigger className="text-sm sm:text-base">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </section>
      <Community />
    </>
  )
}

export default App
