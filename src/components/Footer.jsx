import content from '../data/content.js'

export default function Footer() {
  const { tagline, wordmark, backToTopLabel } = content.footer

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p className="footer-tagline">{tagline}</p>
        <a className="footer-backtotop" href="#top" aria-label={backToTopLabel}>
          <svg viewBox="0 0 32 40" fill="none" aria-hidden="true">
            <path
              d="M16 38V3M16 3L5 14M16 3l11 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      {/* Decorative branding, deliberately not a heading — promoting it would put a
          stray entry in the page outline below the real content sections. */}
      <p className="footer-wordmark">{wordmark}</p>
    </footer>
  )
}
