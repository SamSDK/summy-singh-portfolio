import content from '../data/content.js'

export default function Services() {
  const { bookingHref } = content.contact
  const { workWithMe } = content.ctaLabels

  return (
    <section className="section services">
      <h2 className="section-title">{content.sectionTitles.offer}</h2>
      <div className="services-grid">
        {content.services.map((service) => (
          <div className="glass-card service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="offer-cta-row">
        <a className="btn btn--solid" href={bookingHref} target="_blank" rel="noreferrer">
          {workWithMe}
        </a>
      </div>
    </section>
  )
}
