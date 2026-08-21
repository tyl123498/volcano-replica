import React, { lazy } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "@/components/Layout"
import "./index.css"

const App = lazy(() => import("./App"))
const Models = lazy(() => import("@/pages/Models"))
const Products = lazy(() => import("@/pages/Products"))
const Solutions = lazy(() => import("@/pages/Solutions"))
const Pricing = lazy(() => import("@/pages/Pricing"))

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/models" element={<Models />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
