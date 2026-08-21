import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { path: "/", label: "优惠活动" },
  { path: "/models", label: "大模型" },
  { path: "/products", label: "产品" },
  { path: "/solutions", label: "解决方案" },
  { path: "/pricing", label: "定价" },
]

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <path d="M12 2.5 21 20H3L12 2.5Z" fill="#2563EB" />
        <path d="M12 9 17.5 20h-11L12 9Z" fill="#93C5FD" />
      </svg>
      <span
        className={cn(
          "text-lg font-bold tracking-normal",
          light ? "text-white" : "text-ink",
        )}
      >
        火山引擎
      </span>
    </Link>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-divider bg-white/95 backdrop-blur transition-shadow duration-300",
        scrolled && "shadow-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="ml-2 hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors",
                  active
                    ? "font-semibold text-blue-600"
                    : "font-normal text-gray-600 hover:text-blue-600",
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <a
            href="#"
            className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-normal text-gray-600 transition-colors hover:text-blue-600"
          >
            更多
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="火山方舟 Coding Plan"
              className="h-9 w-56 rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:w-64 focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <a
            href="#"
            className="hidden whitespace-nowrap px-2.5 text-sm text-gray-600 hover:text-blue-600 md:inline"
          >
            文档
          </a>
          <Button size="sm" className="hidden sm:inline-flex">
            控制台
          </Button>
          <button
            type="button"
            aria-label="用户中心"
            className="relative h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-semibold text-white shadow-sm"
          >
            火
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-price px-1 text-[10px] font-semibold text-white">
              0
            </span>
          </button>
          <button
            type="button"
            aria-label="菜单"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
