const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const FORM_RECEIVER_EMAIL = "xiaoyawang582@gmail.com";
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const i18n = {
  zh: {
    nav_services: "服务", nav_advantage: "优势", nav_pricing: "价格", nav_process: "流程", nav_faq: "FAQ", nav_cta: "预约咨询",
    hero_title: "大阪民宿代运营、合规运营<br/>收益最大化一站式服务", hero_sub: "我们只做大阪。围绕法令合规、平台运营、保洁品控、财务复盘四个模块，为海外业主提供可执行、可追踪、可交付的民宿经营方案。", hero_cta_1: "获取大阪方案", hero_cta_2: "查看30+在管实绩",
    hero_k1_t: "90天启动窗口", hero_k1_d: "按周里程碑推进，明确每个交付节点。", hero_k2_t: "多平台集中管控", hero_k2_d: "统一管理库存、房态、房价与渠道策略。", hero_k3_t: "大阪本地执行", hero_k3_d: "清扫、巡检、补给、突发处理全链路落地。",
    services_title: "大阪专属民宿代理服务", s1_t: "开业与合规", s1_d: "物业可行性评估、合规路径建议、空间配置与上线资料制作。", s2_t: "日常运营", s2_d: "客服应答、入住引导、保洁排班、异常工单、评价管理。", s3_t: "收益管理", s3_d: "动态定价、节假日策略、连住规则与淡季入住提升。",
    pricing_eyebrow: "Transparent Pricing",
    adv_title: "透明定价，按服务内容灵活配置", adv_sub: "不同项目的规模、定位与收益不同，我们将根据需求，为您制定运营方案与费用结构。", adv_l1: "采用按实际房费收入比例计费的模式", adv_l2: "根据服务内容与管理深度不同，灵活配置", adv_l3: "费用通常为房费收入的25%-35%",
    panel_t: "大阪标准托管包", panel_d: "适合计划长期持有大阪民宿资产的业主", panel_l1: "开业清单与预算模型", panel_l2: "OTA上线与房态系统搭建", panel_l3: "客服与保洁SOP执行", panel_l4: "月度经营复盘与调价建议", panel_cta: "预约大阪资产评估",
    process_title: "合作流程", p1_t: "资产诊断", p1_d: "确认大阪区域、面积、物业约束与收益目标。", p2_t: "方案报价", p2_d: "输出开业计划、预算区间、代运营费率。", p3_t: "上线运营", p3_d: "完成上架、接待、客服、保洁与巡检体系。", p4_t: "持续增收", p4_d: "按周看数据，按月调策略，按季升级产品。",
    ops_title: "将一切交给我们，从准备到运营",
    ops_1_t: "空间设计与装修落地", ops_1_d: "结合市场定位与目标客群，提供功能动线优化与风格设计，提升空间体验。",
    ops_2_t: "民宿牌照申请", ops_2_d: "协助办理住宅宿泊事业法相关备案及消防、行政手续，确保合法上线。",
    ops_3_t: "图片与视频拍摄", ops_3_d: "提供高品质照片与视频制作，优化房源展示效果，提升转化率。",
    ops_4_t: "上架 Airbnb 等平台", ops_4_d: "完成 Airbnb 等主流平台的入驻与价格策略制定，提升曝光与收益表现。",
    ops_5_t: "客服运营与紧急响应", ops_5_d: "提供多语种客服接待与突发情况响应，保障住客体验与运营稳定。",
    ops_6_t: "清扫与消耗品管理", ops_6_d: "标准化清扫流程与日常耗材补给，保持房源品质与长期稳定运营。",
    ops_7_t: "客诉处理与评价维护", ops_7_d: "专业处理投诉问题，优化住客沟通，提升评分与品牌信誉。",
    ops_8_t: "收益监控与持续优化", ops_8_d: "通过入住率与价格数据分析，持续优化运营策略，实现收益最大化。",
    lang_title: "全年365天，每天24小时提供多语言支持（8种语言）", lang_desc: "为了吸引来自世界各地的客户，我们提供全年无休、24小时在线的多语言客服支持，覆盖咨询、预订确认、入住指引和突发问题处理，帮助你的房源在国际平台上保持更高转化率与更稳定评价。",
    lang_1: "日语", lang_2: "英语", lang_3: "普通话和粤语", lang_4: "繁体中文", lang_5: "韩语", lang_6: "法语", lang_7: "波兰语", lang_8: "马来语",
    bench_title: "大阪在管30+房源｜运营实绩", case_title: "真实案例", reviews_title: "客户评价",
    faq_title: "常见问题", f1_q: "业主不在日本，能管好吗？", f1_a: "可以。你远程决策，我们在大阪本地执行交付，周报同步经营数据。", f2_q: "多久能进入稳定收益期？", f2_a: "通常上线后 1-2 个月进入稳定区间，建议以 90 天作为完整评估周期。", f3_q: "费用如何计算？", f3_a: "采用基础管理费 + 绩效提成组合，按房型、位置和目标客群定价。",
    contact_title: "提交大阪房源信息，48小时内给你执行方案", contact_sub: "支持中文 / 日本語 / English。", form_name: "姓名", form_contact: "联系方式", form_asset: "房源信息", form_btn: "提交咨询",
    status_sending: "正在提交，请稍候...", status_ok: "提交成功，我们会尽快联系你。", status_fail: "提交失败，请稍后重试或更换网络。", status_invalid: "请先完整填写必填项。"
  },
  ja: {
    nav_services: "サービス", nav_advantage: "強み", nav_pricing: "料金", nav_process: "流れ", nav_faq: "FAQ", nav_cta: "無料相談",
    hero_title: "大阪民泊運営代行<br/>法令対応と収益改善を一体で", hero_sub: "大阪エリアに特化した運営代行。法令対応、OTA運用、清掃品質、収益分析を統合し、実行可能な運営体制を提供します。", hero_cta_1: "大阪向け提案を受ける", hero_cta_2: "30件超の運営実績を見る",
    hero_k1_t: "90日で運用開始", hero_k1_d: "週次マイルストーンで進行管理。", hero_k2_t: "複数OTAを一元管理", hero_k2_d: "在庫、価格、販売戦略を統合。", hero_k3_t: "大阪現地チーム", hero_k3_d: "清掃、巡回、補充、緊急対応を現地で実施。",
    services_title: "大阪特化の民泊運営サービス", s1_t: "開業・法令対応", s1_d: "物件診断、法令ルート設計、空間準備、掲載素材制作。", s2_t: "日次オペレーション", s2_d: "ゲスト対応、チェックイン案内、清掃手配、異常対応、レビュー管理。", s3_t: "収益マネジメント", s3_d: "動的価格、繁忙期施策、連泊ルール、閑散期対策。",
    pricing_eyebrow: "Transparent Pricing",
    adv_title: "透明な料金設計、サービス内容に応じて柔軟に構成", adv_sub: "物件ごとに規模・ポジション・収益目標が異なるため、実際のニーズに合わせて運営プランと料金体系を設計します。", adv_l1: "実際の宿泊売上に対する割合で料金を設定", adv_l2: "提供範囲と管理深度に応じて柔軟に調整", adv_l3: "費用の目安は宿泊売上の25%-35%",
    panel_t: "大阪標準運営パッケージ", panel_d: "大阪資産を中長期運用したいオーナー向け", panel_l1: "開業チェックリストと予算", panel_l2: "OTA掲載と在庫システム", panel_l3: "ゲスト対応・清掃SOP", panel_l4: "月次レビューと価格改善", panel_cta: "大阪資産診断を予約",
    process_title: "導入フロー", p1_t: "資産診断", p1_d: "大阪内の立地、面積、制約、目標収益を確認。", p2_t: "提案・見積", p2_d: "開業計画、予算、手数料を提示。", p3_t: "運営開始", p3_d: "掲載、受け入れ、清掃、運営体制を稼働。", p4_t: "継続改善", p4_d: "週次分析、月次調整、四半期改善。",
    ops_title: "すべてお任せください。準備から運営まで",
    ops_1_t: "空間設計と内装実装", ops_1_d: "市場ポジションとターゲット客層に合わせ、動線とデザインを最適化します。",
    ops_2_t: "民泊許認可申請", ops_2_d: "住宅宿泊事業法の届出、消防・行政手続きを支援し、合法運営を実現します。",
    ops_3_t: "写真・動画撮影", ops_3_d: "高品質な写真と動画を制作し、掲載訴求と成約率を高めます。",
    ops_4_t: "Airbnb等への掲載", ops_4_d: "主要OTAへの出店と価格戦略を設計し、露出と収益を向上させます。",
    ops_5_t: "カスタマー対応と緊急対応", ops_5_d: "多言語サポートと緊急時対応で、ゲスト体験と運営安定性を確保します。",
    ops_6_t: "清掃・消耗品管理", ops_6_d: "標準化した清掃と日常補給で、品質と安定運営を維持します。",
    ops_7_t: "クレーム対応と評価改善", ops_7_d: "苦情対応を専門的に行い、評価とブランド信頼を高めます。",
    ops_8_t: "収益モニタリングと継続改善", ops_8_d: "稼働率と単価データを分析し、運営戦略を継続最適化します。",
    lang_title: "365日24時間の多言語サポート（8言語）", lang_desc: "世界中のゲストを獲得するため、当社は365日24時間の多言語カスタマーサポートを提供します。問い合わせ、予約確認、チェックイン案内、緊急時対応まで一貫して対応し、国際プラットフォームでの成約率と評価の安定化を支援します。",
    lang_1: "日本語", lang_2: "英語", lang_3: "中国語（普通話・広東語）", lang_4: "繁体字中国語", lang_5: "韓国語", lang_6: "フランス語", lang_7: "ポーランド語", lang_8: "マレー語",
    bench_title: "大阪30件超の運営実績", case_title: "実際の事例", reviews_title: "顧客レビュー",
    faq_title: "よくある質問", f1_q: "オーナーが日本にいなくても運営可能ですか？", f1_a: "可能です。意思決定は遠隔で、実行は大阪現地で行います。", f2_q: "安定収益までの目安は？", f2_a: "通常は運用開始後1-2か月で安定化し、90日で評価します。", f3_q: "料金体系は？", f3_a: "基本管理費 + 成果連動で、物件条件に応じて設計します。",
    contact_title: "大阪物件情報を送信ください。48時間以内に実行案を提示", contact_sub: "中文 / 日本語 / English 対応。", form_name: "お名前", form_contact: "連絡先", form_asset: "物件情報", form_btn: "送信",
    status_sending: "送信中です。少々お待ちください...", status_ok: "送信完了しました。担当よりご連絡します。", status_fail: "送信に失敗しました。時間をおいて再試行してください。", status_invalid: "必須項目を入力してください。"
  },
  en: {
    nav_services: "Services", nav_advantage: "Advantages", nav_pricing: "Pricing", nav_process: "Process", nav_faq: "FAQ", nav_cta: "Consult",
    hero_title: "Osaka Minpaku Management<br/>Compliance-led launch, revenue-led growth", hero_sub: "We focus on Osaka only. Our integrated model combines legal setup, OTA operations, cleaning QA, and performance analytics for consistent execution.", hero_cta_1: "Get Osaka Proposal", hero_cta_2: "View 30+ Managed Results",
    hero_k1_t: "90-day launch window", hero_k1_d: "Weekly milestones with clear deliverables.", hero_k2_t: "Unified OTA control", hero_k2_d: "Centralized inventory, pricing, and channel strategy.", hero_k3_t: "On-ground Osaka team", hero_k3_d: "Cleaning, inspections, replenishment, and incident response.",
    services_title: "Osaka-Focused Management Services", s1_t: "Opening & Compliance", s1_d: "Feasibility check, compliance route, setup planning, listing assets.", s2_t: "Daily Operations", s2_d: "Guest messaging, check-in flow, cleaning schedule, issue handling, review ops.", s3_t: "Revenue Management", s3_d: "Dynamic pricing, holiday playbook, length-of-stay rules, low-season demand lift.",
    pricing_eyebrow: "Transparent Pricing",
    adv_title: "Transparent Pricing, Flexible by Service Scope", adv_sub: "Each project differs in scale, positioning, and revenue goals, so we tailor the operating plan and fee structure to your actual needs.", adv_l1: "Fees are calculated as a percentage of actual room revenue", adv_l2: "Flexibly configured by service scope and management depth", adv_l3: "Typical fee range: 25%-35% of room revenue",
    panel_t: "Osaka Standard Pack", panel_d: "For owners building long-term Osaka STR assets", panel_l1: "Opening checklist and budget model", panel_l2: "OTA launch and inventory setup", panel_l3: "Guest and cleaning SOP delivery", panel_l4: "Monthly reviews and pricing actions", panel_cta: "Book Osaka Asset Review",
    process_title: "Engagement Process", p1_t: "Asset Diagnosis", p1_d: "Define Osaka location, constraints, and revenue target.", p2_t: "Proposal", p2_d: "Launch plan, budget range, and management fee model.", p3_t: "Go Live", p3_d: "Listings, support, cleaning, and inspection systems live.", p4_t: "Scale Revenue", p4_d: "Weekly analytics, monthly optimization, quarterly upgrades.",
    ops_title: "Leave Everything to Us, From Setup to Operations",
    ops_1_t: "Space Design & Fit-out Delivery", ops_1_d: "We optimize layout flow and visual style based on target guests and market positioning.",
    ops_2_t: "Minpaku License Application", ops_2_d: "We support legal filing, fire-safety, and administrative procedures for compliant launch.",
    ops_3_t: "Photo & Video Production", ops_3_d: "High-quality visuals improve listing appeal and conversion performance.",
    ops_4_t: "Airbnb and OTA Onboarding", ops_4_d: "We launch your listing on major platforms with pricing strategy setup.",
    ops_5_t: "Guest Support & Emergency Response", ops_5_d: "Multilingual support and urgent issue handling keep operations stable.",
    ops_6_t: "Cleaning & Supply Management", ops_6_d: "Standardized cleaning and consumables replenishment maintain quality consistency.",
    ops_7_t: "Complaint Handling & Review Care", ops_7_d: "We resolve complaints professionally and protect ratings and brand trust.",
    ops_8_t: "Revenue Monitoring & Optimization", ops_8_d: "We optimize strategy continuously using occupancy and pricing data.",
    lang_title: "Multilingual Support 24/7, 365 Days a Year (8 Languages)", lang_desc: "To attract guests from around the world, we provide always-on multilingual support for inquiries, booking confirmation, check-in guidance, and urgent issue handling, helping your listing keep stronger conversion and more stable ratings.",
    lang_1: "Japanese", lang_2: "English", lang_3: "Mandarin & Cantonese", lang_4: "Traditional Chinese", lang_5: "Korean", lang_6: "French", lang_7: "Polish", lang_8: "Malay",
    bench_title: "30+ Managed Units in Osaka | Operating Proof", case_title: "Real Cases", reviews_title: "Customer Reviews",
    faq_title: "FAQ", f1_q: "Can this work if the owner is overseas?", f1_a: "Yes. You approve key decisions remotely; we execute operations on-site in Osaka.", f2_q: "How long to reach stable performance?", f2_a: "Most units stabilize within 1-2 months after launch, measured over a 90-day cycle.", f3_q: "How is pricing structured?", f3_a: "Base management fee plus performance component, tailored by asset profile.",
    contact_title: "Send your Osaka property brief. We reply within 48 hours.", contact_sub: "Chinese / Japanese / English support.", form_name: "Name", form_contact: "Contact", form_asset: "Property Brief", form_btn: "Submit",
    status_sending: "Submitting, please wait...", status_ok: "Submitted successfully. We will contact you soon.", status_fail: "Submission failed. Please try again later.", status_invalid: "Please fill in all required fields."
  }
};

let currentLang = "zh";

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function renderCards(containerId, items, renderer) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = (items || []).map(renderer).join("");
}

function renderPortfolio(lang) {
  const source = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA[lang]) || (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.zh);
  if (!source) return;

  renderCards("stats-strip", source.stats, (item) => `
    <article class="card">
      <h3>${escapeHtml(item.value)}</h3>
      <p>${escapeHtml(item.label)}</p>
    </article>
  `);

  renderCards("district-grid", source.districts, (item) => `
    <article class="card">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.desc)}</p>
    </article>
  `);

  renderCards("unit-grid", source.units, (item) => `
    <article class="card">
      <div class="unit-image-wrap">
        <img src="${escapeHtml(item.image || "")}" alt="${escapeHtml(item.title)}" loading="lazy" />
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="unit-desc">${escapeHtml(item.desc)}</p>
    </article>
  `);

  renderCards("review-grid", source.reviews, (item) => `
    <article class="card review-card">
      <p class="review-quote">“${escapeHtml(item.quote)}”</p>
      <p class="review-source">${escapeHtml(item.source)}</p>
    </article>
  `);
}

function setLang(lang) {
  currentLang = lang;
  const dict = i18n[lang] || i18n.zh;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (!val) return;
    el.innerHTML = val;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderPortfolio(lang);
}

function setStatus(key, type) {
  const status = document.getElementById("form-status");
  if (!status) return;
  status.className = `form-status ${type || ""}`.trim();
  status.textContent = i18n[currentLang][key] || "";
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang || "zh"));
});

const leadForm = document.getElementById("lead-form");
if (leadForm) {
  leadForm.action = `https://formsubmit.co/${encodeURIComponent(FORM_RECEIVER_EMAIL)}`;
  leadForm.method = "POST";
  leadForm.addEventListener("submit", (event) => {
    if (!leadForm.checkValidity()) {
      event.preventDefault();
      setStatus("status_invalid", "error");
      leadForm.reportValidity();
      return;
    }
    setStatus("status_sending", "pending");
  });
}

setLang("zh");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

if (GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.includes("XXXXXXXXXX")) {
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}
