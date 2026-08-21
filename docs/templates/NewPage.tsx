import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Reveal, SectionHeader } from "@/components/Section"
import { Seo } from "@/components/Seo"

const FEATURES = [
  {
    title: "卖点一",
    desc: "一句话说明这个卖点解决的问题",
  },
  {
    title: "卖点二",
    desc: "一句话说明这个卖点带来的价值",
  },
  {
    title: "卖点三",
    desc: "一句话说明为什么选择我们",
  },
]

export default function NewPage() {
  return (
    <>
      <Seo
        title="新页面 - 站点名"
        description="在这里写页面描述，包含关键词与转化点。"
        path="/new-page"
      />

      <section className="relative overflow-hidden border-b border-divider bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              新页面标题
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-gray-600">
              一句话副标题，说明目标用户能获得什么。
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg">
                立即体验
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                了解更多
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <SectionHeader
              title="核心卖点"
              subtitle="用三个卡片讲清楚产品价值"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 100}>
                <Card className="h-full p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {feature.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
