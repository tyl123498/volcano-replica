import { useState, type ComponentType } from "react"
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  FileText,
  Image,
  Languages,
  Mic,
  Sparkles,
  Video,
  Wand2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Reveal, SectionHeader } from "@/components/Section"
import { Seo } from "@/components/Seo"

const CATEGORIES = [
  "全部",
  "语言模型",
  "图像模型",
  "语音模型",
  "视频模型",
  "多模态",
]

type ModelItem = {
  name: string
  desc: string
  tags: string[]
  category: string
  icon: ComponentType<{ className?: string }>
}

const MODELS: ModelItem[] = [
  {
    name: "豆包大模型2.0",
    desc: "多模态 Agent 智驭复杂任务，支持工具调用与长文本理解",
    tags: ["多模态", "256K上下文"],
    category: "多模态",
    icon: Bot,
  },
  {
    name: "DeepSeek-V4-flash",
    desc: "思考融入工具调用，推理能力领先，性价比高",
    tags: ["推理", "工具调用"],
    category: "语言模型",
    icon: BrainCircuit,
  },
  {
    name: "图像创作模型5.0",
    desc: "智力跃升，自主思考，支持精细画面控制",
    tags: ["图像生成"],
    category: "图像模型",
    icon: Image,
  },
  {
    name: "语音合成大模型2.0",
    desc: "高质量中文语音合成，情感自然，支持多音色",
    tags: ["语音合成"],
    category: "语音模型",
    icon: Mic,
  },
  {
    name: "即梦AI视频生成",
    desc: "Seedance 系列视频生成，创意表达更自由",
    tags: ["视频生成"],
    category: "视频模型",
    icon: Video,
  },
  {
    name: "Doubao-Seedream-5.0",
    desc: "从文生图到图生图的一体化视觉创作能力",
    tags: ["图像生成", "编辑"],
    category: "图像模型",
    icon: Wand2,
  },
  {
    name: "豆包Embedding",
    desc: "高质量文本向量化，支撑检索与知识库场景",
    tags: ["Embedding"],
    category: "语言模型",
    icon: FileText,
  },
  {
    name: "语音识别2.0",
    desc: "高准确率中英文语音识别，支持实时流式转写",
    tags: ["语音识别"],
    category: "语音模型",
    icon: Languages,
  },
]

const COMPARISON_ROWS = [
  ["豆包大模型2.0", "256K", "文本 / 图片 / 视频 / 音频", "按 Token 计费"],
  ["DeepSeek-V4-flash", "128K", "文本 / 工具调用", "按 Token 计费"],
  ["图像创作模型5.0", "-", "图片生成 / 编辑", "按张数计费"],
  ["语音合成大模型2.0", "32K", "文本转语音", "按字符计费"],
  ["即梦AI视频生成", "-", "视频生成", "按时长计费"],
  ["豆包Embedding", "8K", "文本向量", "按 Token 计费"],
]

export default function Models() {
  const [active, setActive] = useState("全部")

  const visibleModels =
    active === "全部" ? MODELS : MODELS.filter((m) => m.category === active)

  return (
    <>
      <Seo
        title="大模型 - 火山引擎"
        description="火山引擎大模型平台，一站式接入豆包、DeepSeek 等主流大模型，覆盖语言、图像、语音、视频与多模态能力。"
        path="/models"
      />
      <section className="relative overflow-hidden border-b border-divider bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-blue-600 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              火山方舟 · 一站式大模型平台
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              火山引擎大模型平台
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-lg leading-7 text-gray-600">
              一站式接入豆包、DeepSeek 等主流大模型，开箱即用，灵活支撑你的 AI
              应用。
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg">
                立即体验
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                查看文档
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <SectionHeader
              title="模型广场"
              subtitle="覆盖语言、图像、语音、视频与多模态能力，按场景选择最合适的模型"
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
            {visibleModels.map((model, index) => (
              <Reveal key={model.name} delay={(index % 4) * 80}>
                <Card className="group h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-hover">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <model.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {model.name}
                  </h3>
                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                    {model.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {model.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="mt-6 w-full"
                  >
                    立即开通
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
              title="能力对比"
              subtitle="核心模型参数与计费方式速览，方便快速选型"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-xl border border-divider bg-white shadow-card">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="border-b border-divider bg-gray-50 text-gray-500">
                  <tr>
                    {["模型名称", "上下文长度", "支持模态", "计费方式"].map(
                      (head) => (
                        <th key={head} className="px-5 py-4 font-semibold">
                          {head}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
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
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-10 text-center shadow-hover sm:px-10 lg:flex-row lg:text-left">
              <div>
                <h2 className="text-2xl font-bold text-white lg:text-3xl">
                  开始构建你的 AI 应用
                </h2>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  免费开通，分钟级接入主流大模型能力
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                免费开通
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
