export type PricingRates = {
  tokenCostPerWan: number
  gpuHourCost: number
  freeDailyRequests: number
}

export const PRICING_RATES: PricingRates = {
  tokenCostPerWan: 0.02,
  gpuHourCost: 2.6,
  freeDailyRequests: 1000,
}

export type PricingPlan = {
  name: string
  price: string
  unit: string
  desc: string
  features: string[]
  cta: string
  highlight: boolean
}

export const PLANS: PricingPlan[] = [
  {
    name: "免费版",
    price: "¥0",
    unit: "/月",
    desc: "适合体验与轻量验证",
    features: ["基础模型 API 调用", "每天 1000 次免费请求", "社区支持"],
    cta: "免费开通",
    highlight: false,
  },
  {
    name: "标准版",
    price: "¥99",
    unit: "/月",
    desc: "适合中小规模业务",
    features: ["500 万 Tokens/月", "优先推理队列", "在线工单支持"],
    cta: "立即开通",
    highlight: true,
  },
  {
    name: "企业版",
    price: "¥999",
    unit: "/月",
    desc: "适合规模化生产环境",
    features: ["8000 万 Tokens/月", "专属推理实例", "1v1 技术支持"],
    cta: "联系销售",
    highlight: false,
  },
  {
    name: "专属版",
    price: "定制",
    unit: "",
    desc: "适合大型企业与定制需求",
    features: ["专属资源隔离", "私有化部署", "专属解决方案团队"],
    cta: "预约咨询",
    highlight: false,
  },
]

export const COMPARE_ROWS = [
  ["模型 API 调用", "基础模型", "全部模型", "全部模型", "全部模型"],
  ["免费请求额度", "1000 次/天", "无", "无", "无"],
  ["Tokens 额度", "1 万/天", "500 万/月", "8000 万/月", "按需"],
  ["推理队列", "共享", "优先", "专属", "专属隔离"],
  ["技术支持", "社区", "工单", "1v1", "专属团队"],
]
