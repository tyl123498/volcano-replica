# SaaS 落地页生产线交接文档

## 1. 这套生产线是什么

这是一套已经跑通的 SaaS 落地页生产线，从代码、样式、多页面路由、SEO、性能优化到 Cloudflare Pages 部署，全部封装成了可复用的模板。

当前项目 `D:\火山界面复刻` 就是这条生产线的首个产品：一个高保真火山引擎活动页，并扩展出了大模型、产品、解决方案、定价四个页面。

## 2. 技术栈

| 层 | 选型 |
| --- | --- |
| 构建 | Vite 6 |
| 框架 | React 18 + TypeScript |
| 样式 | Tailwind CSS 3 |
| 路由 | React Router 6 |
| 图标 | Lucide React |
| 基础组件 | Radix UI（Tabs / Accordion）+ 自建 shadcn 风格组件 |
| 托管 | Cloudflare Pages |
| 部署 | Wrangler CLI |

## 3. 目录结构

```text
D:\火山界面复刻
├─ index.html                    静态入口 + 默认 SEO meta
├─ package.json                  脚本与依赖
├─ public/
│  └─ _redirects                 SPA 回退规则（Cloudflare Pages 必需）
├─ src/
│  ├─ main.tsx                   路由入口（懒加载页面）
│  ├─ App.tsx                    首页：优惠活动
│  ├─ components/
│  │  ├─ Header.tsx              全局导航（含路由高亮）
│  │  ├─ Footer.tsx              全局页脚
│  │  ├─ Layout.tsx              页面骨架 + 切换动画 + 加载态
│  │  ├─ Section.tsx             SectionHeader + Reveal 滚动动画
│  │  ├─ ProductCard.tsx         商品卡片（可复用）
│  │  ├─ MiniQR.tsx              二维码占位
│  │  ├─ Seo.tsx                 title / description / OG 标签管理
│  │  └─ ui/                     Button / Card / Badge / Tabs / Accordion
│  ├─ pages/
│  │  ├─ Models.tsx              大模型页面
│  │  ├─ Products.tsx            产品页面
│  │  ├─ Solutions.tsx           解决方案页面
│  │  └─ Pricing.tsx             定价页面
│  └─ data/
│     └─ pricing.ts              定价配置数据
```

## 4. 核心复用模块

### Layout

`src/components/Layout.tsx` 是全局骨架，统一挂载 Header、Footer、路由出口：

- 路由切换时自动回到页面顶部。
- 切换时播放淡入上移动画。
- 懒加载页面期间显示加载动画。

### Header

`src/components/Header.tsx` 提供：

- 站点 Logo 与主导航。
- 当前路由高亮（`useLocation` 自动判断）。
- 搜索框、文档、控制台、用户入口占位。

新增导航项时维护 `NAV_ITEMS` 数组即可。

### Section

`src/components/Section.tsx` 提供两个高频组件：

- `SectionHeader`：区块标题、副标题、右上角操作位。
- `Reveal`：滚动进入视口时的淡入上移动画。

### ProductCard

`src/components/ProductCard.tsx` 是商品/套餐卡片的通用实现，支持：

- 角标、标题、描述、规格列表。
- 价格与刊例价。
- 标签与通栏按钮。

### Seo

`src/components/Seo.tsx` 负责每个页面的：

- `<title>`
- `<meta name="description">`
- Open Graph 标签（`og:title` / `og:description` / `og:url` / `og:type`）

页面组件里渲染一次即可：

```tsx
<Seo
  title="大模型 - 火山引擎"
  description="一站式接入豆包、DeepSeek 等主流大模型"
  path="/models"
/>
```

### 数据配置

需要“真实化”的数据统一放在 `src/data/`，例如 `pricing.ts`：

```ts
export const PRICING_RATES = {
  tokenCostPerWan: 0.02,
  gpuHourCost: 2.6,
}
```

页面从配置读取，后续接真实 API 时只需替换这一处。

## 5. 新增一个页面

1. 复制 `docs/templates/NewPage.tsx` 到 `src/pages/YourPage.tsx`。
2. 修改标题、描述、区块内容。
3. 在 `src/main.tsx` 注册懒加载路由：

```tsx
const YourPage = lazy(() => import("@/pages/YourPage"))

<Route path="/your-page" element={<YourPage />} />
```

4. 在 `src/components/Header.tsx` 的 `NAV_ITEMS` 中增加导航项。
5. 页面顶部加 `<Seo ... />`。
6. 跑 `npm run build`，然后 `npm run deploy`。

## 6. 修改品牌视觉

- 全局颜色：`tailwind.config.js` 的 `theme.extend.colors`。
- 全局样式：`src/index.css`。
- 页面级样式：直接改页面 Tailwind 类名。
- 卡片 / 按钮 / 标签：改 `src/components/ui/*` 下的基础组件。

## 7. 本地开发

```bash
npm install
npm run dev
```

浏览器打开 `http://127.0.0.1:5173/`。

## 8. 构建与部署

### 生产构建

```bash
npm run build
```

产物输出到 `dist/`。

### 首次部署到 Cloudflare Pages

```bash
npx --yes wrangler@latest login
npx --yes wrangler@latest pages project create 你的项目名 --production-branch main
```

然后把 `package.json` 里 `deploy` 脚本中的项目名改成你的项目名。

### 日常部署

```bash
npm run deploy
```

部署后主地址 `https://你的项目名.pages.dev/` 自动更新到最新版本。

### SPA 重定向

`public/_redirects` 已内置：

```text
/*    /index.html   200
```

确保 React Router 的子路由（如 `/models`）直接刷新不 404。

## 9. 绑定自定义域名

1. 在 Cloudflare Pages 项目里添加自定义域名。
2. 把域名 DNS 切到 Cloudflare Nameserver（阿里云域名管理里改）。
3. 等待 DNS 生效后，Cloudflare 自动配 CNAME 和证书。
4. 如 DNS 中有旧 A 记录，切到 Cloudflare 后删除，避免冲突。

## 10. SEO 规范

- 每个页面必须使用 `Seo` 组件。
- `index.html` 中保留站点级默认 description / OG 标签。
- 标题建议格式：`页面名 - 站点名`。
- 描述控制在 80-120 字，包含关键词与转化点。

## 11. 上线检查清单

- [ ] `npm run build` 通过
- [ ] 桌面 / 手机宽度无横向滚动
- [ ] 浏览器控制台无报错
- [ ] 所有路由返回 200
- [ ] 每个页面有 title / description / OG 标签
- [ ] `_redirects` 已随构建发布
- [ ] 自定义域名 DNS 已生效
- [ ] 线上页面与本地构建一致

## 12. 交接信息

| 项目 | 值 |
| --- | --- |
| 本地项目 | `D:\火山界面复刻` |
| Cloudflare Pages 项目 | `volcano-replica` |
| GitHub 模板仓库 | https://github.com/tyl123498/volcano-replica（私有模板） |
| 线上地址 | https://volcano-replica.pages.dev/ |
| 自定义域名 | `tyl2026.xyz`（DNS 生效中） |
| 常用部署命令 | `npm run deploy` |
| Cloudflare 授权 | 已保存在本机，无需重复登录 |

后续新项目可以直接在 GitHub 上点 “Use this template” 创建，或复制本目录，然后改品牌数据、页面内容、项目名和域名，即可快速上线一套新的 SaaS 落地页。
