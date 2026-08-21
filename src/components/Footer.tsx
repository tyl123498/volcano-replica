import {
  Headset,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react"
import { Logo } from "@/components/Header"
import { MiniQR } from "@/components/MiniQR"

const FOOTER_LINK_GROUPS = [
  {
    title: "关于火山引擎",
    links: ["公司简介", "加入我们", "新闻动态", "联系我们", "法律声明"],
  },
  {
    title: "产品",
    links: [
      "云服务器",
      "GPU云服务器",
      "机器学习平台",
      "客户数据平台 VeCDP",
      "飞连",
      "视频直播",
      "全部产品",
    ],
  },
  {
    title: "解决方案",
    links: [
      "汽车行业",
      "金融行业",
      "文娱行业",
      "医疗健康行业",
      "传媒行业",
      "智慧文旅",
      "大消费",
    ],
  },
  {
    title: "服务与支持",
    links: ["备案服务", "服务咨询", "建议与反馈", "廉洁舞弊举报", "举报平台"],
  },
]

const FOOTER_SERVICES = [
  {
    icon: Headset,
    title: "全天候售后服务",
    desc: "7x24小时专业工程师品质服务",
  },
  {
    icon: Zap,
    title: "极速服务应答",
    desc: "秒级应答为业务保驾护航",
  },
  {
    icon: HeartHandshake,
    title: "客户价值为先",
    desc: "从服务价值到创造客户价值",
  },
  {
    icon: ShieldCheck,
    title: "全方位安全保障",
    desc: "打造一朵“透明可信”的云",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-divider bg-page">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-b border-divider pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_SERVICES.map((service) => (
            <div key={service.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <service.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {service.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-3 text-xs leading-5 text-gray-500">
              字节跳动旗下云服务平台，提供从云基础设施到 AI
              大模型的一站式服务。
            </p>
          </div>
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="mb-4 text-sm font-semibold text-gray-900">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs leading-5 text-gray-500 transition-colors hover:text-blue-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="mb-4 text-sm font-semibold text-gray-900">联系我们</p>
            <ul className="space-y-3 text-xs leading-5 text-gray-500">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
                <span>
                  业务咨询 service@volcengine.com
                  <br />
                  市场合作 marketing@volcengine.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                电话 400-034-7888
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
                北京市海淀区北三环西路甲18号院大钟寺广场1号楼
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 border-t border-divider pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-400">
            Copyright © 2025 火山引擎 版权所有 · 本页面为界面复刻演示
          </p>
          <div className="flex gap-5">
            {["火山引擎公众号", "火山引擎抖音号", "火山引擎视频号"].map(
              (label) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <MiniQR size={64} />
                  <span className="text-xs text-gray-500">{label}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
