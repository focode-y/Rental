# Rental

TryTry 大阪民宿代运营官网静态项目，支持多语言展示（简中 / 繁中 / 日语 / 英语），包含服务介绍、运营实绩、客户评价和线索表单。

## 项目特性

- 纯静态部署：`HTML + CSS + JavaScript`
- 多语言切换：前端内置 i18n 字典
- 动态数据区块：运营实绩、案例、评价由数据文件驱动
- 线索收集表单：基于 FormSubmit 转发到指定邮箱
- 响应式布局：适配桌面与移动端

## 目录结构

```text
Rental/
├─ index.html       # 页面结构与 SEO 元信息
├─ styles.css       # 全站样式与响应式规则
├─ script.js        # 多语言、交互、表单逻辑
├─ data.js          # 实绩数据、案例数据、评价数据
├─ image/           # 本地图片资源
├─ assets/          # 其他静态资源
└─ 使用说明.md       # 中文维护说明
```

## 本地运行

这是纯静态项目，直接双击 `index.html` 可预览。  
建议使用本地静态服务器运行（避免部分浏览器限制）：

```bash
# 任选其一
npx serve .
# 或
python -m http.server 8080
```

然后访问 `http://localhost:8080`（或命令提示端口）。

## 常用修改点

### 1. 修改表单接收邮箱

编辑 [script.js](./script.js)：

```js
const FORM_RECEIVER_EMAIL = "admin@trytry.jp";
```

### 2. 修改页面文案（多语言）

编辑 [script.js](./script.js) 中的 `i18n` 对象（`zh/hk/ja/en`）。

### 3. 修改运营实绩与案例图片

编辑 [data.js](./data.js) 中的 `window.PORTFOLIO_DATA`：

- `stats`：指标卡片
- `districts`：商圈数据
- `units`：案例卡片（含 `image`）
- `reviews`：客户评价

### 4. 修改样式与布局

编辑 [styles.css](./styles.css)：

- Hero 区：`.hero` / `.hero::before`
- 响应式规则：`@media (max-width: 920px)`、`@media (max-width: 768px)`

## 部署

可直接部署到任意静态托管平台，例如：

- GitHub Pages
- Netlify
- Vercel（静态站模式）

## 说明

- 项目当前未引入打包工具与依赖管理。
- 如需接入统计，请在 `script.js` 中配置 `GA_MEASUREMENT_ID`。
