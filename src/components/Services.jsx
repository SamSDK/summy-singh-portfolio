import content from '../data/content.js'

export default function Services() {
  return (
    <section className="section services">
      <h2 className="section-title">{content.sectionTitles.services}</h2>
      <div className="services-grid">
        {content.services.map((service) => (
          <div className="glass-card service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
