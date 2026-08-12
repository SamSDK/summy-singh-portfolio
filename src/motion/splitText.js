// DOM text splitter for masked text reveals, plus the stat-value parser.
// Hand-rolled instead of GSAP SplitText: two tiny cases don't justify a plugin.

// Wraps each word (or char) of el's text in <span class="mask-line"><span>…</span></span>
// and returns the INNER spans (the ones that get transformed). The masks clip the
// motion so text rises "out of" its own line. Preserves accessibility: the original
// text becomes the element's aria-label and the visual spans are aria-hidden.
export function splitIntoSpans(el, granularity = 'word') {
  const text = el.textContent
  el.setAttribute('aria-label', text)
  const parts = granularity === 'char' ? [...text] : text.split(/(\s+)/)
  el.textContent = ''
  const spans = []
  for (const part of parts) {
    if (part === '') continue
    if (/^\s+$/.test(part)) {
      el.appendChild(document.createTextNode(part))
      continue
    }
    const mask = document.createElement('span')
    mask.className = 'mask-line'
    mask.setAttribute('aria-hidden', 'true')
    const inner = document.createElement('span')
    inner.textContent = part
    mask.appendChild(inner)
    el.appendChild(mask)
    spans.push(inner)
  }
  return spans
}

// '100+' -> { target: 100, suffix: '+' }; '48h' -> { target: 48, suffix: 'h' };
// non-numeric strings -> null (rendered as-is, no count-up).
export function parseStatValue(raw) {
  const m = raw.match(/^(\d+)(.*)$/)
  if (!m) return null
  return { target: Number(m[1]), suffix: m[2] }
}
