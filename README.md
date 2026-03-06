# Rental

Template Brand 澶ч槳姘戝浠ｈ繍钀ュ畼缃戦潤鎬侀」鐩紝鏀寔澶氳瑷€灞曠ず锛堢畝涓?/ 绻佷腑 / 鏃ヨ / 鑻辫锛夛紝鍖呭惈鏈嶅姟浠嬬粛銆佽繍钀ュ疄缁┿€佸鎴疯瘎浠峰拰绾跨储琛ㄥ崟銆?
## 椤圭洰鐗规€?
- 绾潤鎬侀儴缃诧細`HTML + CSS + JavaScript`
- 澶氳瑷€鍒囨崲锛氬墠绔唴缃?i18n 瀛楀吀
- 鍔ㄦ€佹暟鎹尯鍧楋細杩愯惀瀹炵哗銆佹渚嬨€佽瘎浠风敱鏁版嵁鏂囦欢椹卞姩
- 绾跨储鏀堕泦琛ㄥ崟锛氬熀浜?FormSubmit 杞彂鍒版寚瀹氶偖绠?- 鍝嶅簲寮忓竷灞€锛氶€傞厤妗岄潰涓庣Щ鍔ㄧ

## 鐩綍缁撴瀯

```text
Rental/
鈹溾攢 index.html       # 椤甸潰缁撴瀯涓?SEO 鍏冧俊鎭?鈹溾攢 styles.css       # 鍏ㄧ珯鏍峰紡涓庡搷搴斿紡瑙勫垯
鈹溾攢 script.js        # 澶氳瑷€銆佷氦浜掋€佽〃鍗曢€昏緫
鈹溾攢 data.js          # 瀹炵哗鏁版嵁銆佹渚嬫暟鎹€佽瘎浠锋暟鎹?鈹溾攢 image/           # 鏈湴鍥剧墖璧勬簮
鈹溾攢 assets/          # 鍏朵粬闈欐€佽祫婧?鈹斺攢 浣跨敤璇存槑.md       # 涓枃缁存姢璇存槑
```

## 鏈湴杩愯

杩欐槸绾潤鎬侀」鐩紝鐩存帴鍙屽嚮 `index.html` 鍙瑙堛€? 
寤鸿浣跨敤鏈湴闈欐€佹湇鍔″櫒杩愯锛堥伩鍏嶉儴鍒嗘祻瑙堝櫒闄愬埗锛夛細

```bash
# 浠婚€夊叾涓€
npx serve .
# 鎴?python -m http.server 8080
```

鐒跺悗璁块棶 `http://localhost:8080`锛堟垨鍛戒护鎻愮ず绔彛锛夈€?
## 甯哥敤淇敼鐐?
### 1. 淇敼琛ㄥ崟鎺ユ敹閭

缂栬緫 [script.js](./script.js)锛?
```js
const FORM_RECEIVER_EMAIL = "your-email@example.com";
```

### 2. 淇敼椤甸潰鏂囨锛堝璇█锛?
缂栬緫 [script.js](./script.js) 涓殑 `i18n` 瀵硅薄锛坄zh/hk/ja/en`锛夈€?
### 3. 淇敼杩愯惀瀹炵哗涓庢渚嬪浘鐗?
缂栬緫 [data.js](./data.js) 涓殑 `window.PORTFOLIO_DATA`锛?
- `stats`锛氭寚鏍囧崱鐗?- `districts`锛氬晢鍦堟暟鎹?- `units`锛氭渚嬪崱鐗囷紙鍚?`image`锛?- `reviews`锛氬鎴疯瘎浠?
### 4. 淇敼鏍峰紡涓庡竷灞€

缂栬緫 [styles.css](./styles.css)锛?
- Hero 鍖猴細`.hero` / `.hero::before`
- 鍝嶅簲寮忚鍒欙細`@media (max-width: 920px)`銆乣@media (max-width: 768px)`

## 閮ㄧ讲

鍙洿鎺ラ儴缃插埌浠绘剰闈欐€佹墭绠″钩鍙帮紝渚嬪锛?
- GitHub Pages
- Netlify
- Vercel锛堥潤鎬佺珯妯″紡锛?
## 璇存槑

- 椤圭洰褰撳墠鏈紩鍏ユ墦鍖呭伐鍏蜂笌渚濊禆绠＄悊銆?- 濡傞渶鎺ュ叆缁熻锛岃鍦?`script.js` 涓厤缃?`GA_MEASUREMENT_ID`銆?
---

Deployment check marker: 2026-02-24

Build trigger: 2026-02-24 12:25:30

