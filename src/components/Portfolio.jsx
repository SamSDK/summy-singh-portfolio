import content from '../data/content.js'

export default function Portfolio() {
  return (
    <section className="section portfolio">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        {content.portfolio.map((item) => (
          <img
            className="portfolio-image"
            key={item.src}
            src={item.src}
            alt={item.alt}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
