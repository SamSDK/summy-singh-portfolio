import '@testing-library/jest-dom'

// jsdom does not implement matchMedia. GSAP's ScrollTrigger touches it as soon as
// it's registered (src/motion/useSiteMotion.js registers it at module scope, so
// this runs on import regardless of the test-mode guard inside the hook itself).
window.matchMedia =
  window.matchMedia ||
  function matchMediaStub(query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }
  }
