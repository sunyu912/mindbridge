/* MindBridge — article reader + in-article tools */
(function () {
  "use strict";
  var MB = window.MB, bi = MB.bi, esc = MB.esc, icon = MB.icon;
  var id = new URLSearchParams(location.search).get("id") || "k01";
  var a = MB.find(id) || MB.articles()[0];
  var root = document.getElementById("article");
  var LANGS = ["zh", "en"];
  var L = function (l) { return l === "en" ? "en" : "zh-CN"; };
  var T = function (o, l) { return o == null ? "" : typeof o === "string" ? o : o[l]; };

  var SERIES_NAME = {
    knowledge: { zh: "自闭症知识", en: "Understanding autism", href: "knowledge.html" },
    parents: { zh: "家长支持与教育实践", en: "Parent support & practice", href: "education.html" },
    news: { zh: "最新动态", en: "Latest", href: "knowledge.html#news" }
  };

  /* ---------------- tools ---------------- */
  var TOOLS = {
    p01: { type: "abc", afterList: 1 },
    p02: { type: "aac", at: "end" },
    k04: { type: "aac", at: "end" },
    p03: { type: "check", list: 0, kind: "goal" },
    p04: { type: "check", after: "拆成小步骤", kind: "steps" },
    p05: { type: "check", after: "提前做什么", kind: "plan" },
    k05: { type: "check", after: "五件小事", kind: "plan" },
    k02: { type: "check", after: "去评估前", kind: "prep" },
    k03: { type: "check", after: "从环境", kind: "env" },
    p06: { type: "path", at: "top" }
  };

  var TXT = {
    goal: { t: { zh: "目标检查表", en: "Goal check" }, s: { zh: "勾选这个目标符合的条件", en: "Tick what's true for the goal you're considering" } },
    steps: { t: { zh: "任务拆解练习", en: "Task breakdown tracker" }, s: { zh: "勾选孩子已经能独立完成的步骤", en: "Tick the steps your child can now do on their own" } },
    plan: { t: { zh: "过渡准备清单", en: "Transition checklist" }, s: { zh: "进度只保存在你的浏览器中", en: "Progress is saved only in your browser" } },
    prep: { t: { zh: "评估前准备清单", en: "Before-the-appointment checklist" }, s: { zh: "逐项准备，进度只保存在你的浏览器中", en: "Work through it — saved only in your browser" } },
    env: { t: { zh: "感官友好环境检查", en: "Sensory-friendly space check" }, s: { zh: "看看你的家、教室或活动场地已经做到哪些", en: "See what your home, classroom or venue already does" } }
  };

  function load(k, d) { try { var v = MB.store.get(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { MB.store.set(k, JSON.stringify(v)); }

  function toolShell(l, ic, title, sub, body, foot) {
    return '<section class="tool" aria-label="' + esc(T(title, l)) + '"><div class="tool-head">' + icon(ic) + "<div><b>" + esc(T(title, l)) + "</b><span>" + esc(T(sub, l)) + '</span></div></div><div class="tool-body">' + body + "</div>" +
      (foot ? '<div class="tool-foot">' + foot + "</div>" : "") + "</section>";
  }

  // Checklist made from a list in the article itself (so it's always in sync with the text)
  function checkTool(l, items, cfg) {
    var tx = TXT[cfg.kind];
    var key = "mb-chk-" + a.id;
    var body = '<div class="qlist">' + items.map(function (it, i) {
      return '<label class="qitem"><input type="checkbox" data-i="' + i + '"><span>' + esc(it) + "</span></label>";
    }).join("") + '</div><div class="meter"><i></i></div><div class="verdict" aria-live="polite"></div>';
    var foot = "<span>" + esc(T({ zh: "不会上传任何信息", en: "Nothing is uploaded" }, l)) + '</span><button type="button" class="btn btn-ghost" data-reset>' + esc(T({ zh: "清空", en: "Reset" }, l)) + "</button>";
    return { html: toolShell(l, "check", tx.t, tx.s, body, foot), bind: function (el) {
      var boxes = el.querySelectorAll("input"), meter = el.querySelector(".meter i"), out = el.querySelector(".verdict");
      function sync(fromStore) {
        var st = load(key, []);
        if (fromStore) boxes.forEach(function (b) { b.checked = st.indexOf(+b.dataset.i) > -1; });
        var n = el.querySelectorAll("input:checked").length, tot = boxes.length;
        meter.style.width = (n / tot * 100) + "%";
        var msg;
        if (cfg.kind === "goal") {
          msg = n === tot ? { zh: "这是一个很有意义的目标：与生活相关、能迁移，也符合本人意愿。", en: "This looks like a meaningful goal: relevant, transferable and wanted by the person." }
            : n >= 3 ? { zh: "方向不错。看看没勾选的条件，能否调整目标让它更贴近真实生活？", en: "Good direction. Look at the unticked items — could the goal be adjusted to fit real life better?" }
            : { zh: "可以再想一想：这个目标能在课堂以外使用吗？它增加了孩子的选择吗？", en: "Worth a second look: can this be used outside the classroom? Does it give the child more choices?" };
        } else {
          msg = { zh: "已完成 " + n + " / " + tot, en: n + " of " + tot + " done" };
        }
        out.textContent = T(msg, l);
      }
      boxes.forEach(function (b) {
        b.addEventListener("change", function () {
          var st = [];
          boxes.forEach(function (x) { if (x.checked) st.push(+x.dataset.i); });
          save(key, st); document.dispatchEvent(new CustomEvent("mb:sync", { detail: key }));
        });
      });
      el.querySelector("[data-reset]").addEventListener("click", function () { save(key, []); document.dispatchEvent(new CustomEvent("mb:sync", { detail: key })); });
      document.addEventListener("mb:sync", function (e) { if (e.detail === key) sync(true); });
      sync(true);
    } };
  }

  // A–B–C behaviour observation log
  function abcTool(l) {
    var key = "mb-abc";
    var F = [
      ["A", { zh: "之前发生了什么", en: "Before (antecedent)" }, { zh: "例如：突然更换活动、任务变难、环境很吵", en: "e.g. activity changed suddenly, hard task, noisy room" }],
      ["B", { zh: "孩子具体做了什么", en: "What exactly happened (behaviour)" }, { zh: "客观描述：捂住耳朵、推开椅子、走出房间", en: "Describe objectively: covered ears, pushed chair, left room" }],
      ["C", { zh: "之后出现了什么结果", en: "What happened after (consequence)" }, { zh: "例如：离开了任务、获得休息或关注", en: "e.g. task ended, got a break or attention" }]
    ];
    var body = '<div class="abc">' + F.map(function (f) {
      return '<div class="field"><label><span class="k">' + f[0] + "</span>" + esc(T(f[1], l)) + '</label><textarea rows="3" data-f="' + f[0] + '" placeholder="' + esc(T(f[2], l)) + '"></textarea></div>';
    }).join("") + '</div><div class="btn-row mt-1"><button type="button" class="btn btn-terra" data-add>' + esc(T({ zh: "记下这一次", en: "Log this moment" }, l)) + '</button><button type="button" class="btn btn-ghost" data-print>' + esc(T({ zh: "打印记录", en: "Print log" }, l)) + '</button></div><div class="abc-log" aria-live="polite"></div>';
    var foot = "<span>" + esc(T({ zh: "记录不是为了责怪孩子，而是为了发现规律。记录只保存在你的浏览器中。", en: "Logging isn't about blame — it's about spotting patterns. Entries stay in your browser only." }, l)) + "</span>";
    return { html: toolShell(l, "pen", { zh: "行为观察记录卡", en: "Behaviour observation log" }, { zh: "之前 · 行为 · 之后", en: "Before · Behaviour · After" }, body, foot), bind: function (el) {
      var log = el.querySelector(".abc-log");
      function render() {
        var items = load(key, []);
        log.innerHTML = items.length ? items.map(function (it, i) {
          return '<div class="abc-entry"><div><small>A · ' + esc(it.d) + "</small>" + esc(it.A) + "</div><div><small>B</small>" + esc(it.B) + "</div><div><small>C</small>" + esc(it.C) + '</div><button type="button" data-del="' + i + '" aria-label="' + esc(T({ zh: "删除", en: "Delete" }, l)) + '">×</button></div>';
        }).join("") : '<p class="muted" style="margin:0;font-size:.88rem">' + esc(T({ zh: "还没有记录。连续记录几次之后，规律会慢慢出现。", en: "No entries yet. After a few, patterns start to appear." }, l)) + "</p>";
        log.querySelectorAll("[data-del]").forEach(function (b) {
          b.addEventListener("click", function () { var it = load(key, []); it.splice(+b.dataset.del, 1); save(key, it); document.dispatchEvent(new CustomEvent("mb:sync", { detail: key })); });
        });
      }
      el.querySelector("[data-add]").addEventListener("click", function () {
        var v = {}; el.querySelectorAll("textarea").forEach(function (t) { v[t.dataset.f] = t.value.trim(); });
        if (!v.A && !v.B && !v.C) return;
        v.d = new Date().toLocaleString(l === "en" ? "en-US" : "zh-CN", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
        var it = load(key, []); it.unshift(v); save(key, it.slice(0, 50));
        el.querySelectorAll("textarea").forEach(function (t) { t.value = ""; });
        document.dispatchEvent(new CustomEvent("mb:sync", { detail: key }));
      });
      el.querySelector("[data-print]").addEventListener("click", function () {
        var items = load(key, []);
        var w = window.open("", "_blank"); if (!w) return;
        w.document.write("<title>ABC</title><style>body{font:14px system-ui;padding:24px}table{border-collapse:collapse;width:100%}td,th{border:1px solid #999;padding:8px;vertical-align:top;text-align:left}</style><h2>" + esc(T({ zh: "行为观察记录", en: "Behaviour observation log" }, l)) + "</h2><table><tr><th>" + esc(T({ zh: "时间", en: "When" }, l)) + "</th><th>A</th><th>B</th><th>C</th></tr>" +
          items.map(function (i) { return "<tr><td>" + esc(i.d) + "</td><td>" + esc(i.A) + "</td><td>" + esc(i.B) + "</td><td>" + esc(i.C) + "</td></tr>"; }).join("") + "</table>");
        w.document.close(); w.print();
      });
      document.addEventListener("mb:sync", function (e) { if (e.detail === key) render(); });
      render();
    } };
  }

  // Talking picture board (AAC-style demo)
  var AAC = [
    ["🤝", "帮帮我", "Help me"], ["⏸️", "休息一下", "Break, please"], ["🔁", "再来一次", "Again"], ["✋", "不要", "No"],
    ["👎", "不喜欢", "Don't like"], ["🔊", "声音太大", "Too loud"], ["⏳", "我还需要一点时间", "I need more time"], ["🛑", "请停下来", "Please stop"],
    ["🥤", "我想喝水", "I want a drink"], ["🤕", "我不舒服", "I don't feel well"], ["❓", "这个我不会", "I don't know how"], ["👍", "喜欢", "I like it"]
  ];
  function aacTool(l) {
    var body = '<div class="aac-out" aria-live="polite"><span class="ph">' + esc(T({ zh: "点一个图块，它会被说出来", en: "Tap a tile — it will be spoken aloud" }, l)) + '</span></div><div class="aac">' +
      AAC.map(function (x, i) { return '<button type="button" data-i="' + i + '"><span class="em" aria-hidden="true">' + x[0] + "</span>" + esc(l === "en" ? x[2] : x[1]) + "</button>"; }).join("") + "</div>";
    var foot = "<span>" + esc(T({ zh: "真正的沟通工具属于使用者，应始终够得到、能带走。", en: "Real AAC belongs to its user and should always be within reach." }, l)) + '</span><button type="button" class="btn btn-ghost" data-clear>' + esc(T({ zh: "清空", en: "Clear" }, l)) + "</button>";
    return { html: toolShell(l, "speaker", { zh: "试一试：图片沟通板", en: "Try it: a talking picture board" }, { zh: "每一种表达方式都是沟通", en: "Every way of expressing is communication" }, body, foot), bind: function (el) {
      var out = el.querySelector(".aac-out");
      el.querySelectorAll(".aac button").forEach(function (b) {
        b.addEventListener("click", function () {
          var x = AAC[+b.dataset.i], word = l === "en" ? x[2] : x[1];
          var ph = out.querySelector(".ph"); if (ph) ph.remove();
          out.insertAdjacentHTML("beforeend", '<span class="w">' + x[0] + " " + esc(word) + "</span>");
          b.classList.add("hit"); setTimeout(function () { b.classList.remove("hit"); }, 200);
          if ("speechSynthesis" in window) {
            speechSynthesis.cancel();
            var u = new SpeechSynthesisUtterance(word); u.lang = l === "en" ? "en-US" : "zh-CN"; u.rate = .95;
            speechSynthesis.speak(u);
          }
        });
      });
      el.querySelector("[data-clear]").addEventListener("click", function () { out.innerHTML = '<span class="ph">' + esc(T({ zh: "点一个图块，它会被说出来", en: "Tap a tile — it will be spoken aloud" }, l)) + "</span>"; });
    } };
  }

  // Pathway explorer for p06: turns the stage sections into tabs
  function pathTool(l, blocks) {
    var stages = [], cur = null;
    blocks.forEach(function (b, i) {
      if (b.h) { if (/阶段|stage|level|preschool|compulsory|vocational|higher/i.test(b.h) && i < blocks.length - 3) { cur = { h: b.h, ps: [] }; stages.push(cur); } else cur = null; }
      else if (cur && b.p) cur.ps.push(b.p);
    });
    stages = stages.slice(0, 4);
    if (!stages.length) return null;
    var sub = [{ zh: "约 3–6 岁", en: "approx. ages 3–6" }, { zh: "小学与初中", en: "primary & junior high" }, { zh: "高中 / 中职 / 高职", en: "senior high & vocational" }, { zh: "大学与终身学习", en: "university & lifelong" }];
    var body = '<div class="path-tabs" role="tablist">' + stages.map(function (s, i) {
      return '<button type="button" role="tab" aria-selected="' + (i === 0) + '" data-i="' + i + '">' + esc(s.h) + "<small>" + esc(T(sub[i], l)) + "</small></button>";
    }).join("") + '</div><div class="path-panel" role="tabpanel"></div>';
    return { html: toolShell(l, "map", { zh: "教育路径一览", en: "The pathway at a glance" }, { zh: "点击阶段查看可能的教育安排", en: "Choose a stage to see the options" }, body,
      "<span>" + esc(T({ zh: "具体安置由当地教育部门、学校及相关专家结合学生实际情况评估。", en: "Placement is decided locally by education authorities, schools and specialists, based on the individual student." }, l)) + "</span>"), bind: function (el) {
      var panel = el.querySelector(".path-panel");
      function show(i) {
        el.querySelectorAll("[role=tab]").forEach(function (t) { t.setAttribute("aria-selected", String(+t.dataset.i === i)); });
        panel.innerHTML = stages[i].ps.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
      }
      el.querySelectorAll("[role=tab]").forEach(function (t) { t.addEventListener("click", function () { show(+t.dataset.i); }); });
      show(0);
    } };
  }

  /* ---------------- body rendering ---------------- */
  function renderBody(l) {
    var blocks = a.body[l] || [], html = [], binds = [], cfg = TOOLS[a.id], hIdx = 0, listIdx = -1, afterHit = false, pendingAbc = false;
    var zhBlocks = a.body.zh || [];
    function addTool(t) { if (!t) return; var k = "tool-" + l + "-" + binds.length; html.push('<div id="' + k + '">' + t.html + "</div>"); binds.push([k, t.bind]); }

    if (cfg && cfg.type === "path" && cfg.at === "top") addTool(pathTool(l, blocks));

    blocks.forEach(function (b, i) {
      var zb = zhBlocks[i] || {};
      if (b.h) {
        afterHit = !!(cfg && cfg.after && zb.h && zb.h.indexOf(cfg.after) > -1);
        html.push('<h2 id="s-' + l + "-" + hIdx + '">' + esc(b.h) + "</h2>"); hIdx++; return;
      }
      if (b.ul || b.ol) {
        listIdx++;
        var items = b.ul || b.ol;
        var useCheck = cfg && cfg.type === "check" && ((cfg.after && afterHit) || (cfg.list === listIdx && !cfg.after));
        if (useCheck) { addTool(checkTool(l, items, cfg)); afterHit = false; if (cfg.after) cfg = Object.assign({}, cfg, { used: true, after: "\u0000" }); return; }
        var tag = b.ul ? "ul" : "ol";
        html.push("<" + tag + ">" + items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</" + tag + ">");
        if (cfg && cfg.type === "abc" && cfg.afterList === listIdx) pendingAbc = true;
        return;
      }
      if (pendingAbc && b.p) { html.push("<p>" + esc(b.p) + "</p>"); addTool(abcTool(l)); pendingAbc = false; return; }
      if (b.p) return html.push("<p>" + esc(b.p) + "</p>");
      if (b.quote) return html.push("<blockquote>" + esc(b.quote) + "</blockquote>");
      if (b.callout) return html.push('<div class="callout">' + icon("alert") + "<p>" + esc(b.callout) + "</p></div>");
      if (b.stat) {
        html.push('<div class="stats">' + b.stat.map(function (s) {
          return '<div class="stat"><div class="v">' + esc(s.value) + '</div><div class="l">' + esc(s.label) + "</div>" + (s.sub ? '<div class="s">' + esc(s.sub) + "</div>" : "") + "</div>";
        }).join("") + "</div>" + (b.note ? '<p class="stat-note">' + icon("info") + "<span>" + esc(b.note) + "</span></p>" : ""));
      }
    });
    // ABC fallback: if no ol matched, put it after the first list
    if (cfg && cfg.type === "abc" && !binds.length) addTool(abcTool(l));
    if (cfg && cfg.type === "aac" && cfg.at === "end") {
      // insert before final quote if there is one
      var qi = -1; html.forEach(function (h, i) { if (h.indexOf("<blockquote>") === 0) qi = i; });
      var t = aacTool(l), k = "tool-" + l + "-" + binds.length, chunk = '<div id="' + k + '">' + t.html + "</div>";
      if (qi > -1) html.splice(qi, 0, chunk); else html.push(chunk);
      binds.push([k, t.bind]);
    }
    return { html: html.join(""), binds: binds };
  }

  // Source labels in the docs lead with a Chinese organisation name; give English readers the English one.
  var ORGS = [
    ["美国国家耳聋及其他沟通障碍研究所", "NIDCD"], ["美国言语语言听力协会", "ASHA"], ["美国国家精神卫生研究所", "NIMH"],
    ["美国疾病控制与预防中心", "CDC"], ["美国疾控中心", "CDC"], ["世界卫生组织", "WHO"], ["英国国家自闭症协会", "National Autistic Society"],
    ["美国教育部", "U.S. Department of Education"], ["美国劳工部", "U.S. Department of Labor"], ["联合国秘书长", "UN Secretary-General"],
    ["联合国", "United Nations"], ["孤独症儿童关爱促进行动实施方案 2024至2028年", "Action Plan for the Care of Autistic Children 2024–2028 (China)"],
    ["教育部 特殊教育发展提升十五五行动计划", "China Ministry of Education — Special Education Action Plan, 15th Five-Year Period"],
    ["教育部 残疾人教育条例", "China Ministry of Education — Regulations on the Education of Persons with Disabilities"]
  ];
  function srcLabel(label) {
    var en = label;
    for (var i = 0; i < ORGS.length; i++) { if (en.indexOf(ORGS[i][0]) === 0) { en = ORGS[i][1] + (en.length > ORGS[i][0].length ? " — " + en.slice(ORGS[i][0].length).trim() : ""); break; } }
    en = en.replace(/基础定义和诊断说明/, "(definitions & diagnosis)").replace(/服务类型和个体化原则/, "(types of services & individual support)").replace(/自闭症相关产品警示/, "(warning on autism products)")
      .replace(/(\d)自闭症社区报告/, "$1 Community Report on Autism").replace(/自闭症社区报告/, "Community Report on Autism").replace(/监测网络事实页/, " Monitoring Network fact sheet").replace(/主题页/, "theme page").replace(/致辞/, "message").replace(/项目与近期研究/, " project and recent research").replace(/自闭症就业资源/, "autism employment resources").replace(/年世界自闭症日/, " World Autism Day ").replace(/(\S)(REYAAS)/, "$1 $2").replace(/\s{2,}/g, " ").trim();
    return en === label ? label : { zh: label, en: en };
  }

  function headings(l) { return (a.body[l] || []).filter(function (b) { return b.h; }).map(function (b) { return b.h; }); }

  /* ---------------- page ---------------- */
  function render() {
    var s = SERIES_NAME[a.series];
    var list = MB.articles(a.series), idx = list.indexOf(a), prev = list[idx - 1], next = list[idx + 1];
    var related = MB.articles().filter(function (x) { return x.id !== a.id && x.series !== a.series; }).slice(0, 3);
    if (a.series === "parents") related = ["k03", "k04", "k05"].map(MB.find).filter(Boolean);
    if (a.series === "knowledge") related = ["p01", "p02", "p05"].map(MB.find).filter(Boolean);

    document.querySelector("meta[name='mb-title-zh']").content = a.title.zh + " · MindBridge";
    document.querySelector("meta[name='mb-title-en']").content = a.title.en + " · MindBridge";
    document.title = MB.t(a.title) + " · MindBridge";

    var bodies = LANGS.map(function (l) { return [l, renderBody(l)]; });
    var tocs = LANGS.map(function (l) {
      return '<ol lang="' + L(l) + '">' + headings(l).map(function (h, i) { return '<li><a href="#s-' + l + "-" + i + '">' + esc(h) + "</a></li>"; }).join("") + "</ol>";
    }).join("");

    var toolsBtns = function (cls) {
      return '<button type="button" data-act="speak" aria-pressed="false">' + icon("speaker") + bi({ zh: "朗读全文", en: "Read aloud" }) + "</button>" +
        '<button type="button" data-act="size">' + icon("text") + bi({ zh: "调整字号", en: "Text size" }) + "</button>" +
        '<button type="button" data-act="lang">' + icon("globe") + bi({ zh: "Read in English", en: "阅读中文版" }) + "</button>" +
        '<button type="button" data-act="print">' + icon("print") + bi({ zh: "打印 / 存为 PDF", en: "Print / save PDF" }) + "</button>";
    };

    root.innerHTML =
      '<div class="progress" id="progress"></div>' +
      '<header class="article-hero"><div class="wrap">' +
      '<nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">' + bi({ zh: "首页", en: "Home" }) + '</a><span>/</span><a href="' + s.href + '">' + bi(s) + "</a></nav>" +
      '<div class="tagline"><span class="chip ' + (a.series === "parents" ? "terra" : a.series === "news" ? "sage" : "") + '">' + bi(a.tag) + '</span><span class="muted" style="font-size:.85rem">' + bi({ zh: "第 " + a.num + " 篇", en: "No. " + a.num }) + "</span></div>" +
      "<h1>" + bi(a.title) + "</h1>" +
      (a.dek ? '<p class="dek">' + bi(a.dek) + "</p>" : "") +
      '<div class="article-meta"><span>' + bi({ zh: "MindBridge 编辑组", en: "MindBridge editors" }) + '</span><span class="sep"></span><span>' + esc(a.date) + '</span><span class="sep"></span><span>' + bi(MB.minsLabel(a)) + '</span><span class="sep"></span><span>' + bi({ zh: a.sources.length + " 个来源", en: a.sources.length + " sources" }) + "</span></div>" +
      '<div class="reader-tools-mobile">' + toolsBtns() + "</div>" +
      (a.img ? '<figure class="article-cover" style="margin-inline:0;margin-bottom:0"><img src="' + a.img + '" alt="' + esc(a.imgAlt ? a.imgAlt.zh : "") + '" data-alt-zh="' + esc(a.imgAlt ? a.imgAlt.zh : "") + '" data-alt-en="' + esc(a.imgAlt ? a.imgAlt.en : "") + '"></figure>' : "") +
      "</div></header>" +
      '<div class="wrap article-layout">' +
      '<aside class="toc" aria-label="Contents"><h4>' + bi({ zh: "本文目录", en: "In this article" }) + "</h4>" + tocs + '<div class="reader-tools">' + toolsBtns() + "</div></aside>" +
      "<article>" +
      bodies.map(function (b) {
        var l = b[0];
        return '<div class="prose" lang="' + L(l) + '">' +
          '<p class="summary"><b>' + (l === "en" ? "In brief" : "摘要") + "</b>" + esc(a.summary[l]) + "</p>" +
          (a.keywords && a.keywords[l] && a.keywords[l].length ? '<div class="keywords">' + a.keywords[l].map(function (k) { return '<span class="chip">' + esc(k) + "</span>"; }).join("") + "</div>" : "") +
          b[1].html + "</div>";
      }).join("") +
      '<section class="sources"><h3>' + bi({ zh: "资料来源", en: "Sources" }) + "</h3><ol>" +
      a.sources.map(function (s) { var lb = srcLabel(s.label); return "<li><span>" + (s.url ? '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + bi(lb) + "</a>" : bi(lb)) + "</span></li>"; }).join("") + "</ol></section>" +
      (a.note ? '<p class="article-note">' + bi(a.note) + "</p>" : "") +
      '<nav class="pn" aria-label="More">' +
      (prev ? '<a href="article.html?id=' + prev.id + '"><small>' + bi({ zh: "← 上一篇", en: "← Previous" }) + "</small><b>" + bi(prev.title) + "</b></a>" : "<span></span>") +
      (next ? '<a class="next" href="article.html?id=' + next.id + '"><small>' + bi({ zh: "下一篇 →", en: "Next →" }) + "</small><b>" + bi(next.title) + "</b></a>" : "") +
      "</nav></article><div></div></div>" +
      '<section class="section bg-2"><div class="wrap"><div class="section-head"><span class="eyebrow">' + bi({ zh: "继续阅读", en: "Keep reading" }) + "</span><h2>" + bi({ zh: "你可能还想了解", en: "You might also like" }) + '</h2></div><div class="grid grid-3">' + related.map(MB.card).join("") + "</div></div></section>";

    bodies.forEach(function (b) { b[1].binds.forEach(function (x) { x[1](document.getElementById(x[0])); }); });
    wire();
    MB.setLang(MB.lang());
    MB.reveal();
  }

  /* ---------------- reader behaviours ---------------- */
  function wire() {
    var bar = document.getElementById("progress"), art = root.querySelector("article");
    window.addEventListener("scroll", function () {
      var r = art.getBoundingClientRect(), h = art.offsetHeight - innerHeight;
      bar.style.width = Math.max(0, Math.min(1, -r.top / (h > 0 ? h : 1))) * 100 + "%";
    }, { passive: true });

    // TOC scrollspy
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          root.querySelectorAll(".toc a").forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); });
        });
      }, { rootMargin: "-20% 0px -70% 0px" });
      root.querySelectorAll(".prose h2").forEach(function (h) { io.observe(h); });
    }

    var sizes = ["m", "l", "xl"];
    root.querySelectorAll("[data-act]").forEach(function (b) {
      b.addEventListener("click", function () {
        var act = b.dataset.act, d = document.documentElement;
        if (act === "print") window.print();
        if (act === "lang") MB.setLang(MB.lang() === "en" ? "zh" : "en");
        if (act === "size") {
          var n = sizes[(sizes.indexOf(d.dataset.size || "m") + 1) % 3];
          d.dataset.size = n; MB.store.set("mb-size", n);
          document.querySelectorAll(".seg [data-size]").forEach(function (x) { x.setAttribute("aria-pressed", String(x.dataset.size === n)); });
        }
        if (act === "speak") speak();
      });
    });
    document.addEventListener("mb:lang", function () { if (window.speechSynthesis && speechSynthesis.speaking) { speechSynthesis.cancel(); setSpeak(false); } });
  }

  function setSpeak(on) {
    root.querySelectorAll('[data-act="speak"]').forEach(function (b) {
      b.setAttribute("aria-pressed", String(on));
      b.innerHTML = icon(on ? "stop" : "speaker") + bi(on ? { zh: "停止朗读", en: "Stop reading" } : { zh: "朗读全文", en: "Read aloud" });
      MB.setLang(MB.lang());
    });
  }
  function speak() {
    if (!("speechSynthesis" in window)) return;
    if (speechSynthesis.speaking) { speechSynthesis.cancel(); setSpeak(false); return; }
    var l = MB.lang(), parts = [a.title[l], a.summary[l]];
    (a.body[l] || []).forEach(function (b) { if (b.h) parts.push(b.h); if (b.p) parts.push(b.p); if (b.quote) parts.push(b.quote); if (b.callout) parts.push(b.callout); if (b.ul || b.ol) parts = parts.concat(b.ul || b.ol); });
    // speak in chunks so long articles don't get cut off
    parts.forEach(function (p, i) {
      var u = new SpeechSynthesisUtterance(p); u.lang = l === "en" ? "en-US" : "zh-CN"; u.rate = l === "en" ? 1 : .95;
      if (i === parts.length - 1) u.onend = function () { setSpeak(false); };
      speechSynthesis.speak(u);
    });
    setSpeak(true);
  }

  if (!a) { root.innerHTML = '<div class="wrap section"><h1>404</h1></div>'; return; }
  render();
})();
