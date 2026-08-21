import { useState } from "react"
import {
  ArrowRight,
  Calculator,
  Check,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Reveal, SectionHeader } from "@/components/Section"
import { Seo } from "@/components/Seo"
import { COMPARE_ROWS, PLANS, PRICING_RATES } from "@/data/pricing"

export default function Pricing() {
  const [tokens, setTokens] = useState(200)
  const [hours, setHours] = useState(50)

  const estimate =
    Math.round(
      (tokens * PRICING_RATES.tokenCostPerWan +
        hours * PRICING_RATES.gpuHourCost) *
        100,
    ) / 100

  return (
    <>
      <Seo
        title="定价 - 火山引擎"
        description="火山引擎定价与套餐，按用量灵活计费，支持免费体验、标准版、企业版与专属定制。"
        path="/pricing"
      />
      <section className="relative overflow-hidden border-b border-divider bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              定价与套餐
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-gray-600">
              按用量灵活计费，起步免费，规模上量再选套餐
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 80}>
                <Card
                  className={cn(
                    "h-full p-6 transition-all duration-200 hover:-translate-y-1",
                    plan.highlight
                      ? "border-blue-600 shadow-hover"
                      : "hover:shadow-hover",
                  )}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    {plan.highlight && (
                      <Badge className="bg-blue-600 text-white">推荐</Badge>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-500">{plan.unit}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{plan.desc}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-divider pt-5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={cn("mt-6 w-full", !plan.highlight && "bg-gray-900")}
                  >
                    {plan.cta}
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
              title="费用预估"
              subtitle="拖动滑块估算每月模型调用成本"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto max-w-3xl rounded-xl border border-divider bg-page p-6 shadow-card sm:p-8">
              <div className="mb-6 flex items-center gap-2 text-blue-600">
                <Calculator className="h-5 w-5" />
                <span className="text-sm font-semibold">月度用量估算</span>
              </div>
              <p className="mb-6 text-xs text-gray-500">
                每万 Tokens ¥{PRICING_RATES.tokenCostPerWan} · GPU 算力 ¥
                {PRICING_RATES.gpuHourCost}/小时
              </p>
              <div className="space-y-7">
                <div>
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">
                      模型调用量
                    </span>
                    <span className="font-black text-gray-900">
                      {tokens} 万 Tokens
                    </span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={2000}
                    step={50}
                    value={tokens}
                    onChange={(event) => setTokens(Number(event.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
                <div>
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">
                      推理算力
                    </span>
                    <span className="font-black text-gray-900">{hours} 小时</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={500}
                    step={10}
                    value={hours}
                    onChange={(event) => setHours(Number(event.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
              </div>
              <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl bg-blue-600 p-5 text-white sm:flex-row">
                <div>
                  <p className="text-sm text-blue-100">预计每月费用</p>
                  <p className="mt-1 text-3xl font-black">约 ¥{estimate}</p>
                </div>
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                  获取正式报价
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <SectionHeader
              title="套餐对比"
              subtitle="核心能力逐项对比，按业务规模选择"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-xl border border-divider bg-white shadow-card">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="border-b border-divider bg-gray-50 text-gray-500">
                  <tr>
                    <th className="px-5 py-4 font-semibold">能力项</th>
                    {PLANS.map((plan) => (
                      <th key={plan.name} className="px-5 py-4 font-semibold">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-divider last:border-b-0"
                    >
                      {row.map((cell, index) => (
                        <td
                          key={cell + index}
                          className={cn(
                            "px-5 py-4",
                            index === 0
                              ? "font-semibold text-gray-900"
                              : "text-gray-600",
                          )}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4 text-tag" />
              实际费用以控制台账单为准，支持按量付费与包月套餐组合
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
