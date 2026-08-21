# SaaS 落地页生产线

基于 Vite + React + TypeScript + Tailwind CSS 的可复用 SaaS 落地页模板，内置多页路由、全局 Header/Footer、SEO、路由懒加载、页面过渡动画、响应式布局和 Cloudflare Pages 一键部署。

## 快速开始

```bash
npm install
npm run dev
```

本地开发地址：`http://127.0.0.1:5173/`

## 常用命令

```bash
npm run build      # 类型检查 + 生产构建
npm run preview    # 预览生产构建
npm run deploy     # 构建并部署到 Cloudflare Pages
```

## 目录结构

```text
src/
  components/      全局组件（Header/Footer/Layout/Section/ProductCard/Seo）
  components/ui/   UI 基础组件（Button/Card/Badge/Tabs/Accordion）
  pages/           页面（Home/Models/Products/Solutions/Pricing）
  data/            数据配置（定价费率等）
  App.tsx          首页（优惠活动）
  main.tsx         路由入口
public/
  _redirects       SPA 重定向规则
```

## 线上地址

https://volcano-replica.pages.dev/

详细交接文档见 [docs/SaaS落地页生产线交接文档.md](docs/SaaS落地页生产线交接文档.md)。

## 从 GitHub 模板创建新项目

1. 打开 https://github.com/tyl123498/volcano-replica
2. 点 “Use this template” -> “Create a new repository”
3. 克隆新仓库：`git clone <你的新仓库地址>`
4. 进入项目执行 `npm install`
5. 本地预览 `npm run dev`，发布上线 `npm run deploy`

部署前记得把 `package.json` 里 `deploy` 脚本中的 `volcano-replica` 换成你自己的 Pages 项目名。
