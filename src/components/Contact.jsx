import content from '../data/content.js'

export default function Contact() {
  const { eyebrow, heading, circleLabel, details, bookingHref } = content.contact

  return (
    <section className="section contact">
      <div className="mesh" aria-hidden="true" />

      <div className="contact-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="contact-heading">{heading}</h2>

        <hr className="contact-divider" />

        <div className="contact-details">
          {details.map((detail) => {
            const isExternal = detail.href.startsWith('http')
            return (
              <div key={detail.label}>
                <span className="contact-detail-label">{detail.label}</span>
                <a
                  className="contact-detail-value"
                  href={detail.href}
                  {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {detail.value}
                </a>
              </div>
            )
          })}
        </div>

        <a className="contact-circle" href={bookingHref} target="_blank" rel="noreferrer">
          {circleLabel}
        </a>
      </div>
    </section>
  )
}
