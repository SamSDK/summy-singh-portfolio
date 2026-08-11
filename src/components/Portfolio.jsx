import content from '../data/content.js'

export default function Portfolio() {
  return (
    <section className="section portfolio">
      <h2 className="section-title">{content.sectionTitles.portfolio}</h2>
      {content.portfolio.categories.map((category) => (
        <div className="portfolio-category" key={category.name}>
          <h3 className="portfolio-category-name">{category.name}</h3>
          <div className="portfolio-grid">
            {category.items.map((item) => (
              <figure className="portfolio-item" key={item.src}>
                <img
                  className="portfolio-image"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
                <figcaption className="portfolio-tag">{item.tag}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
