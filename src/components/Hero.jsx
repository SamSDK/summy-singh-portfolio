import content from '../data/content.js'

export default function Hero() {
  const { name, tagline, descriptor, videoUrl, posterUrl, videoAlt, emailHref, bookingHref } =
    content.hero
  const { email, booking } = content.ctaLabels

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        {/* src/poster are omitted rather than empty while footage is pending — an empty
            src attribute makes the browser request the page itself as a video. */}
        <video
          className="hero-video"
          src={videoUrl || undefined}
          poster={posterUrl || undefined}
          aria-label={videoAlt}
          autoPlay
          muted
          loop
          playsInline
        />
        {!videoUrl && (
          <p className="hero-placeholder-note">[ hero video — add videoUrl in content.js ]</p>
        )}
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-topbar">
        {/* The name is the h1 for SEO and page outline, even though the tagline below is
            visually larger. Semantics and type size are independent. */}
        <h1 className="hero-mark">
          <span aria-hidden="true">@ </span>
          {name}
        </h1>
        <p className="hero-descriptor">{descriptor}</p>
      </div>

      <div className="hero-content">
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-ctas">
          <a className="btn btn--solid" href={bookingHref} target="_blank" rel="noreferrer">
            {booking}
          </a>
          <a className="btn btn--glass" href={emailHref}>
            {email}
          </a>
        </div>
      </div>
    </section>
  )
}
