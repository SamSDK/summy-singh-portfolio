import { splitIntoSpans, parseStatValue } from './splitText.js'

test('splitIntoSpans wraps words in masked spans and preserves accessibility', () => {
  const el = document.createElement('p')
  el.textContent = 'Premium UGC Creator'
  const spans = splitIntoSpans(el, 'word')
  expect(spans).toHaveLength(3)
  expect(spans.map((s) => s.textContent)).toEqual(['Premium', 'UGC', 'Creator'])
  expect(el.getAttribute('aria-label')).toBe('Premium UGC Creator')
  expect(el.querySelectorAll('.mask-line[aria-hidden="true"]')).toHaveLength(3)
  expect(el.textContent).toBe('Premium UGC Creator')
})

test('splitIntoSpans char mode splits every character', () => {
  const el = document.createElement('p')
  el.textContent = 'Summy'
  const spans = splitIntoSpans(el, 'char')
  expect(spans).toHaveLength(5)
  expect(el.textContent).toBe('Summy')
})

test('parseStatValue extracts number and suffix', () => {
  expect(parseStatValue('100+')).toEqual({ target: 100, suffix: '+' })
  expect(parseStatValue('48h')).toEqual({ target: 48, suffix: 'h' })
  expect(parseStatValue('20+')).toEqual({ target: 20, suffix: '+' })
  expect(parseStatValue('n/a')).toBeNull()
})
