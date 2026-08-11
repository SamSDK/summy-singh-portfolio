import content from '../data/content.js'

export default function Reviews() {
  return (
    <section className="section reviews">
      <h2 className="section-title">{content.sectionTitles.reviews}</h2>
      <div className="testimonials-grid">
        {content.testimonials.map((t) => (
          <div className="glass-card testimonial-card" key={t.author}>
            <p className="testimonial-quote">&quot;{t.quote}&quot;</p>
            <p className="testimonial-author">
              {t.author}, {t.role}
            </p>
          </div>
        ))}
      </div>
      <div className="reviews-meta">
        <p className="reviews-rating">{content.reviews.ratingLine}</p>
        <p className="reviews-social">{content.reviews.socialLine}</p>
      </div>
    </section>
  )
}
