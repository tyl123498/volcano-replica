import { useState, type ComponentType } from "react"
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  LineChart,
  Rocket,
  ShieldCheck,
  Video,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Reveal, SectionHeader } from "@/components/Section"
import { Seo } from "@/components/Seo"

const CATEGORIES = ["全部", "计算", "存储", "大数据", "AI", "音视频", "安全"]

type ProductItem = {
  name: string
  desc: string
  category: string
  icon: ComponentType<{ className?: string }>
  tag?: string
}

const PRODUCTS: ProductItem[] = [
  {
    name: "云服务器 ECS",
    desc: "弹性可扩展的计算资源，分钟级创建，按量付费",
    category: "计算",
    icon: Cloud,
  },
  {
    name: "GPU云服务器",
    desc: "高性能 GPU 实例，支撑模型训练与推理",
    category: "计算",
    icon: Cpu,
    tag: "热门",
  },
  {
    name: "对象存储 TOS",
    desc: "海量、安全、低成本的云端对象存储服务",
    category: "存储",
    icon: Database,
  },
  {
    name: "机器学习平台",
    desc: "一站式模型开发、训练、部署与运维",
    category: "AI",
    icon: BrainCircuit,
    tag: "推荐",
  },
  {
    name: "火山方舟",
    desc: "大模型服务平台，开箱即用主流模型 API",
    category: "AI",
    icon: Rocket,
  },
  {
    name: "视频直播",
    desc: "低延迟、高并发的音视频直播解决方案",
    category: "音视频",
    icon: Video,
  },
  {
    name: "飞连",
    desc: "零信任办公安全平台，统一身份与终端管控",
    category: "安全",
    icon: ShieldCheck,
  },
  {
    name: "客户数据平台 VeCDP",
    desc: "全链路客户数据采集、分析与智能运营",
    category: "大数据",
    icon: LineChart,
  },
]

const SCENARIOS = [
  {
    title: "AI 应用开发",
    desc: "从模型接入到推理部署，覆盖完整 AI 应用链路",
    points: ["大模型 API", "GPU 推理", "知识库检索"],
  },
  {
    title: "数据驱动增长",
    desc: "打通数据采集、加工、分析与应用闭环",
    points: ["实时数仓", "数据可视化", "用户画像"],
  },
  {
    title: "音视频互动",
    desc: "为直播、会议与内容平台提供稳定音视频底座",
    points: ["低延迟推流", "智能转码", "内容审核"],
  },
]

export default function Products() {
  const [active, setActive] = useState("全部")

  const visibleProducts =
    active === "全部" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)

  return (
    <>
      <Seo
        title="产品 - 火山引擎"
        description="火山引擎产品矩阵覆盖计算、存储、大数据、AI、音视频与安全，支持按业务场景组合使用。"
        path="/products"
      />
      <section className="relative overflow-hidden border-b border-divider bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              产品与服务体系
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-gray-600">
              覆盖计算、存储、大数据、AI 与音视频的云产品矩阵
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg">
                查看全部产品
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                预约咨询
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <SectionHeader
              title="全产品矩阵"
              subtitle="按业务需求快速定位产品，支持组合使用"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    active === category
                      ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                      : "border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:text-blue-600",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <Reveal key={product.name} delay={(index % 4) * 80}>
                <Card className="group h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-hover">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <product.icon className="h-5 w-5" />
                    </span>
                    {product.tag && (
                      <Badge className="bg-tag text-white">{product.tag}</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {product.desc}
                  </p>
                  <Button variant="outline" className="mt-6 w-full">
                    了解详情
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <SectionHeader
              title="场景化组合"
              subtitle="常见业务场景下的产品组合建议"
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {SCENARIOS.map((scenario, index) => (
              <Reveal key={scenario.title} delay={index * 100}>
                <div className="h-full rounded-xl border border-divider bg-page p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {scenario.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {scenario.desc}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {scenario.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
