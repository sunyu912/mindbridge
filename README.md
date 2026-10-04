# MindBridge — bilingual autism community website

Static site (HTML + CSS + vanilla JS). No build step and no server-side code. Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8765
```

## Structure

| Path | What it is |
|---|---|
| `index.html` | Home |
| `knowledge.html` | Understanding Autism hub (filterable) |
| `article.html?id=…` | Article reader (all 17 articles) |
| `education.html`, `employment.html` | Education & campus support, Work & life skills |
| `volunteer.html`, `shop.html`, `partners.html`, `about.html` | Volunteer Center, Community Shop, Partners, About + FAQ + Safety + Sources |
| `data/articles-*.js` | All article content: Chinese verbatim from the client documents, plus English translations |
| `css/site.css` | Design system |
| `js/site.js` | Header and footer, 中/EN switch, accessibility panel, article cards |
| `js/reader.js` | Article reader, read-aloud, and the in-article tools |
| `source/` | The original Word documents and their extracted text |

## Bilingual

Each piece of text is written twice, as `<span lang="zh-CN">…</span><span lang="en">…</span>`, and `html[data-lang]` shows one language. The choice is remembered. Link to a fixed language with `?lang=en` or `?lang=zh`.

## Before launch: fill in or confirm

Search the HTML for `class="todo"`. Every placeholder is marked with it.

- Founder name, school, city and state; adult advisor; public email; contact for content corrections and safety issues
- Legal entity or fiscal sponsor; whether the project is a 501(c)(3)
- Revenue allocation per product, and the beneficiary
- Written permission from partners, and permission for any school name or logo
- Spot-check the source URLs in `data/*.js`. Some point to an organization's top-level page.
- Forms (volunteer application) are front-end only and need a real backend or form service
- Privacy policy for cookies, analytics and payment tools, and a COPPA review if children under 13 may submit information
