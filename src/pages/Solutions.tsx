import { useState, type ComponentType } from "react"
import {
  ArrowRight,
  Car,
  CheckCircle2,
  Clapperboard,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Stethoscope,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Reveal, SectionHeader } from "@/components/Section"
import { Seo } from "@/components/Seo"

type Industry = {
  id: string
  name: string
  icon: ComponentType<{ className?: string }>
  desc: string
  cases: string[]
  outcome: string
}

const INDUSTRIES: Industry[] = [
  {
    id: "auto",
    name: "汽车",
    icon: Car,
    desc: "从智能座舱到营销转化，构建车企业务增长新引擎",
    cases: ["智能客服", "用户画像", "车机语音助手"],
    outcome: "人工客服接通率提升 35%，营销转化提升 22%",
  },
  {
    id: "finance",
    name: "金融",
    icon: Landmark,
    desc: "合规前提下的智能风控、营销与运营效率升级",
    cases: ["智能风控", "投顾助手", "反欺诈识别"],
    outcome: "风控审批效率提升 50%，欺诈拦截准确率 99.2%",
  },
  {
    id: "media",
    name: "文娱",
    icon: Clapperboard,
    desc: "内容生产、分发与互动的全链路智能化",
    cases: ["内容理解", "AI 创作", "互动推荐"],
    outcome: "内容生产效率提升 3 倍，推荐点击率提升 28%",
  },
  {
    id: "health",
    name: "医疗健康",
    icon: Stethoscope,
    desc: "医疗数据安全合规下的智能化服务升级",
    cases: ["病历结构化", "健康问答", "影像辅助"],
    outcome: "病历处理效率提升 60%，患者等待时间下降 30%",
  },
  {
    id: "retail",
    name: "零售消费",
    icon: ShoppingBag,
    desc: "从流量运营到私域增长的一体化解决方案",
    cases: ["智能选品", "会员运营", "供应链预测"],
    outcome: "库存周转率提升 25%，复购率提升 18%",
  },
  {
    id: "edu",
    name: "教育",
    icon: GraduationCap,
    desc: "个性化学习与教学质量提升的智能方案",
    cases: ["智能批改", "学情分析", "AI 助教"],
    outcome: "教师批改耗时降低 70%，学生留存提升 20%",
  },
]

const STEPS = [
  {
    step: "01",
    title: "业务诊断",
    desc: "梳理业务场景与数据现状，明确核心目标",
  },
  {
    step: "02",
    title: "方案设计",
    desc: "组合云、AI 与数据产品，输出落地方案",
  },
  {
    step: "03",
    title: "敏捷落地",
    desc: "分阶段上线，快速验证业务价值",
  },
  {
    step: "04",
    title: "持续优化",
    desc: "基于效果数据持续调优，放大投入产出",
  },
]

export default function Solutions() {
  const [active, setActive] = useState(INDUSTRIES[0].id)
  const industry = INDUSTRIES.find((item) => item.id === active) ?? INDUSTRIES[0]

  return (
    <>
      <Seo
        title="解决方案 - 火山引擎"
        description="火山引擎行业解决方案覆盖汽车、金融、文娱、医疗、零售与教育，提供从业务诊断到持续优化的落地路径。"
        path="/solutions"
      />
      <section className="relative overflow-hidden border-b border-divider bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              行业解决方案
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-gray-600">
              结合云、AI 与数据能力，为不同行业提供可落地的增长方案
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg">
                预约方案咨询
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all",
                  active === item.id
                    ? "border-blue-600 bg-blue-600 text-white shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-200 hover:bg-blue-50/60",
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                <span className="text-sm font-semibold">{item.name}</span>
              </button>
            ))}
          </div>

          <Reveal key={industry.id}>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
              <Card className="p-7">
                <h3 className="text-xl font-bold text-gray-900">
                  {industry.name}行业方案
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {industry.desc}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {industry.cases.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-divider bg-page p-4"
                    >
                      <p className="text-sm font-semibold text-gray-900">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50/70 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <p className="text-sm leading-6 text-gray-700">
                    {industry.outcome}
                  </p>
                </div>
              </Card>
              <div className="rounded-xl border border-divider bg-white p-7 shadow-card">
                <h3 className="text-lg font-bold text-gray-900">
                  为什么选择火山引擎
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
                  {[
                    "覆盖云、AI、数据全链路产品",
                    "行业专家与解决方案团队支持",
                    "按业务价值分阶段落地",
                    "完善的安全与合规保障",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">获取完整方案</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <SectionHeader
              title="落地路径"
              subtitle="从诊断到上线，四步走快速实现业务价值"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((item, index) => (
              <Reveal key={item.step} delay={index * 100}>
                <div className="h-full rounded-xl border border-divider bg-page p-6">
                  <span className="text-3xl font-black text-blue-600">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
