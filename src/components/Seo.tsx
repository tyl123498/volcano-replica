import { useEffect } from "react"

const SITE_NAME = "火山引擎"
const BASE_URL = "https://volcano-replica.pages.dev"

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  )
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

export function Seo({
  title,
  description,
  path = "/",
}: {
  title: string
  description: string
  path?: string
}) {
  useEffect(() => {
    document.title = title
    setMeta("name", "description", description)
    setMeta("property", "og:title", title)
    setMeta("property", "og:description", description)
    setMeta("property", "og:type", "website")
    setMeta("property", "og:url", `${BASE_URL}${path}`)
    setMeta("property", "og:site_name", SITE_NAME)
    setMeta("name", "twitter:card", "summary")
  }, [title, description, path])

  return null
}
