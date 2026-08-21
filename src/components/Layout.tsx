import { Suspense, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" />
    </div>
  )
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-4">
        <div key={pathname} className="page-transition">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
