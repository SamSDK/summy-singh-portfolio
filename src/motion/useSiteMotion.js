import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { splitIntoSpans, parseStatValue } from './splitText.js'

gsap.registerPlugin(ScrollTrigger)

// One hook owns every animation on the page. Components stay motion-agnostic —
// selectors target the classes they already render. Under prefers-reduced-motion
// (or in the jsdom test env) this is a no-op, and because all initial hidden
// states are set from JS, users without JS see a fully visible page.
export default function useSiteMotion() {
  useLayoutEffect(() => {
    if (import.meta.env.MODE === 'test') return
    if (!window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Lenis owns scrolling; GSAP's ticker drives Lenis so there is a single rAF loop
    // and ScrollTrigger stays in sync.
    const lenis = new Lenis({ duration: 1.1 })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Back-to-top goes through Lenis (CSS scroll-behavior was removed — it fights Lenis).
    const topLink = document.querySelector('a[href="#top"]')
    const onTopClick = (e) => {
      e.preventDefault()
      lenis.scrollTo(0, { duration: 1.2 })
    }
    if (topLink) topLink.addEventListener('click', onTopClick)

    const ctx = gsap.context(() => {
      // --- Hero entrance (once, on load) ---
      const tagline = document.querySelector('.hero-tagline')
      if (tagline) {
        const words = splitIntoSpans(tagline, 'word')
        gsap.set(words, { yPercent: 110 })
        gsap.to(words, {
          yPercent: 0,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.07,
          delay: 0.15,
        })
      }
      gsap.from('.hero-topbar, .hero-ctas', {
        autoAlpha: 0,
        y: 16,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.5,
        clearProps: 'all',
      })

      // --- Section-level reveals (once each, on scroll into view) ---
      const singles = gsap.utils.toArray(
        '.section-title, .about-body, .reviews-meta, .offer-cta-row, .contact-inner',
      )
      singles.forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 28,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      // --- Card/tile/name staggers, batched per viewport entry ---
      const batchTargets = gsap.utils.toArray(
        '.stat, .service-card, .testimonial-card, .portfolio-item, .client-name',
      )
      gsap.set(batchTargets, { autoAlpha: 0, y: 24 })
      ScrollTrigger.batch(batchTargets, {
        start: 'top 90%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.06,
            overwrite: true,
          }),
      })

      // --- Stats count-up ---
      gsap.utils.toArray('.stat-value').forEach((el) => {
        const raw = el.dataset.rawValue ?? (el.dataset.rawValue = el.textContent.trim())
        const parsed = parseStatValue(raw)
        if (!parsed) return
        const state = { n: 0 }
        gsap.to(state, {
          n: parsed.target,
          duration: 1.2,
          ease: 'power1.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(state.n) + parsed.suffix
          },
        })
      })

      // --- Gradient mesh drift: the "animated gradient" effect without a WebGL runtime ---
      gsap.utils.toArray('.mesh').forEach((el) => {
        gsap.to(el, {
          xPercent: 4,
          yPercent: -3,
          scale: 1.06,
          duration: 26,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      })

      // --- Footer wordmark: masked char rise ---
      const wordmark = document.querySelector('.footer-wordmark')
      if (wordmark) {
        const chars = splitIntoSpans(wordmark, 'char')
        gsap.set(chars, { yPercent: 60, autoAlpha: 0 })
        gsap.to(chars, {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.045,
          scrollTrigger: { trigger: wordmark, start: 'top 92%', once: true },
        })
      }
    })

    return () => {
      if (topLink) topLink.removeEventListener('click', onTopClick)
      gsap.ticker.remove(tick)
      ctx.revert()
      lenis.destroy()
    }
  }, [])
}
