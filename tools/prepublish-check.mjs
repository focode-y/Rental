import { readFileSync } from "node:fs";
import vm from "node:vm";

function read(path) {
  return readFileSync(path, "utf8");
}

function assertContains(text, snippet, label, failures) {
  if (!text.includes(snippet)) failures.push(`Missing ${label}: ${snippet}`);
}

function assertNoMojibake(text, path, failures) {
  const bad = ["\uFFFD", "ï¿½", "Ã", "Ð", "Õ"];
  for (const token of bad) {
    if (text.includes(token)) {
      failures.push(`Mojibake token found in ${path}: ${token}`);
      break;
    }
  }
}

function loadI18n(scriptText) {
  const noop = () => {};
  const fakeEl = {
    textContent: "",
    innerHTML: "",
    setAttribute: noop,
    addEventListener: noop,
    classList: { add: noop, remove: noop, toggle: noop }
  };
  function IO() {
    this.observe = noop;
    this.unobserve = noop;
    this.disconnect = noop;
  }
  const sandbox = {
    document: {
      documentElement: { lang: "" },
      getElementById: () => fakeEl,
      querySelectorAll: () => [],
      querySelector: () => fakeEl,
      addEventListener: noop
    },
    window: { PORTFOLIO_DATA: {}, addEventListener: noop },
    IntersectionObserver: IO,
    fetch: async () => ({ ok: true, json: async () => ({}) }),
    setTimeout,
    clearTimeout
  };
  vm.createContext(sandbox);
  vm.runInContext(scriptText, sandbox, { timeout: 1000 });
  return vm.runInContext("i18n", sandbox);
}

const files = ["index.html", "script.js", "data.js"];
const contents = Object.fromEntries(files.map((f) => [f, read(f)]));
const failures = [];

for (const f of files) assertNoMojibake(contents[f], f, failures);

const i18n = loadI18n(contents["script.js"]);

const expected = {
  zh: {
    hero_cta_2: "\u67E5\u770B300+\u5728\u7BA1\u5B9E\u7EE9",
    bench_title: "\u5927\u962A\u5728\u7BA1300+\u623F\u6E90\uFF5C\u8FD0\u8425\u5B9E\u7EE9"
  },
  hk: {
    hero_cta_2: "\u67E5\u770B300+\u5728\u7BA1\u5BE6\u7E3E",
    bench_title: "\u5927\u962A\u5728\u7BA1300+\u623F\u6E90\uFF5C\u71DF\u904B\u5BE6\u7E3E"
  },
  ja: {
    hero_cta_2: "300+\u4EF6\u306E\u904B\u55B6\u5B9F\u7E3E\u3092\u898B\u308B",
    bench_title: "\u5927\u962A300+\u4EF6\u306E\u904B\u55B6\u5B9F\u7E3E"
  },
  en: {
    hero_cta_2: "View 300+ Managed Results",
    bench_title: "300+ Managed Units in Osaka | Operating Proof"
  }
};

for (const locale of Object.keys(expected)) {
  for (const key of Object.keys(expected[locale])) {
    const actual = i18n?.[locale]?.[key];
    const want = expected[locale][key];
    if (actual !== want) {
      failures.push(`Mismatch ${locale}.${key}: got "${actual}", want "${want}"`);
    }
  }
}

if (failures.length) {
  console.error("Prepublish check failed:");
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}

console.log("Prepublish check passed.");
