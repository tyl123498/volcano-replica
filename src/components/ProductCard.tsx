import { Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export type Product = {
  badge: string
  title: string
  desc?: string
  meta: [string, string][]
  price: string
  original: string
  tags?: string[]
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-hover">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-4">
          <Badge className="bg-tag text-white">{product.badge}</Badge>
        </div>
        <h3 className="text-xl font-bold leading-snug text-gray-900">
          {product.title}
        </h3>
        {product.desc && (
          <p className="mt-1.5 text-sm leading-5 text-gray-500">
            {product.desc}
          </p>
        )}
        <dl className="mt-4 space-y-2.5 border-t border-divider pt-4 text-sm">
          {product.meta.map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-3">
              <dt className="shrink-0 text-gray-400">{label}</dt>
              <dd className="truncate text-right font-medium text-gray-700">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        {product.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge
                key={tag}
                variant={tag === "新客专享" ? "default" : "outline"}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="mt-6 space-y-1.5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-black leading-none text-price">
              {product.price}
            </span>
            <span className="text-xs text-gray-500">/元</span>
          </div>
          <div className="text-xs text-gray-400">
            刊例价
            <Info className="ml-0.5 inline h-3 w-3 text-gray-300" />
            ：
            <span className="line-through">{product.original}/元</span>
          </div>
        </div>
        <div className="mt-auto pt-6">
          <Button size="full">立即抢购</Button>
        </div>
      </CardContent>
    </Card>
  )
}
