import content from '../data/content.js'

export default function Hero() {
  const { name, tagline, photoUrl, photoAlt, emailHref, bookingHref } = content.hero

  return (
    <section className="section hero">
      <div className="hero-name">{name}</div>
      <div className="glass-card hero-card">
        <img className="hero-photo" src={photoUrl} alt={photoAlt} />
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-ctas">
          <a className="btn" href={emailHref}>
            Email Me
          </a>
          <a className="btn" href={bookingHref} target="_blank" rel="noreferrer">
            Book a Call
          </a>
        </div>
      </div>
    </section>
  )
}
