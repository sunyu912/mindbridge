# Article data schema

Each data file is plain JS (no modules, works over file://) and pushes article objects:

```js
window.MB_ARTICLES = window.MB_ARTICLES || [];
window.MB_ARTICLES.push({
  id: "p01",                 // unique; p = parent series, k = knowledge, n = news
  series: "parents",         // "parents" | "knowledge" | "news"
  num: "01",
  img: "assets/p01.jpg",     // or null
  imgAlt: { zh: "…", en: "…" },
  date: "2026-09",           // publish/version date (ISO-ish)
  tag:     { zh: "家长支持", en: "Parent support" },     // category label
  title:   { zh: "…", en: "…" },
  summary: { zh: "…", en: "…" },                         // the 摘要 / standfirst
  keywords:{ zh: ["…"], en: ["…"] },                     // optional
  body: {
    zh: [ /* blocks */ ],
    en: [ /* blocks, same structure as zh */ ]
  },
  sources: [ { label: "APF What is the Function", url: "https://…" } ],  // url optional (null if unsure)
  note: { zh: "…", en: "…" }   // closing disclaimer line, optional
});
```

## Body blocks
- `{ h: "Section heading" }`
- `{ p: "Paragraph" }`
- `{ ul: ["item", "item"] }` – bullet list
- `{ ol: ["item", "item"] }` – numbered list / steps
- `{ quote: "A single key sentence worth pulling out" }` – pull quote (use 1 per article max, for the strongest closing idea)
- `{ callout: "Safety / when to seek professional help" }` – highlighted note
- `{ stat: [ { value: "1 / 127", label: "…", sub: "…" }, … ], note: "…" }` – big-number comparison

Chinese body text must be the source text **verbatim** (only fix obvious line-joining). Do not add facts.
English is a faithful, natural, warm translation for an international audience of parents/educators — not word-for-word, but no added or removed facts. Use "autistic people / autistic children" (identity-first) and "autism" for 孤独症/自闭症.
Do NOT include the "资料来源" heading or source lines inside body — put them in `sources`.
