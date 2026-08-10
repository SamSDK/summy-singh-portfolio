import content from '../data/content.js'

export default function Contact() {
  const { heading, subheading, emailHref, bookingHref } = content.contact

  return (
    <section className="section contact">
      <div className="glass-card contact-card">
        <h2>{heading}</h2>
        <p className="contact-subheading">{subheading}</p>
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
