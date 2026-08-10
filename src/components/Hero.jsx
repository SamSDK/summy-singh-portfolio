import content from '../data/content.js'

export default function Hero() {
  const { name, tagline, photoUrl, photoAlt, emailHref, bookingHref } = content.hero
  const { email, booking } = content.ctaLabels

  return (
    <section className="section hero">
      <h1 className="hero-name">{name}</h1>
      <div className="glass-card hero-card">
        <img className="hero-photo" src={photoUrl} alt={photoAlt} />
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-ctas">
          <a className="btn" href={emailHref}>
            {email}
          </a>
          <a className="btn" href={bookingHref} target="_blank" rel="noreferrer">
            {booking}
          </a>
        </div>
      </div>
    </section>
  )
}
