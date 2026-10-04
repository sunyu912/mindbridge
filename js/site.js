/* MindBridge — shared site behaviour
   - bilingual switching (zh / en) via html[data-lang]
   - header, footer, accessibility panel injected on every page
   - reveal-on-scroll, article card helpers                         */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- i18n helpers ---------- */
  function lang() { return doc.dataset.lang === "en" ? "en" : "zh"; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  // Render a {zh, en} pair as two spans; CSS hides the inactive one.
  function bi(o, tag) {
    tag = tag || "span";
    if (o == null) return "";
    if (typeof o === "string") return esc(o);
    return "<" + tag + ' lang="zh-CN">' + esc(o.zh) + "</" + tag + "><" + tag + ' lang="en">' + esc(o.en) + "</" + tag + ">";
  }
  function t(o) { return o == null ? "" : typeof o === "string" ? o : o[lang()] || o.zh; }

  function setLang(l) {
    doc.dataset.lang = l;
    doc.lang = l === "en" ? "en" : "zh-CN";
    store.set("mb-lang", l);
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.langBtn === l)); });
    document.querySelectorAll("[data-alt-zh]").forEach(function (el) { el.alt = el.getAttribute("data-alt-" + l) || el.alt; });
    document.querySelectorAll("[data-ph-zh]").forEach(function (el) { el.placeholder = el.getAttribute("data-ph-" + l) || ""; });
    var tt = document.querySelector("meta[name='mb-title-" + l + "']");
    if (tt) document.title = tt.content;
    document.dispatchEvent(new CustomEvent("mb:lang", { detail: l }));
  }

  /* ---------- icons ---------- */
  var P = {
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
    hands: '<path d="M7 11V6a2 2 0 1 1 4 0v4"/><path d="M11 10V4a2 2 0 1 1 4 0v6"/><path d="M15 10V6a2 2 0 1 1 4 0v8a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.4L3 14a2 2 0 0 1 3.4-2L8 14"/>',
    heart: '<path d="M12 20s-7-4.4-9.2-8.7C1.3 8.2 3 4.5 6.5 4.5c2 0 3.4 1.1 4.2 2.4h2.6c.8-1.3 2.2-2.4 4.2-2.4 3.5 0 5.2 3.7 3.7 6.8C19 15.6 12 20 12 20z"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    shield: '<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>',
    alert: '<path d="M12 3 2 20h20z"/><path d="M12 10v4.5M12 17.5v.01"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    a11y: '<circle cx="12" cy="4.5" r="1.8"/><path d="M4 8.5c2.6.8 5.3 1.2 8 1.2s5.4-.4 8-1.2M12 9.7V14m0 0-3 7m3-7 3 7"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14.2c2.9.3 5.5 2.6 5.5 5.8"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    school: '<path d="M2 9 12 4l10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
    store: '<path d="M4 9h16l-1.5-5h-13z"/><path d="M5 9v11h14V9M9 20v-6h6v6"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    speaker: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
    text: '<path d="M4 7V5h10v2M9 5v14M7 19h4"/><path d="M14 12v-1.5h7V12M17.5 10.5V19M16 19h3"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19c3-4 6-6 10-8"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    ear: '<path d="M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 9a2 2 0 0 1 4 0"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || "") + "</svg>";
  }

  var LOGO =
    '<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">' +
    '<rect width="40" height="40" rx="12" fill="#223a5e"/>' +
    '<path d="M7 27c4.2-8.5 8.6-12.7 13-12.7S28.8 18.5 33 27" fill="none" stroke="#f2b089" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M11.5 27v-5.5M16 27v-8.6M20 27v-9.7M24 27v-8.6M28.5 27v-5.5" stroke="#fbf7f0" stroke-width="2" stroke-linecap="round"/>' +
    '<circle cx="20" cy="10" r="2.4" fill="#f2b089"/></svg>';

  var NAV = [
    { href: "knowledge.html", zh: "自闭症知识", en: "Understanding Autism" },
    { href: "education.html", zh: "教育支持", en: "Education" },
    { href: "employment.html", zh: "就业与生活", en: "Work & Life" },
    { href: "volunteer.html", zh: "志愿者中心", en: "Volunteer" },
    { href: "shop.html", zh: "社群商店", en: "Shop" },
    { href: "partners.html", zh: "社群伙伴", en: "Partners" },
    { href: "about.html", zh: "关于项目", en: "About" }
  ];

  function currentPage() {
    var p = location.pathname.split("/").pop() || "index.html";
    if (p === "article.html") {
      var id = new URLSearchParams(location.search).get("id") || "";
      if (id[0] === "k" || id[0] === "n") return "knowledge.html";
      if (id[0] === "p") return "education.html";
    }
    return p;
  }

  function header() {
    var cur = currentPage();
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.href === cur ? ' aria-current="page"' : "") + ">" + bi(n) + "</a>";
    }).join("");
    return (
      '<a class="skip" href="#main">' + bi({ zh: "跳到主要内容", en: "Skip to content" }) + "</a>" +
      '<div class="wrap header-in">' +
      '<a class="brand" href="index.html" aria-label="MindBridge">' + LOGO +
      '<span class="brand-name">MindBridge<small>' + bi({ zh: "自闭症社群", en: "Autism Community" }) + "</small></span></a>" +
      '<nav class="nav" id="nav" aria-label="Main">' + links + "</nav>" +
      '<div class="header-tools">' +
      '<div class="lang-switch" role="group" aria-label="Language / 语言">' +
      '<button type="button" data-lang-btn="zh" aria-pressed="false">中</button>' +
      '<button type="button" data-lang-btn="en" aria-pressed="false">EN</button></div>' +
      '<button class="icon-btn" type="button" id="a11yBtn" aria-expanded="false" aria-controls="a11yPanel">' + icon("a11y") +
      '<span class="sr-only">' + bi({ zh: "阅读与无障碍设置", en: "Reading & accessibility settings" }) + "</span></button>" +
      '<button class="icon-btn menu-btn" type="button" id="menuBtn" aria-expanded="false" aria-controls="nav">' + icon("menu") +
      '<span class="sr-only">' + bi({ zh: "菜单", en: "Menu" }) + "</span></button>" +
      "</div></div>" +
      '<div class="a11y-panel" id="a11yPanel" role="dialog" aria-label="Accessibility">' +
      "<h3>" + bi({ zh: "按你的方式阅读", en: "Read your way" }) + "</h3>" +
      '<div class="a11y-row"><span>' + bi({ zh: "文字大小", en: "Text size" }) + '</span><div class="seg" role="group">' +
      '<button type="button" data-size="m">A</button><button type="button" data-size="l">A+</button><button type="button" data-size="xl">A++</button></div></div>' +
      '<div class="a11y-row"><span>' + bi({ zh: "平静模式", en: "Calm mode" }) + '<br><small class="muted">' +
      bi({ zh: "减少颜色与动画", en: "Softer colour, no motion" }) + '</small></span><button class="toggle" type="button" role="switch" id="calmToggle" aria-checked="false"><span class="sr-only">Calm</span></button></div>' +
      '<div class="a11y-row"><span>' + bi({ zh: "深色界面", en: "Dark theme" }) + '</span><div class="seg" role="group">' +
      '<button type="button" data-theme-btn="auto">' + bi({ zh: "自动", en: "Auto" }) + '</button><button type="button" data-theme-btn="light">' +
      bi({ zh: "浅", en: "Light" }) + '</button><button type="button" data-theme-btn="dark">' + bi({ zh: "深", en: "Dark" }) + "</button></div></div>" +
      "</div>"
    );
  }

  function footer() {
    var col = function (title, items) {
      return "<div><h4>" + bi(title) + "</h4><ul>" + items.map(function (i) { return '<li><a href="' + i[0] + '">' + bi(i[1]) + "</a></li>"; }).join("") + "</ul></div>";
    };
    return (
      '<div class="wrap"><div class="footer-grid">' +
      '<div><a class="brand" href="index.html">' + LOGO + '<span class="brand-name">MindBridge<small>' + bi({ zh: "自闭症社群", en: "Autism Community" }) + "</small></span></a>" +
      '<p style="margin-top:18px;max-width:30em">' +
      bi({ zh: "一个由美国高中生发起的自闭症社群项目：可信科普、具体的志愿任务、资源导航，以及来源透明的创作者作品。", en: "An autism community project started by a U.S. high-school student: trustworthy information, concrete volunteer tasks, resource navigation and transparently sourced creator work." }) +
      "</p></div>" +
      col({ zh: "了解", en: "Learn" }, [["knowledge.html", { zh: "自闭症知识", en: "Understanding autism" }], ["education.html", { zh: "家长支持与教育", en: "Parents & education" }], ["employment.html", { zh: "就业与生活技能", en: "Work & life skills" }]]) +
      col({ zh: "参与", en: "Take part" }, [["volunteer.html", { zh: "成为志愿者", en: "Volunteer" }], ["shop.html", { zh: "社群商店", en: "Community shop" }], ["partners.html", { zh: "合作伙伴", en: "Partners" }]]) +
      col({ zh: "项目", en: "Project" }, [["about.html", { zh: "关于项目", en: "About" }], ["about.html#faq", { zh: "常见问题", en: "FAQ" }], ["about.html#safety", { zh: "隐私与安全", en: "Privacy & safety" }], ["about.html#sources", { zh: "资料来源与更新", en: "Sources & updates" }]]) +
      "</div>" +
      '<div class="crisis">' + icon("phone") + "<div>" +
      bi({ zh: "本站不提供危机干预。如果你或他人面临立即危险，请拨打 911。在美国，如出现自杀或严重情绪危机，可拨打或短信联系 988 Suicide and Crisis Lifeline。其他国家或地区请联系当地紧急服务或危机热线。", en: "This site does not provide crisis support. If you or someone else is in immediate danger, call 911. In the U.S., call or text 988 (Suicide and Crisis Lifeline) for suicidal thoughts or a severe emotional crisis. Elsewhere, contact local emergency services or a crisis line." }, "p") +
      "</div></div>" +
      '<div class="footer-legal"><span>© 2026 MindBridge · ' +
      bi({ zh: "本站内容仅用于一般科普和资源导航，不构成医疗诊断、治疗或专业意见。", en: "General education and resource navigation only — not medical diagnosis, treatment or professional advice." }) +
      "</span><span>" + bi({ zh: "引用公共资料不代表来源机构认可本项目。", en: "Citing public sources does not imply their endorsement." }) + "</span></div></div>"
    );
  }

  /* ---------- article helpers ---------- */
  function articles(series) {
    var all = window.MB_ARTICLES || [];
    return series ? all.filter(function (a) { return a.series === series; }) : all;
  }
  function find(id) { return articles().filter(function (a) { return a.id === id; })[0]; }
  function readMinutes(a) {
    var zh = JSON.stringify(a.body.zh).length, en = JSON.stringify(a.body.en).split(/\s+/).length;
    return { zh: Math.max(2, Math.round(zh / 330)), en: Math.max(2, Math.round(en / 220)) };
  }
  function minsLabel(a) { var m = readMinutes(a); return { zh: "约 " + m.zh + " 分钟阅读", en: m.en + " min read" }; }

  function card(a) {
    var thumb = a.img
      ? '<img src="' + a.img + '" alt="" loading="lazy">'
      : "";
    return (
      '<a class="a-card reveal" href="article.html?id=' + a.id + '">' +
      '<div class="thumb' + (a.img ? "" : " typo") + '">' + thumb + (a.img ? "" : "<span>" + a.num + "</span>") +
      (a.img ? '<span class="num">' + a.num + "</span>" : "") + "</div>" +
      '<div class="body"><span class="chip ' + (a.series === "parents" ? "terra" : a.series === "news" ? "sage" : "") + '">' + bi(a.tag) + "</span>" +
      "<h3>" + bi(a.title) + "</h3><p>" + bi(a.summary) + "</p>" +
      '<div class="meta">' + icon("clock") + bi(minsLabel(a)) + "</div></div></a>"
    );
  }
  function row(a) {
    return '<a class="index-row" href="article.html?id=' + a.id + '"><span class="n">' + a.num + "</span><div><h3>" + bi(a.title) + "</h3><p>" + bi(a.tag) + " · " + bi(minsLabel(a)) + '</p></div><span class="go">' + icon("arrow") + "</span></a>";
  }
  function feature(a) {
    return '<a class="feature reveal" href="article.html?id=' + a.id + '"><div class="thumb"><img src="' + a.img + '" alt="" loading="lazy"></div><div class="body">' +
      '<span class="chip ' + (a.series === "parents" ? "terra" : "") + '">' + bi(a.tag) + "</span><h3>" + bi(a.title) + "</h3><p>" + bi(a.dek || a.summary) + '</p><span class="link-arrow">' +
      bi({ zh: "阅读全文", en: "Read the article" }) + "</span></div></a>";
  }

  /* ---------- reveal ---------- */
  function reveal() {
    var els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- init ---------- */
  function init() {
    var h = document.getElementById("site-header");
    if (h) { h.className = "site-header"; h.innerHTML = header(); }
    var f = document.getElementById("site-footer");
    if (f) { f.className = "site-footer"; f.innerHTML = footer(); }

    // fill [data-icon] placeholders
    document.querySelectorAll("[data-icon]").forEach(function (el) { el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon)); });

    document.querySelectorAll("[data-lang-btn]").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.langBtn); }); });
    setLang(lang());

    var a11yBtn = document.getElementById("a11yBtn"), panel = document.getElementById("a11yPanel");
    if (a11yBtn) {
      a11yBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = panel.classList.toggle("open");
        a11yBtn.setAttribute("aria-expanded", String(open));
      });
      document.addEventListener("click", function (e) { if (!panel.contains(e.target)) { panel.classList.remove("open"); a11yBtn.setAttribute("aria-expanded", "false"); } });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") { panel.classList.remove("open"); a11yBtn.setAttribute("aria-expanded", "false"); } });
    }
    function syncSize() { document.querySelectorAll("[data-size]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.size === (doc.dataset.size || "m"))); }); }
    document.querySelectorAll("[data-size]").forEach(function (b) {
      b.addEventListener("click", function () { doc.dataset.size = b.dataset.size; store.set("mb-size", b.dataset.size); syncSize(); });
    });
    syncSize();
    var calm = document.getElementById("calmToggle");
    if (calm) {
      calm.setAttribute("aria-checked", String(doc.dataset.calm === "on"));
      calm.addEventListener("click", function () {
        var on = doc.dataset.calm !== "on";
        doc.dataset.calm = on ? "on" : "off"; store.set("mb-calm", doc.dataset.calm);
        calm.setAttribute("aria-checked", String(on));
        if (on) document.querySelectorAll(".reveal").forEach(function (e) { e.classList.add("in"); });
      });
    }
    function syncTheme() { var th = doc.dataset.theme || "auto"; document.querySelectorAll("[data-theme-btn]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.themeBtn === th)); }); }
    document.querySelectorAll("[data-theme-btn]").forEach(function (b) {
      b.addEventListener("click", function () {
        var v = b.dataset.themeBtn;
        if (v === "auto") delete doc.dataset.theme; else doc.dataset.theme = v;
        store.set("mb-theme", v); syncTheme();
      });
    });
    syncTheme();

    var menuBtn = document.getElementById("menuBtn"), nav = document.getElementById("nav");
    if (menuBtn) menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.innerHTML = icon(open ? "close" : "menu") + '<span class="sr-only">Menu</span>';
    });

    var hdr = document.getElementById("site-header");
    var onScroll = function () { if (hdr) hdr.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    // auto-render article lists: <div data-articles="parents" data-view="card|row" data-limit="3" data-skip="1">
    document.querySelectorAll("[data-articles]").forEach(function (el) {
      var list = articles(el.dataset.articles);
      if (el.dataset.ids) { var ids = el.dataset.ids.split(","); list = ids.map(find).filter(Boolean); }
      if (el.dataset.skip) list = list.slice(+el.dataset.skip);
      if (el.dataset.limit) list = list.slice(0, +el.dataset.limit);
      var fn = el.dataset.view === "row" ? row : el.dataset.view === "feature" ? feature : card;
      el.innerHTML = list.map(fn).join("");
    });

    reveal();
    if (doc.dataset.calm === "on") document.querySelectorAll(".reveal").forEach(function (e) { e.classList.add("in"); });
  }

  window.MB = { bi: bi, t: t, esc: esc, lang: lang, setLang: setLang, icon: icon, articles: articles, find: find, card: card, row: row, feature: feature, minsLabel: minsLabel, reveal: reveal, store: store };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
